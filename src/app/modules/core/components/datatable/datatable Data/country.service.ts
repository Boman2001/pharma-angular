import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { COUNTRIES } from "../table/countries";
import { Country } from '../table/country.model';
import { from } from "rxjs"
import { IRepository } from './IRepository';

@Injectable({
  providedIn: 'root'
})
export class CountryService implements IRepository<Country> {

  constructor() { }

  public GetAll(): Observable<Country[]> {
    return from([COUNTRIES]);
  }
}
