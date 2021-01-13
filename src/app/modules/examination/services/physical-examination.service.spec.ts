import { TestBed } from "@angular/core/testing";
import { PhysicalExaminationService } from "./physical-examination.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../../core/core.module";


describe("PhysicalExaminationService", () => {
  let service: PhysicalExaminationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient,
        StorageService
      ]
    });

    service = TestBed.inject(PhysicalExaminationService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
