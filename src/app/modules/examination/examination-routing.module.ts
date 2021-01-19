import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExaminationTypeOverviewComponent } from "./pages/examination-type-overview/examination-type-overview.component";
import { ExaminationTypeCreateComponent } from "./pages/examination-type-create/examination-type-create.component";
import { ExaminationTypeEditComponent } from "./pages/examination-type-edit/examination-type-edit.component";


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: ExaminationTypeOverviewComponent,
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
    component: ExaminationTypeCreateComponent,
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
    component: ExaminationTypeEditComponent,
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
