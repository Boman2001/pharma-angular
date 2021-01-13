import { HttpClient, HttpHandler } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { PrescriptionService } from "../../services/prescription.service";

import { PrescriptionOverviewComponent } from "./prescription-overview.component";

describe("PrescriptionOverviewComponent", () => {
  let component: PrescriptionOverviewComponent;
  let fixture: ComponentFixture<PrescriptionOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrescriptionOverviewComponent],
      providers: [
        HttpClient,
        HttpHandler,
        PrescriptionService
      ],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
