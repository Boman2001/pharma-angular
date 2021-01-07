import { TestBed } from "@angular/core/testing";
import { AdditionalExaminationTypeService } from "./additional-examination-type.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";


describe("AdditionalExaminationTypeService", () => {
  let service: AdditionalExaminationTypeService;
  // let http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient
      ]
    });

    service = TestBed.inject(AdditionalExaminationTypeService);
    // http = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
