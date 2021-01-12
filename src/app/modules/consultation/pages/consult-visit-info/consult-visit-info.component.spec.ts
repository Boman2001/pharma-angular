import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConsultVisitInfoComponent } from "./consult-visit-info.component";

describe("ConsultVisitInfoComponent", () => {
  let component: ConsultVisitInfoComponent;
  let fixture: ComponentFixture<ConsultVisitInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultVisitInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultVisitInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
