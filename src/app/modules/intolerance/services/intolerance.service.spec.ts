import { TestBed } from "@angular/core/testing";
import { IntoleranceService } from "./intolerance.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { StorageService } from "../../core/core.module";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from "../../auth/services/auth.service";


describe("IntoleranceService", () => {
  let service: IntoleranceService;

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

    service = TestBed.inject(IntoleranceService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
