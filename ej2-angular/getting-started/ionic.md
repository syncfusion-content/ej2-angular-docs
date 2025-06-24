---
layout: post
title: Ionic with Angular Getting started component | Syncfusion
description:  Checkout and learn about Ionic with Angular Getting started component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Ionic 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Ionic and Angular

This guide demonstrates how to create a simple Angular 19 application using the `Ionic Framework` and integrate the `Syncfusion Angular UI components` for enhanced functionality and a polished appearance.

## Prerequisites

Before integrating Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components in an Ionic project with Angular, ensure the following prerequisites are installed on your development machine:

* [System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI components](https://ej2.syncfusion.com/angular/documentation/system-requirement)
* Ionic CLI version `^8.0.0` or later

## Create an Application

To initialize a new project using the command line, execute the following command:

```bash
npm i -g @ionic/cli
```

> We are utilizing Node.js version 22 and Ionic version 8.0.0 to support Angular 19.

Once your development setup is complete, create a new project using the Ionic CLI by executing this command:

```bash
ionic start syncfusion-angular-ionic blank --type=angular 
```

This command generates a new Ionic application in a directory named "syncfusion-angular-ionic" and install the default npm packages necessary for the application.

> Refer to this [getting started guide](https://ionicframework.com/#cli) for Ionic framework installation details.

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Grid Package

To integrate Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages, run the appropriate command. Below is the command for adding the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid package:

```bash
npm i @syncfusion/ej2-angular-grids --save
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Grid Component

After package installation, add the following grid component code snippet in the `~/src/app/home/home.page.ts` file.

```typescript
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, GridModule, CommonModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Syncfusion Angular 19 Grid with Ionic</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ejs-grid [dataSource]="data">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width=90></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width=120></e-column>
          <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width=90></e-column>
          <e-column field="OrderDate" headerText="Order Date" textAlign="Right" format="yMd" width=120></e-column>
        </e-columns>
      </ejs-grid>
    </ion-content>
  `
})
export class HomePage {
  public data: Object[] = [
    {
      OrderID: 10248,
      CustomerID: 'VINET',
      EmployeeID: 5,
      OrderDate: new Date(8364186e5),
      ShipName: 'Vins et alcools Chevalier',
      ShipCity: 'Reims',
      ShipAddress: '59 rue de l Abbaye',
      ShipRegion: 'CJ',
      ShipPostalCode: '51100',
      ShipCountry: 'France',
      Freight: 32.38,
      Verified: true
    },
    {
      OrderID: 10249,
      CustomerID: 'TOMSP',
      EmployeeID: 6,
      OrderDate: new Date(836505e6),
      ShipName: 'Toms Spezialitäten',
      ShipCity: 'Münster',
      ShipAddress: 'Luisenstr. 48',
      ShipRegion: 'CJ',
      ShipPostalCode: '44087',
      ShipCountry: 'Germany',
      Freight: 11.61,
      Verified: false
    },
    {
      OrderID: 10250,
      CustomerID: 'HANAR',
      EmployeeID: 4,
      OrderDate: new Date(8367642e5),
      ShipName: 'Hanari Carnes',
      ShipCity: 'Rio de Janeiro',
      ShipAddress: 'Rua do Paço, 67',
      ShipRegion: 'RJ',
      ShipPostalCode: '05454-876',
      ShipCountry: 'Brazil',
      Freight: 65.83,
      Verified: true
    }
  ];
}
```

## Adding CSS Reference

Update `src/global.scss` with the required Syncfusion styles for the Grid component:

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

## Configure Routing

Update `src/app/app.routes.ts` to route to the `HomePage` component:

```typescript
import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];
```

## Running the Application

Finally, use the following command to start the application. The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component will be rendered within the Ionic framework.

```bash
ionic serve 
```

> For your convenience, we have prepared an [Angular sample with Ionic framework](https://github.com/SyncfusionExamples/ej2-angular-ionic).
