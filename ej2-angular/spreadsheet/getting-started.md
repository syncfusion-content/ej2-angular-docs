---
layout: post
title: Getting started with Angular Spreadsheet component | Syncfusion
description: Checkout and learn here all about getting started with Syncfusion Essential Angular Spreadsheet component, it's elements, and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Spreadsheet component

This section explains the steps to create a simple Spreadsheet component with basic features in an Angular environment.

To get start quickly with Angular Spreadsheet using CLI, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=2Ozwe37X-7Q" %}

## Dependencies

The following list of dependencies are required to use the Spreadsheet component in your application.

```js
  |-- @syncfusion/ej2-angular-spreadsheet
      |-- @syncfusion/ej2-angular-base
      |-- @syncfusion/ej2-spreadsheet
          |-- @syncfusion/ej2-base
          |-- @syncfusion/ej2-dropdowns
          |-- @syncfusion/ej2-navigations
          |-- @syncfusion/ej2-grids
```

## Setup Angular Environment

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications. To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
```

This command prompts you to configure settings such as whether to include Angular routing and which stylesheet format to use.

```bash

? Which stylesheet format would you like to use? (Use arrow keys)
> CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org                                             ]

```

By default, it will create a CSS-based application.

Navigate to the created application folder:

```bash
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://v17.angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-spreadsheet`](https://www.npmjs.com/package/@syncfusion/ej2-angular-spreadsheet/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-spreadsheet --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-spreadsheet@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-spreadsheet/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-spreadsheet@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-spreadsheet:"20.2.38-ngcc"
```

The above command does the following configuration to your Angular app,
 
 * Adds `@syncfusion/ej2-angular-spreadsheet` package and its peer dependencies to your `package.json` file.
 * Imports the `SpreadsheetAllModule` in your application module `app.module.ts`.
 * Registers the Syncfusion<sup style="font-size:70%">&reg;</sup> UI default theme (material) in the `angular.json` file.

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion` package folder.
This can be referenced in `[src/styles.css]` using following code.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-spreadsheet/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
```

## Add Spreadsheet component

Modify the template in [src/app/app.component.ts] file to render the spreadsheet component. Add the Angular Spreadsheet by using `<ejs-spreadsheet>` selector in template section of the `app.component.ts` file.

```typescript
import { Component } from '@angular/core';
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'

@Component({
  imports: [
        SpreadsheetAllModule
    ],
  selector: 'app-root',
  // specifies the template string for the Spreadsheet component
  template: `<ejs-spreadsheet> </ejs-spreadsheet>`
})
export class AppComponent { }

```

## Run the application

Use the following command to run the application in the web browser

```
ng serve
```

The following example shows a basic Spreadsheet component

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/spreadsheet-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/spreadsheet-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/spreadsheet/spreadsheet-cs1" %}

> You can refer to our [Angular Spreadsheet](https://www.syncfusion.com/angular-components/angular-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Spreadsheet example](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/spreadsheet/default) that shows you how present and manipulate data, including editing, formulas, formatting, importing, and exporting.

## See Also

* [Data Binding](./data-binding)
* [Open and Save](./open-save)