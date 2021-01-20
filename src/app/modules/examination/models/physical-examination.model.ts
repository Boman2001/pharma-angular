import { BaseEntity } from "../../core/core.module";
import { Consultation } from "../../consultation/consultation.module";
import { Patient } from "../../patient/patient.module";


export class PhysicalExamination extends BaseEntity {
  date: string;
  consultationId: string;
  consultation?: Consultation;
  patientId: string;
  patient?: Patient;
  examinationTypeId: string;
  value: string;
}