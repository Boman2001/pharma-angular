import { Injectable } from "@angular/core";
import { GenericHttpService } from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { AdditionalExaminationType } from "../models/additional-examination-type.model";


@Injectable({
  providedIn: "root"
})
export class AdditionalExaminationTypeService extends GenericHttpService<AdditionalExaminationType> {

  constructor(protected http: HttpClient) {
    super("additional-examination-type", http);
  }
}
