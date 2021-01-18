import { BaseEntity } from "../../core/core.module";
import { Consultation } from "../../consultation/consultation.module";
import { Patient } from "../../patient/patient.module";


export class AdditionalExaminationResult extends BaseEntity {
  consultation: Consultation;
  patient: Patient;
  value: string;
  time: Date;
}
