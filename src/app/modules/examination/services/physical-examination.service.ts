import { Injectable } from "@angular/core";
import {GenericHttpService, StorageService} from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import {PhysicalExamination} from "../models/physical-examination.model";


@Injectable({
  providedIn: "root"
})
export class PhysicalExaminationService extends GenericHttpService<PhysicalExamination>{

  constructor(protected http: HttpClient, protected storage: StorageService) {
    super("PhysicalExaminations", http, storage);
  }
}
