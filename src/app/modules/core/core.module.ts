// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Datatable } from "./components/datatable/datatable";

// Services
import { StorageService } from "./services/storage.service";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbdSortableHeader } from "./components/datatable/sortable.directive";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    Datatable,
    NgbdSortableHeader,
  ],
  exports: [
    Datatable
  ],
  providers: [
    StorageService
  ]
})

export class CoreModule { }

// Models
export * from "./models/base-entity.model";

// Components
export { Datatable } from "./components/datatable/datatable"

// Services
export * from "./services/http.service";
export * from "./services/generic-http.service";
export * from "./services/storage.service";

// Enums
export * from "./enums/gender.enum";
