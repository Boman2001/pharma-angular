import { Injectable } from "@angular/core";
import {GenericHttpService, StorageService} from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { Intolerance } from "../models/intolerance.model";


@Injectable({
  providedIn: "root"
})
export class IntoleranceService extends GenericHttpService<Intolerance> {

  constructor(protected http: HttpClient, protected storage: StorageService) {
    super("Intolerances", http, storage);
  }
}
