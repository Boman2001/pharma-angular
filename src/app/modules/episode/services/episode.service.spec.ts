import { TestBed } from "@angular/core/testing";
import { EpisodeService } from "./episode.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { StorageService } from "../../core/core.module";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from "../../auth/services/auth.service";


describe("EpisodeService", () => {
  let service: EpisodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        StorageService,
        AuthService
      ]
    });

    service = TestBed.inject(EpisodeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
