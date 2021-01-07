// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Services
import { AuthService } from "./services/auth.service";


@NgModule({
  providers: [
    AuthService,
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }

// Services
export * from "./services/auth.service";
