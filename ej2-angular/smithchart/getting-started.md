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

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> Code Studio, and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement), which covers supported Node.js, Angular, and `@syncfusion/ej2-angular-charts` versions.

## Set up the Angular application

A straightforward approach to begin with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install the Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

### Install a specific version of Angular CLI

To install a particular version of the Angular CLI, use:

```bash
npm install -g @angular/cli@21
```

## Create a new application

With the Angular CLI installed, execute the following command to generate a new application:

```bash
ng new syncfusion-angular-app
```

This command will prompt you to configure settings such as enabling Angular routing and choosing a stylesheet format. Select the options that best match your project requirements.

```bash

? Which stylesheet format would you like to use? (Use arrow keys)
> CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org                                             ]

```

By default, a CSS-based application is created. Use SCSS if required:

```bash
ng new syncfusion-angular-app --style=scss
```

During project setup, when prompted for the Server-Side Rendering (SSR) option, choose the appropriate configuration based on your project requirements.

![Initial_setup](images/SSR.png)

When prompted to select an AI tool, select the required AI tool or choose **none** if you do not need any AI tool.

![Initial_setup](images/Ai.png)

Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> Note: In Angular 19 and below, the CLI generates files like `app.component.ts`, `app.component.html`, and `app.component.css`. In Angular 20 and above, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (without the `.component.` suffix). The code examples in this guide use the **Angular 20+** file layout.

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> Smith Chart package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular Smith Chart component](https://www.syncfusion.com/angular-components/angular-smith-chart) for demonstration. The Smith Chart is shipped as part of the broader Syncfusion Angular Charts package. Add the package to your application with:

```bash
ng add @syncfusion/ej2-angular-charts
```

The above command performs the following configurations:

- Adds the `@syncfusion/ej2-angular-charts` package and its peer dependencies to your `package.json`.
- Import the Smith Chart component in your application.

> The `ng add` schematic does **not** automatically import components into `app.component.ts`; you still need to add the imports manually as shown in the next section.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package structures for Angular components:		

1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)		
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.		

Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:		

```bash		
ng add @syncfusion/ej2-angular-charts		
```		

For applications not compiled with Ivy, use the `ngcc` tagged packages:		

> The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of Ivy compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility).	

```bash		
npm add @syncfusion/ej2-angular-charts@32.1.19-ngcc		
```

## Add the Smith Chart component

Update the contents of `src/app/app.ts` (or `src/app/app.component.ts` for Angular 19 and below) as shown below. The component imports `SmithchartModule` from `@syncfusion/ej2-angular-charts`, declares the selector `app-root`, and renders an empty Smith Chart in the template.

```typescript

import { SmithchartModule } from '@syncfusion/ej2-angular-charts';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    imports: [
        SmithchartModule
    ],
    standalone: true,
    selector: 'app-root',
    // Specifies the template string for the Smith Chart component
    template: `<ejs-smithchart id='container'></ejs-smithchart>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }

```

The default `index.html` (located at `src/index.html`) already contains an `<app-root></app-root>` element in its `<body>`, so no manual change is required for the default Angular project layout. If you have customized the bootstrap selector, ensure the selector in `@Component` matches the element used in `index.html`.

```html
<app-root></app-root>
```

The following example shows a basic Smith Chart rendered with the code above.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/smithchart/getting-started/smithchart-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/smithchart/getting-started/smithchart-cs1" %}

## Run the application

After the configuration is complete, run the following command to launch the development server and open the application in your default browser:

```bash
npm start
```

## Module Injection

Syncfusion<sup style="font-size:70%">&reg;</sup> Smith Chart features are exposed as injectable services. To use a particular feature, add its service to the `providers` array of the component. In the following sections you will extend the basic Smith Chart to visualize transmission lines; that example uses the tooltip and legend features. The relevant service names and descriptions are listed below.

* `SmithchartLegendService` - Inject this provider to use the legend feature.
* `TooltipRenderService` - Inject this provider to use the tooltip feature.

Inject these services in the `providers` array of the standalone component, as shown below.

```typescript

import { Component } from '@angular/core';
import { SmithchartModule, SmithchartLegendService, TooltipRenderService } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [
        SmithchartModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-smithchart id='container'></ejs-smithchart>`,
    encapsulation: ViewEncapsulation.None,
    providers: [ SmithchartLegendService, TooltipRenderService ]
})
export class AppComponent  { }

```

For a complete list of available Smith Chart services, refer to the [Smith Chart API reference](https://ej2.syncfusion.com/angular/documentation/api/smithchart).

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

## Troubleshooting

* If the Smith Chart does not render, confirm that `SmithchartModule` is listed in the `imports` array of the standalone component and that the development server has been restarted after package installation.
* If features such as legend or tooltip do not appear, ensure the corresponding service (`SmithchartLegendService` or `TooltipRenderService`) is added to the `providers` array.
* If you encounter `Cannot find module '@syncfusion/ej2-angular-charts'` errors, verify that the package is listed in `package.json` and run `npm install` to refresh `node_modules`.
* For build errors related to the `ngcc` package on Angular 16+, switch to the standard Ivy-compatible package by running `npm install @syncfusion/ej2-angular-charts@latest`.

## See also

* Explore additional Smith Chart topics: [Axis](./smith-chart-axis), [Dimensions](./smith-chart-dimensions), [Legend](./smith-chart-legend), [Markers](./smith-chart-marker), [Series](./smith-chart-series), [Tooltip](./smith-chart-tooltip), [Print and Export](./smith-chart-print), and [Accessibility](./accessibility).
* Learn how to [work with data](./working-with-data) in the Smith Chart.
* See the full [Smith Chart API reference](https://ej2.syncfusion.com/angular/documentation/api/smithchart).