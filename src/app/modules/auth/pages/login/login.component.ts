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
      email: new FormControl("", [ Validators.required ]),
      password: new FormControl("", [ Validators.required ])
    });
  }

  async onSubmit(): Promise<void> {
    if (await this.authService.Login(this.form.controls.email.value, this.form.controls.password.value))
    {
      await this.router.navigate(["consultation"]);
    }
    else
    {
      this.form.controls.email.setErrors({ incorrect: true });
      this.form.controls.password.setErrors({ incorrect: true });
    }
  }
}
