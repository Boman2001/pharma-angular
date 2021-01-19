import { Injectable } from "@angular/core";
import { GenericHttpService, StorageService } from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { ICPCCode } from "../models/icpccode.model";
import { AuthService } from "../../auth/services/auth.service";
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root"
})
export class ICPCCodeService extends GenericHttpService<ICPCCode> {

  constructor(
    protected http: HttpClient,
    protected storage: StorageService,
    protected authService: AuthService,
    protected router: Router
  )
  {
    super("IcpcCodes", http, storage, authService, router);
  }
}
