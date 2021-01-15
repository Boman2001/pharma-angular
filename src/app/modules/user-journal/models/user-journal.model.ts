import { BaseEntity } from "../../core/core.module";
import { Consultation } from "../../consultation/consultation.module";
import { Patient } from "../../patient/patient.module";


export class UserJournal extends BaseEntity {

  consultation: Consultation;
  patient: Patient;
  description: string;
  property: number;
}
