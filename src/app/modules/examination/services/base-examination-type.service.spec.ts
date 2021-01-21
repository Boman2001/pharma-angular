import { TestBed } from "@angular/core/testing";
import { BaseExaminationTypeService } from "./base-examination-type.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { StorageService } from "../../core/core.module";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from "../../auth/services/auth.service";


describe("BaseExaminationTypeService", () => {
  let service: BaseExaminationTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        StorageService,
        AuthService
      ]
    });

    service = TestBed.inject(BaseExaminationTypeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
