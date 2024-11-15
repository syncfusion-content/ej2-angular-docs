---
layout: post
title: Angular cli with Angular Getting started component | Syncfusion
description:  Checkout and learn about Angular cli with Angular Getting started component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Angular cli 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular using Angular CLI and TypeScript

This article provides a step-by-step guide for setting up an Angular project using TypeScript with the Angular CLI and integrating Syncfusion Angular components.

The Angular CLI is a command-line tool that enables developers to create, manage, and build Angular applications easily, making it ideal for setting up a new Angular project and starting development quickly.

## Prerequisites

[System requirements for Syncfusion Angular UI components](../system-requirement)

## Set up the Angular application

A good way to start with Angular is by generating a new application using the [Angular CLI](https://github.com/angular/angular-cli). The following command installs Angular CLI globally:

```bash
npm install -g @angular/cli
```

> For Angular 18, it default for generates a standalone application. Detailed instructions on creating Syncfusion Angular standalone components using the latest version, please refer to the [Standalone guide](./angular-standalone).


### Installing a specific version

To install a specific version of Angular CLI, use the following command:

```bash
npm install -g @angular/cli@16.0.1
```

## Create a new application

With Angular CLI installed, execute the following command to create a new application:

```bash
ng new syncfusion-angular-app
```

This command prompts you to configure settings such as whether to include Angular routing and which stylesheet format to use.

```bash

? Which stylesheet format would you like to use? (Use arrow keys)
> CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org                                             ]

```

By default, it will create a CSS-based application. Specify SCSS as the style format if needed:

```bash
ng new syncfusion-angular-app --style=scss
```

Navigate to the created application folder:

```bash
cd syncfusion-angular-app
```

## Adding Syncfusion Angular packages

Syncfusion Angular component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion Angular components in the project, install the necessary package.

This article uses the [Angular Grid component](https://www.syncfusion.com/angular-components/angular-grid) as an example. To add the Angular Grid component, install the `@syncfusion/ej2-angular-grids` package:

Currently, Syncfusion provides two set of package structures for Angular components,

1. Ivy library distribution package [format](https://v17.angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler (Angular’s legacy compilation and rendering pipeline) package.

Syncfusion's latest Angular packages are Ivy-distributed and compatible with Angular 12 and above. To install the package use the following command,

```bash
ng add @syncfusion/ej2-angular-grids
```
If you are not using fully ivy compiler application, use the `ngcc` tagged packages of the Syncfusion Angular components.

> The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of IVY compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](../common/troubleshooting/ngcc-compatibility).

```bash
npm add @syncfusion/ej2-angular-grids@20.2.38-ngcc
```

The above command does the following configuration to your Angular app,
 
 * Adds `@syncfusion/ej2-angular-grids` package and its peer dependencies to your `package.json` file.
 * Imports the `GridModule` in your application module `app.module.ts`.
 * Registers the Syncfusion UI default theme (material) in the `angular.json` file.
 
This makes it easy to add the Syncfusion Angular Grids module to your application and start using it in your application.

For more information about version compatibility, see [version compatibility](../upgrade/version-compatibility).

## Import Syncfusion CSS Styles

You can add Syncfusion Angular component themes in several ways: by using CSS or SCSS styles from npm packages, CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio/). The [themes topic](https://ej2.syncfusion.com/angular/documentation/appearance/theme/) provides more details on built-in themes and different ways to reference them in an Angular project.

By default, the `Material` theme is registered in the `styles.css` file when running `ng add` command.

The default `Material` theme includes styles for all Syncfusion Angular components. If you only want to use the styles for specific Syncfusion components, you can import only the required dependencies. For example, to use the styles for the Grid component alone, you can import the required dependencies as shown in the following snippet.
 

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/material.css';
```

> The order of importing CSS styles should align with its dependency graph.

For information on using SCSS styles, see [here](../common/how-to/sass/).

## Adding Syncfusion Angular components

1.To add the Syncfusion Grid component, include it in the template and specify its properties in the component class.

2.In `src/app/app.component.ts`, define the Grid component’s columns using the `<ejs-grid>` selector and add `<e-columns>`, `<e-column>` elements elements within the Grid for specific configurations. The `e-column` element allows you to define the properties of a column in the Grid, such as its field name, header text, and data type.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
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
 `
 })
export class AppComponent {
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

3.This will display a Grid with specified columns and data in your application.

## Run the application

To start the application, use the following command:

```bash
ng serve
```

The output will appears as follows:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/quickstart-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/quickstart-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/quickstart-cs1" %}

>Note: If you see a license banner when running your application, it means that you need to obtain a license key and register it within the application in order to use Syncfusion components. You can find more information on how to obtain and register a license key on our [Licensing overview](../licensing/overview) page.

You can also refer below video to get start Syncfusion Angular Grid component.

{% youtube "https://www.youtube.com/watch?v=lk83TlHQ95c" %}

## Adding feature Modules to Syncfusion Angular components

Syncfusion Angular components offer module-based services and are easy to import and extend the functionalities of the components. If you want to enable features such as paging, filtering, and sorting in a Grid that has been rendered in your application, you will need to include the corresponding service modules in the `providers` array of your modules.


```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-angular-grids';
// Imports Grid services from Syncfusion Angular Grids
import { PageService, FilterService, SortService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    // Add feature Service in the provider
    providers: [PageService,
                SortService,
                FilterService]
})
export class AppModule { }
```

The component has several options set on the ejs-grid element, including allowPaging, allowSorting, and allowFiltering, which enable paging, sorting, and filtering features in the Grid, respectively. The pageSettings property is also set to specify the page size for the Grid. you can use the following code snippet in the app.component.ts file,

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import {PageSettingsModel } from '@syncfusion/ej2-angular-grids';
@Component({
    selector: 'app-root',
    template: `<ejs-grid 
               [dataSource]='data' 
               [allowPaging]="true" 
               [allowSorting]="true"
               [allowFiltering]="true" 
               [pageSettings]="pageSettings">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data: object[];
    public pageSettings: PageSettingsModel;
    ngOnInit(): void {
        this.data = data;
        // The pageSettings property is also set to specify the page size for the Grid
        this.pageSettings = { pageSize: 6 };
    }
}
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/quickstart1-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/quickstart1-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/quickstart1-cs1" %}

By using the Syncfusion Angular Grid component, you can easily add a robust data Grid to your Angular application that supports paging and sorting of data. For more details refer [Syncfusion Angular Grid](../grid/getting-started/).

## Syncfusion Angular components showcase samples

Syncfusion has a collection of sample applications that demonstrate the use of Syncfusion Angular UI components.

* [Expense Tracker](https://ej2.syncfusion.com/showcase/angular/expensetracker/#/dashboard)
* [Diagram Builder](https://ej2.syncfusion.com/showcase/angular/diagrambuilder/#/home)
* [Web mail](https://ej2.syncfusion.com/showcase/angular/webmail/#/home)
* [Appointment Planner](https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard)
* [Stock Chart](https://ej2.syncfusion.com/showcase/angular/stockchart/#/stockChart)

## See also

* [Getting Started with Angular Standalone](./angular-standalone)
* [Getting Started ASP.NET Core with Angular using Project Template](./aspnet-core)
* [Getting Started with Angular CLI as Front end in ASP.NET MVC](./aspnet-mvc)
* [Getting started with Ionic and Angular](./ionic)
* [Getting started with Angular and Electron](./electron)
* [Upgradation Guide](../upgrade/upgrading-syncfusion)