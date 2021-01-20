import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConsultVisitExaminationComponent } from "./consult-visit-examination.component";
import { AdditionalExaminationResultService } from "../../../examination/services/additional-examination-result.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ConsultationService } from "../../services/consultation.service";
import { StorageService } from "../../../core/services/storage.service";
import { AuthService } from "../../../auth/services/auth.service";


describe("ConsultVisitExaminationComponent", () => {
  let component: ConsultVisitExaminationComponent;
  let fixture: ComponentFixture<ConsultVisitExaminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ ConsultVisitExaminationComponent ],
      providers: [
        ConsultationService,
        StorageService,
        AuthService,
        AdditionalExaminationResultService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultVisitExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // TODO TESTS SCHRIJVEN
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
