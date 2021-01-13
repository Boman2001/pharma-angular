import { Injectable } from "@angular/core";
import {GenericHttpService, StorageService} from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import {ExaminationType} from "../models/examination-type.model";


@Injectable({
  providedIn: "root"
})
export class ExaminationTypeService extends GenericHttpService<ExaminationType>{

  constructor(protected http: HttpClient, protected storage: StorageService) {
    super("ExaminationTypes", http, storage);
  }
}
