import { TestBed } from "@angular/core/testing";
import { ICPCCodeService } from "./icpccode.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { StorageService } from "../../core/core.module";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from "../../auth/services/auth.service";


describe("ICPCCodeService", () => {
  let service: ICPCCodeService;

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

    service = TestBed.inject(ICPCCodeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
