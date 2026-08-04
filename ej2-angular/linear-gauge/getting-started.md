---
layout: post
title: Getting started with Angular Linear gauge component | Syncfusion
description: Learn how to get started with the Angular Linear Gauge component of Syncfusion Essential JS 2  and more details.
platform: ej2-angular
control: Getting Started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Linear gauge component

<!-- markdownlint-disable MD013 -->

This section explains the steps required to create a simple Linear Gauge and demonstrate the basic usage of the Linear Gauge component.

{% youtube "https://www.youtube.com/watch?v=KHAuX1TQisU" %}

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement), which covers supported Node.js, Angular, and `@syncfusion/ej2-angular-lineargauge` versions.

You also need a modern code editor such as Visual Studio Code, Cursor, or Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio.

## Dependencies

Below is the list of minimum dependencies required to use the Linear Gauge component.

```javascript
|-- @syncfusion/ej2-angular-lineargauge
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-lineargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-svg-base
```

## Setup the Angular application

A straightforward approach to begin with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

Verify the installation:

```bash
ng version
```

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

### Installing a specific version

To install a particular version of Angular CLI, use:

```bash
npm install -g @angular/cli@21.0.0
```

## Create an Angular application

With Angular CLI installed, execute this command to generate a new application. When prompted, accept the default options unless you have a specific reason to change them.

```bash
ng new syncfusion-angular-app
```

* This command prompts you to configure settings like enabling Angular routing and choosing a stylesheet format. Accept the defaults (no routing, CSS) to follow this guide.

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

![Server-side rendering prompt](images/SSR.png)

* Select the required AI tool, or 'none' if you do not need any AI tool.

![AI tool selection prompt](images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> In Angular 19 and below, the CLI generates files named `app.component.ts`, `app.component.html`, `app.component.css`, and so on. In Angular 20+, the structure is simpler: `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Linear Gauge package

To install the **Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Linear Gauge** package, use the following command:

```bash
ng add @syncfusion/ej2-angular-lineargauge
```

The `ng add` command installs the package, registers it in `package.json`, and configures the required entries in your workspace automatically.

If `ng add` is unavailable in your setup, install the package manually with:

```bash
npm install @syncfusion/ej2-angular-lineargauge
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Linear Gauge component

Open `src/app/app.component.ts` (Angular 19 and below) or `src/app/app.ts` (Angular 20+) and replace its contents with the following to render the Linear Gauge component. 

```typescript
import { Component } from '@angular/core';
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge';

@Component({
    imports: [LinearGaugeModule],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Linear Gauge component
    template: `<ejs-lineargauge id="gauge-container"></ejs-lineargauge>`
})
export class AppComponent { }

```

## Module Injection

The Linear Gauge component is divided into individual feature-based modules. To use a specific feature, you must inject its service provider. For standalone components, register services in the `providers` array of the component. This example uses the tooltip feature of the Linear Gauge component.

* `GaugeTooltipService` –  Inject this provider to use tooltip feature.

The following example demonstrates injecting `GaugeTooltipService` to enable the tooltip on the Linear Gauge:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/getting-started-cs1" %}

## Run the application

Run the following command to launch the development server and open the application in your default browser:

```bash
npm start
```

## Troubleshooting

* Feature not working (annotations, tooltip) - Ensure the matching service (`AnnotationsService`, `GaugeTooltipService`) is registered in the `providers` array of the host component.
* `Can't bind to 'minimum'` or `ejs-lineargauge is not a known element` - Make sure `LinearGaugeModule` is imported in the `imports` array of every standalone component that uses the gauge.
* `npm start` does not work - Run `npx ng serve` instead, or use `npm run start`.
* Compatibility warning about ngcc on Angular 12 or earlier - Install the legacy package: `npm install @syncfusion/ej2-angular-lineargauge@ngcc`.

## See also

* [Axis configuration](./axis)
* [Pointers](./pointers)
* [Ranges](./ranges)
* [Annotations](./annotations)
* [Appearance](./appearance)
* [User interaction (tooltips, events)](./user-interaction)
* [Print and export](./print-and-export)
* [Methods](./methods)
* [Events](./events)
* [Accessibility](./accessibility)
* [EJ1 API migration](./ej1-api-migration)
* [Linear Gauge API Reference](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge)