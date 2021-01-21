import { BaseEntity } from "../../core/core.module";
import { Consultation } from "../../consultation/consultation.module";
import { Patient } from "../../patient/patient.module";
import { ExaminationType } from "./examination-type.model";


export class PhysicalExamination extends BaseEntity {
  consultationId: string;
  consultation?: Consultation;
  patientId: string;
  patient?: Patient;
  examinationTypeId: string;
  examinationType?: ExaminationType;
  value: string;
  date: string;
}
