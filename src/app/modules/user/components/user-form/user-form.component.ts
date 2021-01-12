import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user.model";
import { Router } from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"]
})
export class UserFormComponent implements OnInit {
  @Input() buttonName: string;
  @Input() initialUser: Observable<User>;
  @Input() onSaveComplete: (saveResult: boolean) => void;

  form: FormGroup;

  constructor(private router: Router, private userService: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Id: new FormControl("", []),
      Name: new FormControl("", [ Validators.required, Validators.maxLength(255) ]),
      BSN: new FormControl("", [ Validators.required, Validators.maxLength(11), Validators.minLength(11) ]),
      Email: new FormControl("", [ Validators.required, Validators.maxLength(255), Validators.email ]),
      Dob: new FormControl("", [ Validators.required ]),
      Gender: new FormControl("male", [ Validators.required ]),
      PhoneNumber: new FormControl("", [ Validators.required, Validators.maxLength(255) ]),
      Street: new FormControl("", [ Validators.required, Validators.maxLength(255) ]),
      HouseNumber: new FormControl("", [ Validators.required, Validators.maxLength(5) ]),
      HouseNumberAddon: new FormControl("", [ Validators.maxLength(255) ]),
      City: new FormControl("", [ Validators.required, Validators.maxLength(255) ]),
      PostalCode: new FormControl("", [ Validators.required, Validators.minLength(6), Validators.maxLength(6) ]),
      Country: new FormControl("NL", [ Validators.required, Validators.maxLength(255) ]),
      Username: new FormControl("", [ Validators.required, Validators.maxLength(255) ]),
      Password: new FormControl("", this.editMode ? [] : [ Validators.required ]),
      PasswordCheck: new FormControl("", this.editMode ? [] : [ Validators.required ]),
    });

    if (this.editMode) {
      this.initialUser.subscribe((u: User) => {
        this.user = u;
      });
    }
  }

  get editMode(): boolean {
    return this.initialUser != null;
  }

  get user(): User {
    return this.form.getRawValue();
  }

  set user(value: User) {
    this.form.patchValue(value);
  }

  async save(): Promise<void> {

    // Validation Check
    for (const i in this.form.controls) {
      if (this.form.controls.hasOwnProperty(i)) {
        this.form.controls[i]?.markAsTouched();
      }
    }

    if (!this.form.valid)
    {
      return;
    }

    if (this.user.Password != null && (this.user.Password !== this.user.PasswordCheck))
    {
      this.form.controls.PasswordCheck.setErrors({
        notMatching: true
      });
      return;
    }

    let result;
    if (this.user.Id != null)
    {
      result = await this.userService.Update(this.user.Id, this.user).toPromise();
    }
    else
    {
      result = await this.userService.Add(this.user).toPromise();
    }

    // onSaveComplete hook
    if (this.onSaveComplete != null) {
      this.onSaveComplete(result);
    }

    return result;
  }
}
