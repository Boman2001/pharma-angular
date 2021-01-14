// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Services
import { StorageService } from "./services/storage.service";
import { AgmCoreModule } from "@agm/core";
import { GoogleMapsComponent } from "./google-maps/google-maps.component";
import { AgmDirectionModule } from "agm-direction";
import { RouterModule } from "@angular/router";
import { environment } from "../../../environments/environment";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbdSortableHeader } from "./components/datatable/sortable.directive";

// Components
import { Datatable } from "./components/datatable/datatable";
import { DeleteModalComponent } from "./components/delete-modal/delete-modal.component";


@NgModule({
  declarations: [GoogleMapsComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleKey
    }),
    AgmDirectionModule,
    RouterModule,
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    Datatable,
    NgbdSortableHeader,
    DeleteModalComponent,
  ],
  exports: [
    Datatable,
    DeleteModalComponent
  ],
  providers: [
    StorageService
  ]
})

export class CoreModule { }

// Models
export * from "./models/base-entity.model";

// Components
export * from "./components/datatable/datatable";
export * from "./components/delete-modal/delete-modal.component";

// Services
export * from "./services/http.service";
export * from "./services/generic-http.service";
export * from "./services/storage.service";

// Enums
export * from "./enums/gender.enum";

// Components
export * from "./google-maps/google-maps.component";
