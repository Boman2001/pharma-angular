import { BehaviorSubject, Observable, Subject } from "rxjs";
import { DecimalPipe } from "@angular/common";
import { debounceTime, delay, switchMap, tap } from "rxjs/operators";
import { SortColumn } from "../lib/SortColumn";
import { SortDirection } from "../lib/SortDirection";
import { IRepository } from "../lib/IRepository";
import { ITableState } from "../lib/ITableState";
import { ISearchResult } from "../lib/ISearchResult";
import { TableHeader } from "../lib/TableHeader";

export class TableService<T> {
  private loading = new BehaviorSubject<boolean>(true);
  private search = new Subject<void>();
  private entities = new BehaviorSubject<T[]>([]);
  private currentEntities = new BehaviorSubject<T[]>([]);
  private total = new BehaviorSubject<number>(0);

  private state: ITableState = {
    page: 1,
    pageSize: 10,
    searchTerm: "",
    sortColumn: "",
    sortDirection: ""
  };

  constructor(
    private service: IRepository<any>,
    private pipe: DecimalPipe,
    private retrievalMethod: string = "GetAll",
    private retrievalParameters: any[] = [],
    public tableShow: TableHeader[] = []
  )
  {
    this.refresh();
  }

  private static compare(v1: string | number, v2: string | number): number {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }

  public async refresh(): Promise<void> {

    this.entities = new BehaviorSubject<T[]>(await this.service[this.retrievalMethod](...this.retrievalParameters).toPromise() || []);

    this.search.pipe(
      tap(() => this.loading.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this.loading.next(false))
    ).subscribe(result => {
      this.currentEntities.next(result.entities);
      this.total.next(result.total);
    });

    this.search.next();
  }

  get page(): number {
    return this.state.page;
  }

  set page(page: number) {
    this._set({page});
  }

  get pageSize(): number {
    return this.state.pageSize;
  }

  set pageSize(pageSize: number) {
    this._set({pageSize});
  }

  get searchTerm(): string {
    return this.state.searchTerm;
  }

  set searchTerm(searchTerm: string) {
    this._set({searchTerm});
  }

  get entities$(): Observable<any[]> {
    return this.currentEntities.asObservable();
  }

  get total$(): Observable<number> {
    return this.total.asObservable();
  }

  get loading$(): Observable<boolean> {
    return this.loading.asObservable();
  }

  set sortColumn(sortColumn: SortColumn) {
    this._set({ sortColumn });
  }

  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });
  }

  private _set(patch: Partial<ITableState>): void{
    Object.assign(this.state, patch);
    this.search.next();
  }

  private sort(entities: T[], column: SortColumn, direction: string): T[] {
    if (direction === "" || column === "")
    {
      return entities;
    }
    else
    {
      return [...entities].sort(
        (a, b) => {
          const res = TableService.compare(a[column], b[column]);
          return direction === "asc" ? res : -res;
        }
      );
    }
  }

  private matchesSearchTerm(entity: T, searchTerm: string, pipe: DecimalPipe): boolean {

    let matched = false;

    for (const [key, value] of Object.entries(entity)) {

      const transformFunction = (
        this.tableShow.find((h: TableHeader) => h.key === key)
      )
      ?.transform

      const searchValue = transformFunction != null ? transformFunction(value) : value;

      if 
      (
        (typeof (searchValue) === "number" ? pipe.transform(searchValue) : searchValue)
        ?.toLowerCase().includes(searchTerm.toLowerCase())
      )
      {
        matched = true;
      }
    }

    return matched;
  }

  private async _search(): Promise<ISearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this.state;

    // 1. sort
    let entities = this.sort(
      this.entities.getValue(),
      sortColumn,
      sortDirection
    );

    // 2. filter
    entities = entities.filter(entity => this.matchesSearchTerm(entity, searchTerm, this.pipe));
    const total = entities.length;

    // 3. paginate
    entities = entities.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);

    return { entities, total };
  }
}
