import { TestBed } from "@angular/core/testing";
import { PatientService } from "./patient.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../../core/core.module";


describe("PatientService", () => {
  let service: PatientService;
  // let http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient,
        StorageService
      ]
    });

    service = TestBed.inject(PatientService);
    // http = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
