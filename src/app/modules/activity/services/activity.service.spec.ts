import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { StorageService } from "../../core/core.module";
import { ActivityService } from "./activity.service";


describe("ActivityService", () => {
  let service: ActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient,
        HttpHandler,
        StorageService
      ]
    });

    service = TestBed.inject(ActivityService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
