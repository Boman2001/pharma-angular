import { TestBed } from "@angular/core/testing";

import { PhysicalExaminationService } from "./physical-examination.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";


describe("PhysicalExaminationService", () => {
  let service: PhysicalExaminationService;
  // let http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient
      ]
    });

    service = TestBed.inject(PhysicalExaminationService);
    // http = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
