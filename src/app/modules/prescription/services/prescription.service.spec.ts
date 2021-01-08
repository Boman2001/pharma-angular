import { TestBed } from "@angular/core/testing";
import { PrescriptionService } from "./prescription.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";


describe("PrescriptionService", () => {
  let service: PrescriptionService;
  let http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient
      ]
    });

    service = TestBed.inject(PrescriptionService);
    http = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
