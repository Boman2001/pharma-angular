import { Injectable } from "@angular/core";
import {GenericHttpService, StorageService} from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { Prescription } from "../models/prescription.model";


@Injectable({
  providedIn: "root"
})
export class PrescriptionService extends GenericHttpService<Prescription> {

  constructor(protected http: HttpClient, protected storage: StorageService) {
    super("Prescriptions", http, storage);
  }
}
