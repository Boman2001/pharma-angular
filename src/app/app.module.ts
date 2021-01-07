// Modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgDynamicBreadcrumbModule } from "ng-dynamic-breadcrumb";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "./modules/core/core.module";

// Components
import { AppComponent } from "./app.component";
import { MasterComponent } from "./layout/master/master.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";


@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgDynamicBreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
