---
layout: post
title: Getting started with Angular Datetimepicker component | Syncfusion
description:  Learn how to get started with the Syncfusion Angular DateTimePicker component, including setup, installation and basic configuration.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular DateTimePicker component

The DateTimePicker component enables users to select both a date and time through an interactive calendar and time selection interface, providing a convenient way to capture precise date-time values for scheduling, planning, and event management.

This guide provides step-by-step instructions for setting up an Angular project with TypeScript using Angular CLI, and integrating Syncfusion<sup style="font-size:70%">&reg;</sup> Angular DateTimePicker component. The recommended setup below targets modern Angular (CLI `ng add`). For module-based or framework host setups, see [See Also](#see-also).

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

## Adding the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular DateTimePicker package

To install the **Syncfusion<sup style="font-size:70%">&reg;</sup> Angular DateTimePicker** package, use the following command:

```bash
ng add @syncfusion/ej2-angular-calendars
```

The `ng add` command installs the package, registers it in `package.json`, and configures the required entries in your workspace automatically. 

If `ng add` is unavailable in your setup, install the package manually with:

```bash
npm install @syncfusion/ej2-angular-calendars
```

## Adding CSS reference

Themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> DateTimePicker component can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/angular/documentation/appearance/overview) documentation.

Install the Material 3 theme package using the following npm command:

```bash
npm install @syncfusion/ej2-material3-theme
```

Then add the following CSS reference to the **src/styles.css** file. This is the default global stylesheet registered under `styles` in `angular.json`:

```css
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/datetimepicker/index.css";
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> DateTimePicker component

After package and theme setup, update the root component. File name and class name can vary by Angular CLI version (`src/app/app.ts` with `export class App`, or `app.component.ts` with `AppComponent`). Replace the root component content with the sample below, or merge the DateTimePicker import, template, and data into your generated file.

> For the full property list, see the [DateTimePicker API reference](https://ej2.syncfusion.com/angular/documentation/api/datetimepicker/index-default).

```typescript

import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [DateTimePickerModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App  { }

```
Place the following markup in the component template file referenced by `templateUrl` (for example, `src/app/app.html`):

```html
<div id="container">
      <ejs-datetimepicker></ejs-datetimepicker>
</div>
```

## Running the application

From the project root:

```bash
ng serve
```

When the build succeeds, the CLI reports a local URL (default: http://localhost:4200). Open that URL in a browser to view the DateTimePicker. If the port is already in use, the CLI prompts for another port, or you can run `ng serve --port 4201`.

Stop the server with `Ctrl+C` in the terminal.

The following example illustrates the output in your browser.

{% previewsample "page.domainurl/samples/datetimepicker/accessibility-cs4" %}

## Setting the min and max

The minimum and maximum date time can be defined with the help of `min` and `max` property. The following example demonstrates to set the `min` and `max` on initializing the DateTimePicker. To know more about range restriction in Angular DateTime Picker, please refer this [page](./date-time-range).
  
{% previewsample "page.domainurl/samples/datetimepicker/accessibility-cs5" %}

## See Also

* [Render DateTimePicker with specific culture](./globalization)
* [How to achieve validation with DateTimePicker](./how-to/custom-validation-using-form-validator)
* [How to achieve two-way binding with DateTimePicker](./how-to/two-way-binding)
* [Reactive forms with DateTimePicker](./how-to/reactive-form)
* [Template-driven forms with DateTimePicker](./how-to/template-driven-forms)
