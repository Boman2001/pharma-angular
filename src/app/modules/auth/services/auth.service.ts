import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpService, StorageService } from "../../core/core.module";
import { User } from "../../user/user.module";
import { HttpClient } from "@angular/common/http";
import { LoginResponse } from "../models/LoginResponse.model";
import { BehaviorSubject } from "rxjs";


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

  public get loggedIn(): boolean {
    return this.token != null;
  }

  public get user(): BehaviorSubject<User>
  {
    return new BehaviorSubject<User>(this.storage.GetItem("user"));
  }

  public set user(value: BehaviorSubject<User>)
  {
    this.storage.SetItem("user", value.getValue());
  }

  public get token(): string
  {
    return this.storage.GetItem("token");
  }

  public set token(value: string)
  {
    this.storage.SetItem("token", value);
  }

  public async Login(email: string, password: string): Promise<boolean>
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
      return false;
    }

    this.token = loginResponse.token;
    this.user = new BehaviorSubject<User>(loginResponse.user);

    return true;
  }

  public Logout(): void
  {
    this.storage.RemoveItem("user");
    this.storage.RemoveItem("token");
  }
}
