// Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { MasterComponent } from "./layout/master/master.component";


const routes: Routes = [
  {
    path: "",
    component: MasterComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
