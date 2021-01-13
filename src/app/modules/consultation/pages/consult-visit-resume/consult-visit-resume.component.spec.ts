import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConsultVisitResumeComponent } from "./consult-visit-resume.component";

describe("ConsultVisitResumeComponent", () => {
  let component: ConsultVisitResumeComponent;
  let fixture: ComponentFixture<ConsultVisitResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultVisitResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultVisitResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
