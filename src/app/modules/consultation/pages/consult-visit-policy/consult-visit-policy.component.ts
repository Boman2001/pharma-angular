import { Component, OnInit } from "@angular/core";
import { NgbCalendar, NgbDate, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Observable} from "rxjs";
import {Consultation} from "../../models/consultation.model";
import {ConsultationService} from "../../services/consultation.service";
import * as moment from "moment";
import {Patient} from "../../../patient/models/patient.model";
import {PrescriptionService} from "../../../prescription/services/prescription.service";
import {Prescription} from "../../../prescription/models/prescription.model";
import {HttpParams} from "@angular/common/http";
import {IntoleranceService} from "../../../intolerance/services/intolerance.service";
import {Intolerance} from "../../../intolerance/models/intolerance.model";


@Component({
  selector: "app-consult-visit-policy",
  templateUrl: "./consult-visit-policy.component.html",
  styleUrls: ["./consult-visit-policy.component.css"]
})
export class ConsultVisitPolicyComponent implements OnInit {
  medicineForm: FormGroup;
  validators = [
    Validators.required
  ];
  intoleranceForm: FormGroup;
  model: NgbDateStruct;
  consultation$: Observable<Consultation>;
  prescriptions$: Observable<Prescription[]>;
  intolerances$: Observable<Intolerance[]>;
  moment = moment;
  patient: Patient;
  consult: Consultation;

  constructor(private calendar: NgbCalendar, private fb: FormBuilder, private route: ActivatedRoute,
              private cservice: ConsultationService, private pservice: PrescriptionService, private iservice: IntoleranceService) {}

  ngOnInit(): void {
    this.consultation$ = this.route.paramMap.pipe(switchMap((params: ParamMap) =>
        this.cservice.Get(params.get("id"))
      )
    );

    this.setObservables();

    this.medicineForm = this.fb.group({
      startDate: new FormControl("", this.validators),
      endDate: new FormControl("", this.validators),
      description: new FormControl("", this.validators)
    });

    this.intoleranceForm = this.fb.group({
      startDate: new FormControl("", this.validators),
      endDate: new FormControl("", this.validators),
      description: new FormControl("", this.validators)
    });
  }

  setObservables(): void {
    this.consultation$.subscribe(c => {
      this.consult = c;
      this.patient = c.patient;
      this.prescriptions$ = this.pservice.GetAll(null, new HttpParams().set("patientId", this.patient.id));
      this.intolerances$ = this.iservice.GetAll(null, new HttpParams().set("patientId", this.patient.id));
    });
  }

  async endIntolerance(id: string): Promise<void> {
    const intolerance = await this.iservice.Get(id).toPromise();
    intolerance.endDate = moment().toISOString();
    await this.iservice.Update(intolerance.id, intolerance).toPromise();

    this.setObservables();
  }

  async endPrescription(id: string): Promise<void>{
    const prescription =  await this.pservice.Get(id).toPromise();
    prescription.endDate = moment().toISOString();
    await  this.pservice.Update(prescription.id, prescription).toPromise();

    this.setObservables();
  }

  async submitMedicine(): Promise<void>{
    if (this.medicineForm.invalid){
      if (this.medicineForm.controls.startDate.invalid){
        this.medicineForm.controls.startDate.setErrors({incorrect: true});
      }

      if (this.medicineForm.controls.description.invalid){
        this.medicineForm.controls.description.setErrors({incorrect: true});
      }
    }

    await this.pservice.Add({
      // ...this.prescription,
      description: this.prescription.description,
      startDate: moment(this.prescription.startDate).toISOString(),
      endDate: moment(this.prescription.endDate).toISOString(),
      consultationId: this.consult.id,
      patientId: this.patient.id
    }).toPromise();

    this.setObservables();

    this.medicineForm.reset();
  }

  set prescription(value: Prescription) {
    const startDate = moment(value.startDate);
    const endDate = value.endDate != null ? moment(value.endDate) : null;
    this.medicineForm.patchValue({
      ...value,
      startDate: new NgbDate(
        startDate.year(),
        startDate.month() + 1,
        startDate.date()
      ),
      endDate: endDate != null ? new NgbDate(
        endDate.year(),
        endDate.month() + 1,
        endDate.date()
      ) : null
    });
  }

  get prescription(): Prescription {
    const raw = this.medicineForm.getRawValue();
    return {
      ...raw,
      startDate: raw.startDate ? moment({
        ...raw.startDate,
        month: raw.startDate.month - 1,
        day: raw.startDate.day + 1
      }) : null,
      endDate: raw.endDate != null ? moment({
        ...raw.endDate,
        month: raw.endDate.month - 1,
        day: raw.endDate.day + 1
      }) : null
    };
  }

  async submitIntolerance(): Promise<void>{
    if (this.intoleranceForm.invalid){
      if (this.intoleranceForm.controls.startDate.invalid){
        this.intoleranceForm.controls.startDate.setErrors({incorrect: true});
      }

      if (this.intoleranceForm.controls.description.invalid){
        this.intoleranceForm.controls.description.setErrors({incorrect: true});
      }
    }

    await this.iservice.Add({
      // ...this.intolerance,
      description: this.intolerance.description,
      startDate: moment(this.intolerance.startDate).toISOString(),
      endDate: moment(this.intolerance.endDate).toISOString(),
      consultationId: this.consult.id,
      patientId: this.patient.id
    }).toPromise();

    this.setObservables();

    this.intoleranceForm.reset();
  }

  set intolerance(value: Intolerance) {
    const startDate = moment(value.startDate);
    const endDate = value.endDate != null ? moment(value.endDate) : null;
    this.intoleranceForm.patchValue({
      ...value,
      startDate: startDate != null ? new NgbDate(
        startDate.year(),
        startDate.month() + 1,
        startDate.date()
      ) : null,
      endDate: endDate != null ? new NgbDate(
        endDate.year(),
        endDate.month() + 1,
        endDate.date()
      ) : null
    });
  }

  get intolerance(): Intolerance {
    const raw = this.intoleranceForm.getRawValue();
    return {
      ...raw,
      startDate: moment({
        ...raw.startDate,
        month: raw.startDate.month - 1,
        day: raw.startDate.day + 1
      }),
      endDate: raw.endDate != null ? moment({
        ...raw.endDate,
        month: raw.endDate.month - 1,
        day: raw.endDate.day + 1
      }) : null
    };
  }
}
