import { Injectable } from "@angular/core";
import { GenericHttpService, StorageService } from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { Consultation } from "../models/consultation.model";
import { AuthService } from "../../auth/services/auth.service";
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root"
})
export class ConsultationService extends GenericHttpService<Consultation> {

  constructor(
    protected http: HttpClient,
    protected storage: StorageService,
    protected authService: AuthService,
    protected router: Router
  )
  {
    super("Consultations", http, storage, authService, router);
  }
}
