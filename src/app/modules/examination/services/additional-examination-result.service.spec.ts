import { TestBed } from "@angular/core/testing";

import { AdditionalExaminationResultService } from "./additional-examination-result.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";


describe("AdditionalExaminationResultService", () => {
  let service: AdditionalExaminationResultService;
  // let http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient
      ]
    });

    service = TestBed.inject(AdditionalExaminationResultService);
    // http = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
