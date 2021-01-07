// Modules
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components
import { MasterComponent } from "./layout/master/master.component";


const routes: Routes = [
  {
    path: "",
    component: MasterComponent,
    children: [
      {
        path: "consult",
        loadChildren: () =>
          import("./modules/consultation/consultation.module").then(m => m.ConsultationModule),
      },
      {
        path: "patients",
        loadChildren: () =>
          import("./modules/patient/patient.module").then((m) => m.PatientModule),
      },
      {
        path: "doctors",
        loadChildren: () =>
          import("./modules/user/user.module").then((m) => m.UserModule),
      },
    ],
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
