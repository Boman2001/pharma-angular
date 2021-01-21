import { Component, OnInit } from "@angular/core";
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ExaminationType, ExaminationTypeService, PhysicalExamination, PhysicalExaminationService } from "src/app/modules/examination/examination.module";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { map, switchMap, tap } from "rxjs/operators";
import { ConsultationService } from "../../services/consultation.service";
import { Observable } from "rxjs/internal/Observable";
import { Consultation } from "../../consultation.module";
import { HttpParams } from "@angular/common/http";
import { text } from "@fortawesome/fontawesome-svg-core";
import * as moment from "moment";

@Component({
  selector: "app-consult-visit-biometrics",
  templateUrl: "./consult-visit-biometrics.component.html",
  styleUrls: ["./consult-visit-biometrics.component.css"]
})
export class ConsultVisitBiometricsComponent implements OnInit {
  form: FormGroup;
  validators = [
    Validators.required
  ];

  consult$: Observable<Consultation>;
  physicalExamination$: Observable<PhysicalExamination[]>;
  examinationTypes: ExaminationType[];

  consultId: string;
  selectedExaminationType: ExaminationType;
  patientId: string;

  model: NgbDateStruct;
  date: { year: number, month: number };
  moment = moment;

  labelText = "";
  defaultSelect: string;

  empty = true;

  constructor(
    private route: ActivatedRoute,
    private calendar: NgbCalendar,
    private fb: FormBuilder,
    public consultationService: ConsultationService,
    public physicalExaminationService: PhysicalExaminationService,
    public examinationTypeService: ExaminationTypeService
  ) {
    this.model = this.calendar.getToday();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      date: new FormControl("", this.validators),
      examination: new FormControl("", this.validators),
      value: new FormControl("", this.validators)
    });

    this.defaultSelect = this.form.controls.examination.value;

    this.consult$ = this.route.paramMap.pipe(switchMap((params: ParamMap) =>
        this.consultationService.Get(params.get("id"))
      )
    );

    this.consult$.subscribe(c => {
      this.consultId = c.id;
      this.patientId = c.patient.id;
      this.getData(c.patient.id);
    });
  }

  // const test = this.physicalExaminationService.GetAll(null, new HttpParams().set("patientId", patientId)).toPromise();
  // this.examinationType$ = this.examinationTypeService.GetAll();

  async getData(id: string): Promise<void> {
    this.examinationTypes = await this.examinationTypeService.GetAll().toPromise();
    this.physicalExamination$ = this.physicalExaminationService.GetAll(null, new HttpParams().set("patientId", id))
    .pipe(
      map(items => {
        if(items.length > 0){
          this.empty = false;
          for (const i of items) {
            i.examinationType = this.examinationTypes?.find((et) => et.id === i.examinationTypeId);
          }
        }
        return this.bioGroupBy(items, item => item.examinationTypeId);
      })
    );
  }

  bioGroupBy(list, keyGetter): any[] {
    let grouped = [];
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = grouped[key];
      if (!collection) {
        grouped[key] = [item];
      } else {
        collection.push(item);
      }
    });

    grouped = grouped.filter(el => {
      return el != null;
    });

    return grouped;
  }

  async submit(): Promise<void> {
    if (this.form.invalid){
      if (this.form.controls.date.invalid){
        this.form.controls.date.setErrors({incorrect: true});
      }

      if (this.form.controls.examination.invalid){
        this.form.controls.examination.setErrors({incorrect: true});
      }

      if (this.form.controls.value.invalid){
        this.form.controls.value.setErrors({incorrect: true});
      }
    }

    await this.physicalExaminationService.Add({
      date: moment(this.form.controls.date.value).toISOString(),
      consultationId: this.consultId,
      consultation: null,
      patientId: this.patientId,
      patient: null,
      examinationTypeId: this.selectedExaminationType?.id,
      value: this.form.controls.value.value
    }).toPromise();

    this.getData(this.patientId);
    this.form.controls.date.reset();
    this.form.controls.value.reset();
    this.form.controls.examination.setValue("");
  }

  SelectChange(et: string): void {
    this.selectedExaminationType = this.examinationTypes.find(item => item.id.toString() === et);
    this.labelText = this.selectedExaminationType.unit.toUpperCase();
  }
}
