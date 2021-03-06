import { BaseEntity, Gender } from "../../core/core.module";


export class User extends BaseEntity {
  name: string;
  username: string;
  password?: string;
  passwordCheck?: string;
  email: string;
  dob: Date;
  gender: Gender;
  phoneNumber: string;
  roles: string[];
  city: string;
  street: string;
  country: string;
  houseNumber: string;
  houseNumberAddon: string;
  postalCode: string;
}
