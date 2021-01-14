import { SortColumn } from "./SortColumn";
import { SortDirection } from "./SortDirection";

export interface ITableState {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}
