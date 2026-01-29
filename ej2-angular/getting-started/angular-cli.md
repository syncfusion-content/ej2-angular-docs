---
layout: post
title: Angular CLI with Angular Getting Started component | Syncfusion
description: Check out and learn about Angular CLI with the Angular Getting Started component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Angular cli 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Using Angular CLI and TypeScript

This guide provides a step-by-step walkthrough for setting up an Angular project using TypeScript with Angular CLI, alongside integrating Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components to enhance your application's functionality.

The Angular CLI is a powerful command-line tool that simplifies the creation, management, and building of Angular applications, enabling a quick start to development.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](../system-requirement).

## Set Up the Angular Application

A straightforward approach to beginning with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need information more information about the standalone architecture, refer to the [Standalone Guide](./angular-standalone).

### Installing a Specific Version

To install a particular version of Angular CLI, use:

```bash
npm install -g @angular/cli@21.0.0
```

## Create a New Application

With Angular CLI installed, execute this command to generate a new application:

```bash
ng new syncfusion-angular-app
```

* This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format.

```bash

? Which stylesheet format would you like to use? (Use arrow keys)
> CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org                                             ]

```

* By default, a CSS-based application is created. Use SCSS if required:

```bash
ng new syncfusion-angular-app --style=scss
```

* During project setup, when prompted for the Server-side rendering (SSR) option, choose the appropriate configuration.

![Initial_setup](../images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![Initial_setup](../images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Packages

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular Grid Component](https://www.syncfusion.com/angular-components/angular-grid) for demonstration. Add the Angular Grid component with:

```bash
ng add @syncfusion/ej2-angular-grids
```

This command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-grids` package and peer dependencies to your `package.json`.
- Import the Grid component in your application.
- Register the default Syncfusion<sup style="font-size:70%">&reg;</sup> Material theme in `angular.json`.

For more details on version compatibility, refer to the [Version Compatibility](../upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package structures for Angular components:		
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)		
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.		
Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:		
```bash		
ng add @syncfusion/ej2-angular-grids		
```		
For applications not compiled with Ivy, use the `ngcc` tagged packages:		
> The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of IVY compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](../common/troubleshooting/ngcc-compatibility).		
```bash		
npm add @syncfusion/ej2-angular-grids@20.2.38-ngcc		
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS Styles

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component themes can be added in various ways: via CSS or SCSS styles from npm packages, CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio).

The `Material` theme is added to your `styles.css` when you run `ng add` (this happens automatically by default).

To stylize only specific Syncfusion<sup style="font-size:70%">&reg;</sup> components, import the necessary styles. For example, to style only the Grid component:
 

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

> Ensure that the import order aligns with the component's dependency sequence.

For using SCSS styles, refer to [this guide](../common/how-to/sass).

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components

To integrate the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component into your Angular application, follow these steps:

1. **Include the Component in Your Template:**
   Incorporate the `<ejs-grid>` selector within your component template. Define its properties and specify columns using `<e-columns>` and `<e-column>` elements. These elements will enable customization of each column's properties like field name, header text, and data type.

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

This will display a Grid with specified columns and data in your application.

## Run the application

To run your Angular application, execute the following command in your terminal:

```bash
ng serve
```

This command compiles your application and serves it through a development server. Once the command completes, open http://localhost:4200 in your web browser to view your running application.
The output of running your application appears as shown in these example files:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/common/quickstart-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/quickstart-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/common/quickstart-cs1" %}

>Note: If your application displays a license banner, it indicates that a license key is required to continue using Syncfusion<sup style="font-size:70%">&reg;</sup> components. Visit our [Licensing Overview](../licensing/overview) page to learn how to obtain and register your license key.

You can also watch the following video to quickly get started with the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component:

{% youtube "https://www.youtube.com/watch?v=lk83TlHQ95c" %}

## Adding feature Modules to Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components

In Angular 21, services are provided at the root level using standalone API. To enable features such as paging, filtering, and sorting in a Grid, provide the required services in your standalone component or in `main.ts`:

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { GridModule, PageService, FilterService, SortService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app/app';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(GridModule),
    PageService,
    FilterService,
    SortService
  ]
});
```

Alternatively, provide services directly in your component using the `providers` array:

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, PageService, FilterService, SortService, PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, GridModule],
    providers: [PageService, FilterService, SortService],
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
        this.pageSettings = { pageSize: 6 };
    }
}
```

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/common/quickstart1-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/quickstart1-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/quickstart1-cs1" %}

By utilizing the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component, you can integrate a powerful data grid into your Angular application, supporting advanced features like paging and sorting. For additional details, refer to the [Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid](../grid/getting-started) documentation.

## Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components Showcase Samples

Syncfusion<sup style="font-size:70%">&reg;</sup> offers a variety of sample applications that showcase the use of Angular UI components:

* [Expense Tracker](https://ej2.syncfusion.com/showcase/angular/expensetracker/#/dashboard)
* [Diagram Builder](https://ej2.syncfusion.com/showcase/angular/diagrambuilder/#/home)
* [Web Mail](https://ej2.syncfusion.com/showcase/angular/webmail/#/home)
* [Appointment Planner](https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard)
* [Stock Chart](https://ej2.syncfusion.com/showcase/angular/stockchart/#/stockChart)

## See Also

* [Getting Started with Angular Standalone](./angular-standalone)
* [Getting Started ASP.NET Core with Angular using Project Template](./aspnet-core)
* [Getting Started with Angular CLI as Front end in ASP.NET MVC](./aspnet-mvc)
* [Getting Started with Ionic and Angular](../frameworks-and-feature/ionic)
* [Getting Started with Angular and Electron](../frameworks-and-feature/electron)
* [Upgrade Guide](../upgrade/upgrading-syncfusion)