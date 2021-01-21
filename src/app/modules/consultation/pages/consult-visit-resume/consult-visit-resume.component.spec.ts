import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConsultVisitResumeComponent } from "./consult-visit-resume.component";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("ConsultVisitResumeComponent", () => {
  let component: ConsultVisitResumeComponent;
  let fixture: ComponentFixture<ConsultVisitResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultVisitResumeComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
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
