import { Component, OnInit } from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  validators = [
    Validators.required
  ];

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl("", this.validators),
      password: new FormControl("", this.validators)
    });
  }

  onSubmit(): void{
    this.router.navigate(["/auth/login/twofactor"]);
  }



}
