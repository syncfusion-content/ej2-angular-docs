---
layout: post
title: Getting started with Angular List box component | Syncfusion
description:  Checkout and learn about Getting started with Angular List box component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular ListBox component

This guide demonstrates how to set up and configure the Syncfusion Angular ListBox component, from initial installation through displaying lists with data binding and selection. The ListBox component allows users to select one or more items from a predefined list with support for templates, drag-and-drop, and sorting.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

## Dependencies

The following list of dependencies are required to use the ListBox component in your application.

```javascript
|-- @syncfusion/ej2-angular-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-dropdowns
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-notifications
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons

```

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion Angular UI Components](../system-requirement).


## Setup Angular environment

The easiest way to set up an Angular project is using the [Angular CLI](https://github.com/angular/angular-cli) tool. Follow these steps:

Install the CLI application globally to your machine.

```bash
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using below Angular CLI command.

```bash
ng new syncfusion-angular-listbox
```

Navigate to the created project folder:

```bash
cd syncfusion-angular-listbox
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> ListBox package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://v17.angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Use the [ng add](https://angular.dev/reference/schematics) command to automatically configure the ListBox package:

```bash
ng add @syncfusion/ej2-angular-dropdowns
```

This command will install the package (v32.1.19), add peer dependencies, and configure the Material theme automatically.

**For Manual Installation:**

```bash
npm install @syncfusion/ej2-angular-dropdowns --save
```

>Note: Use @syncfusion/ej2-angular-dropdowns@32.1.19 for Angular 12+ (Ivy format). For legacy support, see the peer dependency requirements above.

## Import Syncfusion CSS styles

When using `ng add @syncfusion/ej2-angular-dropdowns`, the Material theme is automatically configured in `angular.json`. The ListBox component styles are included automatically.

If you need to manually add or customize the CSS, import the theme in `src/styles.css`:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
```

>If you want to use combined component styles, please use our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Import ListBox in your component

For Angular 19+ standalone applications, import the `ListBoxModule` directly in your component. Modify the `src/app/app.ts` file:

```typescript
import { Component, OnInit } from '@angular/core';
import { ListBoxModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  imports: [ListBoxModule],
  standalone: true,
  selector: 'app-root',
  template: `<!-- Render ListBox component -->`
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
}
```

**For Angular 18 and below (NgModule approach):**

If using NgModule pattern, import `ListBoxModule` in your app.module.ts:

 ```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the ListBoxModule for the ListBox component
import { ListBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ej2-angular-dropdowns module into NgModule
  imports:      [ BrowserModule, ListBoxModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> ListBox component

Now, modify the `src/app/app.ts` file to render the ListBox component:

```typescript
import { Component, OnInit } from '@angular/core';
import { ListBoxModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  imports: [ListBoxModule],
  standalone: true,
  selector: 'app-root',
  template: `<!-- Render ListBox -->
             <ejs-listbox></ejs-listbox>`
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
}
```

## Binding data source

After initialization, populate the ListBox with data using the `dataSource` property. Here, an array of objects is passed to the ListBox component:

```typescript
import { Component, OnInit } from '@angular/core';
import { ListBoxModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  imports: [ListBoxModule],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-listbox [dataSource]='data'></ejs-listbox>`
})
export class AppComponent implements OnInit {
  // Array of data for ListBox
  public data: { [key: string]: Object }[] = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04' },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One-77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' }
  ];

  ngOnInit(): void {
  }
}
```

## Run the application

After completing the configuration required to render a ListBox component, run the following command to display the output in your default browser:

```bash
ng serve --open
```

The ListBox component will be rendered in your browser with the default settings and data.

The following example illustrates the output in your browser:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/listbox/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listbox/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listbox/getting-started-cs7" %}