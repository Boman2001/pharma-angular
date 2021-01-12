import { TestBed } from "@angular/core/testing";
import { AdditionalExaminationResultService } from "./additional-examination-result.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../../core/core.module";


describe("AdditionalExaminationResultService", () => {
  let service: AdditionalExaminationResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient,
        StorageService
      ]
    });

    service = TestBed.inject(AdditionalExaminationResultService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
