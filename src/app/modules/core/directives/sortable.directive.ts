import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from "@angular/core";
import { SortDirection } from "../lib/SortDirection";
import { SortColumn } from "../lib/SortColumn";
import { ISortEvent } from "../lib/ISortEvent";


@Directive({
    selector: "th[appSortable]"
})
export class NgbdSortableHeaderDirective {

  private rotation: { [key: string]: SortDirection } = { asc: "desc", desc: "", "": "asc" };
  @Input() sortable: SortColumn = "";
  @Input() direction: SortDirection = "";
  @Output() sort = new EventEmitter<ISortEvent>();
  @HostBinding("class.asc") get asc(): boolean { return this.direction === "asc"; }
  @HostBinding("class.desc") get desc(): boolean { return this.direction === "desc"; }
  @HostListener("click") onClick(): void {
    this.rotate();
  }

  rotate(): void {
    this.direction = this.rotation[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}
