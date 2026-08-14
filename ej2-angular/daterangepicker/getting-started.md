---
layout: post
title: Getting Started with Angular DateRangePicker | Syncfusion
description: Learn how to get started with the Syncfusion Angular DateRangePicker control. Explore setup, features, examples, and customization options.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular DateRangePicker

The DateRangePicker component enables users to select a start date and end date from an interactive calendar interface, making it easy to define, view, and manage date ranges for filtering, scheduling, and reporting.

This guide provides step-by-step instructions for setting up an Angular project with TypeScript using Angular CLI, and integrating Syncfusion<sup style="font-size:70%">&reg;</sup> Angular DateRangePicker component. The recommended setup below targets modern Angular (CLI `ng add`). For module-based or framework host setups, see [See Also](#see-also).

The [Angular CLI](https://github.com/angular/angular-cli) simplifies creating, managing, and building Angular applications so you can start development quickly.

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement).

## Setup the Angular application

A straightforward approach to beginning with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

## Create a new application

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

![Initial_setup](images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![Initial_setup](images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> Note: In Angular 19 and below, it uses `app.component.ts`, `app.component.html`, `app.component.css` etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular DateRangePicker package

To install the **Syncfusion<sup style="font-size:70%">&reg;</sup> Angular DateRangePicker** package, use the following command:

```bash
ng add @syncfusion/ej2-angular-calendars
```

The `ng add` command installs the package, registers it in `package.json`, and configures the required entries in your workspace automatically. 

If `ng add` is unavailable in your setup, install the package manually with:

```bash
npm install @syncfusion/ej2-angular-calendars
```

## Adding CSS reference

Themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> DateRangePicker component can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/angular/documentation/appearance/overview) documentation.

Install the Material 3 theme package using the following npm command:

```bash
npm install @syncfusion/ej2-material3-theme
```

Then add the following CSS reference to the **src/styles.css** file. This is the default global stylesheet registered under `styles` in `angular.json`:

```css
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/daterangepicker/index.css";
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> DateRangePicker component

After package and theme setup, update the root component. File name and class name can vary by Angular CLI version (`src/app/app.ts` with `export class App`, or `app.component.ts` with `AppComponent`). Replace the root component content with the sample below, or merge the DateRangePicker import, template, and data into your generated file.

> For the full property list, see the [DateRangePicker API reference](https://ej2.syncfusion.com/angular/documentation/api/daterangepicker/index-default).

```typescript

import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [DateRangePickerModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App  { }

```
Place the following markup in the component template file referenced by `templateUrl` (for example, `src/app/app.html`):

```html
<div id="container">
      <ejs-daterangepicker></ejs-daterangepicker>
</div>
```

## Running the application

From the project root:

```bash
ng serve
```

When the build succeeds, the CLI reports a local URL (default: http://localhost:4200). Open that URL in a browser to view the DateRangePicker. If the port is already in use, the CLI prompts for another port, or you can run `ng serve --port 4201`.

Stop the server with `Ctrl+C` in the terminal.

The following example illustrates the output in your browser.

{% previewsample "page.domainurl/samples/daterangepicker/getting-started-cs5" %}

## Setting the start and end date

The start and end date in a date range can be set using the `startDate` and `endDate` properties. To learn more about range restriction in the DateRangePicker, please refer to the [range selection documentation](./range-selection).

The following example demonstrates the DateRangePicker with `startDate` and `endDate` properties:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/daterangepicker/getting-started-cs6" %}

## See Also

* [Render DateRangePicker with pre-defined ranges](./customization#preset-ranges)
* [Render DateRangePicker with specific culture](./globalization)
* [How to achieve validation with DateRangePicker](./how-to/custom-validation-using-form-validator)
* [How to achieve two-way binding with DateRangePicker](./how-to/two-way-binding)
* [Reactive forms with DateRangePicker](./how-to/reactive-form)