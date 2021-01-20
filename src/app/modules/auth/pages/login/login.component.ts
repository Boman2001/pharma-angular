import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { LoginState } from "../../enums/LoginState.enum";
import { TwoFactorData } from "../../types/TwoFactorData";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  loginState: LoginState;
  form: FormGroup;

  twoFactorData: TwoFactorData;
  @ViewChild("twoFactorComponent") twoFactorComponent;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.reset();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl("", [ Validators.required, Validators.email ]),
      password: new FormControl("", [ Validators.required ])
    });
  }

  reset(): void {

    this.loginState = LoginState.LOGIN;
    this.twoFactorData = null;
  }

  async login(): Promise<void> {

    for (const i in this.form.controls) {
      if (this.form.controls.hasOwnProperty(i)) {
        this.form.controls[i]?.markAsTouched();
      }
    }

    if (!this.form.valid)
    {
      // @TODO: Toast? GlobalModal??
      return;
    }

    try {
      const result = await this.authService.Login(
        this.form.controls.email.value,
        this.form.controls.password.value
      );

      if (result?.email) {
        this.twoFactorData = result;
        this.loginState = LoginState.TWO_FACTOR;
      }
      else {
        throw new Error("Invalid Response");
      }
    }
    catch (e) {
      console.error(e);
      this.form.controls.email.setErrors({ incorrect: true });
      this.form.controls.password.setErrors({ incorrect: true });
    }
  }
}
