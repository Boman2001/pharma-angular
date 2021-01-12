import { Injectable } from "@angular/core";
import {GenericHttpService, StorageService} from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { ICPCCode } from "../models/icpccode.model";


@Injectable({
  providedIn: "root"
})
export class ICPCCodeService extends GenericHttpService<ICPCCode> {

  constructor(protected http: HttpClient, protected storage: StorageService) {
    super("icpccode", http, storage);
  }
}
