---
layout: post
title: Getting started with Angular Circular gauge component | Syncfusion
description:  Check out and learn about the Getting started with Angular Circular gauge component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting Started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Circular gauge component

This article describes the steps to create a simple Circular Gauge and demonstrates its basic usage.

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement), which covers supported Node.js, Angular, and `@syncfusion/ej2-angular-circulargauge` versions.

You also need a modern code editor such as Visual Studio Code, Cursor, or Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio.

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

## Adding the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Circular Gauge package

To install the **Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Circular Gauge** package, use the following command:

```bash
ng add @syncfusion/ej2-angular-circulargauge
```

The `ng add` command installs the package, registers it in `package.json`, and configures the required entries in your workspace automatically.

If `ng add` is unavailable in your setup, install the package manually with:

```bash
npm install @syncfusion/ej2-angular-circulargauge
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Circular Gauge component

Open `src/app/app.component.ts` (Angular 19 and below) or `src/app/app.ts` (Angular 20+) and replace its contents with the following to render the Circular Gauge component. 

```typescript

import { Component } from '@angular/core';
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';

@Component({
    imports: [CircularGaugeModule],
    standalone: true,
    selector: 'app-container',
    // specifies the template string for the Circular Gauge component
    template: `<ejs-circulargauge id="circular-container"></ejs-circulargauge>`
})
export class AppComponent { }

```

## Module Injection

The Circular Gauge component is divided into individual feature-based modules. To use a specific feature, you must inject its service provider. For standalone components, register services in the `providers` array of the component. This example uses the tooltip feature of the Circular Gauge component.

* `GaugeTooltipService` –  Inject this provider to use tooltip feature.

The following example demonstrates injecting `GaugeTooltipService` to enable the tooltip on the Circular Gauge:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/getting-started-cs2" %}

## Troubleshooting

- **Module not found: @syncfusion/ej2-angular-circulargauge** – The package is not installed. Run `npm install @syncfusion/ej2-angular-circulargauge`.
- **Compatibility warning about Ivy/Angular version** – The ngcc suffix is missing for legacy Angular. Install with `@syncfusion/ej2-angular-circulargauge@ngcc`.
- **`ejs-circulargauge` is not a known element** – The module import is missing. Confirm `CircularGaugeModule` is imported in the `imports` array of the standalone component.
- **`ng serve` fails with port already in use** – The default port `4200` is occupied. Run `ng serve --port 4300` to use a different port.

## See also

* [Axis configuration](./gauge-axes)
* [Pointers](./gauge-pointers)
* [Ranges](./gauge-ranges)
* [Annotations](./gauge-annotations)
* [Appearance](./gauge-appearance)
* [User interaction (tooltips, events)](./gauge-user-interaction)
* [Print and export](./gauge-print-and-export)
* [Animation](./gauge-animation)
* [Legend](./gauge-legend)
* [Dimensions](./gauge-dimensions)
* [Internationalization](./internationalization)
* [Accessibility](./accessibility)
* [EJ1 API migration](./ej1-api-migration)
* [Circular Gauge API Reference](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge)