---
layout: post
title: Getting Started with Angular Range Navigator | Syncfusion
description:  Check out and learn about Getting Started with Angular Range Navigator component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting Started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Range Navigator

This section explains the steps required to create a simple [Angular Range Navigator](https://www.syncfusion.com/angular-components/angular-range-selector) and demonstrates the basic usage of the Range Navigator component.

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

![Initial_setup](../images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![Initial_setup](../images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> In Angular 19 and below, the CLI generates files like `app.component.ts`, `app.component.html`, `app.component.css`, etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Range Navigator package

To install the **Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Range Navigator** package, use the following command:

```bash
ng add @syncfusion/ej2-angular-charts
```

The `ng add` command installs the package, registers it in `package.json`, and configures the required entries in your workspace automatically.

If `ng add` is unavailable in your setup, install the package manually with:

```bash
npm install @syncfusion/ej2-angular-charts
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Range Navigator component

Replace the contents of `src/app/app.ts` (Angular 20+) or `src/app/app.component.ts` (Angular 19 and below) with the following:

```typescript
import { Component } from '@angular/core';
import { ChartModule, RangeNavigatorModule } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [ChartModule, RangeNavigatorModule],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the RangeNavigator component
    template: `<ejs-rangenavigator id="rn-container"></ejs-rangenavigator>`,
})
export class AppComponent { }

```

## Module Injection

Range Navigator features are exposed through individual services. To use a particular feature, inject its service in the `app.component.ts` providers array. The following services extend the Range Navigator's basic functionality:

* `AreaSeriesService` — Inject this service to enable the area series.
* `DateTimeService` — Inject this service to enable the date-time axis.
* `RangeTooltipService` — Inject this service to show the tooltip.

Update `src/app/app.component.ts` to import the services and add them to the `providers` array of the component:

```typescript
import { Component } from '@angular/core';
import { ChartModule, RangeNavigatorModule, AreaSeriesService, DateTimeService, RangeTooltipService } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [ChartModule, RangeNavigatorModule],
    standalone: true,
    selector: 'app-root',
    providers: [AreaSeriesService, DateTimeService, RangeTooltipService],
    template: `<ejs-rangenavigator id="rn-container"></ejs-rangenavigator>`,
})
export class AppComponent { }
```

## Populate Range Navigator with data

Add a series object to the Range Navigator by using the [`series`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangenavigatorseriesmodel) property. Map the JSON fields `x` and `y` to the series [`xName`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangenavigatorseriesmodel#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangenavigatorseriesmodel#yname) properties, and set the JSON array as the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangenavigatorseriesmodel#datasource) property.

Since the JSON contains category data, set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangenavigatormodel#valuetype) for the horizontal axis (primaryXAxis) to `DateTime`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/getting-started/default-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/getting-started/default-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/getting-started/default-cs6" %}

>Note: Get data from [here](https://ej2.syncfusion.com/demos/src/range-navigator/data-source/default-data.json).

The sample should look like our [default](https://ej2.syncfusion.com/angular/demos#/tailwind3/range-navigator/default), don't worry about the gradient color, let it take the default color.

## Run the application

Run the application using the following command:

```bash
ng serve
```

## Troubleshooting

If the Range Navigator does not render as expected, check for these common issues:

* **"No provider for AreaSeriesService" error**: Confirm that the relevant `Service` is added to the component's `providers` array. Each feature requires its corresponding service.
* **Date axis not displaying correctly**: Confirm that `primaryXAxis.valueType` is set to `DateTime` and that the `x` field in your data source is a valid `Date` object.
* **Data not displayed**: Check that the `xName` and `yName` values match the field names in your data source exactly, and that the `dataSource` is assigned before the chart renders.
* **Build errors**: Run `ng version` to confirm that Node.js, Angular CLI, and `@syncfusion/ej2-angular-charts` are on supported versions, and check the terminal output for the specific error.
* **Port already in use**: If `ng serve` fails because port `4200` is in use, run `ng serve --port 4201` (or another free port) instead.

## See also

* [Configure the period selector](period-selector)
* [Customize the value axis](axis)
* [Use the lightweight (canvas) mode for performance](lightweight)