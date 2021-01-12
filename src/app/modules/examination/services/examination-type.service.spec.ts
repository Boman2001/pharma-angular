import { TestBed } from "@angular/core/testing";
import { ExaminationTypeService } from "./examination-type.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../../core/core.module";


describe("ExaminationTypeService", () => {
  let service: ExaminationTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient,
        StorageService
      ]
    });

    service = TestBed.inject(ExaminationTypeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
