import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ExaminationOverviewComponent } from "./examination-overview.component";

describe("ExaminationOverviewComponent", () => {
  let component: ExaminationOverviewComponent;
  let fixture: ComponentFixture<ExaminationOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaminationOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
