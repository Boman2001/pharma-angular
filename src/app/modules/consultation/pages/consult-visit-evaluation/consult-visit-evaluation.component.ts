import { Component, OnInit } from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "app-consult-visit-evaluation",
  templateUrl: "./consult-visit-evaluation.component.html",
  styleUrls: ["./consult-visit-evaluation.component.css"]
})
export class ConsultVisitEvaluationComponent implements OnInit {
  form: FormGroup;
  validators = [
    Validators.required
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      type: new FormControl("", this.validators),
      comment: new FormControl("", this.validators)
    });
  }

  submit(): void{
    if (this.form.invalid){
      if (this.form.controls.type.invalid){
        this.form.controls.type.setErrors({incorrect: true});
      }

      if (this.form.controls.comment.invalid){
        this.form.controls.comment.setErrors({incorrect: true});
      }
    }
  }

}
