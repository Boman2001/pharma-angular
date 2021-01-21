import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpService, StorageService } from "../../core/core.module";
import { User } from "../../user/user.module";
import { HttpClient } from "@angular/common/http";
import { LoginResponse } from "../models/LoginResponse.model";
import { TwoFactorResponse } from "../models/TwoFactorResponse.model";
import { TwoFactorData } from "../types/TwoFactorData";


@Injectable({
  providedIn: "root"
})
export class AuthService extends HttpService {

  constructor(protected http: HttpClient, protected storage: StorageService) {
    super(http, storage);
  }

  public get basePath(): string {
    return `${environment.apiUrl}/Auth`;
  }

  public get loggedIn(): boolean {
    return this.token != null;
  }

  public get user(): User
  {
    return this.storage.GetItem("user");
  }

  public set user(value: User)
  {
    this.storage.SetItem("user", value);
  }

  public get token(): string {
    return this.storage.GetItem("token");
  }

  public set token(value: string) {
    this.storage.SetItem("token", value);
  }

  public async TwoFactor(email: string, code: string): Promise<boolean> {
    const twoFactorResponse = await this.http.post<TwoFactorResponse>(
      `${this.basePath}/login/twofactor`,
      {
        email,
        code
      },
      this.baseOptions
    )
    .toPromise();

    if (twoFactorResponse?.token == null || twoFactorResponse.user?.id == null)
    {
      return false;
    }

    this.token = twoFactorResponse.token;
    this.user = twoFactorResponse.user;

    return true;
  }

  public async Login(email: string, password: string): Promise<TwoFactorData> {

    // Login
    const loginResponse = await this.http.post<TwoFactorData>(
      `${this.basePath}/login`,
      {
        email,
        password
      },
      this.baseOptions
    )
    .toPromise();

    if (loginResponse?.email == null) {
      return null;
    }

    return loginResponse;
  }

  public Logout(): void {
    this.storage.RemoveItem("user");
    this.storage.RemoveItem("token");
  }
}
