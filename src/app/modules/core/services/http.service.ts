import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class HttpService {

  constructor(protected http: HttpClient) { }

  public get basePath(): string
  {
    return `${environment.apiUrl}`;
  }

  public get baseOptions(): object
  {
    return {
      headers: {
        Authorization: "bearer "// @TODO: Add token retrieval logic
      },
      responseType: "json",
      withCredentials: true,
    };
  }
}
