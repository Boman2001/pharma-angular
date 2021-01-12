import { BaseEntity } from "../../core/core.module";
import { User } from "../../user/user.module";
import { Patient } from "../../patient/patient.module";

export class Consultation extends BaseEntity {
  Doctor: User;
  Patient: Patient;
  Date: Date;
}
