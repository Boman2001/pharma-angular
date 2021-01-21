import { Injectable } from "@angular/core";
import {GenericHttpService, StorageService} from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../auth/services/auth.service";
import { Router } from "@angular/router";
import {AdditionalExaminationResult} from "../models/additional-examination-result.model";


@Injectable({
  providedIn: "root"
})
export class AdditionalExaminationResultService extends GenericHttpService<AdditionalExaminationResult> {

  constructor(
    protected http: HttpClient,
    protected storage: StorageService,
    protected authService: AuthService,
    protected router: Router
  )
  {
    super("AdditionalExaminationResults", http, storage, authService, router);
  }
}
