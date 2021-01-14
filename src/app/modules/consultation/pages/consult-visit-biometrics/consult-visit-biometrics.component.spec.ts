import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConsultVisitBiometricsComponent } from "./consult-visit-biometrics.component";
import {ConsultationModule} from "../../consultation.module";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";

describe("ConsultVisitBiometricsComponent", () => {
  let component: ConsultVisitBiometricsComponent;
  let fixture: ComponentFixture<ConsultVisitBiometricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultVisitBiometricsComponent ],
      imports: [ConsultationModule, NgbDatepickerModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultVisitBiometricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // TODO TESTS SCHRIJVEN
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
