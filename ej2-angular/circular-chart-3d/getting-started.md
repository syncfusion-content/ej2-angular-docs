---
layout: post
title: Getting Started with Angular 3D Circular Chart component | Syncfusion
description:  Check out and learn about Getting Started with Angular 3D Circular Chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting Started
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular 3D Circular Chart Component

This section explains the steps required to create a simple [Angular 3D Circular Chart](https://www.syncfusion.com/angular-components/angular-3d-circular-chart) and demonstrates the basic usage of the Angular 3D Circular Chart component.

> This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

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
ng new syncfusion-angular-app
```

* During project setup, when prompted for the Server-side rendering (SSR) option, choose the appropriate configuration.

![Initial setup](../images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![Initial setup](../images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> In Angular 19 and below, the CLI generates files like `app.component.ts`, `app.component.html`, `app.component.css`, etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular 3D Circular Chart package

To install the **Syncfusion<sup style="font-size:70%">&reg;</sup> Angular 3D Circular Chart** package, use the following command:

```bash
ng add @syncfusion/ej2-angular-charts
```

The `ng add` command installs the package, registers it in `package.json`, and configures the required entries in your workspace automatically.

If `ng add` is unavailable in your setup, install the package manually with:

```bash
npm install @syncfusion/ej2-angular-charts
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> 3D Circular Chart component

Replace the contents of `src/app/app.ts` (Angular 20+) or `src/app/app.component.ts` (Angular 19 and below) with the following to render the 3D Circular Chart component:

```typescript
import { Component } from '@angular/core';
import { CircularChart3DAllModule } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [CircularChart3DAllModule],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the 3D Circular Chart component
    template: `<ejs-circularchart3d id='chart3d-container'></ejs-circularchart3d>`,
})
export class AppComponent { }
```

## Module Injection

3D Circular Chart components are segregated into individual feature-wise modules. To use a particular feature, you need to inject its feature service in `src/app/app.ts` (Angular 20+) or `src/app/app.component.ts` (Angular 19 and below). This example will use the tooltip feature of the chart.

* `CircularChartTooltip3DService` - Inject this provider to use the tooltip feature.

Replace the contents of `src/app/app.ts` (or `src/app/app.component.ts` on Angular 19 and below) with the following:

```typescript
import { Component } from '@angular/core';
import { CircularChart3DModule, CircularChartTooltip3DService } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [CircularChart3DModule],
    standalone: true,
    selector: 'app-root',
    providers: [CircularChartTooltip3DService],
    template: `<ejs-circularchart3d id='chart3d-container' [tooltip]='tooltip'></ejs-circularchart3d>`,
})
export class AppComponent {
    public tooltip: Object = { enable: true };
}
```

## Bind data to the Circular 3D Chart

This section explains how to plot JSON data to the 3D Circular Chart. Replace the contents of `src/app/app.ts` (Angular 20+) or `src/app/app.component.ts` (Angular 19 and below) with the following:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/getting-started/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/getting-started/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/getting-started" %}

## Run the application

Run the application using the following command:

```bash
ng serve
```

## Troubleshooting

If the 3D Circular Chart does not render as expected, check for these common issues:

* **Chart not visible**: Verify that `ViewEncapsulation.None` is set on the component, that the `id` on `<ejs-circularchart3d>` is unique, and that the `selector` matches the root element in `index.html` (commonly `<app-root>`).
* **3D scene looks flat**: Check that `<e-circularchart3d-series>` is wrapped in `<e-circularchart3d-series-collection>` and that the 3D rotation/perspective settings are configured.
* **Data not displayed**: Verify that the `xName` and `yName` values match the field names in the data source exactly.
* **Build errors**: Run `ng version` to confirm that Node.js, Angular CLI, and `@syncfusion/ej2-angular-charts` are on supported versions.
* **Port already in use**: If `ng serve` fails because port `4200` is in use, run `ng serve --port 4201` (or another free port) instead.

## See also

* [Configure the pie and donut chart types](pie-donut-chart)
* [Configure the 3D Circular Chart legend](legend)
* [Customize the data labels on the slices](data-label)
* [Customize the 3D Circular Chart tooltip](tooltip)
* [Add a title and subtitle to the chart](title-and-subtitle)