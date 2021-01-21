import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ExaminationTypeService } from "../../services/examination-type.service";
import { ExaminationTypeOverviewComponent } from "./examination-type-overview.component";
import { StorageService } from "../../../core/services/storage.service";


describe("ExaminationTypeOverviewComponent", () => {
  let component: ExaminationTypeOverviewComponent;
  let fixture: ComponentFixture<ExaminationTypeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExaminationTypeOverviewComponent],
      providers: [
        ExaminationTypeService,
        StorageService
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationTypeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
