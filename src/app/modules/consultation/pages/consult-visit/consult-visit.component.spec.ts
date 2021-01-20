import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConsultVisitComponent } from "./consult-visit.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("ConsultVisitComponent", () => {
  let component: ConsultVisitComponent;
  let fixture: ComponentFixture<ConsultVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ConsultVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
