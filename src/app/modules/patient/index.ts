import {PatientOverviewComponent} from "./pages/patient-overview/patient-overview.component";
import {PatientCreateComponent} from "./pages/patient-create/patient-create.component";
import {PatientDetailComponent} from "./pages/patient-detail/patient-detail.component";
import {PatientEditComponent} from "./pages/patient-edit/patient-edit.component";
import {PatientFormComponent} from "./pages/patient-form/patient-form.component";

export const components: any[] = [
  PatientCreateComponent,
  PatientDetailComponent,
  PatientEditComponent,
  PatientFormComponent,
  PatientOverviewComponent,
];

export * from "./pages/patient-create/patient-create.component";
export * from "./pages/patient-detail/patient-detail.component";
export * from "./pages/patient-edit/patient-edit.component";
export * from "./pages/patient-form/patient-form.component";
export * from "./pages/patient-overview/patient-overview.component";
