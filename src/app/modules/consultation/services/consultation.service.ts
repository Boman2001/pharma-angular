import { Injectable } from "@angular/core";
import { GenericHttpService, StorageService } from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { Consultation } from "../models/consultation.model";


@Injectable({
  providedIn: "root"
})
export class ConsultationService extends GenericHttpService<Consultation> {

  constructor(protected http: HttpClient, protected storage: StorageService) {
    super("Consultations", http, storage);
  }
}
