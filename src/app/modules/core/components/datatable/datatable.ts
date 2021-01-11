import { Component, Input, OnInit, QueryList, ViewChildren } from "@angular/core";
import { DecimalPipe, KeyValue } from "@angular/common";
import { TableService } from "./datatable.service";
import { NgbdSortableHeader, SortEvent } from "./sortable.directive";
import { IRepository } from "../../lib/IRepository";


@Component({
    selector: "Datatable",
    templateUrl: "./datatable.html",
    styleUrls: ["./datatable.css"],
    providers: [DecimalPipe]
})
export class Datatable implements OnInit {

    @Input() public service: IRepository<any>;
    @Input() public show: string[];
    @Input() public actions: { id: string, name: string, action: () => void }[];
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

    public tableService: TableService<any>;
    selectedRow: number;
    itemArray: any;

    sortKey: string = "";
    sortIndex: number = 1;

    constructor(private pipe: DecimalPipe) { }

    ngOnInit(): void {
        this.tableService = new TableService<any>(this.service, this.pipe);
    }

    onSort({ column, direction }: SortEvent) {
        this.selectedRow = -1;
        // resetting other headers
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });

        this.tableService.sortColumn = column;
        if (column === this.sortKey) {
            if (this.sortIndex == 1) {
                this.tableService.sortDirection = "asc";
                this.sortIndex += 1;
            }
            else if (this.sortIndex == 2) {
                this.tableService.sortDirection = "desc";
                this.sortIndex = 0;
            } else {
                this.tableService.sortDirection = "";
                this.sortIndex += 1;
            }
        }
        else {
            this.sortKey = column.toString();
            this.sortIndex = 1;
            this.tableService.sortDirection = "asc";
            this.sortIndex += 1;
        }

    }

    originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
        return 0;
    }

    setActiveRow(index) {
        this.selectedRow = index;
    }
}
