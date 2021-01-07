import { Injectable } from "@angular/core";
import { GenericHttpService } from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { Consultation } from "../models/consultation.model";


@Injectable({
  providedIn: "root"
})
export class ConsultationService extends GenericHttpService<Consultation> {

  constructor(protected http: HttpClient) {
    super("consultation", http);
  }
}
