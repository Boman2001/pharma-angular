import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ExaminationTypeService } from "../../services/examination-type.service";

import { ExaminationOverviewComponent } from "./examination-overview.component";

describe("ExaminationOverviewComponent", () => {
  let component: ExaminationOverviewComponent;
  let fixture: ComponentFixture<ExaminationOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExaminationOverviewComponent],
      providers: [
        ExaminationTypeService,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
