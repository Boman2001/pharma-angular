import { BaseEntity } from "../../core/core.module";
import { Consultation } from "../../consultation/consultation.module";
import { Patient } from "../../patient/patient.module";
import { ICPCCode } from "../../icpc/icpc.module";


export class Episode extends BaseEntity {

  Consultation: Consultation;
  Patient: Patient;
  Description: string;
  ICPC: ICPCCode;
}
