import { TestBed } from "@angular/core/testing";
import { PrescriptionService } from "./prescription.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../../core/core.module";


describe("PrescriptionService", () => {
  let service: PrescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient,
        StorageService
      ]
    });

    service = TestBed.inject(PrescriptionService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
