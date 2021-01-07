import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

import { PatientFormComponent } from "./patient-form.component";

describe("PatientFormComponent", () => {
  let component: PatientFormComponent;
  let fixture: ComponentFixture<PatientFormComponent>;
  let form;

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

    form = component.form.controls;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return form is invalid", () => {
    expect(component.form.valid).toBeFalsy();
  });

  it("should return form is valid", () => {
    form.name.setValue("Test");
    form.bsn.setValue("123");
    form.email.setValue("test@test.com");
    form.dob.setValue("2021-01-01");
    form.gender.setValue("male");
    form.phone.setValue("0612345678");
    form.street.setValue("MyStreet");
    form.housenumber.setValue(15);
    form.additional.setValue("a");
    form.city.setValue("Roosendaal");
    form.postalcode.setValue("1234AB");
    form.country.setValue("NL");

    expect(component.form.valid).toBeTruthy();
  });
});
