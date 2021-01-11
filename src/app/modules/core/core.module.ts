// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Datatable } from "./components/datatable/datatable";

// Services
import { StorageService } from "./services/storage.service";


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [Datatable],
  providers: [
    StorageService
  ]
})

export class CoreModule { }

// Models
export * from "./models/base-entity.model";

// Services
export * from "./services/http.service";
export * from "./services/generic-http.service";
export * from "./services/storage.service";

// Enums
export * from "./enums/gender.enum";
