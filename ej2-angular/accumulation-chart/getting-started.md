---
layout: post
title: Getting started with Angular Accumulation Chart component | Syncfusion
description:  Checkout and learn about Getting started with Angular Accumulation Chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: https://ej2.syncfusion.com
---

# Getting started with Angular Accumulation Chart component

This section explains the steps required to create a simple Angular Accumulation Chart and demonstrates the basic usage of the Accumulation Chart component in an Angular environment.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

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

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Accumulation Chart package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the Angular Accumulation Chart component for demonstration. Add the Angular Accumulation Chart component with:

```bash
npm install @syncfusion/ej2-angular-charts --save
```

The above command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-charts` package and peer dependencies to your `package.json`.
- Import the Accumulation Chart component in your application.

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

## Add Accumulation Chart component

Modify the template in `app.ts` file to render the Accumulation Chart component `[src/app/app.ts]`.

Note: `AccumulationChartAllModule` exports all accumulation chart feature modules and is convenient for examples and quick setup. To reduce bundle size in real apps, import only the feature modules you need (for example, `PieSeriesService`, `AccumulationLegendService`, etc.). `AccumulationChartModule` is the core module; `AccumulationChartAllModule` bundles all features for convenience.

Best practice (selective imports):

```typescript

import { Component } from '@angular/core';
import { AccumulationChartModule, PieSeriesService, AccumulationLegendService } from '@syncfusion/ej2-angular-charts';

@Component({
  imports: [AccumulationChartModule],
  standalone: true,
  selector: 'app-root',
  providers: [PieSeriesService, AccumulationLegendService],
  template: `<ejs-accumulationchart id="pie-container"></ejs-accumulationchart>`
})
export class App { }

```

This keeps the final bundle smaller than importing `AccumulationChartAllModule`.

```typescript

import { AccumulationChartAllModule } from '@syncfusion/ej2-angular-charts';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    imports: [AccumulationChartAllModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-accumulationchart id="pie-container"></ejs-accumulationchart>`,
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

## Populate Accumulation Chart with data

This section explains how to plot the following JSON data to the Accumulation Chart.

```typescript
    export class App implements OnInit {
        public piedata?: Object[];
        ngOnInit(): void {
            this.piedata = [
                { x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 },
                { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 },
                { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 },
                { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
                { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 },
                { x: 'Nov', y: 9 }, { x: 'Dec', y: 3.5 }
            ];
        }
    }
```

The below example shows a basic Accumulation Chart.

```typescript

import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { PieSeriesService, AccumulationLegendService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';

@Component({
    imports: [AccumulationChartModule],
    providers: [PieSeriesService, AccumulationLegendService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-accumulationchart id="pie-container" [legendSettings]='legendSettings'>
                  <e-accumulation-series-collection>
                      <e-accumulation-series [dataSource]='piedata' xName='x' yName='y'>
                      </e-accumulation-series>
                  </e-accumulation-series-collection>
              </ejs-accumulationchart>`
})
export class App implements OnInit {
    public piedata?: Object[];
    public legendSettings?: Object;
    ngOnInit(): void {
        this.piedata = [
            { x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 },
            { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 },
            { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 },
            { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
            { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 },
            { x: 'Nov', y: 9 }, { x: 'Dec', y: 3.5 }
        ];
        this.legendSettings = {
            visible: false
        };
    }
}

```

By default, a pie series is rendered when JSON data is assigned to the series [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationseries#datasource) property. Map JSON fields to the series [`xName`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationseries#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationseries#yname) properties to bind data correctly.
