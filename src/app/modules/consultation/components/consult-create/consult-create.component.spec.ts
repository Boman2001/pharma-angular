import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ConsultCreateComponent } from "./consult-create.component";
import { FormBuilder } from "@angular/forms";
import { StorageService } from "../../../core/core.module";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AuthService } from "../../../auth/services/auth.service";
import { ConsultationService } from "../../services/consultation.service";
import { PatientService } from "../../../patient/services/patient.service";
import { UserService } from "../../../user/services/user.service";
import { RouterTestingModule } from "@angular/router/testing";


describe("ConsultCreateComponent", () => {
  let component: ConsultCreateComponent;
  let fixture: ComponentFixture<ConsultCreateComponent>;
  let form;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        ConsultCreateComponent
      ],
      providers: [
        StorageService,
        FormBuilder,
        NgbModal,
        AuthService,
        ConsultationService,
        PatientService,
        UserService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    form = component.form.controls;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return form is invalid", () => {
    expect(component.form.valid).toBeFalsy();
  });

  it("should return form is valid", () => {
    form.date.setValue({year: 2020, month: 2});
    form.time.setValue({hour: 7, minute: 20});
    form.patientId.setValue("1");
    form.doctorId.setValue("1");
    form.comment.setValue("test");
    expect(component.form.valid).toBeTruthy();
  });
});
