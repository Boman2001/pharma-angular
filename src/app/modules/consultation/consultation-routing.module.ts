import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConsultOverviewComponent } from "./pages/consult-overview/consult-overview.component";
import {GoogleMapsComponent} from "../core/google-maps/google-maps.component";


const routes: Routes = [
  {
    path: "",
    component: ConsultOverviewComponent,
    data: {
      title: "Consult",
      breadcrumb: [
        {
          label: "Consult",
          url: "/consultation"
        }
      ]
    }
  },
  {
    path: "route", pathMatch: "full", component: GoogleMapsComponent,
    data: {
      title: "Route",
      breadcrumb: [
        {
          label: "Consult",
          url: "/consultation"
        },
        {
          label: "Route",
          url: "/consultation/route"
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
export class ConsultationRoutingModule { }
