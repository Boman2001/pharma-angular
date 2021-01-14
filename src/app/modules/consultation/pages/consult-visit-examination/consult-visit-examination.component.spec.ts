import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConsultVisitExaminationComponent } from "./consult-visit-examination.component";

describe("ConsultVisitExaminationComponent", () => {
  let component: ConsultVisitExaminationComponent;
  let fixture: ComponentFixture<ConsultVisitExaminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultVisitExaminationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultVisitExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // TODO TESTS SCHRIJVEN
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
