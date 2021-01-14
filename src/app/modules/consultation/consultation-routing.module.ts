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
import { GoogleMapsComponent } from "../core/core.module";


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
    // TODO sub routes id is undefined in breadcrumb
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
  {
    path: ":id",
    component: ConsultVisitComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        component: ConsultVisitInfoComponent,
        data: {
          title: "Consult visite",
          breadcrumb: [
            {
              label: "Consult",
              url: "/consultation"
            }, {
              label: "Visit",
              url: "/consultation/:id"
            }
          ]
        }
      },
      {
        path: "anamnese",
        pathMatch: "full",
        component: ConsultVisitAnamnesisComponent,
        data: {
          title: "Consult visite anamnese",
          breadcrumb: [
            {
              label: "Consult",
              url: "/consultation"
            }, {
              label: "Visit",
              url: "/consultation/:id"
            },
            {
              label: "Anamnese",
              url: "/consultation/:id/anamnese"
            }
          ]
        }
      },
      {
        path: "biometrie",
        pathMatch: "full",
        component: ConsultVisitBiometricsComponent,
        data: {
          title: "Consult visite biometrie",
          breadcrumb: [
            {
              label: "Consult",
              url: "/consultation"
            }, {
              label: "Visit",
              url: "/consultation/:id"
            },
            {
              label: "Biometrie",
              url: "/consultation/:id/biometrie"
            }
          ]
        }
      },
      {
        path: "onderzoek",
        pathMatch: "full",
        component: ConsultVisitExaminationComponent,
        data: {
          title: "Consult visite onderzoek",
          breadcrumb: [
            {
              label: "Consult",
              url: "/consultation"
            }, {
              label: "Visit",
              url: "/consultation/:id"
            },
            {
              label: "Onderzoek",
              url: "/consultation/:id/onderzoek"
            }
          ]
        }
      },
      {
        path: "evaluatie",
        pathMatch: "full",
        component: ConsultVisitEvaluationComponent,
        data: {
          title: "Consult visite evaluatie",
          breadcrumb: [
            {
              label: "Consult",
              url: "/consultation"
            }, {
              label: "Visit",
              url: "/consultation/:id"
            },
            {
              label: "Evaluatie",
              url: "/consultation/:id/evaluatie"
            }
          ]
        }
      },
      {
        path: "beleid",
        pathMatch: "full",
        component: ConsultVisitPolicyComponent,
        data: {
          title: "Consult visite beleid",
          breadcrumb: [
            {
              label: "Consult",
              url: "/consultation"
            }, {
              label: "Visit",
              url: "/consultation/:id"
            },
            {
              label: "Beleid",
              url: "/consultation/:id/beleid"
            }
          ]
        }
      },
      {
        path: "samenvatting",
        pathMatch: "full",
        component: ConsultVisitResumeComponent,
        data: {
          title: "Consult visite samenvatting",
          breadcrumb: [
            {
              label: "Consult",
              url: "/consultation"
            }, {
              label: "Visit",
              url: "/consultation/:id"
            },
            {
              label: "Samenvatting",
              url: "/consultation/:id/samenvatting"
            }
          ]
        }
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultationRoutingModule { }
