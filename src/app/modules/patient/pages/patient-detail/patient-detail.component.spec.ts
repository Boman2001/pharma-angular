import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PatientDetailComponent } from "./patient-detail.component";
import { DomSanitizer} from "@angular/platform-browser";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { PatientService } from "../../services/patient.service";
import { StorageService } from "../../../core/services/storage.service";


describe("PatientDetailComponent", () => {
  let component: PatientDetailComponent;
  let fixture: ComponentFixture<PatientDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ PatientDetailComponent ],
      providers: [
        DomSanitizer,
        PatientService,
        StorageService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
