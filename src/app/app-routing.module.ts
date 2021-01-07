import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MasterComponent} from "./layout/master/master.component";

const routes: Routes = [
  {​​
    path: "",
    component: MasterComponent,
    children: [
      {​​ path: "consult", loadChildren: () => import("./consult/consult.module").then(m => m.ConsultModule) }​​,
      {​​
        path: "patients",
        loadChildren: () =>
          import("./pages/patients/patients.module").then((m) => m.PatientsModule),
      }​​,
    ],
    data: {​​
      title: "Consult",
      breadcrumb: [
        {​​
          label: "Consult",
          url: "/consult"
        }​​
      ]
    }​​
  }​​
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
