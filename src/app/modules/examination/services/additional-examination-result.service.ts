import { Injectable } from "@angular/core";
import { GenericHttpService } from "../../core/core.module";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class AdditionalExaminationResultService extends GenericHttpService<AdditionalExaminationResultService> {

  constructor(protected http: HttpClient) {
    super("additional-examination-result", http);
  }
}
