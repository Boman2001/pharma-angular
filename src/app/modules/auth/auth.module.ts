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
import { TwoFactorComponent } from "./pages/two-factor/two-factor.component";
import { QRCodeModule } from "angularx-qrcode";


@NgModule({
  declarations: [
    LoginComponent,
    TwoFactorComponent
  ],
  providers: [
    AuthService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    QRCodeModule
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
