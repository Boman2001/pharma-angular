import { Component, Input, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TwoFactorData } from "../../types/TwoFactorData";


@Component({
  selector: "app-two-factor",
  templateUrl: "./two-factor.component.html",
  styleUrls: ["./two-factor.component.css"]
})
export class TwoFactorComponent implements OnInit {

  @Input() public twoFactorData: TwoFactorData;
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      code: new FormControl("", [ Validators.required])
    });
  }

  async twoFactor(): Promise<void> {
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
      if (await this.authService.TwoFactor(this.twoFactorData.email, this.form.controls.code.value)) {
        await this.router.navigate(["/consultation"]);
        this.twoFactorData = null;
      }
      else {
        // @TODO: Toast? GlobalModal??
        throw new Error("Invalid Code");
      }
    }
    catch (e) {
      console.error(e);
      this.form.controls.code.setErrors({ incorrect: true });
    }
  }
}
