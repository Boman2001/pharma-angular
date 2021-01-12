import { TestBed } from "@angular/core/testing";
import { ICPCCodeService } from "./icpccode.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../../core/core.module";


describe("ICPCCodeService", () => {
  let service: ICPCCodeService;
  let http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient,
        StorageService
      ]
    });

    service = TestBed.inject(ICPCCodeService);
    http = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
