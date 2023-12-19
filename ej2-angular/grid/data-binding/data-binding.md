---
layout: post
title: Data binding in Angular Grid component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Angular Grid component

The Grid uses **DataManager** which supports both RESTful JSON data services binding and local JavaScript object array binding.

The [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource) property can be assigned either with the instance of **DataManager** or JavaScript object array collection.

It supports two kinds of data binding methods:
* Local data
* Remote data

To learn about how to bind local, remote or observables data to Angular Grid, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=Xkq1tXOXL7k" %}

## Sending additional parameters to the server

To add a custom parameter to the data request, use the **addParams** method of **Query** class. Assign the **Query** object with additional parameters to the grid [`query`](https://ej2.syncfusion.com/angular/documentation/api/grid/#query) property.

```typescript
import { Component, OnInit } from '@angular/core';
import { DataManager, ODataAdaptor, Query } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [query]='query'>
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
    public query: Query;

    ngOnInit(): void {
        this.data = new DataManager({
            url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders?$top=7',
            adaptor: new ODataAdaptor()
        });
        this.query = new Query().addParams('ej2grid', 'true');
    }
}

```

> The parameters added using the [`query`](https://ej2.syncfusion.com/angular/documentation/api/grid/#query) property will be sent along with the data request for every grid action.

## Handling HTTP error

During server interaction from the grid, some server-side exceptions may occur, and you can acquire those error messages or exception details in client-side using the [`actionFailure`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionfailure) event.

The argument passed to the [`actionFailure`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionfailure) Grid event contains the error details returned from the server.

```typescript
import { Component, OnInit } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' (actionFailure)="onActionFailure($event)">
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

    ngOnInit(): void {
        this.data = new DataManager({
            url: 'http://some.com/invalidUrl'
        });
    }

    onActionFailure(e: Error): void {
        alert('Server exception: 404 Not found');
    }
}

```

> The [`actionFailure`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionfailure) event will be triggered not only for the server errors, but also when there is an exception while processing the grid actions.

## Binding with ajax

You can use Grid [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource) property to bind the datasource to Grid from external ajax request. In the below code we have fetched the datasource from the server with the help of ajax request and provided that to [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource) property by using **onSuccess** event of the ajax.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { Ajax } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  template: `<input type="button" id="btn" (click)="click()" value="Click"/>
                <ejs-grid #Grid>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' textAlign='Right' width=120></e-column>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right' width=120></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {
  public data: object[];
  @ViewChild('Grid') public grid: GridComponent;
  ngOnInit(): void {
  }
  click() {
    const grid = this.grid;  // Grid instance
    const ajax = new Ajax('https://ej2services.syncfusion.com/production/web-services/api/Orders', 'GET');
    ajax.send();
    ajax.onSuccess = (data: string) => {
       grid.dataSource = JSON.parse(data);
    };
  }
}

```

> If you bind the dataSource from this way, then it acts like a local dataSource. So you cannot perform any server side crud actions.

## See Also

* [Binding a firebase data source to Grid using AngularFire2](https://www.syncfusion.com/blogs/post/binding-a-firebase-data-source-to-grid-using-angularfire2.aspx)
* [How to bind SQL Server data in Angular DataGrid using SqlClient data provider](https://www.syncfusion.com/kb/11453/how-to-bind-sql-server-data-in-angular-datagrid-using-sqlclient-data-provider)