import { TestBed } from "@angular/core/testing";

import { HttpService } from "./http.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";

describe("HttpService", () => {
  let service: HttpService;
  let http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient
      ]
    });

    service = TestBed.inject(HttpService);
    http = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
