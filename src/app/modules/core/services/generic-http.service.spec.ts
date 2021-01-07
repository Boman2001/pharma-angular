import { TestBed } from "@angular/core/testing";
import { GenericHttpService } from "./generic-http.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";


describe("GenericHttpService", () => {
  let service: GenericHttpService<any>;
  let http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient
      ]
    });

    service = TestBed.inject(GenericHttpService);
    http = TestBed.inject(HttpTestingController);
  });

  // it("should be created", () => {
  //   expect(service).toBeTruthy();
  // });
});
