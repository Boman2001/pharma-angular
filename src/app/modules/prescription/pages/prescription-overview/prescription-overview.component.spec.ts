import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PrescriptionOverviewComponent } from "./prescription-overview.component";

describe("PrescriptionOverviewComponent", () => {
  let component: PrescriptionOverviewComponent;
  let fixture: ComponentFixture<PrescriptionOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
