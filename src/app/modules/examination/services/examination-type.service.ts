import { Injectable } from "@angular/core";
import { GenericHttpService } from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import {ExaminationType} from "../models/examination-type.model";


@Injectable({
  providedIn: "root"
})
export class ExaminationTypeService extends GenericHttpService<ExaminationType>{

  constructor(protected http: HttpClient) {
    super("examination-type", http);
  }
}
