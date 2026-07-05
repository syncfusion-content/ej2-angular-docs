---
layout: post
title: Angular Universal Features and Frameworks | Syncfusion
description: Learn how to enable Server-Side Rendering (SSR) in Angular applications using Angular Universal with Syncfusion Essential JS 2 components.
platform: ej2-angular
control: Angular universal 
documentation: ug
domainurl: ##DomainURL##
---

# Server-side Rendering in Angular Frameworks

Angular is a widely-used client-side web development framework, primarily running on the client-side by default. However, many web applications require server-side capabilities for enhanced SEO and performance. Angular Universal bridges this gap by enabling server-side rendering (SSR) for Angular applications, which can significantly improve SEO, load times, and accessibility when integrated with tools like ASP.NET Web Forms and ASP.NET MVC.

This guide explains how to use Angular Universal with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components.

## What is Angular Universal?

[Angular Universal](https://angular.dev/guide/ssr) technology enables Angular applications to render on the server. By pre-rendering HTML on the server and sending it to the client, it improves time-to-interactive and performance, especially on slower networks.

## Why use Server-side Rendering

Server-side rendering (SSR) in Angular Universal enhances application performance and user experience. Key benefits include:

- **SEO Improvement**: SSR provides fully rendered HTML to the browser, increasing content discoverability by search engines.
- **Faster Load Times**: Pre-rendered HTML enables users to view content sooner, reducing initial page load times.
- **Better Accessibility**: SSR offloads processing to the server, supporting users with slower devices or lower processing power.

## Creating an Angular Universal Application

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components support SSR. Follow these steps to set up an SSR-enabled Angular application with Syncfusion components.

## Step-by-Step Setup

### 1. Create a New Angular SSR-Enabled App

Use Angular CLI to create a new project and enable SSR support during setup:

```bash
ng new syncfusion-ssr-app
cd syncfusion-ssr-app
```
You'll see the following prompt during setup:

When prompted:
```bash
✔ Would you like to add Angular Universal (SSR) with Express? (y/N) › y
```
Make sure to type  `y`  to confirm.

This will automatically:

- Set up Angular Universal with Express
- Add `server.ts`, `main.server.ts`, and `app.server.module.ts`
- Configure SSR build targets in `angular.json`

## 2. Add Syncfusion<sup style="font-size:70%">&reg;</sup> (after SSR setup)

Once SSR is integrated, install Syncfusion<sup style="font-size:70%">&reg;</sup> component packages (e.g., Grid or Calendar) and required theme package:

```bash
npm install @syncfusion/ej2-angular-grids @syncfusion/ej2-angular-buttons @syncfusion/ej2-material3-theme --save
```

Add Syncfusion styles to `src/styles.css`:

{% tabs %}
{% highlight css tabtitle="styles.css" %}

@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";

{% endhighlight %}
{% endtabs %}

### 3. Add Angular Universal (SSR)

Incorporate SSR into your application with the following command:

``` bash
ng add @nguniversal/express-engine
```
This will:

- Create `server.ts`
- Update `angular.json` with SSR targets
- Create `main.server.ts`
- Add SSR-related npm scripts

Update your `app.component.ts` to use Syncfusion<sup style="font-size:70%">&reg;</sup> components:

```ts
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<ejs-grid [dataSource]='data'> </ejs-grid>`,
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'syncfusion-ssr-app';
  data: Object[] = [
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
    },
    {
        OrderID: 10251, CustomerID: 'VICTE', EmployeeID: 3, OrderDate: new Date(8367642e5),
        ShipName: 'Victuailles en stock', ShipCity: 'Lyon', ShipAddress: '2, rue du Commerce',
        ShipRegion: 'CJ', ShipPostalCode: '69004', ShipCountry: 'France', Freight: 41.34, Verified: !0
    },
   ];
}
```

### Enable Hydration

Client hydration ensures that the SSR application becomes interactive on the client side. To enable hydration, import the [`provideClientHydration`](https://angular.dev/guide/hydration) function and add it to the `providers` array in `app.module.ts`:

After installing the above command, enable Client [Hydration](https://angular.dev/guide/hydration). Hydration is the process that restores the server-side rendered application on the client. To enable hydration, import the [provideClientHydration](https://angular.dev/guide/hydration)  function and add it to the `providers` section of the `app.module.ts` file as shown below.


```ts
import {provideClientHydration} from '@angular/platform-browser';
// ...

@NgModule({
  // ...
  providers: [ provideClientHydration() ], //adding the hydration
  bootstrap: [ AppComponent ]
})
export class AppModule {
    // ...
}
```

Modify `app.module.ts` to include the necessary imports for SSR and Syncfusion<sup style="font-size:70%">&reg;</sup> Grid.

```ts

import { NgModule ,Component, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {provideClientHydration} from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-angular-grids'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    GridModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideClientHydration()], // Enable hydration
  bootstrap: [AppComponent]
})
export class AppModule { }

```
Update `app-routing.module.ts` to set up routing for your app:

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

### 4. Build and Serve the Application

Use the following command to build and serve your application with SSR capabilities:

```bash
npm run build:ssr
npm run dev:ssr
```
> [View the Angular Universal sample on GitHub](https://github.com/SyncfusionExamples/syncfusion-angular-universal)

### Common Issues

Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 3.18 MB with a total of 3.66 MB.
Error: bundle initial exceeded maximum budget. Budget 1.00 MB was not met by 2.66 MB with a total of 3.66 MB.

**Solution:**  
Adjust the `budgets` property under `"projects" > "your-app-name" > "architect" > "build" > "configurations" > "production"` in `angular.json`:

```json
"budgets": [
  {
    "type": "initial",
    "maximumWarning": "2mb",
    "maximumError": "5mb"
  }
]
```

### Folder Structure (After SSR Setup)

```
src/
├── main.ts              # Browser entry point
├── main.server.ts       # Server-side entry point
├── app/
├── index.html
server.ts                # Express server file
angular.json             # SSR targets added here
```

> [View the Angular Universal sample on GitHub](https://github.com/SyncfusionExamples/syncfusion-angular-universal)

## See Also

* [Angular Universal Documentation](https://github.com/angular/universal)
* [Getting Started with ASP.NET Core and Angular](../getting-started/aspnet-core)
* [Getting Started with ASP.NET MVC and Angular](../getting-started/aspnet-mvc)