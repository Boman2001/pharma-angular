import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import {ConsultOverviewComponent} from "./pages/consult-overview/consult-overview.component";

const routes: Routes = [
  {
    path: "",
    component: ConsultOverviewComponent,
    data: {
      title: "Consult",
      breadcrumb: [
        {
          label: "Consult",
          url: "/consult"
        }
      ]
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultRoutingModule { }
