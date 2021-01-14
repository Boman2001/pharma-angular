import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { PatientFormComponent } from "./patient-form.component";

describe("PatientFormComponent", () => {
  let component: PatientFormComponent;
  let fixture: ComponentFixture<PatientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientFormComponent ],
      providers: [ FormBuilder ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return form is invalid", () => {
    expect(component.form.valid).toBeFalsy();
  });

  it("should return form is valid", () => {
    component.form.controls.name.setValue("Test");
    component.form.controls.email.setValue("test@test.com");
    component.form.controls.bsn.setValue("12345678911");
    component.form.controls.dob.setValue("2021-01-01");
    component.form.controls.gender.setValue("male");
    component.form.controls.phoneNumber.setValue("0612345678");
    component.form.controls.street.setValue("MyStreet");
    component.form.controls.houseNumber.setValue(15);
    component.form.controls.houseNumberAddon.setValue("a");
    component.form.controls.city.setValue("Roosendaal");
    component.form.controls.postalCode.setValue("1234AB");
    component.form.controls.country.setValue("NL");

    expect(component.form.valid).toBeTruthy();
  });
});
