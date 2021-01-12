import { Injectable } from "@angular/core";
import {GenericHttpService, StorageService} from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { UserJournal } from "../models/user-journal.model";


@Injectable({
  providedIn: "root"
})
export class UserJournalService extends GenericHttpService<UserJournal> {

  constructor(protected http: HttpClient, protected storage: StorageService) {
    super("user-journal", http, storage);
  }
}
