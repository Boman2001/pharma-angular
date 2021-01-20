import { BaseEntity } from "../../core/core.module";
import { Consultation } from "../../consultation/consultation.module";
import { Patient } from "../../patient/patient.module";
import { ICPCCode } from "../../icpc/icpc.module";


export class Episode extends BaseEntity {
  consultation: Consultation;
  patient: Patient;
  description: string;
  date: string;
  icpc: ICPCCode;
}
