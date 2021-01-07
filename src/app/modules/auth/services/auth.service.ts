import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { HttpService, StorageService } from "../../core/core.module";
import { User } from "../../user/user.module";
import { HttpClient } from "@angular/common/http";
import {LoginResponse} from "../models/LoginResponse.model";


@Injectable({
  providedIn: "root"
})
export class AuthService extends HttpService {

  constructor(protected http: HttpClient, protected storage: StorageService) {
    super(http);
  }

  public get basePath(): string
  {
    return `${environment.apiUrl}/auth`;
  }

  public get user(): User {
    return this.storage.GetItem("user");
  }

  public set user(value: User) {
    this.storage.SetItem("user", value);
  }

  public get token(): string {
    return this.storage.GetItem("token");
  }

  public set token(value: string) {
    this.storage.SetItem("token", value);
  }

  public async Login(email: string, password: string): Promise<LoginResponse>
  {
    const loginResponse = await this.http.post<LoginResponse>(
      `${this.basePath}/login`,
      {
        email,
        password
      },
      this.baseOptions
    )
    .toPromise();

    if
    (
      loginResponse == null
      || loginResponse.token == null
      || loginResponse.user == null
      || loginResponse.user.Id == null
    )
    {
      return null;
    }

    this.token = loginResponse.token;
    this.user = loginResponse.user;

    return loginResponse;
  }

  public Logout(): void
  {
    this.storage.RemoveItem("user");
    this.storage.RemoveItem("token");
  }
}
