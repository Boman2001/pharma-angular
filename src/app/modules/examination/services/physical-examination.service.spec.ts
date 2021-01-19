import { TestBed } from "@angular/core/testing";
import { PhysicalExaminationService } from "./physical-examination.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { StorageService } from "../../core/core.module";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from "../../auth/services/auth.service";


describe("PhysicalExaminationService", () => {
  let service: PhysicalExaminationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        StorageService,
        AuthService
      ]
    });

    service = TestBed.inject(PhysicalExaminationService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
