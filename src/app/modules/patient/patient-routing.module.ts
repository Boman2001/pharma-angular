import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PatientOverviewComponent } from "./pages/patient-overview/patient-overview.component";
import { PatientCreateComponent } from "./pages/patient-create/patient-create.component";
import { PatientDetailComponent } from "./pages/patient-detail/patient-detail.component";
import { PatientEditComponent } from "./pages/patient-edit/patient-edit.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: PatientOverviewComponent,
    data: {
      title: "Patiënten",
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
      title: "Patiënt Aanmaken",
      breadcrumb: [
        {
          label: "Patiënten",
          url: "/patients"
        },
        {
          label: "Patiënt Aanmaken",
          url: "/patients/new"
        }
      ]
    }
  },
  {
    path: ":id",
    pathMatch: "full",
    component: PatientDetailComponent,
    data: {
      title: "Patiënt",
      breadcrumb: [
        {
          label: "Patiënten",
          url: "/patients"
        },
        {
          label: "Patiënt",
          url: "/patients/:id"
        }
      ]
    }
  },
  {
    path: ":id/edit",
    pathMatch: "full",
    component: PatientEditComponent,
    data: {
      title: "Patiënt Bewerken",
      breadcrumb: [
        {
          label: "Patiënt Bewerken",
          url: "/patients/:id/edit"
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
