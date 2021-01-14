import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-patient-form",
  templateUrl: "./patient-form.component.html",
  styleUrls: ["./patient-form.component.css"]
})
export class PatientFormComponent implements OnInit {

  @Input() buttonName: string;
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl("", [ Validators.required ]),
      bsn: new FormControl("", [ Validators.required ]),
      email: new FormControl("", [ Validators.required ]),
      dob: new FormControl("", [ Validators.required ]),
      gender: new FormControl("male", [ Validators.required ]),
      phoneNumber: new FormControl("", [ Validators.required ]),
      street: new FormControl("", [ Validators.required ]),
      houseNumber: new FormControl("", [ Validators.required ]),
      houseNumberAddon: new FormControl(""),
      city: new FormControl("", [ Validators.required ]),
      postalCode: new FormControl("", [ Validators.required ]),
      country: new FormControl("NL", [ Validators.required ])
    });
  }

  save(): void {

    // @TODO: implement
  }
}
