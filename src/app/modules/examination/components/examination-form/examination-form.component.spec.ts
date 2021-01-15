import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ExaminationFormComponent } from "./examination-form.component";
import { FormBuilder } from "@angular/forms";


describe("ExaminationFormComponent", () => {
  let component: ExaminationFormComponent;
  let fixture: ComponentFixture<ExaminationFormComponent>;
  let formControls;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaminationFormComponent ],
      providers: [ FormBuilder ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationFormComponent);
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
