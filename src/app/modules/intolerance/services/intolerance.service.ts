import { Injectable } from "@angular/core";
import { GenericHttpService, StorageService } from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { Intolerance } from "../models/intolerance.model";
import { AuthService } from "../../auth/services/auth.service";
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root"
})
export class IntoleranceService extends GenericHttpService<Intolerance> {

  constructor(
    protected http: HttpClient,
    protected storage: StorageService,
    protected authService: AuthService,
    protected router: Router
  )
  {
    super("Intolerances", http, storage, authService, router);
  }
}
