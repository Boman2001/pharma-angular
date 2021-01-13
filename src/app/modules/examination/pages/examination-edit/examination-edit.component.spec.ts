import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ExaminationEditComponent } from "./examination-edit.component";

describe("ExaminationEditComponent", () => {
  let component: ExaminationEditComponent;
  let fixture: ComponentFixture<ExaminationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaminationEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
