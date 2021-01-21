import { Injectable } from "@angular/core";
import { GenericHttpService, StorageService } from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { AdditionalExaminationType } from "../models/additional-examination-type.model";
import { AuthService } from "../../auth/services/auth.service";
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root"
})
export class AdditionalExaminationTypeService extends GenericHttpService<AdditionalExaminationType> {

  constructor(
    protected http: HttpClient,
    protected storage: StorageService,
    protected authService: AuthService,
    protected router: Router
  )
  {
    super("AdditionalExaminationTypes", http, storage, authService, router);
  }
}
