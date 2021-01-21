import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ExaminationTypeFormComponent } from "./examination-type-form.component";
import { FormBuilder } from "@angular/forms";
import { ExaminationTypeService } from "../../services/examination-type.service";
import { StorageService } from "../../../core/services/storage.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AuthService } from "../../../auth/services/auth.service";
import { RouterTestingModule } from "@angular/router/testing";


describe("ExaminationTypeFormComponent", () => {
  let component: ExaminationTypeFormComponent;
  let fixture: ComponentFixture<ExaminationTypeFormComponent>;
  let formControls;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        ExaminationTypeFormComponent
      ],
      providers: [
        FormBuilder,
        ExaminationTypeService,
        StorageService,
        AuthService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    formControls = component.form.controls;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return form is invalid", () => {
    expect(component.form.valid).toBeFalsy();
  });

  it("should return form is valid", () => {
    formControls.name.setValue("Systolische Bloeddruk");
    formControls.unit.setValue("mmHg");

    expect(component.form.valid).toBeTruthy();
  });
});
