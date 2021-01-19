import { BaseEntity, Gender } from "../../core/core.module";


export class Patient extends BaseEntity {

  name: string;
  bsn: string;
  email: string;
  dob: string;
  gender: Gender;
  phoneNumber: string;
  city: string;
  street: string;
  houseNumber: string;
  houseNumberAddon: string;
  country: string;
  postalCode: string;
}
