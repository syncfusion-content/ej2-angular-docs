---
layout: post
title: Lazy loading support in Angular Frameworks | Syncfusion
description: Learn here all about Lazy loading support in Syncfusion Angular Frameworks and feature component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Lazy loading support 
documentation: ug
domainurl: ##DomainURL##
---

# Angular Lazy Loading

Lazy loading is an optimization technique used in Angular applications to improve performance by loading only the necessary modules on demand. This section provides a detailed guide on implementing lazy loading with Essential<sup style="font-size:70%">&reg;</sup> JS2 Angular components, including Syncfusion<sup style="font-size:70%">&reg;</sup> controls. Lazy loading is instrumental in minimizing the initial loading time, thereby enhancing user experience significantly.

## Lazy Loading

Lazy loading is a technique that loads additional payload only when needed, which can improve the overall performance and user experience of your Angular application. By using code splitting, you can lazy load the Syncfusion<sup style="font-size:70%">&reg;</sup> components and routes in Angular. This can reduce the initial loading time of the application.

## Creating a Syncfusion<sup style="font-size:70%">&reg;</sup> component in Angular

Begin developing your Angular application with Syncfusion<sup style="font-size:70%">&reg;</sup> components by following the [getting started guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-cli). Additionally, refer to the Angular [lazy-loading documentation](https://v17.angular.io/guide/lazy-loading-ngmodules) for a comprehensive understanding of implementing lazy loading.

Here's an example demonstrating the routing setup in an Angular application that implements lazy loading for `CustomersComponent` and `OrdersComponent`.

In the `customers.component.ts` file, we integrate the Syncfusion<sup style="font-size:70%">&reg;</sup> Calendar component:

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

  ngOnInit() {}
}
```

In the `orders.component.ts` file, implement the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component:

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
  </ejs-grid>`
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

Configure `app-routing.module.ts` for lazy loading by dynamically importing the required modules:

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
```

In the above code block, we are using loadChildren property in the routing configuration to lazily load the `CustomersModule` and `OrdersModule` when the user navigates to the corresponding routes. This way, the application only loads the necessary modules on demand, improving the initial loading time and performance of the application.

## Lazy loading using standalone application

This update enhances the previous documentation, focusing on Angular 17's latest features and improvements for building a standalone application with lazy loading.

## Standalone Components Enhancements

Angular 17 introduces the standalone component—a component not part of any ngModule that can be used with either other standalone or module-based components.

In the past, a lazy route pointed to an NgModule with child routes. As there are no NgModules anymore, loadChildren can now directly point to a lazy routing configuration:

## The standalone flag and component imports

Components, directives, and pipes can now be marked as standalone: true. Angular classes marked as standalone do not need to be declared in an NgModule (the Angular compiler will report an error if you try).

In Standalone application ensure `standalone: true` is added to both @Component decorators in customers.component.ts and orders.component.ts.

In the `customers.component.ts` file, the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component is added as follows,

```typescript
import { Component, OnInit } from '@angular/core';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-customers',
  standalone:true,
  imports: [
    CalendarModule,
    CommonModule,
    RouterModule
  ],
  template: `<ejs-calendar [value]='dateValue' [min]='minDate' [max]='maxDate'></ejs-calendar> 
  `
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

In the `orders.component.ts` file, the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component is added as follows,

```typescript
import { Component, OnInit } from '@angular/core';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { analyze } from 'eslint-scope';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    GridModule,
    CommonModule,
    RouterModule
  ],
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
  public data!: DataManager;
  constructor() { }

  ngOnInit() {
    this.data = new DataManager({
      url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/?$top=7',
      adaptor: new ODataV4Adaptor()
    });
  }
}
```

## Routing With Standalone Component

With NgModules, each lazy module introduced a new injector and hence a new injection scope. This scope was used for providing services only needed by the respective lazy chunk.

To cover such use cases, the Router now allows for introducing providers for each route. These services can be used by the route in question and their child routes:

In the `customers.routes.ts` file, the Syncfusion<sup style="font-size:70%">&reg;</sup> Calendar component is added as follows,

```typescript
import { Routes } from '@angular/router';
import { Customers } from './customer.component';

export const Customer: Routes = [
    {
        path: '',
        component: Customers
    }
];
```

In the `orders.routes.ts` file, the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component is added as follows,

```typescript
import { Routes } from '@angular/router';
import { Orders } from './order.component';

export const Order: Routes = [
    {
        path: '',
        component: Orders
    }
];
```

In the `app.routes.ts` file, code splitting to dynamically import the components has been implemented.

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'order',
        loadChildren: () => import('./customers/customers.routes').then((m) => m.OrderModule)
    },
    {
        path: 'customer',
        loadChildren: () => import('./orders/orders.routes').then((m) => m.CustomerModule)
    }
];
```

To ensure proper navigation between components in your Angular application, it is crucial to import the `RouterModule` in each of your component modules.

```typescript
import { RouterModule } from '@angular/router';

// Other imports and declarations...

@component({
  imports: [
    // ... Other modules
    RouterModule, // Ensure RouterModule is imported
  ],
})
```

The `RouterModule` provides Essential<sup style="font-size:70%">&reg;</sup> functionality for routing, allowing seamless navigation between different views.