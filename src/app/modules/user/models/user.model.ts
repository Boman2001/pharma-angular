import { BaseEntity, Gender } from "../../core/core.module";


export class User extends BaseEntity {
  Name: string;
  Username: string;
  Password: string;
  PasswordCheck: string;
  Email: string;
  BSN: string;
  Dob: Date;
  Gender: Gender;
  PhoneNumber: string;
  City: string;
  Street: string;
  Country: string;
  HouseNumber: string;
  HouseNumberAddon: string;
  PostalCode: string;
}
