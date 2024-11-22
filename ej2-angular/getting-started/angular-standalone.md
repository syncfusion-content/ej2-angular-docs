---
layout: post
title: Angular cli with Angular Standalone component | Syncfusion
description:  Checkout and learn about Angular cli with Angular Getting started Standalone component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Angular cli 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Standalone component

Standalone components provide a simplified way to build Angular applications. Standalone components, directives, and pipes aim to streamline the authoring experience by reducing the need for NgModules. Existing applications can optionally and incrementally adopt the new standalone style without any breaking changes.

## Create a new application

Once the Latest Angular CLI is installed, you can use it to create a new Angular project by running the following command:

```bash
ng new syncfusion-angular-app
```

This command will prompt you for a few settings for the new project, such as which stylesheet format to use.

![Initial_setup](./images/Initial_setup.PNG)

By default, it will create a CSS-based application. You can specify that you want to use SCSS by running the following command instead:

```bash
ng new syncfusion-angular-app --style=scss
```

![Initial_setup](images/SSR_IntialSetup.PNG)

Angular brought server-side rendering (SSR) and static-site generation (SSG or prerendering) closer to developers with a prompt in ng new. Also you can enable SSR in new projects with below command.

```bash
ng new syncfusion-angular-app --ssr
```

Next, navigate to the created project folder:

```bash
cd syncfusion-angular-app
```

## Installing Syncfusion Angular packages

Syncfusion packages are distributed in npm under the `@syncfusion` scope. You can obtain all of the available Angular Syncfusion packages from [npm]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Syncfusion's latest Angular packages are Ivy-distributed and compatible with Angular 12 and above. To install the package use the following command,

```bash
ng add @syncfusion/ej2-angular-grids@latest
```

The above command does the following configuration to your Angular app,
 
 * Adds `@syncfusion/ej2-angular-grids` package and its peer dependencies to your `package.json` file.
 * Imports the `GridModule` in your application default standalone component `app.component.ts`.
 * Registers the Syncfusion UI default theme (material) in the `angular.json` file.
 
This makes it easy to add the Syncfusion Angular Grids module to your project and start using it in your application.

## Adding Syncfusion Angular components

To use Syncfusion Angular components in your application, you will need to add them to your template and specify their properties in your component class.

In `src/app/app.component.ts`, you can use column directives with the `<ejs-grid>` selector and specify the `e-column` elements inside the `<ejs-grid>` element in the template for your component. The `e-column` element allows you to define the properties of a column in the Grid, such as its field name, header text, and data type.

```typescript
import { Component } from '@angular/core';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  imports: [GridModule, PagerModule],
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
  styleUrl: './app.component.css'
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
This will add a Grid to your application with the specified columns and data.

## Adding CSS reference

The following CSS files are available in **../node_modules/@syncfusion** package folder.
This can be referenced in [src/styles.css] using following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/material.css';
```

## Run the application

Run the `ng serve` command in the console, it will serve your application and you can open the browser window.

![output](./images/ang-cli.PNG)

>Note: If you see a license banner when running your application, it means that you need to obtain a license key and register it within the application in order to use Syncfusion components. You can find more information on how to obtain and register a license key on our [Licensing overview](../licensing/overview/) page.