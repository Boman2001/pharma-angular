import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import {NgbDateStruct, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { ConsultationService } from "../../services/consultation.service";
import { UserService } from "../../../user/services/user.service";
import { PatientService } from "../../../patient/services/patient.service";
import { Patient } from "../../../patient/models/patient.model";
import { User } from "../../../user/models/user.model";
import { Consultation } from "../../models/consultation.model";


@Component({
  selector: "app-consult-create",
  templateUrl: "./consult-create.component.html",
  styleUrls: ["./consult-create.component.css"]
})
export class ConsultCreateComponent implements OnInit {

  @Output() createComplete = new EventEmitter<boolean>();

  form: FormGroup;
  modal;

  private patients: Patient[];
  private users: User[];

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private consultationService: ConsultationService,
    private userService: UserService,
    private patientService: PatientService
  ) {}

  async ngOnInit(): Promise<void> {
    this.form = this.fb.group({
      date: new FormControl("", [ Validators.required ]),
      time: new FormControl("", [ Validators.required ]),
      patientId: new FormControl("", [ Validators.required ]),
      doctorId: new FormControl("", [ Validators.required ]),
      comment: new FormControl("", [ Validators.required ])
    });

    try {
      this.patients = await this.patientService.GetAll().toPromise();
      this.users = await this.userService.GetAll().toPromise();
    }
    catch (e) {
      // @TODO: GlobalModalService / ToastService?
    }
  }

  get consultation(): Consultation {
    const date: NgbDateStruct = this.form.getRawValue().date;
    return {
      ...this.form.getRawValue(),
      date: new Date(date.year, date.month, date.day).toISOString()
    };
  }

  set consultation(value: Consultation) {
    this.form.patchValue(value);
  }

  open(content): void {
    this.modal = this.modalService.open(content, {ariaLabelledBy: "modal-create-consult"});
  }

  async submit(): Promise<void> {

    try {
      const result = await this.consultationService.Add(this.consultation).toPromise();
      this.createComplete.emit(result);
      this.modal.close();
    }
    catch (e) {
      // @TODO GlobalModalService / ToastService?
    }
  }
}
