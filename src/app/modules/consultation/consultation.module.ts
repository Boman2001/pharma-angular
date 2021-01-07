// Modules
import { NgModule } from "@angular/core";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { ConsultationRoutingModule } from "./consultation-routing.module";

// Services
import { ConsultationService } from "./services/consultation.service";

// Components
import { ConsultOverviewComponent } from "./pages/consult-overview/consult-overview.component";
import { ConsultCreateComponent } from "./components/consult-create/consult-create.component";


@NgModule({
  declarations: [
    ConsultOverviewComponent,
    ConsultCreateComponent
  ],
  providers: [
    ConsultationService
  ],
  imports: [
    CommonModule,
    ConsultationRoutingModule,
    NgbDatepickerModule,
    FormsModule,
    ReactiveFormsModule
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
