import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {LoginComponent} from "./pages/login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AuthRoutingModule} from "./auth-routing.module";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
