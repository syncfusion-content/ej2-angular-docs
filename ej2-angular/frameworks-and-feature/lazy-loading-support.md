---
layout: post
title: Lazy loading support in Angular Frameworks and feature component | Syncfusion
description: Learn here all about Lazy loading support in Syncfusion Angular Frameworks and feature component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Lazy loading support 
documentation: ug
domainurl: ##DomainURL##
---

# Angular Lazy Loading

This section explains how to implement Lazy Loading with Essential JS2 Angular components in Angular, which improves the initial loading time of the application by loading only the necessary modules on demand.

## Lazy Loading

Lazy loading is a technique that loads additional payload only when needed, which can improve the overall performance and user experience of your Angular application. By using code splitting, you can lazy load the Syncfusion components and routes in Angular. This can reduce the initial loading time of the application.

## Creating a Syncfusion component in Angular

To create a Syncfusion component in Angular, refer to the [getting started](../getting-started/angular-cli.md) documentation. Additionally, you can refer to the Angular [lazy-loading](https://angular.io/guide/lazy-loading-ngmodules) documentation for more information on how to implement lazy loading in your application.

Here's an example of an Angular application that has routing enabled and uses lazy loading to load the `CustomersComponent` and `OrdersComponent`.

Here's an example of an Angular application that has routing enabled and uses lazy loading to load the CustomersComponent and OrdersComponent.

In the `customers.component.ts` file, the Syncfusion Calendar component is added as follows,

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  template: `<ejs-calendar [value]='dateValue' [min]='minDate' [max]='maxDate'></ejs-calendar>`
})
export class CustomersComponent implements OnInit {
  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();
  public dateValue: Date = new Date(this.fullYear, this.month, 11);
  public minDate: Date = new Date(this.fullYear, this.month, 9);
  public maxDate: Date = new Date(this.fullYear, this.month, 15);
  constructor() { }

  ngOnInit() {
  }

}
```

In the `orders.component.ts` file, the Syncfusion Grid component is added as follows,

```typescript
import { Component, OnInit } from '@angular/core';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-orders',
  template: ` <ejs-grid [dataSource]='data'>
  <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
      <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
      <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
  </e-columns>
  </ejs-grid>`,
})
export class OrdersComponent implements OnInit {
  public data: DataManager;
  constructor() { }

  ngOnInit() {
    this.data = new DataManager({
      url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/?$top=7',
      adaptor: new ODataV4Adaptor()
    });
  }
}
```

In the `app-routing.module.ts` file, we've implemented code splitting to dynamically import the components.

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
```

In the above code block, we are using loadChildren property in the routing configuration to lazily load the `CustomersModule` and `OrdersModule` when the user navigates to the corresponding routes. This way, the application only loads the necessary modules on demand, improving the initial loading time and performance of the application.