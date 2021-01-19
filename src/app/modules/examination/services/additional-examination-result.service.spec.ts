import { TestBed } from "@angular/core/testing";
import { AdditionalExaminationResultService } from "./additional-examination-result.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { StorageService } from "../../core/core.module";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from "../../auth/services/auth.service";


describe("AdditionalExaminationResultService", () => {
  let service: AdditionalExaminationResultService;

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

    service = TestBed.inject(AdditionalExaminationResultService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
