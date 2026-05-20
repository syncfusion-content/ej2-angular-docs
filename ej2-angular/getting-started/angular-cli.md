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

This guide provides step-by-step instructions for setting up an Angular project using TypeScript with Angular CLI, and integrating Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components to enhance your application's functionality.

The Angular CLI is a powerful command-line tool that simplifies the creation, management, and building of Angular applications, enabling a quick start to development.

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](../system-requirement).

## Set Up the Angular Application

A straightforward approach to beginning with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

## Create a New Application

With Angular CLI installed, execute this command to generate a new application:

```bash
ng new syncfusion-angular-app
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Packages

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular Grid Component](https://www.syncfusion.com/angular-components/angular-grid) for demonstration. Add the Angular Grid component with:

```bash
ng add @syncfusion/ej2-angular-grids
```

This command performs the following automatic configurations:

- Adds `@syncfusion/ej2-angular-grids` package and peer dependencies
- Imports the Grid component in your application
- Registers the Material3 theme in `angular.json`

**For version compatibility**, see the [Version Compatibility](../upgrade/version-compatibility) guide.

**Legacy Support:** For older Angular projects using ngcc (Angular 15 and below):

```bash
npm add @syncfusion/ej2-angular-grids@20.2.38-ngcc
```

> **Note:** Angular 16+ no longer supports ngcc. For questions, refer to the [FAQ](../common/troubleshooting/ngcc-compatibility).		


## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS Styles

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component themes can be added in various ways: via CSS or SCSS styles from npm packages, CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/angular/documentation/appearance/theme-studio).

To import styles for specific components, add only what you need:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/material3.css';
```

> Import order should match the component's dependency sequence.

See the [SCSS guide](../common/how-to/sass) for SCSS styles.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Components

Now, you can add the Angular Grid component to your **src/app/app.ts** file using the `<ejs-grid>` selector and bind data through the `dataSource` property. Define and customize columns using the `<e-columns>` and `<e-column>` elements.

```typescript

import { Component } from '@angular/core';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GridAllModule],
  template: `
    <h1>Syncfusion Angular Grid</h1>

    <ejs-grid [dataSource]="data" height="300">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="100"></e-column>
        <e-column field="OrderDate" headerText="Order Date" textAlign="Right" format="yMd" width="120"></e-column>
      </e-columns>
    </ejs-grid>
  `
})
export class App {
  public data: Object[] = [
    {
      OrderID: 10248,
      CustomerID: 'VINET',
      OrderDate: new Date(1996, 6, 4),
      Freight: 32.38
    },
    {
      OrderID: 10249,
      CustomerID: 'TOMSP',
      OrderDate: new Date(1996, 6, 5),
      Freight: 11.61
    },
    {
      OrderID: 10250,
      CustomerID: 'HANAR',
      OrderDate: new Date(1996, 6, 8),
      Freight: 65.83
    }
  ];
}

```

{% previewsample "page.domainurl/samples/common/quickstart1-cs1" %}

## Run the application

To run the application, use the following command:

```bash
ng serve
```

The application compiles and launches on a development server. Open http://localhost:4200 to view it.

**Video Guide:**

{% youtube "https://www.youtube.com/watch?v=lk83TlHQ95c" %}

## See Also

* [Getting Started with Angular Standalone](./angular-standalone)
* [Getting Started ASP.NET Core with Angular using Project Template](./aspnet-core)
* [Getting Started with Angular CLI as Front end in ASP.NET MVC](./aspnet-mvc)
* [Getting Started with Ionic and Angular](../frameworks-and-feature/ionic)
* [Getting Started with Angular and Electron](../frameworks-and-feature/electron)
* [Upgrade Guide](../upgrade/upgrading-syncfusion)