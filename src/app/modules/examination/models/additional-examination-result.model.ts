import { BaseEntity } from "../../core/core.module";
import { Consultation } from "../../consultation/consultation.module";
import { Patient } from "../../patient/patient.module";
import {AdditionalExaminationType} from "./additional-examination-type.model";


export class AdditionalExaminationResult extends BaseEntity {
  consultation: Consultation;
  additionalExaminationType: AdditionalExaminationType;
  patient: Patient;
  value: string;
  date: string;
}
