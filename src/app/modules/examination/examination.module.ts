import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdditionalExaminationResultService } from "./services/additional-examination-result.service";
import { PhysicalExaminationService } from "./services/physical-examination.service";
import { ExaminationTypeService } from "./services/examination-type.service";
import { AdditionalExaminationTypeService } from "./services/additional-examination-type.service";
import { BaseExaminationTypeService } from "./services/base-examination-type.service";
import { ExaminationOverviewComponent } from "./pages/examination-overview/examination-overview.component";
import { ExaminationCreateComponent } from "./pages/examination-create/examination-create.component";
import { ExaminationEditComponent } from "./pages/examination-edit/examination-edit.component";
import { ExaminationFormComponent } from "./components/examination-form/examination-form.component";
import { ExaminationRoutingModule } from "./examination-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "../core/core.module";

@NgModule({
  declarations: [
    ExaminationCreateComponent,
    ExaminationOverviewComponent,
    ExaminationEditComponent,
    ExaminationFormComponent
  ],
  imports: [
    CommonModule,
    ExaminationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [
    AdditionalExaminationResultService,
    BaseExaminationTypeService,
    PhysicalExaminationService,
    ExaminationTypeService,
    AdditionalExaminationTypeService
  ],
  exports: [
    ExaminationCreateComponent,
    ExaminationOverviewComponent,
    ExaminationEditComponent,
    ExaminationFormComponent
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
