---
layout: post
title: Ionic with Angular Getting started component | Syncfusion
description:  Checkout and learn about Ionic with Angular Getting started component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Ionic 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Ionic and Angular

This document helps you create a simple Angular application with the `Ionic Framework` and including `Syncfusion Angular UI components` can be a great way to add functionality and a polished look to your app.

## Prerequisites

Before getting started with Syncfusion Angular Components in an Ionic project with Angular, check whether the following are installed on the developer's machine.

* [System requirements for Syncfusion Angular UI components](https://ej2.syncfusion.com/angular/documentation/system-requirement)
* ionic CLI - `^6.x.x` or later

## Create an Application

To create a new project using the command prompt, use the following command:

```bash
npm i -g @ionic/cli
```

>Here, we are using Node.js version 16 and Ionic version 7.0.0 to support Angular 16.

Once your development environment is set up, users can start by creating a new project using the Ionic CLI. To do this, run the following command in your command prompt,

```bash
ionic start syncfusion-angular-ionic blank --type=angular 
```
This command will create a new Ionic template application in a folder called "syncfusion-angular-ionic" and will also install the default npm packages needed for the application.

>Refer to this [getting started](https://ionicframework.com/getting-started/#cli) document to install ionic framework.

## Installing Syncfusion Grid package

Add the Syncfusion angular packages to the application which needs to be run. For example, we have add the Syncfusion Angular Grid package to the application.

```bash
npm i @syncfusion/ej2-angular-grids --save
```

## Adding Grid Module

After installing the package, the component modules are available to configure your application from Syncfusion installed package.

Refer to the following code snippet to import the Grid module in `~/src/app/home/home.module.ts` from the `@syncfusion/ej2-angular-grids`.

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { GridModule } from '@syncfusion/ej2-angular-grids';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    GridModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

```

## Adding Syncfusion component

After importing the package, add the following grid component code snippet in the `~/src/app/home/home.page.ts` file.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <h1>
    Syncfusion Angular UI Grid!
  </h1>

  <ejs-grid [dataSource]='data'>
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
      <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
      <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
    </e-columns>
  </ejs-grid>
 `,
 styleUrls: ['home.page.scss'],
})
export class HomePage {
  public data: Object[] = [
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

```

## Adding CSS Reference

Add the following Grid component styles as specified in the `~/src/global.scss` file.

{% tabs %}
{% highlight css tabtitle="~/src/styles.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/material.css';

{% endhighlight %}
{% endtabs %}

## Running the Application

Finally, run the following command to start the application. The Syncfusion Angular Grid component will be rendered in the ionic framework. 

 ```bash
ionic serve 
```

>For your convenience, we have prepared an [Angular sample with ionic framework](https://github.com/SyncfusionExamples/ej2-angular-ionic).
