import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { UserFormComponent } from "./user-form.component";
import { UserService } from "../../services/user.service";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";


describe("UserFormComponent", () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let userForm;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule,
        NgbDatepickerModule
      ],
      declarations: [ UserFormComponent ],
      providers: [
        UserService,
        HttpClient,
        HttpHandler,
        FormBuilder
      ]
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
    userForm.id.setValue("1");
    userForm.name.setValue("Test Test");
    userForm.email.setValue("test@test.com");
    userForm.dob.setValue("01-01-2021");
    userForm.gender.setValue("male");
    userForm.phoneNumber.setValue("0612345678");
    userForm.street.setValue("MyStreet");
    userForm.houseNumber.setValue(15);
    userForm.houseNumberAddon.setValue("a");
    userForm.city.setValue("Roosendaal");
    userForm.postalCode.setValue("1234AB");
    userForm.country.setValue("NL");
    userForm.password.setValue("test");
    userForm.passwordCheck.setValue("test");

    expect(component.form.valid).toBeTruthy();
  });
});
