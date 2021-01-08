import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdditionalExaminationResultService } from "./services/additional-examination-result.service";
import { PhysicalExaminationService } from "./services/physical-examination.service";
import { ExaminationTypeService } from "./services/examination-type.service";
import { AdditionalExaminationTypeService } from "./services/additional-examination-type.service";
import { BaseExaminationTypeService } from "./services/base-examination-type.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AdditionalExaminationResultService,
    BaseExaminationTypeService,
    PhysicalExaminationService,
    ExaminationTypeService,
    AdditionalExaminationTypeService
  ]
})
export class ExaminationModule { }

// Models
export * from "./models/additional-examination-result.model";
export * from "./models/base-examination-type.model";
export * from "./models/physical-examination.model";
export * from "./models/examination-type.model";
export * from "./models/additional-examination-type.model";

// Services
export * from "./services/additional-examination-result.service";
export * from "./services/base-examination-type.service";
export * from "./services/physical-examination.service";
export * from "./services/examination-type.service";
export * from "./services/additional-examination-type.service";
