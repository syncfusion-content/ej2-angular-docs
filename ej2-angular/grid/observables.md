---
layout: post
title: Observables in Angular Grid component | Syncfusion
description: Learn here all about Observables in Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Observables 
documentation: ug
domainurl: ##DomainURL##
---

# Observables in Angular Grid component

An [`Observable`](https://angular.io/guide/observables) is used extensively by Angular since it provide significant benefits over techniques for event handling, asynchronous programming, and handling multiple values.

## Observable binding using Async pipe

Grid data can be consumed from an [`Observable`](https://angular.io/guide/observables) object by piping it through an [`async`](https://angular.io/api/common/AsyncPipe) pipe. The [`async`](https://angular.io/api/common/AsyncPipe) pipe is used to subscribe the observable object and resolve with the latest value emitted by it.

## Data binding

The grid expects an object from the [`Observable`](https://angular.io/guide/observables). The emitted value should be an object with properties **result** and **count**.

```
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-grids';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `<ejs-grid [dataSource]='data | async'>
  <e-columns>
      <e-column field='OrderID' headerText='Customer ID' width='120' textAlign='Right' isPrimaryKey='true'></e-column>
      <e-column field= "CustomerID" headerText="Customer Name" width="150"></e-column>
      <e-column field= "Freight" headerText="Freight" width="150"></e-column>
  </e-columns>
</ejs-grid>`,
  providers: [DataService]
})
export class AppComponent implements OnInit {
  public data: Observable<DataStateChangeEventArgs>;
  public state: DataStateChangeEventArgs;
  @ViewChild('grid')
  public grid: GridComponent;
  constructor(public service: DataService) {
    this.data = service;
  }

  public dataStateChange(state: DataStateChangeEventArgs): void {
    this.service.execute(state);
  }

  public ngOnInit(): void {
    const state = { skip: 0, take: 10 };
    this.service.execute(state);
  }
}

```

```
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataStateChangeEventArgs, Sorts, DataResult } from '@syncfusion/ej2-angular-grids';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService extends Subject<DataStateChangeEventArgs> {
  private BASE_URL = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';

  constructor(private http: Http) {
    super();
  }

  public execute(state: any): void {
    this.getData(state).subscribe(x => super.next(x));
  }

  protected getData(state: DataStateChangeEventArgs): Observable<DataStateChangeEventArgs> {
    const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
    let sortQuery = '';
    const d = 'd';
    const results = 'results';
    const count = '__count';
    if ((state.sorted || []).length) {
      sortQuery = `&$orderby=` + state.sorted.map((obj: Sorts) => {
        return obj.direction === 'descending' ? `${obj.name} desc` : obj.name;
      }).reverse().join(',');
    }

    return this.http
      .get(`${this.BASE_URL}?${pageQuery}${sortQuery}&$inlinecount=allpages&$format=json`)
      .map((response: any) => response.json())
      .map((response: any) => ({
        result: response[d][results],
        count: parseInt(response[d][count], 10)
      } as DataResult))
      .pipe((data: any) => data);
  }
}

```

> You should maintain the same [`Observable`](https://angular.io/guide/observables) instance for every grid actions.

## Handling grid actions

For grid actions such as **paging**, **grouping**, **sorting**, etc., the [`dataStateChange`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datastatechange) event is invoked. You have to query and resolve data using [`Observable`](https://angular.io/guide/observables) in this event based on the state arguments.

```
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-grids';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `<ejs-grid #grid [dataSource]='data | async' allowPaging= 'true' [pageSettings]='pageOptions' allowSorting= 'true'
              allowGrouping= 'true' (dataStateChange)= 'dataStateChange($event)' >
  <e-columns>
      <e-column field= "OrderID" headerText="Order ID" width="130" ></e-column>
      <e-column field= "CustomerID" headerText="Customer Name" width="150"></e-column>
      <e-column field= "ShipName" headerText="Ship Name" width="200"></e-column>
      <e-column field= "ShipCity" headerText="Ship City" width="150"></e-column>
  </e-columns>
</ejs-grid>`,
  providers: [DataService]
})
export class AppComponent implements OnInit {
  public data: Observable<DataStateChangeEventArgs>;
  public state: DataStateChangeEventArgs;
  @ViewChild('grid')
  public grid: GridComponent;
  public pageOptions: object;
  constructor(public service: DataService) {
    this.data = service;
  }

  public dataStateChange(state: DataStateChangeEventArgs): void {
    this.service.execute(state);
  }

  public ngOnInit(): void {
    this.pageOptions = { pageSize: 10, pageCount: 4 };
    const state = { skip: 0, take: 10 };
    this.service.execute(state);
  }
}

```

> When initial rendering, the [`dataStateChange`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datastatechange) event will not be triggered. You can perform the operation in the **ngOnInit** if you want the grid to show the record.

## Perform CRUD operations

The [`dataSourceChanged`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasourcechanged) event is triggered to update the grid data. You can perform the save operation based on the event arguments and you need to call the [`endEdit`](https://ej2.syncfusion.com/angular/documentation/api/grid/#endedit) method to indicate the completion of save operation.

```
import { Component, OnInit, ViewChild, ViewContainerRef, Inject } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { Observable } from 'rxjs/Observable';
import { CrudService } from './crud.service';
import { Customer } from './customer';
import { DataStateChangeEventArgs, DataSourceChangedEventArgs } from '@syncfusion/ej2-grids';

@Component({
    selector: 'app-root',
    template: `
    <ejs-grid #grid [dataSource]='data | async' allowPaging='true' [editSettings]='editSettings' [toolbar]='toolbar'
    (dataSourceChanged)='dataSourceChanged($event)' (dataStateChange)= 'dataStateChange($event)'>
                    <e-columns>
                    <e-column field='id' headerText='Customer ID' width='120' textAlign='Right' isPrimaryKey='true'></e-column>
                    <e-column field= "name" headerText="Customer Name" width="150"></e-column>
                    </e-columns>
                </ejs-grid>
                `,
})
export class AppComponent implements OnInit {

    public data: Observable<DataStateChangeEventArgs>;
    public pageOptions: object;
    public editSettings: object;
    public toolbar: string[];
    public state: DataStateChangeEventArgs;
    @ViewChild('grid')
    public grid: GridComponent;
    customers: Customer[];
    constructor(private crudService: CrudService) {
        this.data = crudService;
    }

    public dataStateChange(state: DataStateChangeEventArgs): void {
        this.crudService.execute(state);
    }

    public dataSourceChanged(state: DataSourceChangedEventArgs): void {
        if (state.action === 'add') {
            this.crudService.addRecord(state).subscribe(() => {
                state.endEdit();
            });
            this.crudService.addRecord(state).subscribe(() => { }, error => console.log(error), () => {
                state.endEdit();
            });
        } else if (state.action === 'edit') {
            this.crudService.updateRecord(state).subscribe(() => {
                state.endEdit();
            }, (e) => {
                this.grid.closeEdit();
            }
            );
        } else if (state.requestType === 'delete') {
            this.crudService.deleteRecord(state).subscribe(() => {
                state.endEdit();
            });
        }
    }

    public ngOnInit(): void {
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        const state: any = { skip: 0, take: 12 };
        this.crudService.execute(state);
    }
}

```

```
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Customer } from './customer';
import { DataStateChangeEventArgs, DataSourceChangedEventArgs } from '@syncfusion/ej2-grids';

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

  public execute(state: any): void {
      this.getAllData(state).subscribe(x => super.next(x as DataStateChangeEventArgs));
  }

  /** GET all data from the server */
  getAllData( state ?: any): Observable<any[]> {
    return this.http.get<Customer[]>(this.customersUrl)
      .map((response: any) => ({
        result: state.take > 0 ? response.slice(0, state.take) : response,
        count: response.length
      } as any))
      .map((data: any) => data);
  }

  /** POST: add a new record  to the server */
  addRecord(state: DataSourceChangedEventArgs): Observable<Customer> {
    // you can apply empty string instead of state.data to get failure(error)
    return this.http.post<Customer>(this.customersUrl, state.data, httpOptions);
  }

  /** DELETE: delete the record from the server */
  deleteRecord(state: any): Observable<Customer> {
    const id = state.data[0].id;
    const url = `${this.customersUrl}/${id}`;

    return this.http.delete<Customer>(url, httpOptions);
  }

  /** PUT: update the record on the server */
  updateRecord(state: DataSourceChangedEventArgs): Observable<any> {
    return this.http.put(this.customersUrl, state.data, httpOptions);
  }

}

```

## Calculate aggregates

The footer aggregate values should be calculated and sent along with the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource) property as follows. The aggregate property of the data source should contain the aggregate value assigned to the **field – type** property. For example, the **Sum** aggregate value for the **Freight** field should be assigned to the **Freight - sum** property.

```json
{
    result: [{https://ej2.syncfusion.com/angular/documentation}, {..}, {..}, ...],
    count: 830,
    aggregates: { 'Freight - sum' : 450,'EmployeeID - min': 1 }
}
```

> The group footer and caption aggregate values can be calculated by the grid itself.

## Provide Excel Filter data source

The [`dataStateChange`](../api/grid/#datastatechange) event is triggered with appropriate arguments when the Excel filter requests the filter choice data source. You need to resolve the Excel filter data source using the **dataSource** resolver function from the state argument as follows.

```
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { DataStateChangeEventArgs} from '@syncfusion/ej2-angular-grids';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `<ejs-grid #grid [dataSource]='data | async'  [filterSettings]='filterSettings' [allowFiltering]='true'
                (dataStateChange)='dataStateChange($event)'>
    <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="130" isPrimaryKey='true'></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
        <e-column field='Freight' headerText='Freight' width='120' textAlign='Right'></e-column>
        <e-column field="ShipCity" headerText="ShipCity" width="150"></e-column>
    </e-columns>
</ejs-grid>`
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('grid') private grid: GridComponent;
  public data: object;
  public state: DataStateChangeEventArgs;
  public pageOptions: any;
  public filterSettings: object;

  constructor(@Inject(DataService) private service: DataService) {
    this.data = service;
  }
   public dataStateChange(state: DataStateChangeEventArgs): void {
    if (state.action.requestType === 'filterchoicerequest' || state.action.requestType === 'filtersearchbegin') {
      this.service.getData(state).subscribe((e) => state.dataSource(e));
    } else {
      this.service.execute(state);
    }
  }
  ngOnInit() {
    this.pageOptions = { pageCount: 4 };
    this.filterSettings = { type: 'Excel' };
    const state = { skip: 0, take: 12 };
    this.service.execute(state);
  }
}

```

> You can find the full working sample of **data binding** and **CRUD** operation in grid using Observable [`here`](https://github.com/SyncfusionExamples/ej2-angular-grid-async-pipe).

## How To Export All Records with Async Pipe

By default, when using `observables` for Grid data binding then it exports current page records only. If you want to export all page records, define the `dataSource` in `exportProperties` as follows,

```
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { GridComponent, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DataStateChangeEventArgs, Sorts, DataResult } from '@syncfusion/ej2-angular-grids'
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: `<ejs-grid [dataSource]='data | async' allowPaging= 'true' [toolbar]='toolbarOptions'  [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)'>
        <e-columns>
            <e-column field='id' headerText='Customer ID' width='120' textAlign='Right' isPrimaryKey='true'></e-column>
            <e-column field= "name" headerText="Customer Name" width="150"></e-column>
            <e-column field= "Freight" headerText="Freight" width="150"></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('grid') private grid: GridComponent;
  public data: Object;
  public toolbarOptions: ToolbarItems[];

  constructor(@Inject(DataService) private service: DataService) {
    this.data = service;
  }

  ngOnInit() {
    let state = { skip: 0, take: 12 };
    this.toolbarOptions = ['PdfExport'];
    this.service.execute(state);
  }

 toolbarClick(args: ClickEventArgs): void {
    if(args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
    args.cancel = true;  // prevent default exporting
    let state = {};
    this.service.getData(state).subscribe(e => {    // get all records from service
        let pdfExportProperties: any = {
            dataSource: result ? result : e.result  // assign result to data source property
        };
        this.grid.pdfExport(pdfExportProperties);   // Export all page records
    });
  }
 }
}
```

```
import { DataManager, Query, } from '@syncfusion/ej2-data';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-grids'
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataService extends Subject<Object> {

  private BASE_URL = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';
  private dataManager = new DataManager({
    url: this.BASE_URL,
    crossDomain: true
  });

  constructor(private http: Http) {
    super();
  }

  public getData(state: DataStateChangeEventArgs): Observable<DataStateChangeEventArgs> {
    return this.http
      .get(`${this.BASE_URL}?&$inlinecount=allpages&$format=json`)
      .map((response: any) => response.json())
      .map((response: any) => (<DataResult>{
                result: response['d']['results'],
                count: parseInt(response['d']['__count'], 10)
            }))
      .map((data: any) => data);
  }
  public execute(state: DataStateChangeEventArgs): void {
    this.getData(state).subscribe(x => {
      super.next(x)
    });
  }
}
```

## Using Observable without async pipe

The [`async`](https://angular.io/api/common/AsyncPipe) pipe helps you to auto subscribe the [`Observable`](https://angular.io/guide/observables). If you are not comfortable with using [`async`](https://angular.io/api/common/AsyncPipe) then just subscribe the [`Observable`](https://angular.io/guide/observables) and resolve the view data manually.

```
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { DataStateChangeEventArgs} from '@syncfusion/ej2-angular-grids';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `<ejs-grid [dataSource]='data' [allowPaging]='true'  [allowFiltering]='true' (dataStateChange)= 'dataStateChange($event)'>
        <e-columns>
            <e-column field='id' headerText='Customer ID' width='120' textAlign='Right' isPrimaryKey='true'></e-column>
            <e-column field= "name" headerText="Customer Name" width="150"></e-column>
            <e-column field= "Freight" headerText="Freight" width="150"></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('grid') private grid: GridComponent;
  public data: object;
  public state: DataStateChangeEventArgs;
  public pageOptions: any;
  public filterSettings: object;  

  constructor(@Inject(DataService) private service: DataService) {
    this.data = service;
  }

   public dataStateChange(state: DataStateChangeEventArgs): void {
    this.service.getData(state).subscribe((response) => this.data = response);
  }
  ngOnInit() {
    const state = { skip: 0, take: 12};
    this.service.getData(state).subscribe((response) => this.data = response);
  }
}

```

## See also

* [How to perform asynchronous operation in actionBegin event in Angular Grid](https://www.syncfusion.com/forums/158744/how-to-perform-asynchronous-operation-in-actionbegin-event-in-angular-grid)