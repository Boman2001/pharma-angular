import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {StorageService} from "./storage.service";


@Injectable({
  providedIn: "root"
})
export class HttpService {

  constructor(protected http: HttpClient, protected storage: StorageService) { }

  public get basePath(): string
  {
    return `${environment.apiUrl}`;
  }

  public get baseOptions(): object
  {
    return {
      headers: {
        Authorization: `Bearer ${ this.storage.GetItem("token") }`
      },
      responseType: "json",
      withCredentials: true,
    };
  }
}
