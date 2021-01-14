import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PatientEditComponent } from "./patient-edit.component";
import { RouterTestingModule } from "@angular/router/testing";
import { PatientService } from "../../services/patient.service";
import { StorageService } from "../../../core/services/storage.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";


describe("PatientEditComponent", () => {
  let component: PatientEditComponent;
  let fixture: ComponentFixture<PatientEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ PatientEditComponent ],
      providers: [
        PatientService,
        StorageService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
