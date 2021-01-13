
import { Directive, EventEmitter, Input, Output } from "@angular/core";
import { BaseEntity } from "../../models/base-entity.model";

export type SortColumn = keyof BaseEntity | "";
export type SortDirection = "asc" | "desc" | "";
const rotate: { [key: string]: SortDirection } = { asc: "desc", desc: "", "": "asc" };

export interface SortEvent {
    column: SortColumn;
    direction: SortDirection;
}

@Directive({
  // tslint:disable-next-line:directive-selector
    selector: "th[sortable]",
  // tslint:disable-next-line:no-host-metadata-property
    host: {
        "[class.asc]": "direction === \"asc\"",
        "[class.desc]": "direction === \"desc\"",
        "(click)": "rotate()"
    }
})
// tslint:disable-next-line:directive-class-suffix
export class NgbdSortableHeader {

    @Input() sortable: SortColumn = "";
    @Input() direction: SortDirection = "";
    @Output() sort = new EventEmitter<SortEvent>();

    rotate(): void {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    }
}
