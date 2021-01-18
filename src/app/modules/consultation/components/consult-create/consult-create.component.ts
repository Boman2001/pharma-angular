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
      comment: new FormControl("", [ Validators.required ])
    });

    this.initialConsultation?.subscribe((c: Consultation) => {
      this.consultation = c;
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

  public open(): void {
    this.modal = this.modalService.open(this.content, { ariaLabelledBy: "modal-create-consultation" });
  }

  public close(): void {
    this.modal.close();
  }

  get consultation(): Consultation {
    const date: NgbDateStruct = this.form.getRawValue().date;
    const time = this.form.getRawValue().time;
    return {
      ...this.form.getRawValue(),
      date: moment({
        ...date,
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
    if (this.form.controls.time.invalid){
      this.form.controls.time.setErrors({incorrect: true});
    }
    else{
      try {
        let result;
        if (!this.consultation.id){
          result = await this.consultationService.Add(this.consultation).toPromise();
        }
        else{
          result = await this.consultationService.Update(this.consultation.id, this.consultation).toPromise();
        }

        this.createComplete.emit(result);
        this.modal.close();
      }
      catch (e) {
        // @TODO GlobalModalService / ToastService?
      }
    }
  }
}
