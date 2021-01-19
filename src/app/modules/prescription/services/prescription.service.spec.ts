import { TestBed } from "@angular/core/testing";
import { PrescriptionService } from "./prescription.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { StorageService } from "../../core/core.module";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from "../../auth/services/auth.service";


describe("PrescriptionService", () => {
  let service: PrescriptionService;

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

    service = TestBed.inject(PrescriptionService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
