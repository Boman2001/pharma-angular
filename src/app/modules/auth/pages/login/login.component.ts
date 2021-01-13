import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl("", [ Validators.required, Validators.email ]),
      password: new FormControl("", [ Validators.required ])
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
      if (await this.authService.Login(this.form.controls.email.value, this.form.controls.password.value))
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
      this.form.controls.email.setErrors({ incorrect: true });
      this.form.controls.password.setErrors({ incorrect: true });
    }
  }
}
