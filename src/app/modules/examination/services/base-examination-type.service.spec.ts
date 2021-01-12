import { TestBed } from "@angular/core/testing";
import { BaseExaminationTypeService } from "./base-examination-type.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../../core/core.module";


describe("BaseExaminationTypeService", () => {
  let service: BaseExaminationTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient,
        StorageService
      ]
    });

    service = TestBed.inject(BaseExaminationTypeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
