---
layout: post
title: Systemjs with Angular Getting started component | Syncfusion
description:  Checkout and learn about Systemjs with Angular Getting started component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Systemjs 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion Angular and SystemJS

Refer to the following steps to create an angular application with `SystemJS` using Syncfusion Angular UI Components (Essential JS 2).

This section describes about how to create an angular application with SystemJS.

## Cloning Angular Quick Start 

To clone the [`Angular QuickStart`](https://github.com/angular/quickstart) project into a local folder, run the following commands: 
 
 ```bash
git clone https://github.com/angular/quickstart.git 
cd quickstart 
npm install 
```

Perform following steps to use Syncfusion angular components in angular app which uses SystemJS.

`NOTE:` The [`Angular QuickStart`](https://github.com/angular/quickstart)  project has been deprecated. To create new angular projects, [`Angular CLI`](./angular-cli/) is the best way.

## Installing Syncfusion Grid Package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the angular syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Add `@syncfusion/ej2-angular-grids` package to the application.

```bash
npm install @syncfusion/ej2-angular-grids --save
(or)
npm i @syncfusion/ej2-angular-grids --save
```

## Adding Grid Module

After installing the package, the component modules are available to configure into your application from the installed syncfusion package. Syncfusion Angular package provides two different types of `ngModules`.

Refer to [`Ng-Module`](../common/ng-module.html) to learn about `ngModules`.

Refer to the following snippet to import the button module in `app.module.ts` from the `@syncfusion/ej2-angular-grids`.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Imported syncfusion Grid module from buttons package
import { GridAllModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // Registering EJ2 Grid Module
    GridAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Adding Syncfusion Component

Add the grid component snippet in `app.component.ts` as follows.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: Object[];

    ngOnInit(): void {
        // For initializing DataSource to grid
        this.data = [
          {
              OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
              ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
              ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
          },
          {
              OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
              ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
              ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
          },
          {
              OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
              ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
              ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
          }
        ];
      }
}
```

## Adding CSS Reference

The following CSS files are available in `../node_modules/@syncfusion` package. This can be referred in `[src/styles.css]` using following code. 

```css
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
```

## Configuring SystemJS

The `systemJS` configuration file has been placed in the project template under `src/systemjs.config.js`. 
 
To add the Syncfusion angular packages refer below code snippet. Need to add required syncfusion packages in `systemjs.config.js` file at `map` section 

```typescript
      map:{
      '@syncfusion/ej2-angular-grids':  'npm:@syncfusion/ej2-angular-grids/dist/ej2-angular-grids.umd.min.js',
      '@syncfusion/ej2-angular-base':'npm:@syncfusion/ej2-angular-base/dist/ej2-angular-base.umd.min.js',
      '@syncfusion/ej2-base':'npm:@syncfusion/ej2-base/dist/ej2-base.umd.min.js',
      '@syncfusion/ej2-buttons':'npm:@syncfusion/ej2-buttons/dist/ej2-buttons.umd.min.js',
      '@syncfusion/ej2-grids':'npm:@syncfusion/ej2-grids/dist/ej2-grids.umd.min.js',
      '@syncfusion/ej2-calendars':'npm:@syncfusion/ej2-calendars/dist/ej2-calendars.umd.min.js',
      '@syncfusion/ej2-compression':'npm:@syncfusion/ej2-compression/dist/ej2-compression.umd.min.js',
      '@syncfusion/ej2-data':'npm:@syncfusion/ej2-data/dist/ej2-data.umd.min.js',
      '@syncfusion/ej2-dropdowns':'npm:@syncfusion/ej2-dropdowns/dist/ej2-dropdowns.umd.min.js',
      '@syncfusion/ej2-lists':'npm:@syncfusion/ej2-lists/dist/ej2-lists.umd.min.js',
      '@syncfusion/ej2-navigations':'npm:@syncfusion/ej2-navigations/dist/ej2-navigations.umd.min.js',
      '@syncfusion/ej2-popups':'npm:@syncfusion/ej2-popups/dist/ej2-popups.umd.min.js',
      '@syncfusion/ej2-splitbuttons':'npm:@syncfusion/ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js',
      '@syncfusion/ej2-excel-export':'npm:@syncfusion/ej2-excel-export/dist/ej2-excel-export.umd.min.js',
      '@syncfusion/ej2-inputs':'npm:@syncfusion/ej2-inputs/dist/ej2-inputs.umd.min.js',
      '@syncfusion/ej2-pdf-export':'npm:@syncfusion/ej2-pdf-export/dist/ej2-pdf-export.umd.min.js',
      '@syncfusion/ej2-file-utils':'npm:@syncfusion/ej2-file-utils/dist/ej2-file-utils.umd.min.js',
      }
      
```

## Running Your Application

To run the application in the browser, use following command

 ```bash
npm start
```

## See Also

* [Getting started with angular CLI](../getting-started/angular-cli/)