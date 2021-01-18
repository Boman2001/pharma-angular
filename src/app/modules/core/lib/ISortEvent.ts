import { SortColumn } from "./SortColumn";
import { SortDirection } from "./SortDirection";

export interface ISortEvent {
  column: SortColumn;
  direction: SortDirection;
}
