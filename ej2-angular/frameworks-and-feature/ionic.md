---
layout: post
title: Getting Started with Ionic and Angular | Syncfusion
description: Learn how to create an Ionic Angular application and integrate the Syncfusion Grid component for a modern, responsive mobile interface.
platform: ej2-angular
control: Ionic 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Ionic and Angular

This guide provides a step-by-step walkthrough for creating an Angular application with the [Ionic Framework](https://ionicframework.com/), featuring integration of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI components for modern, responsive interfaces.

## Prerequisites

Before beginning, ensure the following are installed:

* [System requirements for Syncfusion Angular UI components](https://ej2.syncfusion.com/angular/documentation/system-requirement)
* Ionic CLI version `^8.0.0` or later
* Node.js (latest LTS version is recommended)
* Angular CLI compatible with your Ionic version

## Create an Application

To set up a new Ionic Angular project, install the Ionic CLI and initialize your application:

```bash
npm i -g @ionic/cli
```

> We are utilizing Node.js version 22 and Ionic version 8.0.0 to support Angular 19.

Once the development setup is complete, create a new project by running:

```bash
ionic start syncfusion-angular-ionic blank --type=angular 
```

This creates an Ionic application in the `syncfusion-angular-ionic` directory with default npm packages.

> Refer to this [Ionic getting started guide](https://ionicframework.com/docs/intro/cli) for more framework installation details.

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Grid Package

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid package to your project using the following command:

```bash
npm i @syncfusion/ej2-angular-grids --save
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Grid Component

After installation, include the following code in your `~/src/app/home/home.page.ts` file to render the Syncfusion Grid:

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

## Adding CSS References

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component themes can be applied using CSS or SASS from the [npm theme packages](https://ej2.syncfusion.com/angular/documentation/appearance/overview#theme-packages). Additionally, CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio). For more information, refer to the [themes documentation](https://ej2.syncfusion.com/angular/documentation/appearance/overview).

This example uses the `Material 3` theme for the Grid component from the theme package. To install the [Material 3](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme --save

{% endhighlight %}
{% endtabs %}

To apply the required styles for the Grid component, update `src/global.css` with the following imports:

{% tabs %}
{% highlight css tabtitle="global.css" %}

@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";

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

To run the application and view the integrated Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component, use the following command:

```bash
ionic serve
```

> For additional help, see the [Angular sample with Ionic framework on GitHub](https://github.com/SyncfusionExamples/ej2-angular-ionic).