import { Injectable } from "@angular/core";
import { GenericHttpService } from "../../core/core.module";
import { HttpClient } from "@angular/common/http";
import { ICPCCode } from "../models/icpccode.model";


@Injectable({
  providedIn: "root"
})
export class ICPCCodeService extends GenericHttpService<ICPCCode> {

  constructor(protected http: HttpClient) {
    super("icpccode", http);
  }
}
