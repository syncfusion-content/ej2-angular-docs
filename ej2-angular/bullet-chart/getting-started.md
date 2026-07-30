---
layout: post
title: Getting Started with Angular Bullet Chart component | Syncfusion
description: Check out and learn about Getting Started with Angular Bullet Chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting Started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Bullet Chart Component

This section explains the steps required to create a simple [Angular Bullet Chart](https://www.syncfusion.com/angular-components/angular-bullet-chart) and demonstrates the basic usage of the Angular Bullet Chart component.

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

![Initial setup](../images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![Initial setup](../images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> In Angular 19 and below, the CLI generates files like `app.component.ts`, `app.component.html`, `app.component.css`, etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Bullet Chart package

To install the **Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Bullet Chart** package, use the following command:

```bash
ng add @syncfusion/ej2-angular-charts
```

The `ng add` command installs the package, registers it in `package.json`, and configures the required entries in your workspace automatically.

If `ng add` is unavailable in your setup, install the package manually with:

```bash
npm install @syncfusion/ej2-angular-charts
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Bullet Chart component

Replace the contents of `src/app/app.ts` (Angular 20+) or `src/app/app.component.ts` (Angular 19 and below) with the following:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/initialize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/initialize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/initialize-cs1" %}

## Run the application

Run the application using the following command:

```bash
ng serve
```

## Module Injection

Bullet Chart components are segregated into individual feature-wise modules. To use a particular feature, you need to inject its feature service in `src/app/app.ts` (Angular 20+) or `src/app/app.component.ts` (Angular 19 and below). This example will use the tooltip feature of the chart.

* `BulletTooltipService` - Inject this provider to use the tooltip feature.

Replace the contents of `src/app/app.ts` (or `src/app/app.component.ts` on Angular 19 and below) with the following:

```typescript
import { Component } from '@angular/core';
import { BulletChartModule, BulletTooltipService } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [BulletChartModule],
    standalone: true,
    selector: 'app-root',
    providers: [BulletTooltipService],
    template: `<ejs-bulletchart id='container' [tooltip]='tooltip'></ejs-bulletchart>`,
})
export class AppComponent {
    public tooltip: Object = { enable: true };
}
```

## Bind data to the Bullet Chart

This section explains how to plot JSON data to the Bullet Chart. Replace the contents of `src/app/app.ts` (Angular 20+) or `src/app/app.component.ts` (Angular 19 and below) with the following:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/datasource-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/datasource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/bullet-chart/getting-started/datasource-cs1" %}

The data is bound via the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletchartmodel#datasource) property. The `value` and `target` keys in each data row are mapped through the [`valueField`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletchartmodel#valuefield) and [`targetField`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletchartmodel#targetfield) properties, and the chart's value axis is configured with explicit [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletchartmodel#minimum), [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletchartmodel#maximum), and [`interval`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletchartmodel#interval) values.

The Bullet Chart renders one horizontal bar per data row, with a small target marker indicating the goal value. Bars are drawn against a quantitative axis.

## Troubleshooting

If the Bullet Chart does not render as expected, check for these common issues:

* **"No provider for BulletTooltipService" error**: Confirm that the relevant `*Service` is added to the component's `providers` array. Each feature requires its corresponding service.
* **Chart not visible**: Verify that `ViewEncapsulation.None` is set on the component, that the `id` on `<ejs-bulletchart>` is unique, and that the `selector` matches the root element in `index.html`.
* **Data not displayed**: Check that the `valueField` and `targetField` values match the field names in your data source exactly.
* **Build errors**: Run `ng version` to confirm that Node.js, Angular CLI, and `@syncfusion/ej2-angular-charts` are on supported versions.

## See also

* [Configure the size and margins of the Bullet Chart](bullet-chart-dimensions)
* [Customize the data labels on the bars](data-label)
* [Customize the chart title and subtitle](title)
* [Customize the value bar appearance](value-bar)
* [Bullet Chart API reference](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/index-default)