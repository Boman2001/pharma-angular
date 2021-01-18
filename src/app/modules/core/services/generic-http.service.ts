import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
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
        hook: () => {
          this.authService.Logout();
          this.router.navigate(["/auth/login"]);
        }
      },
      {
        statusCode: 403,
        hook: () => {
          // @TODO: Create a generic error page.
          this.router.navigate(["/"]);
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
    return this.wrapHooks(this.http.get<T[]>(this.basePath, this.baseOptions));
  }

  public Get(id: string, httpHooks: HttpHook[] = null): Observable<T>
  {
    return this.wrapHooks(this.http.get<T>(`${ this.basePath }/${ id }`, this.baseOptions));
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
    return this.wrapHooks(this.http.post<boolean>(this.basePath, entity, this.baseOptions));
  }

  public Update(id, entity: T, httpHooks: HttpHook[] = null): Observable<boolean>
  {
    return this.wrapHooks(this.http.put<boolean>(`${ this.basePath }/${ id }`, entity, this.baseOptions));
  }

  public Delete(id: string, httpHooks: HttpHook[] = null): Observable<boolean>
  {
    return this.wrapHooks(this.http.delete<boolean>(`${ this.basePath }/${ id }`, this.baseOptions));
  }

  private wrapHooks(observable: Observable<any>, httpHooks: HttpHook[] = null): Observable<any> {
    return observable.pipe(
      catchError((err) => {
        for (const hookConfig of this.httpStatusHooks.concat(httpHooks)) {
          if (err.status === hookConfig.statusCode) {
            hookConfig.hook(err);
          }
        }

        return of(null);
      })
    );
  }
}
