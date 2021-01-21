import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Patient } from "../../models/patient.model";
import { Observable } from "rxjs";
import { PatientService } from "../../services/patient.service";
import { NgbCalendar, NgbDate } from "@ng-bootstrap/ng-bootstrap";
import * as moment from "moment";


@Component({
  selector: "app-patient-form",
  templateUrl: "./patient-form.component.html",
  styleUrls: ["./patient-form.component.css"]
})
export class PatientFormComponent implements OnInit {

  @Input() buttonName: string;
  @Input() initialPatient: Observable<Patient>;

  @Output() saveComplete = new EventEmitter<boolean>();
  @Output() saveError = new EventEmitter<ExceptionInformation>();

  form: FormGroup;

  constructor(private fb: FormBuilder, 
              private patientService: PatientService,
              private calendar: NgbCalendar) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: new FormControl("", []),
      bsn: new FormControl("", [ Validators.required, Validators.minLength(11), Validators.maxLength(11) ]),
      name: new FormControl("", [ Validators.required, Validators.maxLength(255) ]),
      email: new FormControl("", [ Validators.required, Validators.maxLength(255), Validators.email ]),
      dob: new FormControl("", [ Validators.required ]),
      gender: new FormControl("", [ Validators.required ]),
      phoneNumber: new FormControl("", [ Validators.required, Validators.maxLength(255) ]),
      street: new FormControl("", [ Validators.required, Validators.maxLength(255) ]),
      houseNumber: new FormControl("", [ Validators.required, Validators.maxLength(5) ]),
      houseNumberAddon: new FormControl("", [ Validators.maxLength(255) ]),
      city: new FormControl("", [ Validators.required, Validators.maxLength(255) ]),
      postalCode: new FormControl("", [ Validators.required, Validators.minLength(6), Validators.maxLength(6) ]),
      country: new FormControl("NL", [ Validators.required, Validators.maxLength(255) ]),
    });

    if (this.editMode) {
      this.initialPatient.subscribe((p: Patient) => {
        this.patient = p;
      });
    }
  }

  get editMode(): boolean {
    return this.initialPatient != null;
  }

  get patient(): Patient {
    return this.form.getRawValue();
  }

  set patient(value: Patient) {
    const date = moment(value.dob);
    this.form.patchValue({
      ...value,
      dob: this.calendar.getNext(new NgbDate(date.year(), date.month() + 1, date.date() - 1))
    });
  }

  async save(): Promise<boolean> {
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

    let result = false;
    try {
      if (this.patient.id != null && this.patient.id !== "")
      {
        result = await this.patientService.Update(this.patient.id, this.patient).toPromise();
      }
      else
      {
        result = await this.patientService.Add(this.patient).toPromise();
      }
      // @TODO: Toast? GlobalModal??
      this.saveComplete.emit(result);
    }
    catch (e) {
      // @TODO: Toast? GlobalModal??
      this.saveError.emit(e);
    }

    return result;
  }
}
