import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExaminationOverviewComponent } from "./pages/examination-overview/examination-overview.component";
import { ExaminationCreateComponent } from "./pages/examination-create/examination-create.component";
import { ExaminationEditComponent } from "./pages/examination-edit/examination-edit.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: ExaminationOverviewComponent,
    data: {
      title: "Onderzoeken",
      breadcrumb: [
        {
          label: "Onderzoeken",
          url: "/examinations"
        }
      ]
    }
  },
  {
    path: "new",
    pathMatch: "full",
    component: ExaminationCreateComponent,
    data: {
      title: "Onderzoek Aanmaken",
      breadcrumb: [
        {
          label: "Onderzoeken",
          url: "/examinations"
        },
        {
          label: "Onderzoek Aanmaken",
          url: "/examinations/new"
        }
      ]
    }
  },
  {
    path: ":id/edit",
    pathMatch: "full",
    component: ExaminationEditComponent,
    data: {
      title: "Onderzoek Bewerken",
      breadcrumb: [
        {
          label: "Onderzoek",
          url: "/examinations"
        },
        {
          label: "Onderzoek Bewerken",
          url: "/examinations/:id/edit"
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
export class ExaminationRoutingModule { }
