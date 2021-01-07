import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import * as fromComponents from ".";

const routes: Routes = [
    {
      path: "",
      pathMatch: "full",
      component: fromComponents.PatientOverviewComponent,
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
      component: fromComponents.PatientCreateComponent,
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
      component: fromComponents.PatientEditComponent,
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
      component: fromComponents.PatientDetailComponent,
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