import { Injectable } from "@angular/core";
import {GenericHttpService, StorageService} from "../../core/core.module";
import { User } from "../models/user.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService extends GenericHttpService<User> {

  constructor(protected http: HttpClient, protected storage: StorageService) {
    super("Users", http, storage);
  }
}
