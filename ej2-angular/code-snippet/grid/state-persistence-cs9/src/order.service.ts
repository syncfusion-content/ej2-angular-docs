import { Injectable } from '@angular/core';
import { DataStateChangeEventArgs, Sorts } from '@syncfusion/ej2-angular-grids';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OrdersService extends Subject<DataStateChangeEventArgs> {
  private BASE_URL ='https://services.odata.org/V4/Northwind/Northwind.svc/Orders';
  constructor() {
    super();
  }
  public execute(state: any): void {
    this.getData(state).subscribe((x) => super.next(x));
  }
  protected getData(state: DataStateChangeEventArgs): Observable<DataStateChangeEventArgs> {
    const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
    let sortQuery: string = '';
    let filterQuery = '';
     if (state.sorted && state.sorted.length) {
      const sorts = state.sorted as Sorts[];

      const orderby = sorts
        .map((obj) => {
          const direction = (obj.direction ?? 'Ascending').toLowerCase();
          return direction === 'descending' ? `${obj.name} desc` : obj.name;
        })
        .reverse()
        .join(',');

      sortQuery = `&$orderby=${orderby}`;
    }
    if (state.where) {
      filterQuery =
        `&$filter=` +
        state.where.map((obj) => {
          return obj.predicates
            .map((predicate) => {
              return predicate.operator === 'equal'
                ? `${predicate.field} eq ${predicate.value}`
                : `${predicate.operator}(tolower(${predicate.field}),'${predicate.value}')`;
            })
            .reverse()
            .join(' and ');
        });
    }
    return this.fetchData(
      `${this.BASE_URL}?${pageQuery}${sortQuery}${filterQuery}&$count=true`
    ).pipe(
      map((response: any) => {
        const result = response['value'];
        const count = response['@odata.count'];
        return { result, count } as DataStateChangeEventArgs;
      })
    );
  }
  private fetchData(url: string): Observable<any> {
    return new Observable((observer) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          observer.next(data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
