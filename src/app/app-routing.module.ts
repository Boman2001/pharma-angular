// Modules
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "./modules/auth/guards/admin.guard";
import { LoginGuard } from "./modules/auth/guards/login.guard";

// Components
import { MasterComponent } from "./layout/master/master.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";


const routes: Routes = [
  {
    path: "",
    component: MasterComponent,
    canActivate: [ LoginGuard ],
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "consultations"
      },
      {
        path: "consultations",
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
          import("./modules/examination/examination.module").then(m => m.ExaminationModule),
      },
      {
        path: "prescriptions",
        loadChildren: () =>
          import("./modules/prescription/prescription.module").then(m => m.PrescriptionModule),
      },
      {
        path: "activities",
        canActivate: [ AdminGuard ],
        loadChildren: () =>
          import("./modules/activity/activity.module").then(m => m.ActivityModule),
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
