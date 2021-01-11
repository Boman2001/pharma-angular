import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrescriptionService } from "./services/prescription.service";
import { PrescriptionOverviewComponent } from "./pages/prescription-overview/prescription-overview.component";
import { PrescriptionDetailComponent } from "./pages/prescription-detail/prescription-detail.component";


@NgModule({
  declarations: [
    PrescriptionOverviewComponent, 
    PrescriptionDetailComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PrescriptionService
  ],
  exports: [
    PrescriptionOverviewComponent, 
    PrescriptionDetailComponent
  ]
})
export class PrescriptionModule { }

// Models
export * from "./models/prescription.model";

// Services
export * from "./services/prescription.service";

// Components
export * from "./pages/prescription-overview/prescription-overview.component";
export * from "./pages/prescription-detail/prescription-detail.component";
