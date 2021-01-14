// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule, FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Services
import { StorageService } from "./services/storage.service";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AgmCoreModule } from "@agm/core";
import { GoogleMapsComponent } from "./google-maps/google-maps.component";
import { AgmDirectionModule } from "agm-direction";
import { RouterModule } from "@angular/router";
import { environment } from "../../../environments/environment";

// Components
import { DatatableComponent } from "./components/datatable/datatable.component";
import { DeleteModalComponent } from "./components/delete-modal/delete-modal.component";

// Directives
import { NgbdSortableHeaderDirective } from "./directives/sortable.directive";


@NgModule({
  declarations: [
    GoogleMapsComponent,
    DatatableComponent,
    NgbdSortableHeaderDirective,
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleKey
    }),
    AgmDirectionModule,
    RouterModule,
    CommonModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  exports: [
    DatatableComponent,
    DeleteModalComponent,
    GoogleMapsComponent
  ],
  providers: [
    StorageService
  ]
})

export class CoreModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}

// Models
export * from "./models/base-entity.model";

// Components
export * from "./components/datatable/datatable.component";
export * from "./components/delete-modal/delete-modal.component";

// Services
export * from "./services/http.service";
export * from "./services/generic-http.service";
export * from "./services/storage.service";

// Enums
export * from "./enums/gender.enum";

// Directives
export * from "./directives/sortable.directive";

// Components
export * from "./google-maps/google-maps.component";

// Types
export * from "./lib/TableHeader";
export * from "./lib/TableAction";
export * from "./lib/ISearchResult";
export * from "./lib/ITableState";
export * from "./lib/IRepository";
export * from "./lib/ISortEvent";
export * from "./lib/SortColumn";
export * from "./lib/SortDirection";
