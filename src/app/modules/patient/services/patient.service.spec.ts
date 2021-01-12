import { TestBed } from "@angular/core/testing";
import { PatientService } from "./patient.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../../core/core.module";


describe("PatientService", () => {
  let service: PatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient,
        StorageService
      ]
    });

    service = TestBed.inject(PatientService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
