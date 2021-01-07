import { Injectable } from "@angular/core";
import { GenericHttpService } from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { Patient } from "../models/patient.model";


@Injectable({
  providedIn: "root"
})
export class PatientService extends GenericHttpService<Patient> {

  constructor(protected http: HttpClient) {
    super("patient", http);
  }
}
