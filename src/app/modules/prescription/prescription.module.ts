// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Services
import { PrescriptionService } from "./services/prescription.service";

// Components
import { PrescriptionOverviewComponent } from "./pages/prescription-overview/prescription-overview.component";
import { PrescriptionDetailComponent } from "./pages/prescription-detail/prescription-detail.component";
import { PrescriptionRoutingModule } from "./prescription-routing.module";
import { CoreModule } from "../core/core.module";
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";


@NgModule({
  declarations: [
    PrescriptionOverviewComponent,
    PrescriptionDetailComponent
  ],
  imports: [
    CommonModule,
    PrescriptionRoutingModule,
    CoreModule,
    FontAwesomeModule
  ],
  providers: [
    PrescriptionService
  ],
  exports: [
    PrescriptionOverviewComponent,
    PrescriptionDetailComponent
  ]
})
export class PrescriptionModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}

// Models
export * from "./models/prescription.model";

// Services
export * from "./services/prescription.service";

// Components
export * from "./pages/prescription-overview/prescription-overview.component";
export * from "./pages/prescription-detail/prescription-detail.component";
