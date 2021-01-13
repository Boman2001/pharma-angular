import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConsultVisitAnamnesisComponent } from "./consult-visit-anamnesis.component";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {ConsultationModule} from "../../consultation.module";

describe("ConsultVisitAnamnesisComponent", () => {
  let component: ConsultVisitAnamnesisComponent;
  let fixture: ComponentFixture<ConsultVisitAnamnesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultVisitAnamnesisComponent ],
      imports: [ConsultationModule, NgbDatepickerModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultVisitAnamnesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
