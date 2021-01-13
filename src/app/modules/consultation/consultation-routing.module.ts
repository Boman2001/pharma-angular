import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConsultOverviewComponent } from "./pages/consult-overview/consult-overview.component";
import { ConsultVisitComponent } from "./pages/consult-visit/consult-visit.component";
import {ConsultVisitInfoComponent} from "./pages/consult-visit-info/consult-visit-info.component";
import {ConsultVisitAnamnesisComponent} from "./pages/consult-visit-anamnesis/consult-visit-anamnesis.component";
import {ConsultVisitBiometricsComponent} from "./pages/consult-visit-biometrics/consult-visit-biometrics.component";
import {ConsultVisitExaminationComponent} from "./pages/consult-visit-examination/consult-visit-examination.component";
import {ConsultVisitPolicyComponent} from "./pages/consult-visit-policy/consult-visit-policy.component";
import {ConsultVisitEvaluationComponent} from "./pages/consult-visit-evaluation/consult-visit-evaluation.component";
import {ConsultVisitResumeComponent} from "./pages/consult-visit-resume/consult-visit-resume.component";


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
      },
      {
        path: "biometrie",
        pathMatch: "full",
        component: ConsultVisitBiometricsComponent
      },
      {
        path: "onderzoek",
        pathMatch: "full",
        component: ConsultVisitExaminationComponent
      },
      {
        path: "evaluatie",
        pathMatch: "full",
        component: ConsultVisitEvaluationComponent
      },
      {
        path: "beleid",
        pathMatch: "full",
        component: ConsultVisitPolicyComponent
      },
      {
        path: "samenvatting",
        pathMatch: "full",
        component: ConsultVisitResumeComponent
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
