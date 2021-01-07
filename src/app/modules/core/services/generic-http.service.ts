import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { HttpService } from "./http.service";
import { IRepository } from "../lib/IRepository";


@Injectable({
  providedIn: "root"
})

export class GenericHttpService<T> extends HttpService implements IRepository<T> {

  constructor(private readonly entityPath: string, protected http: HttpClient) {
    super(http);
  }

  public get basePath(): string
  {
    return `${environment.apiUrl}/${this.entityPath}`;
  }

  public GetAll(): Observable<T[]>
  {
    return this.http.get<T[]>(this.basePath, this.baseOptions);
  }

  public Get(id: number): Observable<T>
  {
    return this.http.get<T>(`${this.basePath}/${ id }`, this.baseOptions);
  }

  public GetByFilter(filter: (i: T) => boolean): Observable<T>
  {
    // TODO: replace with API side filters when that's ready. Query params?
    return this.http.get<T>(this.basePath, this.baseOptions).pipe(
      map(data => {
        return filter(data) ? data : null;
      })
    );
  }

  public Add(entity: T): Observable<boolean>
  {
    return this.http.post<boolean>(this.basePath, entity, this.baseOptions);
  }

  public Update(id, entity: T): Observable<boolean>
  {
    return this.http.put<boolean>(`${this.basePath}/${ id }`, entity, this.baseOptions);
  }

  public Delete(id: number): Observable<boolean>
  {
    return this.http.delete<boolean>(`${this.basePath}/${ id }`, this.baseOptions);
  }
}
