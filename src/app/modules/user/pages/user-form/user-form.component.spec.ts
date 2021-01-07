import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { UserFormComponent } from "./user-form.component";

describe("UserFormComponent", () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let userForm;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormComponent ],
      providers: [ FormBuilder ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    userForm = component.form.controls;
  });

  it("should create user-form", () => {
    expect(component).toBeTruthy();
  });

  it("should return user-form is invalid", () => {
    expect(component.form.valid).toBeFalsy();
  });

  it("should return form is valid", () => {
    userForm.name.setValue("Test");
    userForm.bsn.setValue("123");
    userForm.email.setValue("test@test.com");
    userForm.dob.setValue("2021-01-01");
    userForm.gender.setValue("male");
    userForm.phone.setValue("0612345678");
    userForm.street.setValue("MyStreet");
    userForm.housenumber.setValue(15);
    userForm.additional.setValue("a");
    userForm.city.setValue("Roosendaal");
    userForm.postalcode.setValue("1234AB");
    userForm.country.setValue("NL");
    userForm.username.setValue("Test");
    userForm.password.setValue("test");
    userForm.passwordCheck.setValue("test");

    expect(component.form.valid).toBeTruthy();
  });
});
