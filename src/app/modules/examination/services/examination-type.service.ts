import { Injectable } from "@angular/core";
import { GenericHttpService, StorageService } from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { ExaminationType } from "../models/examination-type.model";
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";


@Injectable({
  providedIn: "root"
})
export class ExaminationTypeService extends GenericHttpService<ExaminationType>{

  constructor(
    protected http: HttpClient,
    protected storage: StorageService,
    protected authService: AuthService,
    protected router: Router
  )
  {
    super("ExaminationTypes", http, storage, authService, router);
  }
}
