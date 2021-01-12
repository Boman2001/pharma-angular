// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PatientRoutingModule } from "./patient-routing.module";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Services
import { PatientService } from "./services/patient.service";

// Components
import { PatientOverviewComponent } from "./pages/patient-overview/patient-overview.component";
import { PatientCreateComponent } from "./pages/patient-create/patient-create.component";
import { PatientDetailComponent } from "./pages/patient-detail/patient-detail.component";
import { PatientEditComponent } from "./pages/patient-edit/patient-edit.component";
import { PatientFormComponent } from "./components/patient-form/patient-form.component";
import { CoreModule } from "../core/core.module";


@NgModule({
  declarations: [
    PatientCreateComponent,
    PatientDetailComponent,
    PatientEditComponent,
    PatientFormComponent,
    PatientOverviewComponent,
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    NgbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [
    PatientService
  ],
  exports: [
    PatientCreateComponent,
    PatientDetailComponent,
    PatientEditComponent,
    PatientFormComponent,
    PatientOverviewComponent,
  ],
})
export class PatientModule { }

// Models
export * from "./models/patient.model";

// Services
export * from "./services/patient.service";

// Components
export * from "./pages/patient-overview/patient-overview.component";
export * from "./pages/patient-create/patient-create.component";
export * from "./pages/patient-detail/patient-detail.component";
export * from "./pages/patient-edit/patient-edit.component";
export * from "./components/patient-form/patient-form.component";
