// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Services
import { StorageService } from "./services/storage.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
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
