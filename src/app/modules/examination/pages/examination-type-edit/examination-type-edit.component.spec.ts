import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ExaminationTypeEditComponent } from "./examination-type-edit.component";
import { ExaminationTypeService } from "../../services/examination-type.service";
import { StorageService } from "../../../core/services/storage.service";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";


describe("ExaminationTypeEditComponent", () => {
  let component: ExaminationTypeEditComponent;
  let fixture: ComponentFixture<ExaminationTypeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ ExaminationTypeEditComponent ],
      providers: [
        ExaminationTypeService,
        StorageService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
