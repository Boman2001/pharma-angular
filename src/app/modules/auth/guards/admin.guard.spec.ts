import { TestBed } from "@angular/core/testing";

import { AdminGuard } from "./admin.guard";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { StorageService } from "../../core/services/storage.service";
import { AuthService } from "../services/auth.service";
import { RouterTestingModule } from "@angular/router/testing";

describe("AdminGuard", () => {
  let guard: AdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        HttpClient,
        HttpHandler,
        StorageService,
        AuthService
      ]
    });
    guard = TestBed.inject(AdminGuard);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });
});
