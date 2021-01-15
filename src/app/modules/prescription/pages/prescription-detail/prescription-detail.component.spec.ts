import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PrescriptionDetailComponent } from "./prescription-detail.component";
import { PrescriptionService } from "../../services/prescription.service";
import { StorageService } from "../../../core/services/storage.service";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";


describe("PrescriptionDetailComponent", () => {
  let component: PrescriptionDetailComponent;
  let fixture: ComponentFixture<PrescriptionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ PrescriptionDetailComponent ],
      providers: [
        PrescriptionService,
        StorageService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
