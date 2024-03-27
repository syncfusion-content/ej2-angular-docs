import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { Customer } from './customers';
import { Observable, of } from 'rxjs';
import { Subject } from 'rxjs';
import { map } from 'rxjs';
import { DataStateChangeEventArgs, DataSourceChangedEventArgs } from '@syncfusion/ej2-grids';

interface sortInfo {
  field: string;
  name: string
  direction: string
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CrudService extends Subject<DataStateChangeEventArgs>  {

  private customersUrl = 'api/customers';  // URL to web api
  constructor(
    private http: HttpClient) {
    super();
  }

  public execute(state: any, query: any): void {
    this.getAllData(state, query).subscribe(x => super.next(x as DataStateChangeEventArgs));
  }

  private applyFiltering(query: Query, filter: any): void {
    // Check if filter columns are specified
    if (filter.columns && filter.columns.length) {
      // Apply filtering for each specified column
      for (let i = 0; i < filter.columns.length; i++) {
        const field = filter.columns[i].field;
        const operator = filter.columns[i].operator;
        const value = filter.columns[i].value;
        query.where(field, operator, value);
      }
    }
    else {
      // Apply filtering based on direct filter conditions
      for (let i = 0; i < filter.length; i++) {
        const { fn, e } = filter[i];
        if (fn === 'onWhere') {
          query.where(e as string);
        }
      }
    }
  }

  private applySearching(query: Query, search: any): void {
    // Check if a search operation is requested
    if (search && search.length > 0) {
      // Extract the search key and fields from the search array
      const { fields, key } = search[0];
      // perform search operation using the field and key on the query
      query.search(key, fields);
    }
  }

  private applySorting(query: Query, sorted: sortInfo[]): void {
    // Check if sorting data is available
    if (sorted && sorted.length > 0) {
      // Iterate through each sorting info
      sorted.forEach(sort => {
        // Get the sort field name either by name or field
        const sortField = sort.name || sort.field;
        // Perform sort operation using the query based on the field name and direction
        query.sortBy(sortField as string, sort.direction);
      });
    }
  }

  private applyGrouping(query: Query, group: any): void {
    // Check if sorting data is available
    if (group.length > 0) {
      // Iterate through each group info
      group.forEach((column: string) => {
        // perform group operation using the column on the query
        query.group(column);
      });
    }
  }

  private applyLazyLoad = (query: Query, state: any) => {
    if (state.isLazyLoad) {
      // Configure lazy loading for the main data
      query.lazyLoad.push({ key: 'isLazyLoad', value: true });
      // If on-demand group loading is enabled, configure lazy loading for grouped data
      if (state.onDemandGroupInfo) {
        query.lazyLoad.push({
          key: 'onDemandGroupInfo',
          value: state.action.lazyLoadQuery,
        });
      }
    }
  }

  private applyPaging(query: Query, state: any) {
    // Check if both 'take' and 'skip' values are available
    if (state.take && state.skip) {
      // Calculate pageSkip and pageTake values to get pageIndex and pageSize
      const pageSkip = state.skip / state.take + 1;
      const pageTake = state.take;
      query.page(pageSkip, pageTake);
    }
    // If if only 'take' is available and 'skip' is 0, apply paging for the first page.
    else if (state.skip === 0 && state.take) {
      query.page(1, state.take);
    }
  }


  /** GET all data from the server */
  getAllData(state: any, action: any): Observable<any> {
    const query = new Query();
    // filtering
    if (state.where) {
      this.applyFiltering(query, action.queries);
    }
    // initial filtering
    if (state.filter && state.filter.columns && state.filter.columns.length) {
      this.applyFiltering(query, state.filter);
    }
    // search
    if (state.search) {
      this.applySearching(query, state.search);
    };
    // sorting
    if (state.sorted) {
      state.sorted.length ? this.applySorting(query, state.sorted) :
        // initial sorting
        state.sorted.columns.length ? this.applySorting(query, state.sorted.columns) : null
    }
    // grouping
    if (state.group) {
      state.group.length ? this.applyGrouping(query, state.group) :
        // initial grouping
        state.group.columns.length ? this.applyGrouping(query, state.group.columns) : null
    }
    // lazy load grouping
    this.applyLazyLoad(query, state)
    // intial grouping with lazy load
    if (state.group && state.group.enableLazyLoading) {
      query.lazyLoad.push({ key: 'isLazyLoad', value: true })
    }
    // paging
    this.applyPaging(query, state)
    // To get the count of the data
    query.isCountRequired = true

    return this.http.get<Customer[]>(this.customersUrl).pipe(
      map((response: any[]) => {
        // Execute local data operations using the provided query
        const currentResult: any = new DataManager(response).executeLocal(query);
        // Return the result along with the count of total records
        return {
          result: currentResult.result, // Result of the data
          count: currentResult.count // Total record count
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



