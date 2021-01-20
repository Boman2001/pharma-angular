// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as hljs from "highlight.js";
import { HighlightJsModule, HIGHLIGHT_JS } from "angular-highlight-js";

// Services
import { ActivityService } from "./services/activity.service";

// Components
import { CoreModule } from "../core/core.module";
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ActivityRoutingModule } from "./activity-routing.module";
import { ActivityComponent } from "./pages/activity.component";
import { ActivityDetailModalComponent } from "./components/activity-detail-modal/activity-detail-modal.component";


@NgModule({
  declarations: [
    ActivityComponent,
    ActivityDetailModalComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    CoreModule,
    FontAwesomeModule,
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: () => {
        return hljs;
      }
    })
  ],
  providers: [
    ActivityService
  ],
  exports: [
    ActivityComponent,
    ActivityDetailModalComponent
  ]
})
export class ActivityModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}

// Models
export * from "./models/activity.model";

// Services
export * from "./services/activity.service";

// Components
export * from "./pages/activity.component";
export * from "./components/activity-detail-modal/activity-detail-modal.component";
