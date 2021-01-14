// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Services
import { StorageService } from "./services/storage.service";
import { AgmCoreModule } from "@agm/core";
import { GoogleMapsComponent } from "./google-maps/google-maps.component";
import { AgmDirectionModule } from "agm-direction";
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [GoogleMapsComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCBVzozETyDe794IpgWsIe7zi5iFwCPP54"
    }),
    AgmDirectionModule,
    RouterModule
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

// Components
export * from "./google-maps/google-maps.component";
