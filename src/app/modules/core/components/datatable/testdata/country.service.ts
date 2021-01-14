import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { COUNTRIES } from "./countries";
import { Country } from "./country.model";
import { from } from "rxjs";
import { IRepository } from "../../../lib/IRepository";

@Injectable({
  providedIn: "root"
})
export class CountryService implements IRepository<Country> {

  constructor() { }

  public GetAll(): Observable<Country[]> {
    return from([COUNTRIES]);
  }
  Get(id: string): Observable<Country> {
    throw new Error("Method not implemented.");
  }
  GetByFilter(filter: (i: Country) => boolean): Observable<Country[]> {
    throw new Error("Method not implemented.");
  }
  Add(entity: Country): Observable<boolean> {
    throw new Error("Method not implemented.");
  }
  Update(id: any, entity: Country): Observable<boolean> {
    throw new Error("Method not implemented.");
  }
  Delete(id: string): Observable<boolean> {
    throw new Error("Method not implemented.");
  }
}
