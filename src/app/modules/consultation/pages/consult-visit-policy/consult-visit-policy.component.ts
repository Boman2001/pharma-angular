import { Component, OnInit } from "@angular/core";
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
  medicineStartDate: { year: number, month: number };
  medicineEndDate: { year: number, month: number };
  intoleranceStartDate: { year: number, month: number };
  intoleranceEndDate: { year: number, month: number };

  constructor(private calendar: NgbCalendar, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.medicineForm = this.fb.group({
      startDate: new FormControl("", this.validators),
      endDate: new FormControl("", this.validators),
      comment: new FormControl("", this.validators)
    });

    this.intoleranceForm = this.fb.group({
      startDate: new FormControl("", this.validators),
      endDate: new FormControl("", this.validators),
      comment: new FormControl("", this.validators)
    });
  }

  submitMedicine(): void{
    if (this.medicineForm.invalid){
      if (this.medicineForm.controls.startDate.invalid){
        this.medicineForm.controls.startDate.setErrors({incorrect: true});
      }

      if (this.medicineForm.controls.endDate.invalid){
        this.medicineForm.controls.endDate.setErrors({incorrect: true});
      }

      if (this.medicineForm.controls.comment.invalid){
        this.medicineForm.controls.comment.setErrors({incorrect: true});
      }
    }
  }

  submitIntolerance(): void{
    if (this.intoleranceForm.invalid){
      if (this.intoleranceForm.controls.startDate.invalid){
        this.intoleranceForm.controls.startDate.setErrors({incorrect: true});
      }

      if (this.intoleranceForm.controls.endDate.invalid){
        this.intoleranceForm.controls.endDate.setErrors({incorrect: true});
      }

      if (this.intoleranceForm.controls.comment.invalid){
        this.intoleranceForm.controls.comment.setErrors({incorrect: true});
      }
    }
  }
}
