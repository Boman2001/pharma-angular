import { Injectable } from "@angular/core";
import {GenericHttpService, StorageService} from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import {BaseExaminationType} from "../models/base-examination-type.model";


@Injectable({
  providedIn: "root"
})
export class BaseExaminationTypeService extends GenericHttpService<BaseExaminationType> {

  constructor(protected http: HttpClient, protected storage: StorageService) {
    super("base-examination-type", http, storage);
  }
}
