import { Component, OnInit } from "@angular/core";
import {NgbCalendar} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: "app-consult-visit-anamnesis",
  templateUrl: "./consult-visit-anamnesis.component.html",
  styleUrls: ["./consult-visit-anamnesis.component.css"]
})
export class ConsultVisitAnamnesisComponent implements OnInit {
  form: FormGroup;
  validators = [
    Validators.required
  ];

  constructor(private calendar: NgbCalendar, private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      date: new FormControl("", this.validators),
      icpc: new FormControl("", this.validators),
      comment: new FormControl("", this.validators)
    });
  }

  submit(): void{
    if (this.form.invalid){
      if (this.form.controls.date.invalid){
        this.form.controls.date.setErrors({incorrect: true});
      }

      if (this.form.controls.icpc.invalid){
        this.form.controls.icpc.setErrors({incorrect: true});
      }

      if (this.form.controls.comment.invalid){
        this.form.controls.comment.setErrors({incorrect: true});
      }
    }
  }

}
