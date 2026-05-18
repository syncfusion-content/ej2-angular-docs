---
layout: post
title: Getting started with Angular Stock Chart component | Syncfusion
description:  Checkout and learn about Getting started with Angular Stock Chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: https://ej2.syncfusion.com
---

# Getting started with Angular Stock Chart component

This section explains the steps required to create a simple [Angular Stock Chart](https://www.syncfusion.com/angular-components/angular-stock-chart) and demonstrates the basic usage of the Stock Chart component in an Angular environment.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

To get started quickly with Angular Stock Chart using CLI and Schematics, view the following video:

{% youtube "https://www.youtube.com/watch?v=ge_uQtqNZMA" %}

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement).

## Setup Angular environment

A straightforward approach to begin with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
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

> Note: In Angular 19 and below, the CLI generates files like `app.component.ts`, `app.component.html`, `app.component.css`, etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Stock Chart package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular Chart component](https://www.syncfusion.com/angular-components/angular-charts) for demonstration. Add the Angular Chart component with:

```bash
npm install @syncfusion/ej2-angular-charts --save
```

The above command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-charts` package and peer dependencies to your `package.json`.
- Import the Stock Chart component in your application.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package structures for Angular components:		
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)		
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:	
	
```bash		
ng add @syncfusion/ej2-angular-charts		
```	

### Angular compatibility compiled package(ngcc)

For applications not compiled with Ivy, use the `ngcc` tagged packages:       

> Note: `ngcc` is the legacy Angular compatibility compiler. For modern projects we recommend using the Ivy-distribution packages (installable via `ng add ...`). ngcc-tagged packages may still be required for some older Angular 12–15 projects, but Angular 16+ favors Ivy-only packages. If you must use an ngcc-tagged package, consult the Syncfusion troubleshooting guide linked below for migration tips.

```bash
npm add @syncfusion/ej2-angular-charts@32.1.19-ngcc
```

Or add the dependency to `package.json`:

```json
{
  "dependencies": {
    "@syncfusion/ej2-angular-charts": "32.1.19-ngcc"
  }
}
```

See the ngcc troubleshooting guide: https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility

## Add Stock Chart component

Modify the template in `app.ts` file to render the Stock Chart component `[src/app/app.ts]`.

Note: `StockChartAllModule` exports all stock chart feature modules and is convenient for examples and quick setup. Similarly, `ChartAllModule` exports all chart-related feature modules for quick configuration. To reduce bundle size in real apps, import only the feature modules you need (for example, `DateTimeService`, `CandleSeriesService`, etc.). `StockChartModule` and `ChartModule` are the core modules, whereas `StockChartAllModule` and `ChartAllModule` bundle all features for convenience.

Best practice (selective imports):

```typescript

import { Component } from '@angular/core';
import { ChartModule, StockChartModule, DateTimeService, CandleSeriesService } from '@syncfusion/ej2-angular-charts';

@Component({
  imports: [ChartModule, StockChartModule],
  standalone: true,
  selector: 'app-root',
  providers: [DateTimeService, CandleSeriesService],
  template: `<ejs-stockchart id='chart-container'></ejs-stockchart>`
})
export class App { }

```

This keeps the final bundle smaller than importing `ChartAllModule` and `StockChartAllModule`.

```typescript

import { Component, ViewEncapsulation } from '@angular/core';
import { ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [ChartAllModule, StockChartAllModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-stockchart id='stock-chart-container'></ejs-stockchart>`,
    encapsulation: ViewEncapsulation.None
})
export class App { }

```

Now use the `app-root` selector in the `index.html` file instead of the default one.
 
```html
<app-root></app-root>
```

Use the `ng serve` command to run the application in the browser.

```bash
ng serve
```

## Populate chart with data

This section explains how to plot the following JSON data to the Stock Chart.

```typescript
export class App implements OnInit {
    public stockchartData?: Object[];
    ngOnInit(): void {
        this.stockchartData = [
            {
                date: new Date('2012-04-02'),
                open: 85.9757,
                high: 90.6657,
                low: 85.7685,
                close: 90.5257,
                volume: 660187068
            },
            {
                date: new Date('2012-04-09'),
                open: 89.4471,
                high: 92,
                low: 86.2157,
                close: 86.4614,
                volume: 912634864
            },
            {
                date: new Date('2012-04-16'),
                open: 87.1514,
                high: 88.6071,
                low: 81.4885,
                close: 81.8543,
                volume: 1221746066
            },
            {
                date: new Date('2012-04-23'),
                open: 81.5157,
                high: 88.2857,
                low: 79.2857,
                close: 86.1428,
                volume: 965935749
            },
            {
                date: new Date('2012-04-30'),
                open: 85.4,
                high: 85.4857,
                low: 80.7385,
                close: 80.75,
                volume: 615249365
            },
            {
                date: new Date('2012-05-07'),
                open: 80.2143,
                high: 82.2685,
                low: 79.8185,
                close: 80.9585,
                volume: 541742692
            },
            {
                date: new Date('2012-05-14'),
                open: 80.3671,
                high: 81.0728,
                low: 74.5971,
                close: 75.7685,
                volume: 708126233
            },
            {
                date: new Date('2012-05-21'),
                open: 76.3571,
                high: 82.3571,
                low: 76.2928,
                close: 80.3271,
                volume: 682076215
            },
            {
                date: new Date('2012-05-28'),
                open: 81.5571,
                high: 83.0714,
                low: 80.0743,
                close: 80.1414,
                volume: 480059584
            },
            {
                date: new Date('2012-06-04'),
                open: 80.2143,
                high: 82.9405,
                low: 78.3571,
                close: 82.9028,
                volume: 517577005
            }
        ];
    }
}
```

The below example shows a basic Stock Chart.

```typescript

import { ChartModule, StockChartModule } from '@syncfusion/ej2-angular-charts';
import { DateTimeService, CandleSeriesService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
@Component({
    imports: [ChartModule, StockChartModule],
    providers: [DateTimeService, CandleSeriesService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-stockchart id="stock-chart-container" [primaryXAxis]='primaryXAxis'>
                    <e-stockchart-series-collection>
                        <e-stockchart-series [dataSource]='stockchartData' type='Candle' xName='date' High='high' Low='low' Open='open' Close ='close' Name='Apple Inc'></e-stockchart-series>
                    </e-stockchart-series-collection>
                </ejs-stockchart>`
})
export class App implements OnInit {
    public primaryXAxis?: Object;
    public stockchartData?: Object[];
    ngOnInit(): void {
        this.stockchartData = [
            {
                date: new Date('2012-04-02'),
                open: 85.9757,
                high: 90.6657,
                low: 85.7685,
                close: 90.5257,
                volume: 660187068
            },
            {
                date: new Date('2012-04-09'),
                open: 89.4471,
                high: 92,
                low: 86.2157,
                close: 86.4614,
                volume: 912634864
            },
            {
                date: new Date('2012-04-16'),
                open: 87.1514,
                high: 88.6071,
                low: 81.4885,
                close: 81.8543,
                volume: 1221746066
            },
            {
                date: new Date('2012-04-23'),
                open: 81.5157,
                high: 88.2857,
                low: 79.2857,
                close: 86.1428,
                volume: 965935749
            },
            {
                date: new Date('2012-04-30'),
                open: 85.4,
                high: 85.4857,
                low: 80.7385,
                close: 80.75,
                volume: 615249365
            },
            {
                date: new Date('2012-05-07'),
                open: 80.2143,
                high: 82.2685,
                low: 79.8185,
                close: 80.9585,
                volume: 541742692
            },
            {
                date: new Date('2012-05-14'),
                open: 80.3671,
                high: 81.0728,
                low: 74.5971,
                close: 75.7685,
                volume: 708126233
            },
            {
                date: new Date('2012-05-21'),
                open: 76.3571,
                high: 82.3571,
                low: 76.2928,
                close: 80.3271,
                volume: 682076215
            },
            {
                date: new Date('2012-05-28'),
                open: 81.5571,
                high: 83.0714,
                low: 80.0743,
                close: 80.1414,
                volume: 480059584
            },
            {
                date: new Date('2012-06-04'),
                open: 80.2143,
                high: 82.9405,
                low: 78.3571,
                close: 82.9028,
                volume: 517577005
            }
        ];
        this.primaryXAxis = {
            valueType: 'DateTime'
        };
    }
}

```

Add a series object to the Stock Chart by using the [`series`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockchartseriesdirective) property and then set the JSON data to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockchartseriesdirective#datasource) property.

Since the JSON contains DateTime data, set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockchartaxisdirective#valuetype) for horizontal axis to `DateTime`. By default, the axis valueType is `Numeric`.

> You can refer to our [Angular Stock Chart](https://www.syncfusion.com/angular-ui-components/angular-stock-chart) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Stock Chart example](https://ej2.syncfusion.com/angular/demos/#/tailwind3/stock-chart/default) that shows you how to present and manipulate data.
