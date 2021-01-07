import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"]
})
export class UserFormComponent implements OnInit {
  @Input() buttonName: string;
  form: FormGroup;
  validators = [
    Validators.required
  ];

  constructor(private fb: FormBuilder, private router: Router) { }

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
      country: new FormControl("NL", this.validators),
      username: new FormControl("", this.validators),
      password: new FormControl("", this.validators),
      passwordCheck: new FormControl("", this.validators),
    })
  }

  onSubmit(): void{
    //TODO
  }

}
