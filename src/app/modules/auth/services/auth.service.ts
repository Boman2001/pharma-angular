import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpService, StorageService } from "../../core/core.module";
import { User } from "../../user/user.module";
import { HttpClient } from "@angular/common/http";
import { LoginResponse } from "../models/LoginResponse.model";
import {TwoFactorResponse} from "../models/TwoFactorResponse.model";


@Injectable({
  providedIn: "root"
})
export class AuthService extends HttpService {

  constructor(protected http: HttpClient, protected storage: StorageService)
  {
    super(http, storage);
  }

  public get basePath(): string
  {
    return `${environment.apiUrl}/Auth`;
  }

  public get user(): User
  {
    return this.storage.GetItem("user");
  }

  public set user(value: User)
  {
    this.storage.SetItem("user", value);
  }

  public get token(): string
  {
    return this.storage.GetItem("token");
  }

  public set token(value: string)
  {
    this.storage.SetItem("token", value);
  }
  public async getTwoFactor(email: string): Promise<TwoFactorResponse>
  {
    const twoFactorResponse = await this.http.post<TwoFactorResponse>(
      `${this.basePath}/login/twofactor`,
      {
        email
      },
      this.baseOptions
    )
      .toPromise();

    if
    (
      twoFactorResponse == null
      || twoFactorResponse.token == null
      || twoFactorResponse.user == null
      || twoFactorResponse.user.Id == null
    )
    {
      return null;
    }

    this.token = twoFactorResponse.token;
    this.user = twoFactorResponse.user;

    return twoFactorResponse;
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
      || loginResponse.email
      || loginResponse.twoFactorUrl
    )
    {
      return null;
    }

    return loginResponse;
  }

  public Logout(): void
  {
    this.storage.RemoveItem("user");
    this.storage.RemoveItem("token");
  }
}
