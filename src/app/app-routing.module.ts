import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MasterComponent} from "./layout/master/master.component";

const routes: Routes = [
  {
    path: "",
    component: MasterComponent,
    children: [
      {
        path: "patients",
        loadChildren: () =>
          import("./pages/patients/patients.module").then((m) => m.PatientsModule),
      },
    ],
    data: {
      title: "Home",
      breadcrumb: [
        {
          label: "Home",
          url: "/"
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
export class AppRoutingModule {
}
