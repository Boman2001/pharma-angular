import { TestBed } from "@angular/core/testing";
import { UserJournalService } from "./user-journal.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { StorageService } from "../../core/core.module";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from "../../auth/services/auth.service";


describe("UserJournalService", () => {
  let service: UserJournalService;

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

    service = TestBed.inject(UserJournalService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
