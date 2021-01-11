import { Component, OnInit } from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

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

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl("", this.validators),
      password: new FormControl("", this.validators)
    });
  }

  onSubmit(): void{
    this.authService.Login(this.form.controls.email.value, this.form.controls.password.value).then(r => {
      if (r){
        this.router.navigate(["/consult"]);
      }
      else{
        this.form.controls.email.setErrors({incorrect: true});
        this.form.controls.password.setErrors({incorrect: true});
      }
    });
  }



}
