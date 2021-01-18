import { BaseEntity } from "../../core/core.module";
import { User } from "../../user/user.module";
import { Patient } from "../../patient/patient.module";

export class Consultation extends BaseEntity {
  doctor: User;
  patient: Patient;
  date: string;
}
