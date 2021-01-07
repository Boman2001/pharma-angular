import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConsultOverviewComponent } from "./consult-overview.component";
import {NgbCalendar, NgbDate, NgbDatepickerModule, NgbDateStruct, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConsultModule} from "../../consult.module";

describe("ConsultOverviewComponent", () => {
  let component: ConsultOverviewComponent;
  let fixture: ComponentFixture<ConsultOverviewComponent>;
  let date;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultOverviewComponent ],
      imports: [ConsultModule, NgbDatepickerModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    date = new Date();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should set date today", () => {
    const today = new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
    expect(component.date).toEqual(today);
  });

  it("should set date tomorrow", () => {
    const today = new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate() + 1);
    component.nextDay();
    expect(component.date).toEqual(today);
  });

  it("should set date yesterday", () => {
    const today = new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate() - 1);
    component.prevDay();
    expect(component.date).toEqual(today);
  });
});
