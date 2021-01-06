import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import * as fromComponents from ".";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: fromComponents.PatientOverviewComponent
  },
  {
    path: "new",
    pathMatch: "full",
    component: fromComponents.PatientCreateComponent
  },
    {
    path: ":id/edit",
    pathMatch: "full",
    component: fromComponents.PatientEditComponent
  },
  {
    path: ":id",
    pathMatch: "full",
    component: fromComponents.PatientDetailComponent
  },
];

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PatientsModule { }
