import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConsultCreateComponent } from "./consult-create.component";
import {FormBuilder} from "@angular/forms";

describe("ConsultCreateComponent", () => {
  let component: ConsultCreateComponent;
  let fixture: ComponentFixture<ConsultCreateComponent>;
  let form;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultCreateComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component, "open");
    const button = fixture.debugElement.nativeElement.querySelector("#create-consult-btn");
    button.click();

    form = component.form.controls;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return form is invalid", () => {
    expect(component.form.valid).toBeFalsy();
  });

  it("should return form is valid", () => {
    form.date.setValue("2021-01-06");
    form.patient.setValue("1");
    form.doctor.setValue("1");
    form.comment.setValue("test");
    expect(component.form.valid).toBeTruthy();
  });
});
