import { Injectable } from "@angular/core";
import { GenericHttpService, StorageService } from "../../core/core.module";
import { User } from "../models/user.model";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../auth/services/auth.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserService extends GenericHttpService<User> {

  constructor(
    protected http: HttpClient,
    protected storage: StorageService,
    protected authService: AuthService,
    protected router: Router
  )
  {
    super("Users", http, storage, authService, router);
  }
}
