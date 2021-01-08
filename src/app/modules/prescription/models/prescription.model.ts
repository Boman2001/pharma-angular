import { BaseEntity } from "../../core/core.module";
import { Consultation } from "../../consultation/consultation.module";
import { Patient } from "../../patient/patient.module";


export class Prescription extends BaseEntity {

  Consultation: Consultation;
  Patient: Patient;
  Description: string;
  StartDate: Date;
  EndDate: Date;
}
