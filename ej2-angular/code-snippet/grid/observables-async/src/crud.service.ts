import { Customer } from './customers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { DataSourceChangedEventArgs, DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { BehaviorSubject, map, Observable } from 'rxjs';

interface sortInfo {
  name: string
  field: string,
  direction: string
}

interface filterInfo {
  fn?: string;
  e?: string;
  field: string;
  matchCase: boolean;
  operator: string;
  predicates: any;
  value: string;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private customersUrl = 'api/customers';  // URL to web api
  constructor(private http: HttpClient) {  }

  // Observable to push data state updates
  private stateSubject = new BehaviorSubject<DataStateChangeEventArgs | null>(null);
  public state$ = this.stateSubject.asObservable();

  // Execute method to trigger data load with current state and query
  public execute(state: any, query: Query): void {
    this.getAllData(state, query).subscribe(data => this.stateSubject.next(data));
  }

  private applyFiltering(query: Query, filter: filterInfo[]): void {
    for (let i = 0; i < filter.length; i++) {
      const { fn, e } = filter[i];
      if (fn === 'onWhere') {
        query.where(e as string);
      }
    }
  }

  private applySorting(query: Query, sorted: sortInfo[]): void {
    if (sorted && sorted.length > 0) {
      sorted.forEach(sort => {
        query.sortBy(sort.name as string, sort.direction);
      });
    }
  }

  private applyGrouping(query: Query, group: any): void {
    if (group && group.columns && group.columns.length > 0) {
      group.columns.forEach((column: string) => {
        query.group(column);
      });
    } else if (group && group.length > 0) {
      group.forEach((column: string) => {
        query.group(column);
      });
    }
  }

  private applyLazyLoad = (query: Query, state: any) => {
    if (state.isLazyLoad) {
      query.lazyLoad.push({ key: 'isLazyLoad', value: true });
      if (state.onDemandGroupInfo) {
        console.log(state.onDemandGroupInfo)
        query.lazyLoad.push({
          key: 'onDemandGroupInfo',
          value: state.action.lazyLoadQuery,
        });
      }
    }
  }

  private applySearching(query: Query, search: Array<any>): void {
    if (search && search.length > 0) {
      const { fields, key } = search[0];
      query.search(key, fields);
    }
  }

  private applypaging(query: Query, state: any) {
    if (state.take && state.skip) {
      const pageSkip = state.skip / state.take + 1;
      const pageTake = state.take;
      query.page(pageSkip, pageTake);
    }
    else if (state.skip === 0 && state.take) {
      query.page(1, state.take);
    }
  }

  getAllData(state: any, action: any): Observable<any> {
    const query = new Query();
    switch (state) {
      case state: {
        // filtering
        if (state.where) {
          this.applyFiltering(query, action.queries);
        }
        // soritng
        if (state.sorted && state.sorted.length > 0) {
          this.applySorting(query, state.sorted);
        }
        // grouping
        if (state.group) {
          if (state.group.length > 0) {
            this.applyGrouping(query, state.group);
          }
          // initial grouping
          else if (state.group.columns.length > 0) {
            this.applyGrouping(query, state.group);
          }
        }
        // lazy load grouping
        if (state.group) {
          if (state.isLazyLoad) {
            this.applyLazyLoad(query, state)
          }
          if (state.group.enableLazyLoading) {
            query.lazyLoad.push({ key: 'isLazyLoad', value: true })
          }
        }
        // search
        if (state.search) {
          this.applySearching(query, state.search);
        };
        // paging
        this.applypaging(query, state)
        query.isCountRequired = true
      }
    }
    return this.http.get<Customer[]>(this.customersUrl).pipe(
      map((response: any[]) => {
        const currentResult: any = new DataManager(response).executeLocal(query);
        return {
          result: currentResult.result,
          count: currentResult.count
        };
      })
    );
  }
  /** POST: add a new record  to the server */
  addRecord(state: DataSourceChangedEventArgs): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl, state.data, httpOptions);
  }

  /** DELETE: delete the record from the server */
  deleteRecord(state: any): Observable<Customer> {
    const id = state.data[0].id;
    const url = `${this.customersUrl}/${id}`;
    return this.http.delete<Customer>(url, httpOptions);
  }

  /** PUT: update the record on the server */
  updateRecord(state: DataSourceChangedEventArgs): Observable<Customer> {
    return this.http.put(this.customersUrl, state.data, httpOptions);
  }
}
