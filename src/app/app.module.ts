import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MasterComponent } from "./layout/master/master.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthModule } from "./auth/auth.module";
import { NgDynamicBreadcrumbModule } from "ng-dynamic-breadcrumb";

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AuthModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        NgDynamicBreadcrumbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
