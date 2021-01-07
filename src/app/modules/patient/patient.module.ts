import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PatientRoutingModule } from "./patient-routing.module";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {PatientOverviewComponent} from "./pages/patient-overview/patient-overview.component";
import {PatientCreateComponent} from "./pages/patient-create/patient-create.component";
import {PatientDetailComponent} from "./pages/patient-detail/patient-detail.component";
import {PatientEditComponent} from "./pages/patient-edit/patient-edit.component";
import {PatientFormComponent} from "./pages/patient-form/patient-form.component";

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
    ReactiveFormsModule
  ]
})
export class PatientsModule { }
