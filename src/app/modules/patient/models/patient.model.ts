import {BaseEntity, Gender} from "../../core/core.module";


export class Patient extends BaseEntity {

  Name: string;
  BSN: string;
  Email: string;
  Dob: Date;
  Gender: Gender;
  PhoneNumber: string;
  City: string;
  Street: string;
  HouseNumber: string;
  HouseNumberAddon: string;
  PostalCode: string;
}
