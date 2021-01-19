import { Component, OnInit } from "@angular/core";
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ExaminationTypeService } from "src/app/modules/examination/examination.module";
import { ActivatedRoute } from "@angular/router";

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

  model: NgbDateStruct;
  date: { year: number, month: number };

  labelText: string = ""; 

  constructor(private route: ActivatedRoute, private calendar: NgbCalendar, private fb: FormBuilder, public examinationTypeService: ExaminationTypeService) {
    this.model = this.calendar.getToday();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      date: new FormControl("", this.validators),
      examination: new FormControl("", this.validators),
      value: new FormControl("", this.validators)
    });
  }
  submit(): void{
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

  SelectChange(Index) {
    if(Index === "lengte") {
      this.labelText = "CM"
    }
    else {
      this.labelText = "KG";
    }
  }

}
