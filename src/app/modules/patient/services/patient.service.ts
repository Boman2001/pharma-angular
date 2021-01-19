import { Injectable } from "@angular/core";
import { GenericHttpService, StorageService } from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { Patient } from "../models/patient.model";
import { AuthService } from "../../auth/services/auth.service";
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root"
})
export class PatientService extends GenericHttpService<Patient> {

  constructor(
    protected http: HttpClient,
    protected storage: StorageService,
    protected authService: AuthService,
    protected router: Router
  )
  {
    super("Patients", http, storage, authService, router);
  }
}
