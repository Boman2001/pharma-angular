import { Injectable } from "@angular/core";
import { GenericHttpService } from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { Prescription } from "../models/prescription.model";


@Injectable({
  providedIn: "root"
})
export class PrescriptionService extends GenericHttpService<Prescription> {

  constructor(protected http: HttpClient) {
    super("prescription", http);
  }
}
