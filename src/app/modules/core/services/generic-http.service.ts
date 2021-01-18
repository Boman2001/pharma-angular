import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { HttpService } from "./http.service";
import { IRepository } from "../lib/IRepository";
import { StorageService } from "./storage.service";
import { AuthService } from "../../auth/services/auth.service";
import { Router } from "@angular/router";
import { HttpHook } from "../lib/HttpHook";


@Injectable({
  providedIn: "root"
})

export class GenericHttpService<T> extends HttpService implements IRepository<T> {

  constructor(
    private readonly entityPath: string,
    protected http: HttpClient,
    protected storage: StorageService,
    protected authService: AuthService,
    protected router: Router,
    private httpStatusHooks: HttpHook[] = [
      {
        statusCode: 401,
        hook: (e) => {
          this.authService.Logout();
          this.router.navigate(["/auth/login"]);
        }
      }
    ]
  )
  {
    super(http, storage);
  }

  public get basePath(): string
  {
    return `${environment.apiUrl}/${this.entityPath}`;
  }

  public GetAll(httpHooks: HttpHook[] = null): Observable<T[]>
  {
    try {
      return this.http.get<T[]>(this.basePath, this.baseOptions);
    }
    catch (e) {
      for (const hookConfig of [ ...this.httpStatusHooks, ...(httpHooks || []) ]) {
        if (e.statusCode === hookConfig.statusCode) {
          hookConfig.hook(e);
        }
      }

      throw e;
    }
  }

  public Get(id: string, httpHooks: HttpHook[] = null): Observable<T>
  {
    try {
      return this.http.get<T>(`${ this.basePath }/${ id }`, this.baseOptions);
    }
    catch (e) {
      for (const hookConfig of [ ...this.httpStatusHooks, ...(httpHooks || []) ]) {
        if (e.statusCode === hookConfig.statusCode) {
          hookConfig.hook(e);
        }
      }

      throw e;
    }
  }

  public GetByFilter(filter: (i: T) => boolean): Observable<T[]>
  {
    // TODO: replace with API side filters when that's ready. Query params?
    return this.GetAll().pipe(
      map((items) => {
        return items.filter(filter);
      })
    );
  }

  public Add(entity: T, httpHooks: HttpHook[] = null): Observable<boolean>
  {
    try {
      return this.http.post<boolean>(this.basePath, entity, this.baseOptions);
    }
    catch (e) {
      for (const hookConfig of [ ...this.httpStatusHooks, ...(httpHooks || []) ]) {
        if (e.statusCode === hookConfig.statusCode) {
          hookConfig.hook(e);
        }
      }

      throw e;
    }
  }

  public Update(id, entity: T, httpHooks: HttpHook[] = null): Observable<boolean>
  {
    try {
      return this.http.put<boolean>(`${ this.basePath }/${ id }`, entity, this.baseOptions);
    }
    catch (e) {
      for (const hookConfig of [ ...this.httpStatusHooks, ...(httpHooks || []) ]) {
        if (e.statusCode === hookConfig.statusCode) {
          hookConfig.hook(e);
        }
      }

      throw e;
    }
  }

  public Delete(id: string, httpHooks: HttpHook[] = null): Observable<boolean>
  {
    try {
      return this.http.delete<boolean>(`${ this.basePath }/${ id }`, this.baseOptions);
    }
    catch (e) {
      for (const hookConfig of [ ...this.httpStatusHooks, ...(httpHooks || []) ]) {
        if (e.statusCode === hookConfig.statusCode) {
          hookConfig.hook(e);
        }
      }

      throw e;
    }
  }
}
