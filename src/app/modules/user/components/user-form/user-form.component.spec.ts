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
    userForm.Name.setValue("Test");
    userForm.BSN.setValue("123");
    userForm.Email.setValue("test@test.com");
    userForm.Dob.setValue("2021-01-01");
    userForm.Gender.setValue("male");
    userForm.PhoneNumber.setValue("0612345678");
    userForm.Street.setValue("MyStreet");
    userForm.HouseNumber.setValue(15);
    userForm.HouseNumberAddon.setValue("a");
    userForm.City.setValue("Roosendaal");
    userForm.PostalCode.setValue("1234AB");
    userForm.Country.setValue("NL");
    userForm.Username.setValue("Test");
    userForm.Password.setValue("test");
    userForm.PasswordCheck.setValue("test");

    expect(component.form.valid).toBeTruthy();
  });
});
