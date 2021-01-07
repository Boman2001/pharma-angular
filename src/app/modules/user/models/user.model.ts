import { BaseEntity, Gender } from "../../core/core.module";


export class User extends BaseEntity {
  Name: string;
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
