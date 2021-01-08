// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AuthRoutingModule } from "./auth-routing.module";

// Services
import { AuthService } from "./services/auth.service";

// Components
import { LoginComponent } from "./pages/login/login.component";


@NgModule({
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }

// Services
export * from "./services/auth.service";

// Components
export * from "./pages/login/login.component";
