import { TestBed } from "@angular/core/testing";
import { IntoleranceService } from "./intolerance.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { StorageService } from "../../core/core.module";


describe("IntoleranceService", () => {
  let service: IntoleranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient,
        HttpHandler,
        StorageService
      ]
    });

    service = TestBed.inject(IntoleranceService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
