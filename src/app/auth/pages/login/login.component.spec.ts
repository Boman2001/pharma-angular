import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import {FormBuilder} from "@angular/forms";
import {AuthModule} from "../../auth.module";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let form;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [AuthModule],
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.ngOnInit();
    form = component.form.controls;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should fill form and form is valid", () => {
    form.email.setValue("test@test.com");
    form.password.setValue("admintest");

    expect(component.form.valid).toBeTruthy();
  });

  it("should set email input and form is invalid", () => {
    form.email.setValue("test@test.com");

    expect(component.form.valid).toBeFalsy();
  });

  it("should set password input and form is invalid", () => {
    form.password.setValue("admintest");

    expect(component.form.valid).toBeFalsy();
  });

  it("should return form is invalid", () => {
    expect(component.form.valid).toBeFalsy();
  });
});
