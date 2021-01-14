import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { NgbDate, NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { ConsultationModule } from "../../consultation.module";
import { ConsultationService } from "../../services/consultation.service";
import { ConsultOverviewComponent } from "./consult-overview.component";


describe("ConsultOverviewComponent", () => {
  let component: ConsultOverviewComponent;
  let fixture: ComponentFixture<ConsultOverviewComponent>;
  let date;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ConsultOverviewComponent
      ],
      providers: [
        ConsultationService,

      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ConsultationModule,
        NgbDatepickerModule,
      ]
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
