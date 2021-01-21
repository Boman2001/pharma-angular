// Modules
import { NgModule } from "@angular/core";
import {NgbDatepickerModule, NgbTimepickerModule} from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AgmCoreModule } from "@agm/core";
import { AgmDirectionModule } from "agm-direction";

import { ConsultationRoutingModule } from "./consultation-routing.module";

// Services
import { ConsultationService } from "./services/consultation.service";

// Components
import { ConsultOverviewComponent } from "./pages/consult-overview/consult-overview.component";
import { ConsultCreateComponent } from "./components/consult-create/consult-create.component";
import { ConsultVisitComponent } from "./pages/consult-visit/consult-visit.component";
import { CoreModule } from "../core/core.module";
import {ConsultVisitInfoComponent} from "./pages/consult-visit-info/consult-visit-info.component";
import {ConsultVisitAnamnesisComponent} from "./pages/consult-visit-anamnesis/consult-visit-anamnesis.component";
import {ConsultVisitBiometricsComponent} from "./pages/consult-visit-biometrics/consult-visit-biometrics.component";
import {ConsultVisitExaminationComponent} from "./pages/consult-visit-examination/consult-visit-examination.component";
import {ConsultVisitEvaluationComponent} from "./pages/consult-visit-evaluation/consult-visit-evaluation.component";
import {ConsultVisitPolicyComponent} from "./pages/consult-visit-policy/consult-visit-policy.component";
import {ConsultVisitResumeComponent} from "./pages/consult-visit-resume/consult-visit-resume.component";
import { GoogleMapsComponent } from "./components/google-maps/google-maps.component";
import { environment } from "../../../environments/environment";
import { FontAwesomeModule, FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";


@NgModule({
  declarations: [
    ConsultOverviewComponent,
    ConsultCreateComponent,
    ConsultVisitComponent,
    ConsultVisitInfoComponent,
    ConsultVisitAnamnesisComponent,
    ConsultVisitBiometricsComponent,
    ConsultVisitExaminationComponent,
    ConsultVisitEvaluationComponent,
    ConsultVisitPolicyComponent,
    ConsultVisitResumeComponent,
    GoogleMapsComponent
  ],
  providers: [
    ConsultationService
  ],
  imports: [
    CommonModule,
    ConsultationRoutingModule,
    NgbDatepickerModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    NgbTimepickerModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleKey
    }),
    AgmDirectionModule,
  ],
  exports: [
    ConsultOverviewComponent,
    ConsultCreateComponent,
    GoogleMapsComponent
  ],
})
export class ConsultationModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}

// Models
export * from "./models/consultation.model";

// Services
export * from "./services/consultation.service";

// Components
export * from "./pages/consult-overview/consult-overview.component";
export * from "./components/consult-create/consult-create.component";
export * from "./components/google-maps/google-maps.component";
