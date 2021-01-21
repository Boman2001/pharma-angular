import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import {NgbCalendar, NgbDate, NgbDateStruct, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { ConsultationService } from "../../services/consultation.service";
import { UserService } from "../../../user/services/user.service";
import { PatientService } from "../../../patient/services/patient.service";
import { Patient } from "../../../patient/models/patient.model";
import { User } from "../../../user/models/user.model";
import { Consultation } from "../../models/consultation.model";
import * as moment from "moment";
import { Observable } from "rxjs";


@Component({
  selector: "app-consult-create",
  templateUrl: "./consult-create.component.html",
  styleUrls: ["./consult-create.component.css"]
})
export class ConsultCreateComponent implements OnInit {

  @Input() initialConsultation: Observable<Consultation>;
  @Output() createComplete = new EventEmitter<boolean>();

  @ViewChild("modalContent") public content: ElementRef;

  form: FormGroup;
  formType: string;
  modal;

  private patients: Patient[];
  private users: User[];

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private consultationService: ConsultationService,
    private userService: UserService,
    private patientService: PatientService,
    private calendar: NgbCalendar
  ) {}

  async ngOnInit(): Promise<void> {
    this.form = this.fb.group({
      id: new FormControl("", []),
      date: new FormControl("", [ Validators.required ]),
      time: new FormControl("", [ Validators.required ]),
      patientId: new FormControl("", [ Validators.required ]),
      doctorId: new FormControl("", [ Validators.required ]),
      comments: new FormControl("", [ Validators.required ])
    });

    this.formType = "Aanmaken";

    this.initialConsultation?.subscribe((c: Consultation) => {

      this.clear();

      this.consultation = c;

      if (c.id != null){
        this.formType = "Wijzigen";
      }

      this.open();
    });

    try {
      this.patients = await this.patientService.GetAll().toPromise();
      this.users = await this.userService.GetAll().toPromise();
    }
    catch (e) {
      // @TODO: GlobalModalService / ToastService?
    }
  }

  public clear(): void {

    this.consultation = {
      date: null,
      doctor: null,
      doctorId: "",
      patient: null,
      patientId: null,
      comments: null
    };

    for (const i in this.form.controls) {
      if (this.form.controls.hasOwnProperty(i)) {
        this.form.controls[i]?.markAsUntouched();
      }
    }
  }

  public open(): void {

    this.modal = this.modalService.open(this.content, { ariaLabelledBy: "modal-create-consultation" });
  }

  public close(): void {

    this.modal.close();
  }

  get consultation(): Consultation {
    const date: NgbDateStruct = this.form.getRawValue().date;
    const gooddate: NgbDateStruct = new NgbDate(date.year, date.month - 1, date.day);
    const time = this.form.getRawValue().time;
    return {
      ...this.form.getRawValue(),
      date: moment({
        ...gooddate,
        ...time
      }).format("YYYY-MM-DD HH:mm:ss")
    };
  }

  set consultation(value: Consultation) {
    const date = moment(value.date);
    this.form.patchValue({
      ...value,
      date: this.calendar.getNext(new NgbDate(date.year(), date.month() + 1, date.date() - 1)),
      time: {
        hour: date.hour(),
        minute: date.minute()
      }
    });
  }

  async submit(): Promise<void> {

    for (const i in this.form.controls) {
      if (this.form.controls.hasOwnProperty(i)) {
        this.form.controls[i]?.markAsTouched();
      }
    }

    if (!this.form.valid)
    {
      // @TODO: Toast? GlobalModal??
      return;
    }

    try {
      let result;
      if (!this.consultation.id){
        result = await this.consultationService.Add(this.consultation).toPromise();
      }
      else{
        result = await this.consultationService.Update(this.consultation.id, this.consultation).toPromise();
      }

      this.createComplete.emit(result);
      this.close();
    }
    catch (e) {
      // @TODO GlobalModalService / ToastService?
    }
  }
}
