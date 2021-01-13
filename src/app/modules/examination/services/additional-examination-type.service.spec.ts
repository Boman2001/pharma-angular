import { TestBed } from "@angular/core/testing";
import { AdditionalExaminationTypeService } from "./additional-examination-type.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../../core/core.module";


describe("AdditionalExaminationTypeService", () => {
  let service: AdditionalExaminationTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient,
        StorageService
      ]
    });

    service = TestBed.inject(AdditionalExaminationTypeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
