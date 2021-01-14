// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule, FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Services
import { StorageService } from "./services/storage.service";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// Components
import { DatatableComponent } from "./components/datatable/datatable.component";
import { DeleteModalComponent } from "./components/delete-modal/delete-modal.component";

// Directives
import { NgbdSortableHeaderDirective } from "./directives/sortable.directive";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  declarations: [
    DatatableComponent,
    NgbdSortableHeaderDirective,
    DeleteModalComponent,
  ],
  exports: [
    DatatableComponent,
    DeleteModalComponent
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

// Types
export * from "./lib/TableHeader";
export * from "./lib/TableAction";
export * from "./lib/ISearchResult";
export * from "./lib/ITableState";
export * from "./lib/IRepository";
export * from "./lib/ISortEvent";
export * from "./lib/SortColumn";
export * from "./lib/SortDirection";
