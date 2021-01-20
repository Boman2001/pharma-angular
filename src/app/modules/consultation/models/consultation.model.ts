import { BaseEntity } from "../../core/core.module";
import { User } from "../../user/user.module";
import { Patient } from "../../patient/patient.module";

export class Consultation extends BaseEntity {

  doctorId: string;
  doctor?: User;

  patientId: number;
  patient?: Patient;

  date: string;
  comments: string;
}
