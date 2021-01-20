import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ActivityComponent } from "./pages/activity.component";


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: ActivityComponent,
    data: {
      title: "Activiteiten",
      breadcrumb: [
        {
          label: "Activiteiten",
          url: "/activities"
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
export class ActivityRoutingModule { }
