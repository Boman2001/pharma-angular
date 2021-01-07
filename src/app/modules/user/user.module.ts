// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Services
import { UserService } from "./services/user.service";


@NgModule({
  declarations: [],
  providers: [
    UserService,
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }

// Models
export * from "./models/user.model";

// Services
export * from "./services/user.service";
