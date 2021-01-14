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
    const token = this.storage.GetItem("token");
    return {
      headers: {
        ...(token != null ? { Authorization: `Bearer ${ token }` } : {})
      },
      responseType: "json",
      withCredentials: true,
    };
  }
}
