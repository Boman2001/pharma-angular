import { TestBed } from "@angular/core/testing";

import { LoginGuard } from "./login.guard";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { StorageService } from "../../core/services/storage.service";
import { AuthService } from "../services/auth.service";
import { RouterTestingModule } from "@angular/router/testing";

describe("LoginGuard", () => {
  let guard: LoginGuard;

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
    guard = TestBed.inject(LoginGuard);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });
});
