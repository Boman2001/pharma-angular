import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConsultVisitPolicyComponent } from "./consult-visit-policy.component";
import {ConsultationModule} from "../../consultation.module";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";

describe("ConsultVisitPolicyComponent", () => {
  let component: ConsultVisitPolicyComponent;
  let fixture: ComponentFixture<ConsultVisitPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultVisitPolicyComponent ],
      imports: [ConsultationModule, NgbDatepickerModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultVisitPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // TODO TESTS SCHRIJVEN
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
