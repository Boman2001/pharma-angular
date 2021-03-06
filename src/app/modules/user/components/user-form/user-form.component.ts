import { Component, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user.model";
import { Observable } from "rxjs";
import { EventEmitter } from "@angular/core";
import * as moment from "moment";
import { NgbCalendar, NgbDate } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"]
})
export class UserFormComponent implements OnInit {
  @Input() buttonName: string;
  @Input() initialUser: Observable<User>;

  @Output() saveComplete = new EventEmitter<boolean>();
  @Output() saveError = new EventEmitter<ExceptionInformation>();

  form: FormGroup;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private calendar: NgbCalendar) {}

  private passwordCheckValidator: ValidatorFn = (fg: FormGroup): ValidationErrors | null => {
    const password = fg.get("password");
    const passwordCheck = fg.get("passwordCheck");

    return (password.value != null && (password.value !== passwordCheck.value)) ? { notMatching: true } : null;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
        id: new FormControl("", []),
        name: new FormControl("", [ Validators.required, Validators.maxLength(255) ]),
        email: new FormControl("", [ Validators.required, Validators.maxLength(255), Validators.email ]),
        dob: new FormControl("", [ Validators.required ]),
        gender: new FormControl("", [ Validators.required ]),
        phoneNumber: new FormControl("", [ Validators.required, Validators.maxLength(255) ]),
        street: new FormControl("", [ Validators.required, Validators.maxLength(255) ]),
        houseNumber: new FormControl("", [ Validators.required, Validators.maxLength(5) ]),
        houseNumberAddon: new FormControl("", [ Validators.maxLength(255) ]),
        city: new FormControl("", [ Validators.required, Validators.maxLength(255) ]),
        postalCode: new FormControl("", [ Validators.required, Validators.minLength(6), Validators.maxLength(6) ]),
        country: new FormControl("NL", [ Validators.required, Validators.maxLength(255) ]),
        password: new FormControl("", this.editMode ? [] : [ Validators.required, Validators.minLength(4) ]),
        passwordCheck: new FormControl("", this.editMode ? [] : [ Validators.required ]),
      },
      {
        validators: [
          this.passwordCheckValidator
        ]
      }
    );

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
    const raw = this.form.getRawValue();
    return {
      ...raw,
      dob: moment({
        ...raw.dob,
        month: raw.dob.month - 1,
        day: raw.dob.day + 1
      })
      .toISOString(),
      password: raw.password !== "" ? raw.password : null,
      passwordCheck: raw.passwordCheck !== "" ? raw.passwordCheck : null,
    };
  }

  set user(value: User) {
    const date = moment(value.dob);
    this.form.patchValue({
      ...value,
      dob: new NgbDate(
        date.year(),
        date.month() + 1,
        date.date()
      )
    });
  }

  async save(): Promise<boolean> {

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

    let result = false;
    try {
      if (this.user.id != null && this.user.id !== "")
      {
        result = await this.userService.Update(this.user.id, this.user).toPromise();
      }
      else
      {
        result = await this.userService.Add(this.user).toPromise();
      }
      // @TODO: Toast? GlobalModal??
      this.saveComplete.emit(result);
    }
    catch (e) {
      // @TODO: Toast? GlobalModal??
      this.saveError.emit(e);
    }

    return result;
  }
}
