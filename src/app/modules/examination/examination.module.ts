import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdditionalExaminationResultService } from "./services/additional-examination-result.service";
import { PhysicalExaminationService } from "./services/physical-examination.service";
import { ExaminationTypeService } from "./services/examination-type.service";
import { AdditionalExaminationTypeService } from "./services/additional-examination-type.service";
import { BaseExaminationTypeService } from "./services/base-examination-type.service";
import { ExaminationTypeOverviewComponent } from "./pages/examination-type-overview/examination-type-overview.component";
import { ExaminationTypeCreateComponent } from "./pages/examination-type-create/examination-type-create.component";
import { ExaminationTypeEditComponent } from "./pages/examination-type-edit/examination-type-edit.component";
import { ExaminationTypeFormComponent } from "./components/examination-type-form/examination-type-form.component";
import { ExaminationRoutingModule } from "./examination-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "../core/core.module";

@NgModule({
  declarations: [
    ExaminationTypeCreateComponent,
    ExaminationTypeOverviewComponent,
    ExaminationTypeEditComponent,
    ExaminationTypeFormComponent
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
    ExaminationTypeCreateComponent,
    ExaminationTypeOverviewComponent,
    ExaminationTypeEditComponent,
    ExaminationTypeFormComponent
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
