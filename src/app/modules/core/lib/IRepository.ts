import { Observable } from "rxjs";


export interface IRepository<T> {

  GetAll(): Observable<T[]>;
  Get(id: string): Observable<T>;
  Add(entity: T): Observable<boolean>;
  Update(id: string, entity: T): Observable<boolean>;
  Delete(id: string): Observable<boolean>;

  // GetWithProperties(includeProperties: string[]): Observable<T[]>

  // Get(Func<IQueryable<T>, IOrderedQueryable<T>> orderBy): Observable<T[]>

  // GetByFilterWithProperties(filter: (i: T) => boolean, includeProperties: string[]): Observable<T[]>

  // GetOrderedByFilterWithProperties(
  //   filter: (i: T) => boolean,
  //   includeProperties: string[],
  //   IOrderedQueryable<T>> orderBy
  // ): Observable<T[]>

  // Detach(T[]): void
  // Detach(T): void
}
