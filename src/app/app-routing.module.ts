// Modules
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components
import { MasterComponent } from "./layout/master/master.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { LoginGuard } from "./modules/auth/guards/login.guard";


const routes: Routes = [
  {
    path: "",
    component: MasterComponent,
    canActivate: [ LoginGuard ],
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "consultation"
      },
      {
        path: "consultation",
        loadChildren: () =>
          import("./modules/consultation/consultation.module").then(m => m.ConsultationModule),
      },
      {
        path: "patients",
        loadChildren: () =>
          import("./modules/patient/patient.module").then(m => m.PatientModule),
      },
      {
        path: "doctors",
        loadChildren: () =>
          import("./modules/user/user.module").then(m => m.UserModule),
      },

      {
        path: "examinations",
        loadChildren: () =>
          import("./modules/examination/examination.module").then((m) => m.ExaminationModule),
      },
      {
        path: "prescriptions",
        loadChildren: () =>
          import("./modules/prescription/prescription.module").then((m) => m.PrescriptionModule),
      },
    ],
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./modules/auth/auth.module").then(m => m.AuthModule),
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
