import { Component, OnInit } from "@angular/core";
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ExaminationType, ExaminationTypeService } from "src/app/modules/examination/examination.module";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { ConsultationService } from "../../services/consultation.service";
import { Observable } from "rxjs/internal/Observable";
import { Consultation } from "../../consultation.module";

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
  examinationType$: Observable<ExaminationType[]>;

  model: NgbDateStruct;
  date: { year: number, month: number };

  labelText = "";

  constructor(
    private route: ActivatedRoute,
    private calendar: NgbCalendar,
    private fb: FormBuilder,
    public consultationService: ConsultationService,
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

    this.consult$ = this.route.paramMap.pipe(switchMap((params: ParamMap) =>
        this.consultationService.Get(params.get("id"))
      )
    );

    this.consult$.subscribe(c => {
      let patientId = c.patient.id;
      this.collectExamination(patientId);
    });
  }

  collectExamination(id: string) {
    this.examinationType$ = this.examinationTypeService.GetAll();
  }
  submit(): void {
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
  }

  SelectChange(index) {
    this.examinationType$.subscribe(e => {
      this.labelText = e.find(item => item.name === index).unit.toLocaleUpperCase();
    })
  }
}
