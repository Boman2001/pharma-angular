import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {PatientOverviewComponent} from "./pages/patient-overview/patient-overview.component";
import {PatientCreateComponent} from "./pages/patient-create/patient-create.component";
import {PatientDetailComponent} from "./pages/patient-detail/patient-detail.component";
import {PatientEditComponent} from "./pages/patient-edit/patient-edit.component";
import {PatientFormComponent} from "./pages/patient-form/patient-form.component";

const routes: Routes = [
    {
      path: "",
      pathMatch: "full",
      component: PatientOverviewComponent,
      data: {
        title: "patients",
        breadcrumb: [
          {
            label: "Patiënten",
            url: "/patients"
          }
        ]
      }
    },
    {
      path: "new",
      pathMatch: "full",
      component: PatientCreateComponent,
      data: {
        title: "patients",
        breadcrumb: [
          {
            label: "Patiënten",
            url: "/patients"
          },
          {
            label: "Nieuw",
            url: "/patients/new"
          }
        ]
      }
    },
      {
      path: ":id/edit",
      pathMatch: "full",
      component: PatientEditComponent,
      data: {
        title: "patients",
        breadcrumb: [
          {
            label: "Patiënten",
            url: "/patients"
          }
        ]
      }
    },
    {
      path: ":id",
      pathMatch: "full",
      component: PatientDetailComponent,
      data: {
        title: "patients",
        breadcrumb: [
          {
            label: "Patiënten",
            url: "/patients"
          }
        ]
      }
    },
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }