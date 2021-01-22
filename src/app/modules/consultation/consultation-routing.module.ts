import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConsultOverviewComponent } from "./pages/consult-overview/consult-overview.component";

import { ConsultVisitComponent } from "./pages/consult-visit/consult-visit.component";
import { GoogleMapsComponent } from "../core/core.module";
import {ConsultVisitInfoComponent} from "./pages/consult-visit-info/consult-visit-info.component";
import {ConsultVisitAnamnesisComponent} from "./pages/consult-visit-anamnesis/consult-visit-anamnesis.component";
import {ConsultVisitBiometricsComponent} from "./pages/consult-visit-biometrics/consult-visit-biometrics.component";
import {ConsultVisitExaminationComponent} from "./pages/consult-visit-examination/consult-visit-examination.component";
import {ConsultVisitEvaluationComponent} from "./pages/consult-visit-evaluation/consult-visit-evaluation.component";
import {ConsultVisitPolicyComponent} from "./pages/consult-visit-policy/consult-visit-policy.component";
import {ConsultVisitResumeComponent} from "./pages/consult-visit-resume/consult-visit-resume.component";


const routes: Routes = [
  {
    path: "",
    component: ConsultOverviewComponent,
    data: {
      title: "Consulten",
      breadcrumb: [
        {
          label: "Consulten",
          url: "/consultations"
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
          label: "Consulten",
          url: "/consultations"
        },
        {
          label: "Route",
          url: "/consultations/route"
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
        component: ConsultVisitInfoComponent,
      }
    ],
    data: {
      title: "Consult visite",
      breadcrumb: [
        {
          label: "Consulten",
          url: "/consultations"
        }, {
          label: "Visite",
          url: "/consultations/:id"
        }
      ]
    }
  },
  {
    path: ":id/anamneses",
    component: ConsultVisitComponent,
    children: [
      {
        path: "",
        component: ConsultVisitAnamnesisComponent,
      }
    ],
    data: {
      title: "Consult visite anamneses",
      breadcrumb: [
        {
          label: "Consulten",
          url: "/consultations"
        }, {
          label: "Visite",
          url: "/consultations/:id"
        },
        {
          label: "Anamnese",
          url: "/consultations/:id/anamneses"
        }
      ]
    }
  },
  {
    path: ":id/biometrics",
    component: ConsultVisitComponent,
    children: [
      {
        path: "",
        component: ConsultVisitBiometricsComponent,
      }
    ],
    data: {
      title: "Consult visite biometrie",
      breadcrumb: [
        {
          label: "Consulten",
          url: "/consultations"
        }, {
          label: "Visite",
          url: "/consultations/:id"
        },
        {
          label: "Biometrie",
          url: "/consultations/:id/biometrics"
        }
      ]
    }
  },
  {
    path: ":id/examinations",
    component: ConsultVisitComponent,
    children: [
      {
        path: "",
        component: ConsultVisitExaminationComponent,
      }
    ],
    data: {
      title: "Consult visite onderzoeken",
      breadcrumb: [
        {
          label: "Consulten",
          url: "/consultations"
        }, {
          label: "Visite",
          url: "/consultations/:id"
        },
        {
          label: "Onderzoek",
          url: "/consultations/:id/examinations"
        }
      ]
    }
  },
  {
    path: ":id/evaluations",
    component: ConsultVisitComponent,
    children: [
      {
        path: "",
        component: ConsultVisitEvaluationComponent,
      }
    ],
    data: {
      title: "Consult visite evaluaties",
      breadcrumb: [
        {
          label: "Consulten",
          url: "/consultations"
        }, {
          label: "Visite",
          url: "/consultations/:id"
        },
        {
          label: "Evaluatie",
          url: "/consultations/:id/evaluations"
        }
      ]
    }
  },
  {
    path: ":id/policies",
    component: ConsultVisitComponent,
    children: [
      {
        path: "",
        component: ConsultVisitPolicyComponent,
      }
    ],
    data: {
      title: "Consult visite beleid",
      breadcrumb: [
        {
          label: "Consulten",
          url: "/consultations"
        }, {
          label: "Visite",
          url: "/consultations/:id"
        },
        {
          label: "Beleid",
          url: "/consultations/:id/policies"
        }
      ]
    }
  },
  {
    path: ":id/resume",
    component: ConsultVisitComponent,
    children: [
      {
        path: "",
        component: ConsultVisitResumeComponent,
      }
    ],
    data: {
      title: "Consult visite samenvatting",
      breadcrumb: [
        {
          label: "Consulten",
          url: "/consultations"
        }, {
          label: "Visite",
          url: "/consultations/:id"
        },
        {
          label: "Samenvatting",
          url: "/consultations/:id/resume"
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
export class ConsultationRoutingModule { }
