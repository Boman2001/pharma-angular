import { TestBed } from "@angular/core/testing";
import { ExaminationTypeService } from "./examination-type.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { StorageService } from "../../core/core.module";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from "../../auth/services/auth.service";


describe("ExaminationTypeService", () => {
  let service: ExaminationTypeService;

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

    service = TestBed.inject(ExaminationTypeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
