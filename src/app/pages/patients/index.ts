import {PatientOverviewComponent} from "./patient-overview/patient-overview.component";
import {PatientCreateComponent} from "./patient-create/patient-create.component";
import {PatientDetailComponent} from "./patient-detail/patient-detail.component";
import {PatientEditComponent} from "./patient-edit/patient-edit.component";
import {PatientFormComponent} from "./patient-form/patient-form.component";

export const components: any[] = [
  PatientCreateComponent,
  PatientDetailComponent,
  PatientEditComponent,
  PatientFormComponent,
  PatientOverviewComponent,
];

export * from "./patient-create/patient-create.component";
export * from "./patient-detail/patient-detail.component";
export * from "./patient-edit/patient-edit.component";
export * from "./patient-form/patient-form.component";
export * from "./patient-overview/patient-overview.component";
