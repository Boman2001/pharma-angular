import { TestBed } from "@angular/core/testing";
import { AuthService } from "./auth.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { LoginResponse } from "../models/LoginResponse.model";
import { User } from "../../user/user.module";
import { Gender } from "../../core/core.module";

const mockToken = "ey1234.test.test.test";

const date = new Date();

const mockUser: User = {
  Id: 1,
  Name: "Mock User",
  Email: "test@example.com",
  Dob: date,
  Gender: Gender.MALE,
  PhoneNumber: "+31612345678",
  City: "Mock Stad",
  Street: "Mock Straat",
  HouseNumber: "123",
  HouseNumberAddon: "A",
  PostalCode: "1234AB",
  CreatedAt: date,
  CreatedBy: null,
  DeletedAt: date,
  DeletedBy: null,
  UpdatedAt: date,
  UpdatedBy: null
};

describe("AuthService", () => {
  let service: AuthService;
  let http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient
      ]
    });

    service = TestBed.inject(AuthService);
    http = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return correct basePath", () => {
    expect(service.basePath).toBe(`${environment.apiUrl}/auth`);
  });

  it("should return a login response", async () => {
    service.Login("test@example.com", "test").then((loginResponse: LoginResponse) => {
      expect(loginResponse).toBeTruthy();
    });

    const request = http.expectOne(req => req.method === "POST" && req.url === `${environment.apiUrl}/auth/login`);
    request.flush({
      token: mockToken,
      user: mockUser
    });
  });

  it("should have a working token getter", () => {
    service.token = mockToken;
    expect(service.token).toBe(mockToken);
  });

  it("should have a working user getter", () => {
    service.user = mockUser;
    expect(service.user.Id).toBe(mockUser.Id);
  });
});
