import { TestBed } from "@angular/core/testing";
import { UserJournalService } from "./user-journal.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../../core/core.module";


describe("UserJournalService", () => {
  let service: UserJournalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient,
        StorageService
      ]
    });

    service = TestBed.inject(UserJournalService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
