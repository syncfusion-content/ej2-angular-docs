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

> **Note:** This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement).

## Setup Angular Environment

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

## Create an Angular Application

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

> **Note:** In Angular 19 and below, the CLI generates files like `app.component.ts`, `app.component.html`, `app.component.css`, etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> 3D Circular Chart Package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular 3D Circular Chart component](https://www.syncfusion.com/angular-components/angular-3d-circular-chart) for demonstration. Add the [Angular Chart package](https://www.npmjs.com/package/@syncfusion/ej2-angular-charts) with:

```bash
ng add @syncfusion/ej2-angular-charts
```

The above command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-charts` package and peer dependencies to your `package.json`.
- Import the 3D Circular Chart component in your application.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:

```bash
ng add @syncfusion/ej2-angular-charts
```

### Angular compatibility compiled package (ngcc)

For applications not compiled with Ivy, use the `ngcc` tagged packages:

> **Note:** The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of Ivy compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility).

```bash
npm install @syncfusion/ej2-angular-charts@32.1.19-ngcc
```

## Add the 3D Circular Chart Component

Modify the template in `src/app/app.component.ts` (or `src/app/app.ts` in Angular 20+) to render the 3D Circular Chart component:

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { CircularChart3DAllModule } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [CircularChart3DAllModule],
    standalone: true,
    selector: 'app-container',
    // specifies the template string for the 3D Circular Chart component
    template: `<ejs-circularchart3d id='chart-container'></ejs-circularchart3d>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }
```

> **Note:** `ViewEncapsulation.None` is required so that the chart's internal styles are not scoped to this component.

Now use the `app-container` selector in the `index.html` file instead of the default `<app-root>`:

```html
<app-container></app-container>
```

Use the `ng serve` command to run the application in the browser:

```bash
ng serve
```

Verify that an empty 3D Circular Chart renders before proceeding to the next step.

> **Note:** `CircularChart3DAllModule` registers every available service at once, which is convenient for getting started. For production, prefer the granular `CircularChart3DModule` and inject only the services you need.

## Pie Series

By default, the pie series is rendered when you assign JSON data to the series via the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/circularchart3d/circularchart3dseriesmodel#datasource) property. Map the field names in the JSON data to the [`xName`](https://ej2.syncfusion.com/angular/documentation/api/circularchart3d/circularchart3dseriesmodel#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/circularchart3d/circularchart3dseriesmodel#yname) properties of the series.

The 3D Circular Chart renders a 3D pie with one slice for each data point. Hovering over a slice displays a tooltip with the corresponding value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/getting-started/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/getting-started/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/getting-started" %}

## Troubleshooting

If the 3D Circular Chart does not render as expected, check for these common issues:

* **Chart not visible**: Verify that `ViewEncapsulation.None` is set on the component, that the `id` on `<ejs-circularchart3d>` is unique, and that the `selector` matches the root element in `index.html`.
* **3D scene looks flat**: Check that `<e-circularchart3d-series>` is wrapped in `<e-circularchart3d-series-collection>` and that the 3D rotation/perspective settings are configured.
* **Data not displayed**: Verify that the `xName` and `yName` values match the field names in the data source exactly.
* **Build errors**: Run `ng version` to confirm that Node.js, Angular CLI, and `@syncfusion/ej2-angular-charts` are on supported versions.

## See also

* [Pie, Donut Chart](pie-donut-chart.md) — Configure the pie and donut chart types.
* [Legend](legend.md) — Configure the 3D Circular Chart legend.
* [Data Label](data-label.md) — Customize the data labels on the slices.
* [Tooltip](tooltip.md) — Customize the 3D Circular Chart tooltip.
* [Title and Subtitle](title-and-subtitle.md) — Add a title and subtitle to the chart.

> **Note:** Looking for the full Angular 3D Circular Chart component overview, features, pricing, and documentation? Visit the [Angular 3D Circular Chart](https://www.syncfusion.com/angular-components/angular-3d-circular-chart) page.