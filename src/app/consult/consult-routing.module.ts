import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import {ConsultOverviewComponent} from "./pages/consult-overview/consult-overview.component";

const routes: Routes = [
  {
    path: "",
    component: ConsultOverviewComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultRoutingModule { }
