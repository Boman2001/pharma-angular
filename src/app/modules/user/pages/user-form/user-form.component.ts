import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"]
})
export class UserFormComponent implements OnInit {
  @Input() buttonName: string;
  form: FormGroup;
  userValidators = [
    Validators.required
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl("", this.userValidators),
      bsn: new FormControl("", this.userValidators),
      email: new FormControl("", this.userValidators),
      dob: new FormControl("", this.userValidators),
      gender: new FormControl("male", this.userValidators),
      phone: new FormControl("", this.userValidators),
      street: new FormControl("", this.userValidators),
      housenumber: new FormControl("", this.userValidators),
      additional: new FormControl(""),
      city: new FormControl("", this.userValidators),
      postalcode: new FormControl("", this.userValidators),
      country: new FormControl("NL", this.userValidators),
      username: new FormControl("", this.userValidators),
      password: new FormControl("", this.userValidators),
      passwordCheck: new FormControl("", this.userValidators),
    });
  }

  onSubmit(): void{
    // TODO
  }

}
