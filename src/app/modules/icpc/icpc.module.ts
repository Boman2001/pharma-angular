import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ICPCCodeService } from "./services/icpccode.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ICPCCodeService
  ]
})
export class ICPCModule { }

// Models
export * from "./models/icpccode.model";

// Services
export * from "./services/icpccode.service";
