import { Injectable } from "@angular/core";
import { GenericHttpService, StorageService } from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { BaseExaminationType } from "../models/base-examination-type.model";
import { AuthService } from "../../auth/services/auth.service";
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root"
})
export class BaseExaminationTypeService extends GenericHttpService<BaseExaminationType> {

  constructor(
    protected http: HttpClient,
    protected storage: StorageService,
    protected authService: AuthService,
    protected router: Router
  )
  {
    super("BaseExaminationTypes", http, storage, authService, router);
  }
}
