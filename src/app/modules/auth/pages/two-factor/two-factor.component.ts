import { Component, OnInit } from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: "app-two-factor",
  templateUrl: "./two-factor.component.html",
  styleUrls: ["./two-factor.component.css"]
})
export class TwoFactorComponent implements OnInit {
  form: FormGroup;
  url: string;
  email: string;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.url = this.authService.TwoFactorUrl;
    this.email = this.authService.email;
    this.form = this.fb.group({
      authCode: new FormControl("", [ Validators.required])
    });
  }

  async onSubmit(): Promise<void> {
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
      if (await this.authService.TwoFactor(this.authService.email, this.form.controls.authCode.value))
      {
        await this.router.navigate(["consultation"]);
      }
      else
      {
        // this.form.controls.email.setErrors({ incorrect: true });
        // this.form.controls.password.setErrors({ incorrect: true });
        // Required because the API returns a 400,
        // and the angular HTTP client turns it into asn exception
        throw new Error();
      }
    }
    catch (e) {
      console.error(e);
      this.form.controls.authCode.setErrors({ incorrect: true });
    }
  }
}
