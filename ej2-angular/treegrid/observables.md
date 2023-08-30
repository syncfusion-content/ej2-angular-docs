---
layout: post
title: Observables in Angular Treegrid component | Syncfusion
description: Learn here all about Observables in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Observables 
documentation: ug
domainurl: ##DomainURL##
---

# Observables in Angular Treegrid component

An `Observable` is used extensively by Angular since it provides significant benefits over techniques for event handling, asynchronous programming, and handling multiple values.

You can also check on this video for Observable binding in Tree Grid:

{% youtube "https://www.youtube.com/watch?v=iq_A00-068k" %}

## Observable binding using Async pipe

TreeGrid data can be consumed from an `Observable` object by piping it through an `async` pipe. The `async` pipe is used to subscribe the observable object and resolve with the latest value emitted by it.

## Data binding

The TreeGrid expects an object from the `Observable`. The emitted value should be an object with properties `result` and `count`.

```
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CrudService } from './data.service';
import { Tasks } from './tasks';
import { TreeGridComponent, DataStateChangeEventArgs } from '@syncfusion/ej2-angular-treegrid';
@Component({
    selector: 'app-root',
    template: `<ejs-treegrid #treegrid [dataSource]='data | async' [treeColumnIndex]='1' parentIdMapping='ParentId' idMapping='TaskId' hasChildMapping='isParent' (dataStateChange)= 'dataStateChange($event)' [allowPaging]="true" [allowSorting]="true" [pageSettings]="pageSettings">
        <e-columns>
            <e-column field='TaskId' headerText='Task ID' width='90' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='170'></e-column>
            <e-column field='Progress' headerText='Progress' width='130' textAlign='Right'></e-column>
            <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: Observable<DataStateChangeEventArgs>;
    public pageSettings: Object;
    public state: DataStateChangeEventArgs;
    @ViewChild('treegrid')
    public treegrid: TreeGridComponent;
    tasks: Tasks[];
    constructor(private dataService: DataService) {
        this.data = dataService;
    }

    public dataStateChange(state: DataStateChangeEventArgs): void {
        this.dataService.execute(state);
    }

    public ngOnInit(): void {
        this.pageSettings = { pageSize: 1, pageSizeMode: 'Root' };
        const state: any = { skip: 0, take: 1 };
        this.dataService.execute(state);
    }
}
```

```
import { DataManager, Query, } from '@syncfusion/ej2-data';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-treegrid';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataService extends Subject<Object> {

  private BASE_URL = '/api/tasks';  //// provide the service url required to fetch data from server  

  constructor(private http: Http) {
    super();
  }

  public getData(state: DataStateChangeEventArgs): Observable<DataStateChangeEventArgs> {
    const pageQuery = `$skip=${state.skip}&$top=${state.take}`;

      /// filter query for fetching only the root level records
    const treegridQuery = "$filter='ParentId eq null'";
    return this.http
      .get(`${this.BASE_URL}?${pageQuery}&${treegridQuery}&$inlinecount=allpages&$format=json`)
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

> You should maintain the same `Observable` instance for every treegrid actions.
> We have a limitation for Custom Binding feature of TreeGrid. This feature works only for Self Referential data binding with `pageSizeMode` as `Root`.

## Handling child data

Using the custom binding feature you can bind the child data for a parent record as per your custom logic. When a parent record is expanded, [`dataStateChange`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datastatechange) event is triggered in which you can assign your custom data to the `childData` property of the [`dataStateChange`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datastatechange) event arguments.
After assigning the child data, `childDataBind` method should be called from the
[`dataStateChange`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datastatechange) event arguments to indicate that the data is bound.

```

import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CrudService } from './data.service';
import { Tasks } from './tasks';
import { TreeGridComponent, DataStateChangeEventArgs } from '@syncfusion/ej2-angular-treegrid';
@Component({
    selector: 'app-root',
    template: `<ejs-treegrid #treegrid [dataSource]='data | async' [treeColumnIndex]='1' parentIdMapping='ParentId' idMapping='TaskId' hasChildMapping='isParent' height=265 (dataStateChange)= 'dataStateChange($event)' [allowPaging]="true" [allowSorting]="true" [pageSettings]="pageSettings">
        <e-columns>
            <e-column field='TaskId' headerText='Task ID' width='90' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='170'></e-column>
            <e-column field='Progress' headerText='Progress' width='130' textAlign='Right'></e-column>
            <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: Observable<DataStateChangeEventArgs>;
    public pageSettings: Object;
    public state: DataStateChangeEventArgs;
    @ViewChild('treegrid')
    public treegrid: TreeGridComponent;
    tasks: Tasks[];
    constructor(private dataService: DataService) {
        this.data = dataService;
    }

    public dataStateChange(state: DataStateChangeEventArgs): void {
         if (state.requestType === 'expand') {

         /////    assigning the child data for the expanded record.

            state.childData = <any>[
                { TaskId: 2, TaskName: 'VINER', ParentId: 1, Duration: 23, Progress: 34, isParent: false },
                { TaskId: 3, TaskName: 'JOHN', ParentId: 1, Duration: 23, Progress: 34, isParent: false },
                { TaskId: 4, TaskName: 'TOMSP', ParentId: 1, Duration: 23, Progress: 34, isParent: false }
            ]
            state.childDataBind();       //// to indicate that the child data is bound.
        } else {
            this.dataService.execute(state);
        }
    }

    public ngOnInit(): void {
        this.pageSettings = { pageSize: 1, pageSizeMode: 'Root' };
        const state: any = { skip: 0, take: 1 };
        this.dataService.execute(state);
    }
}
```

```
import { DataManager, Query, } from '@syncfusion/ej2-data';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-treegrid';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataService extends Subject<Object> {

  private BASE_URL = '/api/tasks';  //// provide the service url required to fetch data from server
  private dataManager = new DataManager({
    url: this.BASE_URL,
    crossDomain: true
  });

  constructor(private http: Http) {
    super();
  }

  public getData(state: DataStateChangeEventArgs): Observable<DataStateChangeEventArgs> {
    const pageQuery = `$skip=${state.skip}&$top=${state.take}`;

      /// filter query for fetching only the root level records
    const treegridQuery = "$filter='ParentId eq null'";
    return this.http
      .get(`${this.BASE_URL}?${pageQuery}&${treegridQuery}&$inlinecount=allpages&$format=json`)
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

## Handling TreeGrid actions

For TreeGrid actions such as `paging`, `sorting`, etc., the `dataStateChange` event is invoked. You have to query and resolve data using `Observable` in this event based on the state arguments.

```
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { TreeGridComponent, DataStateChangeEventArgs } from '@syncfusion/ej2-angular-treegrid';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: `<ejs-treegrid #treegrid [dataSource]='data | async' [treeColumnIndex]='1' parentIdMapping='ParentId' idMapping='TaskId' hasChildMapping='isParent' (dataStateChange)= 'dataStateChange($event)' [allowPaging]="true" [allowSorting]="true" [pageSettings]="pageSettings">
        <e-columns>
            <e-column field='TaskId' headerText='Task ID' width='90' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='170'></e-column>
            <e-column field='Progress' headerText='Progress' width='130' textAlign='Right'></e-column>
            <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('treegrid') private treegrid: TreeGridComponent;
  public data: Object;
  public state: DataStateChangeEventArgs;
  public pageSettings: any;

  constructor(@Inject(DataService) private service: DataService) {
    this.data = service;
  }

  public dataStateChange(state: DataStateChangeEventArgs): void {
    this.service.execute(state);
  }

  ngOnInit() {
    this.pageSettings = { pageCount: 4 };
    let state = { skip: 0, take: 12 };
    this.service.execute(state);
  }
}
```

> When initial rendering, the `dataStateChange` event will not be triggered. You can perform the operation in the `ngOnInit` if you want the treegrid to show the record.

## Perform CRUD operations

The [`dataSourceChanged`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#datasourcechanged) event is triggered to update the treegrid data. You can perform the save operation based on the event arguments, and you need to call the [`endEdit`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#endedit) method to indicate the completion of save operation.

```
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CrudService } from './crud.service';
import { Tasks } from './tasks';
import { DataSourceChangedEventArgs } from '@syncfusion/ej2-grids';
import { DataStateChangeEventArgs, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
@Component({
    selector: 'app-root',
    template: `<ejs-treegrid #treegrid [dataSource]='data | async' [treeColumnIndex]='1' parentIdMapping='ParentId' idMapping='TaskId' hasChildMapping='isParent' (dataSourceChanged)='dataSourceChanged($event)' (dataStateChange)= 'dataStateChange($event)' [allowPaging]="true" [allowSorting]="true" [pageSettings]="pageSettings" [editSettings]="editSettings" [toolbar]="toolbar">
        <e-columns>
            <e-column field='TaskId' headerText='Task ID' width='90' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='170'></e-column>
            <e-column field='Progress' headerText='Progress' width='130' textAlign='Right'></e-column>
            <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: Observable<DataStateChangeEventArgs>;
    public pageOptions: Object;
    public editSettings: Object;
    public pagesettings: Object;
    public toolbar: string[];
    public state: DataStateChangeEventArgs;
    @ViewChild('treegrid')
    public treegrid: TreeGridComponent;
    tasks: Tasks[];
    constructor(private crudService: CrudService) {
        this.data = crudService;
    }

    public dataStateChange(state: DataStateChangeEventArgs): void {
        this.crudService.execute(state);
    }

    public dataSourceChanged(state: DataSourceChangedEventArgs): void {
        if (state.action === 'add') {
            this.crudService.addRecord(state).subscribe(() => {
                state.endEdit()
            });
            this.crudService.addRecord(state).subscribe(() => { }, error => console.log(error), () => {
                state.endEdit()
            });
        } else if (state.action === 'edit') {
            this.crudService.updateRecord(state).subscribe(() => {
                state.endEdit()
            }
            );
        } else if (state.requestType === 'delete') {
            this.crudService.deleteRecord(state).subscribe(() => {
                state.endEdit()
            });
        }
    }

    public ngOnInit(): void {
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.pageSettings = { pageSize: 1, pageSizeMode: 'Root' };
        const state: any = { skip: 0, take: 1 };
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
import { Tasks } from './tasks';
import { DataStateChangeEventArgs, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { DataSourceChangedEventArgs } from '@syncfusion/ej2-grids';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CrudService extends Subject<DataStateChangeEventArgs>  {

  private tasksUrl = 'api/tasks';  // URL to web api for fetching the data

  constructor(
    private http: HttpClient) {
    super();
  }

  public execute(state: any): void {
    if (state.requestType === 'expand') {
      this.getChildData(state).subscribe(x => super.next(x as DataStateChangeEventArgs));
    } else {
    this.getAllData(state).subscribe(x => super.next(x as DataStateChangeEventArgs));
  }
  }

  /** GET all data from the server */
  getAllData( state ?: any): Observable<any[]> {
    return this.http.get<Tasks[]>(this.tasksUrl)
      .map((response: any) => (<any>{
        result: state.take > 0 ? response.slice(0, state.take) : response,
        count: 2
      }))
  }

  getChildData( state ?: any): Observable<any[]> {
    return this.http.get<Tasks[]>(this.tasksUrl)
      .map((response: any) => (<any>{
        result : response.slice(1, 3),
      }))
    }

  /** POST: add a new record  to the server */
  addRecord(state: DataSourceChangedEventArgs): Observable<Tasks> {
    // you can apply empty string instead of state.data to get failure(error)
    return this.http.post<Tasks>(this.tasksUrl, state.data, httpOptions);
  }

  /** DELETE: delete the record from the server */
  deleteRecord(state: any): Observable<Tasks> {
    const id = state.data[0].id;
    const url = `${this.tasksUrl}/${id}`;

    return this.http.delete<Tasks>(url, httpOptions);
  }

  /** PUT: update the record on the server */
  updateRecord(state: DataSourceChangedEventArgs): Observable<any> {
    return this.http.put(this.tasksUrl, state.data, httpOptions);
  }

}

```

## Calculate aggregates

The footer aggregate values should be calculated and sent along with the `dataSource` property as follows. The aggregate property of the data source should contain the aggregate value assigned to the `field – type` property. For example, the `Sum` aggregate value for the `Duration` field should be assigned to the `Duration - sum` property.

```json
{
    result: [{..}, {..}, {..}, ...],
    count: 830,
    aggregates: { 'Duration - sum' : 450 }
}
```

> The group footer and caption aggregate values can be calculated by the treegrid itself.

## Provide Excel Filter data source

The `dataStateChange` event is triggered with appropriate arguments when the Excel filter requests the filter choice data source. You need to resolve the Excel filter data source using the `dataSource` resolver function from the state argument as follows.

```
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CrudService } from './data.service';
import { Tasks } from './tasks';
import { TreeGridComponent, DataStateChangeEventArgs } from '@syncfusion/ej2-angular-treegrid';
@Component({
    selector: 'app-root',
    template: `<ejs-treegrid #treegrid [dataSource]='data | async' [treeColumnIndex]='1' parentIdMapping='ParentId' idMapping='TaskId' hasChildMapping='isParent' (dataStateChange)= 'dataStateChange($event)' [allowPaging]="true" [allowSorting]="true" [pageSettings]="pageSettings">
        <e-columns>
            <e-column field='TaskId' headerText='Task ID' width='90' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='170'></e-column>
            <e-column field='Progress' headerText='Progress' width='130' textAlign='Right'></e-column>
            <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: Observable<DataStateChangeEventArgs>;
    public pageSettings: Object;
    public state: DataStateChangeEventArgs;
    @ViewChild('treegrid')
    public treegrid: TreeGridComponent;
    tasks: Tasks[];
    constructor(private dataService: DataService) {
        this.data = dataService;
    }

    public dataStateChange(state: DataStateChangeEventArgs): void {
      if (state.action.requestType === 'filterchoicerequest' || state.action.requestType === 'filtersearchbegin') {
        this.service.getData(state).subscribe((e) => state.dataSource(e));
      } else {
        this.service.execute(state);
      }
    }

    public ngOnInit(): void {
        this.pageSettings = { pageSize: 1, pageSizeMode: 'Root' };
        const state: any = { skip: 0, take: 1 };
        this.dataService.execute(state);
    }
}
```

```
import { DataManager, Query, } from '@syncfusion/ej2-data';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-treegrid';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataService extends Subject<Object> {

  private BASE_URL = '/api/tasks';  //// provide the service url required to fetch data from server  

  constructor(private http: Http) {
    super();
  }

  public getData(state: DataStateChangeEventArgs): Observable<DataStateChangeEventArgs> {
    const pageQuery = `$skip=${state.skip}&$top=${state.take}`;

      /// filter query for fetching only the root level records
    const treegridQuery = "$filter='ParentId eq null'";
    return this.http
      .get(`${this.BASE_URL}?${pageQuery}&${treegridQuery}&$inlinecount=allpages&$format=json`)
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

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.