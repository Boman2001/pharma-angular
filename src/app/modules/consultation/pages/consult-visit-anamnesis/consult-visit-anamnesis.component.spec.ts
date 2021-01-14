import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConsultVisitAnamnesisComponent } from "./consult-visit-anamnesis.component";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {ConsultationModule} from "../../consultation.module";
import {FormBuilder} from "@angular/forms";

describe("ConsultVisitAnamnesisComponent", () => {
  let component: ConsultVisitAnamnesisComponent;
  let fixture: ComponentFixture<ConsultVisitAnamnesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultVisitAnamnesisComponent ],
      imports: [ConsultationModule, NgbDatepickerModule],
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultVisitAnamnesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // TODO TESTS SCHRIJVEN
    spyOn(component, "submit");
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return form is invalid", () => {
    expect(component.form.valid).toBeFalsy();
  });
});
