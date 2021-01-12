import { TestBed } from "@angular/core/testing";
import { EpisodeService } from "./episode.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../../core/core.module";


describe("EpisodeService", () => {
  let service: EpisodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient,
        StorageService
      ]
    });

    service = TestBed.inject(EpisodeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
