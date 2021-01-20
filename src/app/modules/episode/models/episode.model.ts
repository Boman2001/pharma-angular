import { BaseEntity } from "../../core/core.module";
import { Consultation } from "../../consultation/consultation.module";
import { Patient } from "../../patient/patient.module";
import { ICPCCode } from "../../icpc/icpc.module";


export class Episode extends BaseEntity {
  consultation: Consultation;
  consultationId: number;
  patient: Patient;
  patientId: number;
  startDate: string;
  endDate: string;
  description: string;
  icpcCodeId: number;
  icpcCode?: ICPCCode;
  priority: number;
}
