import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { MasterComponent } from "./layout/master/master.component";

const routes: Routes = [
  {
    path: "",
    component: MasterComponent,
    children: [
      {
        path: 'patient',
        loadChildren: () =>
          import('./pages/patient/patient.module').then((m) => m.PatientModule)
      },
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
