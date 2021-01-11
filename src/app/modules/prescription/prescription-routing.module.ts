import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PrescriptionOverviewComponent } from "./pages/prescription-overview/prescription-overview.component";
import { PrescriptionDetailComponent } from "./pages/prescription-detail/prescription-detail.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: PrescriptionOverviewComponent,
    data: {
      title: "Medicatie",
      breadcrumb: [
        {
          label: "Medicatie",
          url: "/prescription"
        }
      ]
    }
  },
  {
    path: ":id",
    pathMatch: "full",
    component: PrescriptionDetailComponent,
    data: {
      title: "Medicatie",
      breadcrumb: [
        {
          label: "Medicatie",
          url: "/prescription"
        },
        {
          label: "Medicijn",
          url: "/prescription/:id"
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
