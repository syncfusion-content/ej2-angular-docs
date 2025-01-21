---
layout: post
title: Remote data in Angular Grid component | Syncfusion
description: Learn here all about Remote data in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Remote data 
documentation: ug
domainurl: ##DomainURL##
---

# Remote Data in Angular Grid Component

In Angular Grid component, binding remote data is a fundamental aspect that enhances the efficiency of data interaction. This process involves assigning the service data, represented as an instance of `DataManager`, to the `dataSource` property of the Angular Grid component. By doing so, you enable seamless interaction with a remote data source, and this is achieved by specifying the endpoint URL where the data is hosted.

Additionally, leverage the power of Observables for data retrieval and operations, enhancing event handling, asynchronous programming, and concurrent value management in Angular applications.

## Binding observable data using async pipe

[Observables](https://angular.io/guide/observables) are a core concept in reactive programming and are widely used in the Angular framework. An Observable represents a stream of data or events that can be observed over time. It provides a way to handle asynchronous operations, such as handling developer's input, dealing with HTTP requests, and managing events.

In the Syncfusion Angular Grid, seamlessly utilize the power of [Observables](https://angular.io/guide/observables) through the async pipe for effortless binding of grid data. The [AsyncPipe](https://angular.io/api/common/AsyncPipe) efficiently subscribes to the observable, extracting the latest emitted value structured with `result` and `count` properties, aligning perfectly with the grid's data expectations.

The Syncfusion Grid component offers a range of powerful features for handling grid actions such as **searching**, **filtering**, **sorting**, **grouping**,  and **paging**. These actions trigger the [dataStateChange](https://ej2.syncfusion.com/angular/documentation/api/grid/#datastatechange) event, which provides you with the opportunity to manage and manipulate data according to the individual's interactions. 

**Using the dataStateChange event**

The `dataStateChange` event is triggered whenever you perform actions that modify the state of the grid's data, such as changing pages, applying sorting, or grouping. This event provides detailed information about the action performed and the current state of the grid, including parameters like page number, sorting details, and filtering criteria.

To implement the `dataStateChange` event, follow these steps:

1. **Subscribe to the event:** In your component code, subscribe to the `dataStateChange` event using the appropriate event handler function. This function will be executed whenever you interact with the grid.

2. **Handle data state:** Inside the event handler function, you can access the event arguments to determine the individual actions and intentions. The action property of the event arguments indicates the type of action performed (e.g., paging, sorting, grouping).

> The `dataStateChange` event will not be triggered during the initial rendering. If you want the grid to display records, you can perform the operation in the `ngOnInit`.

### Handling searching operation

When performing a search operation in the grid, the `dataStateChange` event is triggered, allowing access to the following referenced arguments within the event

![Searching](../images/observables-searching.png)

You can change the Observable based on the new grid data state of search action as follows:

```typescript
private applySearching(query: Query, search: Array<any>): void {
  // Check if a search operation is requested
  if (search && search.length > 0) {
    // Extract the search key and fields from the search array
    const { fields, key } = search[0];
    // perform search operation using the field and key on the query
    query.search(key, fields);
  }
}
/** GET all data from the server */
getAllData(state: any, action: any): Observable<any> {
  const query = new Query();
  // search
  if (state.search) {
    this.applySearching(query, state.search);
  };
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
```
### Handling filtering operation

When filtering operation is performed in the grid, the `dataStateChange` event is triggered, providing access to the following referenced arguments within the event.

![FilterBar](../images/observables-filterbar.png)

You can change the Observable based on the new grid data state of filter action as follows:

```typescript
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
```

![Filtering Multiple Values](../images/observables-multiple-filtering.png)

When filtering multiple values, you can get the predicates as arguments in the `dataStateChange` event. You can create your predicate execution based on the predicates values.

### Handling sorting operation

When sorting operation is performed in the grid, the dataStateChange event is triggered, and within this event, you can access the following referenced arguments.

![Sorting](../images/observables-sorting.png)

When performing multi-column sorting, you can get the below referred arguments in the `dataStateChange` event.

![Multi Sorting](../images/observables-multi-sorting.png)

You can change the Observable based on the new grid data state of sort action as follows:

```typescript
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
/** GET all data from the server */
getAllData(state: any, action: any): Observable<any> {
  const query = new Query();
  // sorting
  if (state.sorted) {
    state.sorted.length ? this.applySorting(query, state.sorted) :
      // initial sorting
      state.sorted.columns.length ? this.applySorting(query, state.sorted.columns) : null
  } 
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
```

### Handling paging operation

When paging operation is performed in the grid, the `dataStateChange` event is triggered, and within this event, you can access the following referenced arguments.

![Paging](../images/observables-paging.png)

You can change the Observable based on the new grid data state of page action as follows:

```typescript
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
```

### Handling grouping operation

When grouping operation is performed in the grid, the `dataStateChange` event is triggered, providing access to the following referenced arguments within the event.

![Grouping](../images/observables-grouping.png)

You can change the Observable based on the new grid data state of group action as follows:

```typescript
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
/** GET all data from the server */
getAllData(state: any, action: any): Observable<any> {
  const query = new Query();
  // grouping
  if (state.group) {
    state.group.length ? this.applyGrouping(query, state.group) :
      // initial grouping
      state.group.columns.length ? this.applyGrouping(query, state.group.columns) : null
  }
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
```

> * In order to utilize group action, it is necessary to manage the sorting query.

**Lazy load grouping**

In Angular, lazy loading refers to the technique of loading data dynamically when they are needed, instead of loading everything upfront. Lazy load grouping allows you to load and display grouped data efficiently by fetching only the required data on demand. 

To enable this feature, you need to set the [groupSettings.enableLazyLoading](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#enableLazyLoading) property to **true**. Also, you need to manage the state based on the initial grid action as follows.

```typescript
public ngOnInit(): void {
  this.groupOptions = { columns: ['ProductName'], enableLazyLoading: true, };
  const state = { skip: 0, take: 12, group:this.groupOptions };
  this.crudService.execute(state, query);
}
```

Based on the initial state, you can get the arguments as shown below

![Lazy load group](../images/observables-lazy-load-grouping.png)

You can change the Observable based on the grid state as follows:

```typescript
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
/** GET all data from the server */
getAllData(state: any, action: any): Observable<any> {
  const query = new Query();
  // grouping
  if (state.group) {
    state.group.length ? this.applyGrouping(query, state.group) :
      // initial grouping
      state.group.columns.length ? this.applyGrouping(query, state.group.columns) : null
  }
  // lazy load grouping
  this.applyLazyLoad(query, state)
  // initial grouping with lazy load
  if (state.group && state.group.enableLazyLoading) {
    query.lazyLoad.push({ key: 'isLazyLoad', value: true })
  }
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
```

> Further information can be accessed in the respective documentation for [lazy load grouping](https://ej2.syncfusion.com/angular/documentation/grid/grouping/lazy-load-grouping).

The complete example is available in the [handling CRUD operations topic](#handling-crud-operations).

### Handling CRUD operations

The Grid component provides powerful options for dynamically inserting, deleting, and updating records, enabling you to modify data directly within the grid. This feature is useful when you want to perform CRUD (**Create**, **Read**, **Update**, **Delete**) operations seamlessly.

**Integrating CRUD Operations**

To implement CRUD operations using Syncfusion Grid, follow these steps:

1. **Configure grid settings:** Set up the necessary grid settings, such as editing, adding, and deleting records. Define the toolbar options to facilitate your interactions.

2. **Handle data state changes:** Utilize the [dataStateChange](https://ej2.syncfusion.com/angular/documentation/api/grid/#datastatechange) event to respond to changes in the grid's data state. This event is triggered whenever you interact with the grid, such as paging or sorting.

3. **Execute CRUD operations:** Within the event handler for [dataSourceChanged](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasourcechanged), implement logic to handle various CRUD actions based on the action or `requestType` property of the event arguments.

4. **Call endEdit method:** After performing CRUD operations (adding, editing, or deleting), call the [endEdit](https://ej2.syncfusion.com/angular/documentation/api/grid/#endedit) method to signal the completion of the operation and update the grid accordingly.

**Insert operation**

When an insert operation is performed in the grid, the `dataSourceChanged` event will be triggered, allowing access to the following referenced arguments within the event.

![Insert record](../images/observables-adding.png)

```typescript
  /** POST: add a new record to the server */
  addRecord(state: DataSourceChangedEventArgs): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl, state.data, httpOptions);
  }
```

**Edit operation**

When an edit operation is performed in the grid, the `dataSourceChanged` event will be triggered, providing access to the following referenced arguments within the event.

![Edit record](../images/observables-editing.png)

```typescript
  /** PUT: update the record on the server */
  updateRecord(state: DataSourceChangedEventArgs): Observable<Customer> {
    return this.http.put(this.customersUrl, state.data, httpOptions);
  }
```

**Delete operation**

When a delete operation is performed in the grid, the `dataSourceChanged` event will be triggered, allowing access to the following referenced arguments within the event.

![Delete record](../images/observables-deleting.png)

```typescript
  /** DELETE: delete the record from the server */
  deleteRecord(state: any): Observable<Customer> {
    const id = state.data[0].id;
    const url = `${this.customersUrl}/${id}`;
    return this.http.delete<Customer>(url, httpOptions);
  }
```

The following example demonstrates how to bind observable data with using async pipe to handle grid actions and CRUD operations. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/observables-async/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="crud.service.ts" %}
{% include code-snippet/grid/observables-async/src/crud.service.ts %}
{% endhighlight %}
{% highlight ts tabtitle="data.service.ts" %}
{% include code-snippet/grid/observables-async/src/data.ts %}
{% endhighlight %}
{% highlight ts tabtitle="customers.ts" %}
{% include code-snippet/grid/observables-async/src/customers.ts %}
{% endhighlight %}
{% highlight ts tabtitle="congif.ts" %}
{% include code-snippet/grid/observables-async/src/app.config.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/observables-async" %}

> * While working with grid edit operation, defining the `isPrimaryKey` property of column is a mandatory step. In case the primary key column is not defined, the edit or delete action will take place on the first row of the grid.
> * Need to maintain the same observable instance for all grid actions.
> * You can refer the guidelines for CRUD using observables [here](https://www.youtube.com/watch?v=yGLdi_Es0ac)

### Export all records in client side

Export all records with async pipe is especially beneficial when dealing with large datasets that need to be exported for offline analysis or sharing.

By default, when utilizing observables for Grid data binding, the export operation exports only the records on the current page. However, the Syncfusion Angular Grid component allows you to export all records, including those from multiple pages, by configuring the `pdfExportProperties` and `excelExportProperties` in conjunction with the Async Pipe for data binding.

To export all records, including those from multiple pages, configure the [pdfExportProperties.dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#datasource) for PDF exporting and [excelExportProperties.dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties#datasource) for Excel exporting within the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event handler. Inside this event, set the `dataSource` property of `pdfExportProperties` and `excelExportProperties` for PDF and Excel exporting to include all records.

**Excel Exporting**

To export the complete grid data to Excel, utilize the `excelExportProperties.dataSource` when initiating the Excel export. Use the following code snippet to export all records within the grid:

```typescript
 this.service.getData(state).subscribe((e: any) => {
  let excelExportProperties: ExcelExportProperties = {
    dataSource: e.result ? e.result : result
  };
  (this.grid as GridComponent).excelExport(excelExportProperties);// need to call excelExport method of grid when get the entire data
});
```

**Pdf Exporting**

To export the complete grid data to PDF document, utilize the `pdfExportProperties.dataSource` when initiating the PDF export. Use the following code snippet to export all records within the grid:

```typescript
 this.service.getData(state).subscribe((e: any) => {
  let pdfExportProperties: PdfExportProperties = {
    dataSource: e.result ? e.result : result
  };
  (this.grid as GridComponent).pdfExport(pdfExportProperties); // need to call pdfExport method of grid when get the entire data
});
```

> Further customization on grid export can be accessed in the respective documentation for [PDF exporting](https://ej2.syncfusion.com/angular/documentation/grid/pdf-export/pdf-export-options) and [Excel exporting](https://ej2.syncfusion.com/angular/documentation/grid/excel-export/excel-export-options)

The following code example shows how to export all records in client side for observable using the async pipe.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import {DataStateChangeEventArgs, PdfExportProperties, ExcelExportProperties} from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from "@syncfusion/ej2-navigations";
import { DataService } from './order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `<ejs-grid #grid [dataSource]='data | async' (excelExportComplete)="exportComplete()" (pdfExportComplete)="exportComplete()" [allowExcelExport]='true' [allowPdfExport]='true' allowPaging='true' [pageSettings]='pageOptions' [toolbar]="toolbar" (toolbarClick)='toolbarClick($event)' (dataStateChange)= 'dataStateChange($event)'>
                <e-columns>
                  <e-column field='OrderID' headerText='Order ID' width='90' textAlign='Right' isPrimaryKey='true'></e-column>
                  <e-column field="CustomerID" headerText="Customer Name" width="100"></e-column>
                  <e-column field='ShipName' headerText="Ship Name" width=110></e-column>
                  <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
                  <e-column field='Freight' headerText='Freight' format='C2' textAlign='Right' width=100></e-column>
                </e-columns>
              </ejs-grid>`,
  providers: [DataService],
})
export class AppComponent implements OnInit {
  public data?: Observable<DataStateChangeEventArgs>;
  public state?: DataStateChangeEventArgs;
  public pageOptions?: object;
  public toolbar?: string[];
  @ViewChild('grid')
  public grid?: GridComponent;

  constructor(public service: DataService) {
    this.data = service;
  }

  public dataStateChange(state: DataStateChangeEventArgs): void {
    this.service.execute(state);
  }

  exportComplete() {
    (this.grid as GridComponent).hideSpinner(); // hide the spinner when export completed
  }

  toolbarClick(args: ClickEventArgs): void {
    let state: any = { action: {}, skip: 0, take: (this.grid as GridComponent).pageSettings.totalRecordsCount };
    let result = {};
    switch (args.item.text) {
      case "PDF Export":
        (this.grid as GridComponent).showSpinner(); // show the spinner when send the post to service
        state.action.isPdfExport = true;
        // fetch the entire data while PDF exporting
        this.service.getData(state).subscribe((e: any) => {
          let pdfExportProperties: PdfExportProperties = {
            dataSource: e.result ? e.result : result
          };
          (this.grid as GridComponent).pdfExport(pdfExportProperties); // need to call pdfExport method of grid when get the entire data
        });
        break;
      case "Excel Export":
        // fetch the entire data while Excel exporting
        (this.grid as GridComponent).showSpinner();// show the spinner when send the post to service
        state.action.isExcelExport = true;
        this.service.getData(state).subscribe((e: any) => {
          let excelExportProperties: ExcelExportProperties = {
            dataSource: e.result ? e.result : result
          };
          (this.grid as GridComponent).excelExport(excelExportProperties);// need to call excelExport method of grid when get the entire data
        });
        break;
    }
  }
  public ngOnInit(): void {
    this.pageOptions = { pageSize: 10, pageCount: 4 };
    const state = { skip: 0, take: 10 };
    this.toolbar = ["ExcelExport", "PdfExport",];
    this.service.execute(state);
  }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="order.service.ts" %}
{% raw %}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataStateChangeEventArgs,DataResult} from '@syncfusion/ej2-angular-grids';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { map } from 'rxjs';

@Injectable()
export class DataService extends Subject<DataStateChangeEventArgs> {

  private BASE_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders';

  constructor(private http: HttpClient) {
    super();
  }

  public execute(state: any): void {
    this.getData(state).subscribe(x => super.next(x));
  }

  public getData(state: DataStateChangeEventArgs): Observable<DataStateChangeEventArgs> {
    const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
    
    return this.http
      .get(`${this.BASE_URL}?${pageQuery}&$count=true`)
      .pipe(map((response: any) => response))
      .pipe(map((response: any) => (<DataResult>{
        result: response['value'],
        count: parseInt(response['@odata.count'], 10),
      })))
    .pipe((data: any) => data);
  }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Binding observable data without using async pipe

In Angular, [Observables](https://angular.io/guide/observables) data can be bound to UI elements using the [AsyncPipe](https://angular.io/api/common/AsyncPipe), which simplifies the process of subscribing to observables and managing the subscription life cycle. However, there are scenarios where you need to bind observable data to components without utilizing the async pipe. This approach offers more control over the subscription and data manipulation processes. 

To bind observable data without using the async pipe in the Grid, follow these steps:

1. Subscribe to the observable data in the component.

2. Manually update the data source of the grid when the observable emits new values.

### Handling searching operation

When searching operation is performed in the grid, the dataStateChange event is triggered, providing access to the following referenced arguments within the event.

![Searching](../images/observables-searching.png)

You can change the Observable based on the new grid data state of search action as follows:

```typescript
private applySearching(query: Query, search: Array<any>): void {
  // Check if a search operation is requested
  if (search && search.length > 0) {
    // Extract the search key and fields from the search array
    const { fields, key } = search[0];
    // perform search operation using the field and key on the query
    query.search(key, fields);
  }
}
/** GET all data from the server */
getAllData(state: any, action: any): Observable<any> {
  const query = new Query();
    // search
    if (state.search) {
      this.applySearching(query, state.search);
    };
    // To get the count of the data
    query.isCountRequired = true
}
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
```

### Handling filtering operation

When filtering operation is performed in the grid, the `dataStateChange` event is triggered, providing access to the following referenced arguments within the event

![FilterBar](../images/observables-filterbar.png)

You can change the Observable based on the new grid data state of filter action as follows:

```typescript
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
```

![Filtering Multiple Values](../images/observables-multiple-filtering.png)

When filtering multiple values, you can get the predicates as arguments in the `dataStateChange` event. You can create your predicate execution based on the predicates values.

### Handling sorting operation

When sorting operation is performed in the grid, the `dataStateChange` event is triggered, and within this event, you can access the following referenced arguments

![Sorting](../images/observables-sorting.png)

When performing multi-column sorting, you can get the below referred arguments in the `dataStateChange` event.

![Multi Sorting](../images/observables-multi-sorting.png)

You can change the Observable based on the new grid data state of sort action as follows:

```typescript
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
/** GET all data from the server */
getAllData(state: any, action: any): Observable<any> {
  const query = new Query();
  // sorting
  if (state.sorted) {
    state.sorted.length ? this.applySorting(query, state.sorted) :
      // initial sorting
      state.sorted.columns.length ? this.applySorting(query, state.sorted.columns) : null
  } 
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
```

### Handling paging operation

When paging operation is performed in the grid, the dataStateChange event is triggered, and within this event, you can access the following referenced arguments.

![Paging](../images/observables-paging.png)

You can change the Observable based on the new grid data state of page action as follows:

```typescript
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
```

### Handling grouping operation

When grouping operation is performed in the grid, the dataStateChange event is triggered, providing access to the following referenced arguments within the event.

![Grouping](../images/observables-grouping.png)

You can change the Observable based on the new grid data state of group action as follows:

```typescript
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
/** GET all data from the server */
getAllData(state: any, action: any): Observable<any> {
  const query = new Query();
  // grouping
  if (state.group) {
    state.group.length ? this.applyGrouping(query, state.group) :
      // initial grouping
      state.group.columns.length ? this.applyGrouping(query, state.group.columns) : null
  }
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
```

> * In order to utilize group actions, it is necessary to manage the sorting query.

**Lazy load grouping**

In Angular, lazy loading refers to the technique of loading data dynamically when they are needed, instead of loading everything upfront. Lazy load grouping allows you to load and display grouped data efficiently by fetching only the required data on demand. 

To enable this feature, you need to set the [groupSettings.enableLazyLoading](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#enableLazyLoading) property to **true**. Also, you need to manage the state based on the initial grid action as follows.

```typescript
public ngOnInit(): void {
  this.groupOptions = { columns: ['ProductName'], enableLazyLoading: true, };
  const state = { skip: 0, take: 12, group:this.groupOptions };
  this.crudService.execute(state, query);
}
```

Based on the initial state, you can get the arguments as shown below

![Lazy load group](../images/observables-lazy-load-grouping.png)

You can change the Observable based on the grid state as follows:

```typescript
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
/** GET all data from the server */
getAllData(state: any, action: any): Observable<any> {
  const query = new Query();
  // grouping
  if (state.group) {
    state.group.length ? this.applyGrouping(query, state.group) :
      // initial grouping
      state.group.columns.length ? this.applyGrouping(query, state.group.columns) : null
  }
  // lazy load grouping
  this.applyLazyLoad(query, state)
  // initial grouping with lazy load
  if (state.group && state.group.enableLazyLoading) {
    query.lazyLoad.push({ key: 'isLazyLoad', value: true })
  }
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
```

> Further information can be accessed in the respective documentation for [lazy load grouping](https://ej2.syncfusion.com/angular/documentation/grid/grouping/lazy-load-grouping).

The complete example is available in the [Handling CRUD operations topic](#handling-crud-operations).

### Handling CRUD operations

The Grid component provides powerful options for dynamically inserting, deleting, and updating records, enabling you to modify data directly within the grid. This feature is useful when you want to perform CRUD (**Create**, **Read**, **Update**, **Delete**) operations seamlessly.

**Integrating CRUD Operations**

To implement CRUD operations using Syncfusion Grid, follow these steps:

1. **Configure grid settings:** Set up the necessary grid settings, such as editing, adding, and deleting records. Define the toolbar options to facilitate your interactions.

2. **Handle data state changes:** Utilize the [dataStateChange](https://ej2.syncfusion.com/angular/documentation/api/grid/#datastatechange) event to respond to changes in the grid's data state. This event is triggered whenever you interact with the grid, such as paging or sorting.

3. **Execute CRUD operations:** Within the event handler for [dataSourceChanged](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasourcechanged), implement logic to handle various CRUD actions based on the action or requestType property of the event arguments.

4. **Call endEdit method:** After performing CRUD operations (adding, editing, or deleting), call the [endEdit](https://ej2.syncfusion.com/angular/documentation/api/grid/#endedit) method to signal the completion of the operation and update the grid accordingly.

**Insert operation**

When an insert operation is performed in the grid, the `dataSourceChanged` event will be triggered, allowing access to the following referenced arguments within the event.

![Adding](../images/observables-adding.png)

```typescript
  /** POST: add a new record  to the server */
  addRecord(state: DataSourceChangedEventArgs): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl, state.data, httpOptions);
  }
```

**Edit operation**

When an edit operation is performed in the grid, the `dataSourceChanged` event will be triggered, providing access to the following referenced arguments within the event.

![Editing](../images/observables-editing.png)

```typescript
  /** PUT: update the record on the server */
  updateRecord(state: DataSourceChangedEventArgs): Observable<Customer> {
    return this.http.put(this.customersUrl, state.data, httpOptions);
  }
```

**Delete operation**

When a delete operation is performed in the grid, the `dataSourceChanged` event will be triggered, allowing access to the following referenced arguments within the event.

![Deleting](../images/observables-deleting.png)

```typescript
  /** DELETE: delete the record from the server */
  deleteRecord(state: any): Observable<Customer> {
    const id = state.data[0].id;
    const url = `${this.customersUrl}/${id}`;
    return this.http.delete<Customer>(url, httpOptions);
  }
```

The following example demonstrates how to bind observable data without using async pipe to handle grid actions and CRUD operations. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/observables-non-async/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="order.service.ts" %}
{% include code-snippet/grid/observables-non-async/src/crud.service.ts %}
{% endhighlight %}
{% highlight ts tabtitle="data.service.ts" %}
{% include code-snippet/grid/observables-non-async/src/data.ts %}
{% endhighlight %}
{% highlight ts tabtitle="customers.ts" %}
{% include code-snippet/grid/observables-non-async/src/customers.ts %}
{% endhighlight %}
{% highlight ts tabtitle="congif.ts" %}
{% include code-snippet/grid/observables-non-async/src/app.config.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/observables-non-async" %}

> Improper handling of observables and subscriptions may lead to memory leaks and unexpected behavior. Ensure to handle subscriptions properly, especially when dealing with long-lived observables.

### Export all records in client side

Export all records is especially beneficial when dealing with large datasets that need to be exported for offline analysis or sharing.

By default, when utilizing observables for Grid data binding, the export operation exports only the records on the current page. However, the Syncfusion Angular Grid component allows you to export all records, including those from multiple pages, by configuring the pdfExportProperties and excelExportProperties.

To export all records, including those from multiple pages, configure the [pdfExportProperties.dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#datasource) for PDF exporting and [excelExportProperties.dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties#datasource) for Excel exporting within the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event handler. Inside this event, set the `dataSource` property of `pdfExportProperties` and `excelExportProperties` for PDF and Excel exporting to include all records.

**Excel Exporting**

To export the complete grid data to Excel, utilize the `excelExportProperties.dataSource` when initiating the Excel export. Use the following code snippet to export all records within the grid:

```typescript
 this.service.getData(state).subscribe((e: any) => {
  let excelExportProperties: ExcelExportProperties = {
    dataSource: e.result ? e.result : result
  };
  (this.grid as GridComponent).excelExport(excelExportProperties);// need to call excelExport method of grid when get the entire data
});
```

**Pdf Exporting**

To export the complete grid data to PDF document, utilize the `pdfExportProperties.dataSource` when initiating the PDF export. Use the following code snippet to export all records within the grid:

```typescript
 this.service.getData(state).subscribe((e: any) => {
  let pdfExportProperties: PdfExportProperties = {
    dataSource: e.result ? e.result : result
  };
  (this.grid as GridComponent).pdfExport(pdfExportProperties); // need to call pdfExport method of grid when get the entire data
});
```

> Further customization on grid export can be accessed in the respective documentation for [PDF exporting](https://ej2.syncfusion.com/angular/documentation/grid/pdf-export/pdf-export-options) and [Excel exporting](https://ej2.syncfusion.com/angular/documentation/grid/excel-export/excel-export-options)

The following code example shows how to export all records in client side for observable without using the async pipe.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import {DataStateChangeEventArgs, PdfExportProperties, ExcelExportProperties} from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from "@syncfusion/ej2-navigations";
import { DataService } from './order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `<ejs-grid #grid [dataSource]='data' (excelExportComplete)="exportComplete()" (pdfExportComplete)="exportComplete()" [allowExcelExport]='true' [allowPdfExport]='true' allowPaging='true' [pageSettings]='pageOptions' [toolbar]="toolbar" (toolbarClick)='toolbarClick($event)' (dataStateChange)= 'dataStateChange($event)'>
                <e-columns>
                  <e-column field='OrderID' headerText='Order ID' width='90' textAlign='Right' isPrimaryKey='true'></e-column>
                  <e-column field="CustomerID" headerText="Customer Name" width="100"></e-column>
                  <e-column field='ShipName' headerText="Ship Name" width=110></e-column>
                  <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
                  <e-column field='Freight' headerText='Freight' format='C2' textAlign='Right' width=100></e-column>
                </e-columns>
              </ejs-grid>`,
  providers: [DataService],
})
export class AppComponent implements OnInit {
  public data?: object;
  public state?: DataStateChangeEventArgs;
  public pageOptions?: object;
  public toolbar?: string[];
  @ViewChild('grid')
  public grid?: GridComponent;

  constructor(public service: DataService) {
    this.data = service;
  }

  public dataStateChange(state: DataStateChangeEventArgs): void {
    this.service.getData(state).subscribe(response => (this.data = response));
  }

  exportComplete() {
    (this.grid as GridComponent).hideSpinner(); // hide the spinner when export completed
  }

  toolbarClick(args: ClickEventArgs): void {
    let state: any = { action: {}, skip: 0, take: (this.grid as GridComponent).pageSettings.totalRecordsCount };
    let result = {};
    switch (args.item.text) {
      case "PDF Export":
        (this.grid as GridComponent).showSpinner(); // show the spinner when send the post to service
        state.action.isPdfExport = true;
        // fetch the entire data while PDF exporting
        this.service.getData(state).subscribe((e: any) => {
          let pdfExportProperties: PdfExportProperties = {
            dataSource: e.result ? e.result : result
          };
          (this.grid as GridComponent).pdfExport(pdfExportProperties); // need to call pdfExport method of grid when get the entire data
        });
        break;
      case "Excel Export":
        // fetch the entire data while Excel exporting
        (this.grid as GridComponent).showSpinner();// show the spinner when send the post to service
        state.action.isExcelExport = true;
        this.service.getData(state).subscribe((e: any) => {
          let excelExportProperties: ExcelExportProperties = {
            dataSource: e.result ? e.result : result
          };
          (this.grid as GridComponent).excelExport(excelExportProperties);// need to call excelExport method of grid when get the entire data
        });
        break;
    }
  }
  public ngOnInit(): void {
    this.pageOptions = { pageSize: 10, pageCount: 4 };
    const state = { skip: 0, take: 10 };
    this.toolbar = ["ExcelExport", "PdfExport",];
    this.service.getData(state).subscribe(response => (this.data = response));
  }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="order.service.ts" %}
{% raw %}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataStateChangeEventArgs,DataResult} from '@syncfusion/ej2-angular-grids';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { map } from 'rxjs';

@Injectable()
export class DataService extends Subject<DataStateChangeEventArgs> {

  private BASE_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders';

  constructor(private http: HttpClient) {
    super();
  }

  public execute(state: any): void {
    this.getData(state).subscribe(x => super.next(x));
  }

  public getData(state: DataStateChangeEventArgs): Observable<DataStateChangeEventArgs> {
    const pageQuery = `$skip=${state.skip}&$top=${state.take}`;

    return this.http
    .get(`${this.BASE_URL}?${pageQuery}&$count=true`)
    .pipe(map((response: any) => response))
    .pipe(map((response: any) => {
      return state.dataSource === undefined ? (<DataResult>{
          
        result: response['value'],
        count: parseInt(response['@odata.count'], 10),
      }) : response['value'];
    }))
    .pipe(map((data: any) => data));
  }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Sending additional parameters to the server

The Syncfusion Grid component allows you to include custom parameters in data requests. This feature is particularly useful when you need to provide additional information to the server enhanced processing.

By utilizing the [query](https://ej2.syncfusion.com/angular/documentation/api/grid/#query) property of the grid along with the `addParams` method of the Query class, you can easily incorporate custom parameters into data requests for every grid action.

To enable custom parameters in data requests for the grid component, follow these steps:

**1. Bind the Query Object to the Grid**: Assign the initialized query object to the `query` property of the Syncfusion Grid component.

**2. Initialize the Query Object:** Create a new instance of the `Query` class and use the `addParams` method to add the custom parameters.

**3. Handle Data State Changes:** If you need to dynamically update the data based on interactions, implement the `dataStateChange` event handler to execute the query with the updated state.

**4. Execute Data Request:** In the service, execute the data request by combining the custom parameters with other query parameters such as paging and sorting.

The following example demonstrates how to send additional parameters to the server using observables.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/observables-additional-parameters/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="order.service.ts" %}
{% include code-snippet/grid/observables-additional-parameters/src/order.service.ts %}
{% endhighlight %}

{% endtabs %}

{% previewsample "page.domainurl/samples/grid/observables-additional-parameters" %}

![AdditionalParameters](../images/additional_parameters.png)

## Offline mode

On remote data binding, all grid actions such as paging, sorting, editing, grouping, filtering, etc, will be processed on server-side. To avoid post back for every action, set the grid to load all data on initialization and make the actions process in client-side. To enable this behavior, use the `offline` property of `DataManager`.

```typescript
import { Component, OnInit } from '@angular/core';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowPaging]='true' [allowGrouping]='true' [allowSorting]='true' [pageSettings]='pageOptions'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: DataManager;
    public pageOptions = { pageSize: 7 };

    ngOnInit(): void {
        this.data = new DataManager({
            url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders?$top=7',
            adaptor: new ODataAdaptor(),
            offline: true
        });
    }
}

```