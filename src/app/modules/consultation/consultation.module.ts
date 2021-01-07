// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Services
import { ConsultationService } from "./services/consultation.service";


@NgModule({
  providers: [
    ConsultationService
  ],
  imports: [
    CommonModule
  ]
})
export class ConsultationModule { }

// Models
export * from "./models/consultation.model";

// Services
export * from "./services/consultation.service";
