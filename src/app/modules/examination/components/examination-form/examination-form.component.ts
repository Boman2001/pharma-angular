import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-examination-form",
  templateUrl: "./examination-form.component.html",
  styleUrls: ["./examination-form.component.css"]
})
export class ExaminationFormComponent implements OnInit {

  @Input() buttonName: string;
  form: FormGroup;
  validators = [
    Validators.required
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl("", this.validators),
      unit: new FormControl("", this.validators),
    });
  }

  onSubmit(): void{
    console.log("submit");
  }
}
