import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ConsultVisitBiometricsComponent } from "./consult-visit-biometrics.component";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormBuilder } from "@angular/forms";


describe("ConsultVisitBiometricsComponent", () => {
  let component: ConsultVisitBiometricsComponent;
  let fixture: ComponentFixture<ConsultVisitBiometricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgbDatepickerModule,
        RouterTestingModule
      ],
      providers: [
        FormBuilder
      ],
      declarations: [
        ConsultVisitBiometricsComponent
      ]
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
