import { Injectable } from "@angular/core";
import {GenericHttpService, StorageService} from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { AdditionalExaminationType } from "../models/additional-examination-type.model";


@Injectable({
  providedIn: "root"
})
export class AdditionalExaminationTypeService extends GenericHttpService<AdditionalExaminationType> {

  constructor(protected http: HttpClient, protected storage: StorageService) {
    super("AdditionalExaminationTypes", http, storage);
  }
}
