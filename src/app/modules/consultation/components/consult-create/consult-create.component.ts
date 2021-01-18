import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ConsultationService } from "../../services/consultation.service";
import { UserService } from "../../../user/services/user.service";
import { PatientService } from "../../../patient/services/patient.service";
import { Observable } from "rxjs";
import { Patient } from "../../../patient/models/patient.model";
import { User } from "../../../user/models/user.model";


@Component({
  selector: "app-consult-create",
  templateUrl: "./consult-create.component.html",
  styleUrls: ["./consult-create.component.css"]
})
export class ConsultCreateComponent implements OnInit {

  form: FormGroup;
  modal;

  private patients: Observable<Patient[]>;
  private users: Observable<User[]>;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private consultationService: ConsultationService,
    private userService: UserService,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      date: new FormControl("", [ Validators.required ]),
      time: new FormControl("", [ Validators.required ]),
      patient: new FormControl("", [ Validators.required ]),
      doctor: new FormControl("", [ Validators.required ]),
      comment: new FormControl("", [ Validators.required ])
    });

    this.patients = this.patientService.GetAll();
    this.users = this.userService.GetAll();
  }

  open(content): void {
    this.modal = this.modalService.open(content, {ariaLabelledBy: "modal-create-consult"});
  }

  submit(): void{
    this.modal.close();
  }
}
