import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import {DataStateChangeEventArgs, Sorts, DataResult,} from '@syncfusion/ej2-angular-grids';

@Injectable()
export class DataService extends Subject<DataStateChangeEventArgs> {

  private BASE_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders';

  constructor(private http: HttpClient) {
    super();
  }

  public execute(state: any, query: any): void {
    this.getData(state, query).subscribe(x => super.next(x));
  }

  public getData(state: DataStateChangeEventArgs, addtionalParam: any): Observable<DataStateChangeEventArgs> {
    const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
    let sortQuery: string = '';

    if ((state.sorted || []).length) {
      sortQuery = `&$orderby=` + state.sorted?.map((obj: Sorts) => {
        return obj.direction === 'descending' ? `${obj.name} desc` : obj.name;
      }).reverse().join(',');
    }

    const customQuery = `&${addtionalParam.params[0].key}=${addtionalParam.params[0].value}`;

    return this.http
      .get(`${this.BASE_URL}?${pageQuery}${sortQuery}${customQuery}&$count=true`)
      .pipe(map((response: any) => response))
      .pipe(map((response: any) => (<DataResult>{
        result: response['value'],
        count: parseInt(response['@odata.count'], 10),
      })))
      .pipe((data: any) => data);
  }

}
