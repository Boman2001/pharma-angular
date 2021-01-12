import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConsultOverviewComponent } from "./pages/consult-overview/consult-overview.component";
import { ConsultVisitComponent } from "./pages/consult-visit/consult-visit.component";
import {ConsultVisitInfoComponent} from "./pages/consult-visit-info/consult-visit-info.component";
import {ConsultVisitAnamnesisComponent} from "./pages/consult-visit-anamnesis/consult-visit-anamnesis.component";


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
    path: ":id",
    component: ConsultVisitComponent,
    children: [
      {
        path: "",
        component: ConsultVisitInfoComponent
      },
      {
        path: "anamnese",
        pathMatch: "full",
        component: ConsultVisitAnamnesisComponent
      }
    ],
    data: {
      title: "Consult visite",
      breadcrumb: [
        {
          label: "Consult",
          url: "/consultation"
        },
        {
          label: "Visite",
          url: "/consultation/:id"
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
