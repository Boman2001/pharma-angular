import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import {TwoFactorComponent} from "./pages/two-factor/two-factor.component";


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "login/twofactor",
    component: TwoFactorComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
