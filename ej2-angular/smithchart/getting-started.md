---
layout: post
title: Getting Started with Angular Smith Chart Component | Syncfusion
description: Check out and learn about getting started with the Angular Smith Chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting Started
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Smith Chart Component

This section explains the steps required to create an [Angular Smith Chart](https://www.syncfusion.com/angular-components/angular-smith-chart) and demonstrates the basic usage of the Smith Chart component in an Angular environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> Code Studio, and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement), which covers supported Node.js, Angular, and `@syncfusion/ej2-angular-charts` versions.

## Setup the Angular application

A straightforward approach to begin with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install the Angular CLI globally with the following command:

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

## Adding the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Smith Chart package

To install the **Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Smith Chart** package, use the following command:

```bash
ng add @syncfusion/ej2-angular-charts
```

The `ng add` command installs the package, registers it in `package.json`, and configures the required entries in your workspace automatically.

If `ng add` is unavailable in your setup, install the package manually with:

```bash
npm install @syncfusion/ej2-angular-charts
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Smith Chart component

Open `src/app/app.component.ts` (Angular 19 and below) or `src/app/app.ts` (Angular 20+) and replace its contents with the following to render the Circular Gauge component. 

```typescript

import { SmithchartModule } from '@syncfusion/ej2-angular-charts';
import { Component } from '@angular/core';

@Component({
    imports: [
        SmithchartModule
    ],
    standalone: true,
    selector: 'app-root',
    // Specifies the template string for the Smith Chart component
    template: `<ejs-smithchart id='container'></ejs-smithchart>`,
})
export class AppComponent  { }

```

## Module Injection

The Smith Chart component is divided into individual feature-based modules. To use a specific feature, you must inject its service provider. For standalone components, register services in the `providers` array of the component. This example uses the tooltip feature of the Smith Chart component.

* `TooltipRenderService` - Inject this provider to use the tooltip feature.

The following example demonstrates injecting `TooltipRenderService` to enable the tooltip on the Smith Chart:

```typescript

import { Component } from '@angular/core';
import { SmithchartModule, TooltipRenderService } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [SmithchartModule],
    standalone: true,
    selector: 'app-root',
    providers: [ TooltipRenderService ]
    template: `<ejs-smithchart id='container'></ejs-smithchart>`,

})
export class AppComponent  { }

```

## Add series to the Smith Chart

The Smith Chart supports two ways to bind data to a series.

* [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesModel#datasource) - Bind a data object directly by specifying [`resistance`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesModel#resistance) and [`reactance`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesModel#reactance) field names to add a series.
* [`points`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesModel#points) - Bind a collection of objects containing `resistance` and `reactance` values directly to render a series.

The following sample demonstrates adding two series to the Smith Chart using both approaches.

* The first series, **Transmission1**, uses the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesModel#datasource) binding.
* The second series, **Transmission2**, uses the [`points`](https://ej2.syncfusion.com/angular/documentation/api/smithchart/smithchartSeriesModel#points) binding.

Update the `app.component.ts` file as shown below to add the series data and template bindings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs2" %}

## Run the application

Run the development server with `ng serve`. Alternatively, `npm start` works if a `start` script is configured in `package.json`.

```bash
ng serve
```

## Troubleshooting

* If the Smith Chart does not render, confirm that `SmithchartModule` is listed in the `imports` array of the standalone component and that the development server has been restarted after package installation.
* If features such as legend or tooltip do not appear, ensure the corresponding service (`SmithchartLegendService` or `TooltipRenderService`) is added to the `providers` array.
* If you encounter `Cannot find module '@syncfusion/ej2-angular-charts'` errors, verify that the package is listed in `package.json` and run `npm install` to refresh `node_modules`.
* For build errors related to the `ngcc` package on Angular 16+, switch to the standard Ivy-compatible package by running `npm install @syncfusion/ej2-angular-charts@latest`.

## See also

* [Axis](./smith-chart-axis)
* [Dimensions](./smith-chart-dimensions)
* [Legend](./smith-chart-legend)
* [Tooltip](./smith-chart-tooltip)
* [work with data](./working-with-data)
* [Smith Chart API reference](https://ej2.syncfusion.com/angular/documentation/api/smithchart).