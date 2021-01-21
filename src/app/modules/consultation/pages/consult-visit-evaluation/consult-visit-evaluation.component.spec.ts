import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConsultVisitEvaluationComponent } from "./consult-visit-evaluation.component";
import {FormBuilder} from "@angular/forms";
import {ConsultationModule} from "../../consultation.module";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("ConsultVisitEvaluationComponent", () => {
  let component: ConsultVisitEvaluationComponent;
  let fixture: ComponentFixture<ConsultVisitEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultVisitEvaluationComponent ],
      imports: [ConsultationModule, RouterTestingModule, HttpClientTestingModule],
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultVisitEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // TODO TESTS SCHRIJVEN
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
