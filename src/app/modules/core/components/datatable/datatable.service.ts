import { BehaviorSubject, Subject } from "rxjs";
import { DecimalPipe } from "@angular/common";
import { debounceTime, delay, switchMap, tap } from "rxjs/operators";
import { SortColumn, SortDirection } from "./sortable.directive";
import { IRepository } from "../../lib/IRepository";

interface SearchResult {
    entities: any[];
    total: number;
}

interface State {
    page: number;
    pageSize: number;
    searchTerm: string;
    sortColumn: SortColumn;
    sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export class TableService<T> {
    private _loading$ = new BehaviorSubject<boolean>(true);
    private _search$ = new Subject<void>();
    private _entities$ = new BehaviorSubject<T[]>([]);
    private _total$ = new BehaviorSubject<number>(0);

    private _state: State = {
        page: 1,
        pageSize: 10,
        searchTerm: '',
        sortColumn: '',
        sortDirection: ''
    };

    constructor(private service: IRepository<any>, private pipe: DecimalPipe) {
        this._search$.pipe(
            tap(() => this._loading$.next(true)),
            debounceTime(200),
            switchMap(() => this._search()),
            delay(200),
            tap(() => this._loading$.next(false))
        ).subscribe(result => {
            this._entities$.next(result.entities);
            this._total$.next(result.total);
        });

        this._search$.next();
    }

    get entities$() { return this._entities$.asObservable(); }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }

    set page(page: number) { this._set({ page }); }
    set pageSize(pageSize: number) { this._set({ pageSize }); }
    set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
    set sortColumn(sortColumn: SortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }

    private _set(patch: Partial<State>) {
        Object.assign(this._state, patch);
        this._search$.next();
    }

    private sort(entities: T[], column: SortColumn, direction: string): T[] {
        if (direction === '' || column === '') {
            return entities;
        } else {
            return [...entities].sort((a, b) => {
                const res = compare(a[column], b[column]);
                return direction === 'asc' ? res : -res;
            });
        }
    }

    private matchesSearchTerm(entity: T, searchTerm: string, pipe: DecimalPipe): boolean {

        let matched: boolean = false;

        for (let [key, value] of Object.entries(entity)) {

            if ((typeof (value) == "number" ? pipe.transform(value) : value).toLowerCase().includes(searchTerm.toLowerCase())) {

                matched = true;
            }
        }

        return matched;
    }

    private async _search(): Promise<SearchResult> {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

        // 1. sort
        let entities = this.sort(await this.service.GetAll().toPromise(), sortColumn, sortDirection);

        // 2. filter
        entities = entities.filter(entity => this.matchesSearchTerm(entity, searchTerm, this.pipe));
        const total = entities.length;

        // 3. paginate
        entities = entities.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);

        return { entities, total };
    }
}