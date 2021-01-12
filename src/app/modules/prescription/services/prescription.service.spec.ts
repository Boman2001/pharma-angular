import { TestBed } from "@angular/core/testing";
import { PrescriptionService } from "./prescription.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../../core/core.module";


describe("PrescriptionService", () => {
  let service: PrescriptionService;
  let http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient,
        StorageService
      ]
    });

    service = TestBed.inject(PrescriptionService);
    http = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
