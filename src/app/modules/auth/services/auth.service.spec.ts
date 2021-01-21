import {TestBed} from "@angular/core/testing";
import {AuthService} from "./auth.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {User} from "../../user/user.module";
import {Gender, StorageService} from "../../core/core.module";

const mockToken = "ey1234.test.test.test";

const date = new Date();

const mockUser: User = {
  roles: [],
  id: "1",
  name: "Mock User",
  username: "testuser",
  email: "test@example.com",
  country: "NL",
  dob: date,
  gender: Gender.MALE,
  phoneNumber: "+31612345678",
  city: "Mock Stad",
  street: "Mock Straat",
  houseNumber: "123",
  houseNumberAddon: "A",
  postalCode: "1234AB",
  createdAt: date,
  createdBy: null,
  deletedAt: date,
  deletedBy: null,
  updatedAt: date,
  updatedBy: null
};

describe("AuthService", () => {
  let service: AuthService;
  let http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpClient,
        StorageService
      ]
    });

    service = TestBed.inject(AuthService);
    http = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return correct basePath", () => {
    expect(service.basePath).toBe(`${environment.apiUrl}/Auth`);
  });

  it("should return a 2fa response", async () => {
    service.TwoFactor("test@example.com", "test").then((result: boolean) => {
      expect(result).toBeTrue();
    });
    const request = http.expectOne(req => req.method === "POST" && req.url === `${environment.apiUrl}/Auth/login/twofactor`);
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
    expect(service.user.id).toBe(mockUser.id);
  });
});
