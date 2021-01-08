import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrescriptionService } from "./services/prescription.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PrescriptionService
  ]
})
export class PrescriptionModule { }

// Models
export * from "./models/prescription.model";

// Services
export * from "./services/prescription.service";
