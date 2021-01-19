// Modules
import { NgModule } from "@angular/core";
import {NgbDatepickerModule, NgbTimepickerModule} from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { ConsultationRoutingModule } from "./consultation-routing.module";

// Services
import { ConsultationService } from "./services/consultation.service";

// Components
import { ConsultOverviewComponent } from "./pages/consult-overview/consult-overview.component";
import { ConsultCreateComponent } from "./components/consult-create/consult-create.component";
import { ConsultVisitComponent } from "./pages/consult-visit/consult-visit.component";
import { ConsultVisitInfoComponent } from "./pages/consult-visit-info/consult-visit-info.component";
import { ConsultVisitAnamnesisComponent } from "./pages/consult-visit-anamnesis/consult-visit-anamnesis.component";
import { ConsultVisitBiometricsComponent } from "./pages/consult-visit-biometrics/consult-visit-biometrics.component";
import { ConsultVisitExaminationComponent } from "./pages/consult-visit-examination/consult-visit-examination.component";
import { ConsultVisitPolicyComponent } from "./pages/consult-visit-policy/consult-visit-policy.component";
import { ConsultVisitEvaluationComponent } from "./pages/consult-visit-evaluation/consult-visit-evaluation.component";
import { ConsultVisitResumeComponent } from "./pages/consult-visit-resume/consult-visit-resume.component";
import { CoreModule } from "../core/core.module";


@NgModule({
  declarations: [
    ConsultOverviewComponent,
    ConsultCreateComponent,
    ConsultVisitComponent,
    ConsultVisitInfoComponent,
    ConsultVisitAnamnesisComponent,
    ConsultVisitBiometricsComponent,
    ConsultVisitExaminationComponent,
    ConsultVisitPolicyComponent,
    ConsultVisitEvaluationComponent,
    ConsultVisitResumeComponent
  ],
  providers: [
    ConsultationService
  ],
    imports: [
        CommonModule,
        ConsultationRoutingModule,
        NgbDatepickerModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        NgbTimepickerModule
    ],
  exports: [
    ConsultOverviewComponent,
    ConsultCreateComponent
  ],
})
export class ConsultationModule { }

// Models
export * from "./models/consultation.model";

// Services
export * from "./services/consultation.service";

// Components
export * from "./pages/consult-overview/consult-overview.component";
export * from "./components/consult-create/consult-create.component";
