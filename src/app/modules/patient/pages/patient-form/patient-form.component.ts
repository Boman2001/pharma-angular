import {Component, Input, OnInit} from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-patient-form",
  templateUrl: "./patient-form.component.html",
  styleUrls: ["./patient-form.component.css"]
})
export class PatientFormComponent implements OnInit {

  @Input() buttonName: string;
  form: FormGroup;
  validators = [
    Validators.required
  ];

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl("", this.validators),
      bsn: new FormControl("", this.validators),
      email: new FormControl("", this.validators),
      dob: new FormControl("", this.validators),
      gender: new FormControl("male", this.validators),
      phone: new FormControl("", this.validators),
      street: new FormControl("", this.validators),
      housenumber: new FormControl("", this.validators),
      city: new FormControl("", this.validators),
      postalcode: new FormControl("", this.validators),
      country: new FormControl("NL", this.validators)
    })
  }

  onSubmit(): void{
    //TODO
  }
}
