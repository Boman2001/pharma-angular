import { Component, Input, OnInit, QueryList, ViewChildren } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { TableService } from "../../services/datatable.service";
import { IRepository } from "../../lib/IRepository";
import { BaseEntity, NgbdSortableHeaderDirective, TableAction, TableHeader } from "../../core.module";
import { ISortEvent } from "../../lib/ISortEvent";
import { forwardRef } from "@angular/core";


@Component({
  selector: "app-datatable-component",
  templateUrl: "./datatable.component.html",
  styleUrls: [ "./datatable.component.css" ],
  providers: [ DecimalPipe ]
})
export class DatatableComponent implements OnInit {

  @Input() public service: IRepository<any>;
  @Input() public show: TableHeader[];
  @Input() public actions: TableAction[];
  @Input() public retrievalMethod: string;
  @Input() public retrievalParameters: any[];
  @ViewChildren(forwardRef(() => NgbdSortableHeaderDirective)) headers?: QueryList<NgbdSortableHeaderDirective>;

  public tableService: TableService<any>;
  selectedRow: number;
  itemArray: any;

  sortKey = "";
  sortIndex = 1;

  constructor(private pipe: DecimalPipe) {}

  ngOnInit(): void {
    this.tableService = new TableService<any>(this.service, this.pipe, this.retrievalMethod, this.retrievalParameters);
  }

  onSort({ column, direction }: ISortEvent): void {
    this.selectedRow = -1;
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });

    this.tableService.sortColumn = column;
    if (column === this.sortKey) {
      switch (this.sortIndex) {
        case 1:
          this.tableService.sortDirection = "asc";
          this.sortIndex += 1;
          break;

        case 2:
          this.tableService.sortDirection = "desc";
          this.sortIndex = 0;
          break;

        default:
          this.tableService.sortDirection = "";
          this.sortIndex += 1;
          break;
      }
    }
    else {
      this.sortKey = column.toString();
      this.sortIndex = 1;
      this.tableService.sortDirection = "asc";
      this.sortIndex += 1;
    }
  }

  setActiveRow(index): void {
    this.selectedRow = index;
  }

  getVisibleEntityEntries(entity: BaseEntity): { key: string, value: any }[] {
    const allowedKeys = this.show.map(s => s.key);
    return Object.entries(entity)
      .map(
        (e) => {
          const transform = this.show.filter(s => s.key === e[0])[0]?.transform;
          return {key: e[0], value: transform != null ? transform(e[1]) : e[1]};
        }
      )
      .filter(
        e => allowedKeys.includes(e.key)
      )
      .sort(
        (a, b) => allowedKeys.indexOf(a.key) - allowedKeys.indexOf(b.key)
      );
  }
}
