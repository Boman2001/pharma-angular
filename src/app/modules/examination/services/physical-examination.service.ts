import { Injectable } from "@angular/core";
import {GenericHttpService, StorageService} from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { PhysicalExamination } from "../models/physical-examination.model";
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";


@Injectable({
  providedIn: "root"
})
export class PhysicalExaminationService extends GenericHttpService<PhysicalExamination>{

  constructor(
    protected http: HttpClient,
    protected storage: StorageService,
    protected authService: AuthService,
    protected router: Router
  )
  {
    super("PhysicalExaminations", http, storage, authService, router);
  }
}
