---
layout: post
title: Getting Started with Angular Accumulation Chart component | Syncfusion
description: Check out and learn about Getting Started with Angular Accumulation Chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting Started 
documentation: ug
domainurl: https://ej2.syncfusion.com
---

# Getting Started with Angular Accumulation Chart Component

This section explains the steps required to create a simple accumulation chart and demonstrates the basic usage of the [Angular Accumulation Chart](https://www.syncfusion.com/angular-components/angular-charts) component.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/mcp-server/ai-coding-assistant/getting-started)

## Prerequisites

Before getting started, ensure that your environment meets the [system requirements for Syncfusion® Angular UI components](https://ej2.syncfusion.com/angular/documentation/system-requirement), which covers supported Node.js, Angular, and `@syncfusion/ej2-angular-charts` versions.

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

With Angular CLI installed, execute the following command to generate a new application:

```bash
ng new syncfusion-angular-app
```

* This command will prompt you to configure settings like enabling Angular routing and choosing a stylesheet format.

```bash

? Which stylesheet format would you like to use? (Use arrow keys)
> CSS             [ https://developer.mozilla.org/docs/Web/CSS]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss org                                             ]

```

* By default, a CSS-based application is created. Use SCSS if required:

```bash
ng new syncfusion-angular-app --style=scss
```

* During project setup, when prompted for the Server-side rendering (SSR) option, choose the appropriate configuration.

![SSR](../images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![AI](../images/Ai.png)

Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> In Angular 19 and below, the CLI generates files like `app.component.ts`, `app.component.html`, etc. In Angular 20+, the CLI generates a simpler structure with `app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Accumulation Chart package

To install the **Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Accumulation Chart** package, use the following command:

```bash
ng add @syncfusion/ej2-angular-charts
```

The `ng add` command installs the package, registers it in `package.json`, and configures the required entries in your workspace automatically.

If `ng add` is unavailable in your setup, install the package manually with:

```bash
npm install @syncfusion/ej2-angular-charts
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Accumulation Chart component

Modify the template in `src/app/app.component.ts` (or `src/app/app.ts` in Angular 20+) to render the Accumulation Chart component:

```typescript

import { Component } from '@angular/core';
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccumulationChartModule],
  template: `<ejs-accumulationchart id="pie-container"></ejs-accumulationchart>`
})
export class App {}

```

## Module Injection

Angular Accumulation Chart components are segregated into individual feature-wise modules. To use a particular feature, you need to inject its feature service in `src/app/app.ts` (Angular 20+) or `src/app/app.component.ts` (Angular 19 and below). This example will use the pie series feature of the chart.

* `PieSeriesService` - Inject this provider to render the pie series.

Replace the contents of `src/app/app.ts` (or `src/app/app.component.ts` on Angular 19 and below) with the following:

```typescript
import { Component } from '@angular/core';
import { AccumulationChartModule, PieSeriesService } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccumulationChartModule],
  providers: [PieSeriesService],
  template: `<ejs-accumulationchart id="pie-container"></ejs-accumulationchart>`,
})
export class App {}
```

## Bind data to the Accumulation Chart

This section explains how to plot JSON data to the Angular Accumulation Chart. Replace the contents of `src/app/app.ts` (Angular 20+) or `src/app/app.component.ts` (Angular 19 and below) with the following:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/chart/accumulation-chart-data-cs2/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/accumulation-chart-data-cs2/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/accumulation-chart-data-cs1" %}

The chart renders a pie with one slice for each month (Jan–Dec) sized according to the data values, with each slice labeled in the legend. Hovering over a slice displays a tooltip with the month and value.

## Run the application

Run the application using the following command:

```bash
npm start
```

Open the generated local URL (for example, `http://localhost:4200/`) from the terminal in the browser. The application displays a pie chart showing monthly distribution from January to December, as shown below:

![Pie chart showing monthly distribution from January to December](../images/accumulation-chart-getting-started.png)

## Troubleshooting

If the accumulation chart does not render as expected, check for these common issues:

* **"No provider for PieSeriesService" error**: Confirm that `PieSeriesService`, `AccumulationLegendService`, and `AccumulationTooltipService` are all added to the component's `providers` array. Each accumulation series type and feature (pie, legend, tooltip) requires its corresponding service.
* **Chart not visible**: Verify that the `<ejs-accumulationchart>` element has a unique `id` and that the component's `selector` matches the root element used in `src/index.html` (commonly `<app-root>`).
* **Data not displayed**: Check that the `xName` and `yName` values match the field names in your data source exactly, and that the `dataSource` is assigned before the chart renders.
* **Build errors**: Run `ng version` to confirm that Node.js, Angular CLI, and `@syncfusion/ej2-angular-charts` are on supported versions, and check the terminal output for the specific error.
* **Port already in use**: If `npm start` fails because port `4200` is in use, run `ng serve --port 4201` (or another free port) instead.

## See also

* [Configure the accumulation chart legend](legend)
* [Customize the data labels displayed on slices](data-label)
* [Explore other accumulation chart types](pie-dough-nut)
* [Accumulation Chart API reference](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart)