import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {HttpService, StorageService} from "../../core/core.module";
import {User} from "../../user/user.module";
import {HttpClient} from "@angular/common/http";
import {LoginResponse} from "../models/LoginResponse.model";
import {TwoFactorResponse} from "../models/TwoFactorResponse.model";
import {BehaviorSubject} from "rxjs";


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

  public get email(): string {
    return this.storage.GetItem("email");
  }

  public set email(value: string) {
    this.storage.SetItem("email", value);
  }

  public set TwoFactorUrl(value: string) {
    this.storage.SetItem("url", value);
  }

  public get TwoFactorUrl(): string {
   return  this.storage.GetItem("url");
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

    if
    (
      twoFactorResponse == null
      || twoFactorResponse.token == null
      || twoFactorResponse.user == null
      || twoFactorResponse.user.id == null
    ) {
      return false;
    }

    this.token = twoFactorResponse.token;
    this.user = new BehaviorSubject<User>(twoFactorResponse.user);
    this.storage.RemoveItem("email");
    this.storage.RemoveItem("url");
    return true;
  }

  public async Login(email: string, password: string): Promise<boolean> {
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
      || loginResponse.twoFactorUrl == null
      || loginResponse.email == null
    ) {
      return false;
    }
    this.email = loginResponse.email;
    this.TwoFactorUrl = loginResponse.twoFactorUrl;

    return true;
  }

  public Logout(): void {
    this.storage.RemoveItem("user");
    this.storage.RemoveItem("token");
  }
}
