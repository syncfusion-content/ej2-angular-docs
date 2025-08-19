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

Lazy loading is an essential optimization technique in Angular applications. It allows modules and components to load only when they are needed, reducing the initial bundle size and improving application performance. This guide provides a comprehensive overview of implementing lazy loading with Syncfusion<sup style="font-size:70%">&reg;</sup> Essential JS 2 Angular components, leveraging both module-based and modern standalone approaches.

## Why Lazy Loading?

- **Faster Initial Load**: Only loads required features at startup, making applications more responsive.
- **Efficient Resource Usage**: Minimizes memory and bandwidth consumption by downloading code only on demand.
- **Scalability**: Helps maintain performance as your app grows.
- **Syncfusion Integration**: Ensures that Essential JS 2 Angular components are loaded only when needed, optimizing user experience.

## Folder Structure Overview

```ruby
src/
├── app/
│   ├── home/           # Lazy-loaded feature module with Syncfusion Grid
│   ├── about/          # Lazy-loaded feature module with Syncfusion Dropdown
│   ├── app-routing.module.ts # Root routing config with lazy loading
│   └── app.component.ts      # Root component with navigation
```

## Creating a Syncfusion<sup style="font-size:70%">&reg;</sup> component in Angular

Begin developing your Angular application with Syncfusion<sup style="font-size:70%">&reg;</sup> components by following the [getting started guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-cli). Additionally, refer to the Angular [lazy-loading documentation](https://v18.angular.dev/guide/ngmodules/lazy-loading) for a comprehensive understanding of implementing lazy loading.

## Project Setup

### 1. Create App & Install Syncfusion<sup style="font-size:70%">&reg;</sup> components

Run these commands to create a standalone Angular project and install Syncfusion<sup style="font-size:70%">&reg;</sup> components:

```bash
ng new ngmodule-lazy-demo --routing --style=css
cd ngmodule-lazy-demo
npm install @syncfusion/ej2-angular-grids @syncfusion/ej2-angular-dropdowns
npm install @syncfusion/ej2-angular-buttons
```
### Step 2: Generate Feature Modules

Run the following commands to generate feature modules for `home` and `about`. These modules will include routing configuration.

```bash
ng generate module home --route home --module app.module
ng generate module about --route about --module app.module
```
## Add the css in the styles.css

```bash
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
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
```
## Home Module - Displays Grid with local data

### home.component.ts

Displays a simple Syncfusion<sup style="font-size:70%">&reg;</sup> Grid using local in-memory data.

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>🏠 Home Page with Syncfusion Grid</h2>
    <ejs-grid [dataSource]="data">
      <e-columns>
        <e-column field="id" headerText="ID" width="100" textAlign="Right"></e-column>
        <e-column field="name" headerText="Name" width="150"></e-column>
        <e-column field="role" headerText="Role" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  `
})
export class HomeComponent implements OnInit {
  public data = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
    { id: 3, name: 'Carol', role: 'Moderator' }
  ];

  ngOnInit() {}
}

```
## Home Module - Lazy-loaded module that sets up routing and imports Syncfusion<sup style="font-size:70%">&reg;</sup> Grid

### home.module.ts

Lazy-loaded module that sets up routing and imports Syncfusion<sup style="font-size:70%">&reg;</sup> Grid.

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { GridModule } from '@syncfusion/ej2-angular-grids';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    GridModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule {}

```
## About Module - Displays Dropdown List

### about.component.ts

Displays a Syncfusion<sup style="font-size:70%">&reg;</sup> Dropdown List with a simple string array.

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h2>ℹ️ About Page with Syncfusion Dropdown</h2>
    <ejs-dropdownlist [dataSource]='languages' placeholder='Select a language'></ejs-dropdownlist>
    <br/><br/>
  `
})
export class AboutComponent implements OnInit {
  public languages: string[] = ['JavaScript', 'TypeScript', 'Python', 'C#'];

  ngOnInit() {}
}

```
## About Module - Lazy-loaded module that configures the route and imports Syncfusion<sup style="font-size:70%">&reg;</sup> Dropdown

### about.module.ts

Lazy-loaded module that configures the route and imports Syncfusion<sup style="font-size:70%">&reg;</sup> Dropdown.

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

const routes: Routes = [
  { path: '', component: AboutComponent }
];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    DropDownListModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule {}


```
## App Routing - Connects lazy-loaded routes

Configure `app-routing.module.ts` for lazy loading by dynamically importing the required modules

### app-routing.module.ts

Defines route-level code-splitting using loadChildren for Home and About modules.

```ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

```
In the above code block, we are using loadChildren property in the routing configuration to lazily load the `HomeModule` and `AboutModule` when the user navigates to the corresponding routes. This way, the application only loads the necessary modules on demand, improving the initial loading time and performance of the application.

### app.module.ts

The app.module.ts file in an Angular application holds the following key elements:

- Angular built-in modules (like BrowserModule, FormsModule, HttpClientModule, etc.).
  
- Third-party libraries or feature-specific modules.
  
- Custom or feature modules created in the app.

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule, PagerModule,ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
### app.component.ts

The app.component.ts file in an Angular application is the root component of the app, typically responsible for controlling the main view or layout of the application. 

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Standalone Lazy Loading</h1>
  <div class="e-section-control" style="text-align: center; margin: 20px 0;">
  <button ejs-button class="e-primary" routerLink="/home">Home</button>
  <button ejs-button class="e-success" routerLink="/about" style="margin-left: 15px;">About</button>
</div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent { }
```

## Lazy loading using standalone<sup style="font-size:70%">&reg;</sup> application

This update enhances the previous documentation, focusing on Angular 17's latest features and improvements for building a standalone application with lazy loading.

## Standalone Components Enhancements

Angular 17 introduces the standalone component—a component not part of any ngModule that can be used with either other standalone or module-based components.

In the past, a lazy route pointed to an NgModule with child routes. As there are no NgModules anymore, loadChildren can now directly point to a lazy routing configuration:

## Angular Lazy Loading using Standalone Components  

This guide demonstrates lazy loading using Angular’s modern standalone components without NgModules. This approach improves maintainability and embraces Angular 17+ best practices. Each route lazily loads a feature using Syncfusion® UI components and local data.

## Folder Structure Overview

```bash
src/
├── app/
│   ├── home/                  # Home standalone component with Syncfusion Grid
│   │   └── home.routes.ts     # Lazy routing definition for Home
│   ├── about/                 # About standalone component with Dropdown
│   │   └── about.routes.ts    # Lazy routing definition for About
│   ├── app.routes.ts          # Root route configuration with lazy loading
│   └── app.component.ts       # Root component with router navigation
```
## Project Setup

1. Create App & Install Syncfusion<sup style="font-size:70%">&reg;</sup>
Run the following commands to create a new Angular standalone project and install Syncfusion<sup style="font-size:70%">&reg;</sup> components:

```bash
ng new standalone-lazy-demo --routing --standalone --style=css
cd standalone-lazy-demo
npm install @syncfusion/ej2-angular-grids @syncfusion/ej2-angular-dropdowns
npm install @syncfusion/ej2-angular-buttons
```

### Add the style in styles.css file

```bash
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
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
```
### Step 2: Generate the `home` Component

Run the following command to generate the `home` component as a standalone component, which will not generate module files:

```bash
ng generate component home --standalone --skip-tests
```
### Generate the `about` Component

Run the following command to generate the `about` component as a standalone component, which will not generate module files:

```bash
ng generate component about --standalone --skip-tests
```
## Home Component - Displays Grid

### home.component.ts  

Standalone component that displays Syncfusion<sup style="font-size:70%">&reg;</sup> Grid with local static data.

```ts
import { Component } from '@angular/core';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GridModule],
  template: `
    <h2>Home Page</h2>
    <ejs-grid [dataSource]="orders">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
        <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  `
})
export class HomeComponent {
  public orders = [
    { OrderID: 10248, CustomerID: 'VINET', ShipCity: 'Reims', ShipName: 'Vins et alcools Chevalier' },
    { OrderID: 10249, CustomerID: 'TOMSP', ShipCity: 'Münster', ShipName: 'Toms Spezialitäten' },
    { OrderID: 10250, CustomerID: 'HANAR', ShipCity: 'Rio de Janeiro', ShipName: 'Hanari Carnes' }
  ];
}
```
## About Component - Displays Dropdown

### about.component.ts  

Standalone component using Syncfusion<sup style="font-size:70%">&reg;</sup> Dropdown List with string array as options.

```ts
import { Component } from '@angular/core';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, DropDownListModule],
  template: `
    <h2>About Page</h2>
    <h5>Having Dropdown Here</h5>
    <ejs-dropdownlist [dataSource]="items" placeholder="Select an item"></ejs-dropdownlist>
  `
})
export class AboutComponent {
  public items: string[] = ['Option 1', 'Option 2', 'Option 3'];
}
```
## Manually Creating the Route File for Standalone Components

Unfortunately, by default, Angular CLI doesn't generate a route.ts file for routing when you create a standalone component using ng generate component.
You can manually create a corresponding `home.routes.ts` and `about.routes.ts` file for routing

## Route Definitions

### home.routes.ts  

Defines the lazy route for the HomeComponent.

```ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export default [
  { path: '', component: HomeComponent }
] as Routes;
```
### about.routes.ts

Defines the lazy route for the AboutComponent.

```ts
import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';

export default [
  { path: '', component: AboutComponent }
] as Routes;
```
## App Routing - Lazy Loading via loadChildren

### app.routes.ts  

Main route configuration using dynamic imports for lazy loading each route.

```ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.routes')
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.routes')
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
```
## App Component - Navigation Setup

### app.component.ts  

Displays links to lazy-loaded routes and handles route view display.

```ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ButtonModule],
  template: `
    <h1>Angular Standalone Lazy Loading</h1>
  <div class="e-section-control" style="text-align: center; margin: 20px 0;">
  <button ejs-button class="e-primary" routerLink="/home">Home</button>
  <button ejs-button class="e-success" routerLink="/about" style="margin-left: 15px;">About</button>
</div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent { }
```
## Run the App

```bash
ng serve
```

## Routing With Standalone Component

With NgModules, each lazy module introduced a new injector and hence a new injection scope. This scope was used for providing services only needed by the respective lazy chunk.

To cover such use cases, the Router now allows for introducing providers for each route. These services can be used by the route in question and their child routes:


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

The `RouterModule` provides essential functionality for routing, allowing seamless navigation between different views.

## Before Angular 17

- NgModules were used to group all components, services, and other things.
- When using lazy loading with NgModules, every lazy-loaded module had its own "scope" and injector. This scope was used to provide services only needed for that module.

## What Changed in Angular 17

- Angular 17 allows you to use standalone components, which don’t need NgModules.
- You can still lazily load components, but now you can define services that are only available for the route that loads, instead of loading services for the entire module.

## Troubleshooting

- **Grid or Dropdown Not Rendering**: Ensure all required CSS files are imported in `styles.css`. Verify that the `dataSource` property in `ejs-grid` or `ejs-dropdownlist` is correctly set (e.g., not null or undefined).
- **Routing Errors**: Confirm that `RouterModule` is imported in `app.module.ts` (for module-based) or `app.component.ts` (for standalone). Check that route paths in `app-routing.module.ts` or `app.routes.ts` match the `routerLink` values.
- **Syncfusion<sup style="font-size:70%">&reg;</sup> Component Errors**: Ensure you have a valid Syncfusion<sup style="font-size:70%">&reg;</sup> license and that the correct Syncfusion<sup style="font-size:70%">&reg;</sup> packages are installed.

For additional help, refer to the [Angular Documentation](https://v18.angular.dev/guide/ngmodules/lazy-loading) or [Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Documentation](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-cli).

## Benefits of Lazy Loading

- **Faster Initial Load**: Lazy loading delays loading of non-essential components, reducing the initial bundle size. For example, a 500KB module can be deferred, cutting load time by up to 50% in apps with multiple features.
- **Simplified Structure (Standalone)**: Standalone components eliminate NgModule boilerplate, reducing project complexity and making maintenance easier.
- **Resource Efficiency**: Only loads necessary code, saving memory and bandwidth, especially for users on slower networks.