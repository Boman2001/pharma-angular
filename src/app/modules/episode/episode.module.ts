import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EpisodeService } from "./services/episode.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    EpisodeService
  ]
})
export class EpisodeModule { }

// Models
export * from "./models/episode.model";

// Services
export * from "./services/episode.service";
