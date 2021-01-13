import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConsultVisitEvaluationComponent } from "./consult-visit-evaluation.component";

describe("ConsultVisitEvaluationComponent", () => {
  let component: ConsultVisitEvaluationComponent;
  let fixture: ComponentFixture<ConsultVisitEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultVisitEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultVisitEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
