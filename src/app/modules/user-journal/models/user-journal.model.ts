import { BaseEntity } from "../../core/core.module";
import { Consultation } from "../../consultation/consultation.module";
import { Patient } from "../../patient/patient.module";


export class UserJournal extends BaseEntity {

  Consultation: Consultation;
  Patient: Patient;
  Description: string;
  Property: number;
}
