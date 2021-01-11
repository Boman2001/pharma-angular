// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Datatable } from "./datatable/datatable";
import { TableService } from "./datatable/datatable.service";

@NgModule({
    imports: [
        CommonModule,
        TableService,
    ],
    declarations: [Datatable],
    exports: [Datatable],
    providers: []
})

export class DatatableModule { }
