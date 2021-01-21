import { BaseEntity } from "../../core/core.module";
import { Consultation } from "../../consultation/consultation.module";
import { Patient } from "../../patient/patient.module";


export class UserJournal extends BaseEntity {

  consultationId: string;
  consultation?: Consultation;

  patientId: string;
  patient?: Patient;

  description: string;
  property: number;
}
