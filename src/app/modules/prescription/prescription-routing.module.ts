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
      title: "Recepten",
      breadcrumb: [
        {
          label: "Recepten",
          url: "/prescriptions"
        }
      ]
    }
  },
  {
    path: ":id",
    pathMatch: "full",
    component: PrescriptionDetailComponent,
    data: {
      title: "Recepten",
      breadcrumb: [
        {
          label: "Recepten",
          url: "/prescriptions"
        },
        {
          label: "Recept",
          url: "/prescriptions/:id"
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
export class PrescriptionRoutingModule { }
