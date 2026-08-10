---
layout: post
title: Getting Started with Angular HeatMap Chart | Syncfusion
description:  Check out and learn about the Getting started with Angular HeatMap chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: HeatMap
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular HeatMap Chart

This section explains the steps required to create a HeatMap and demonstrates the basic usage of the HeatMap component.

You can explore some useful features in the HeatMap component with the following video.

{% youtube "https://www.youtube.com/watch?v=GG3l2cAst7Y" %}

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement), which covers supported Node.js, Angular, and `@syncfusion/ej2-angular-heatmap` versions.

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

## Adding the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular HeatMap package

To install the **Syncfusion<sup style="font-size:70%">&reg;</sup> Angular HeatMap** package, use the following command:

```bash
ng add @syncfusion/ej2-angular-heatmap
```

The `ng add` command installs the package, registers it in `package.json`, and configures the required entries in your workspace automatically.

If `ng add` is unavailable in your setup, install the package manually with:

```bash
npm install @syncfusion/ej2-angular-heatmap
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Angular HeatMap component

Open `src/app/app.component.ts` (Angular 19 and below) or `src/app/app.ts` (Angular 20+) and replace its contents with the following to render the Sparkline component. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/getting-started/initialize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/getting-started/initialize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/heatmap/getting-started/initialize-cs1" %}

## Run the application

Run the development server with `ng serve`. Alternatively, `npm start` works if a `start` script is configured in `package.json`.

```bash
ng serve
```

## Module Injection

The HeatMap component's features are segregated into individual feature-wise modules. To use a feature, register its corresponding service in the component's `providers` array. The relevant services and their descriptions are listed below:

* `LegendService` - Provides the legend feature.
* `TooltipService` - Provides the tooltip feature.

Import the required services from the HeatMap package and register them in the component's providers array as shown below:

```typescript
import { Component } from '@angular/core';
import { HeatMapModule, LegendService, TooltipService } from '@syncfusion/ej2-angular-heatmap';

@Component({
    imports: [
        HeatMapModule
    ],
    standalone: true,
    providers: [ LegendService, TooltipService],
    selector: 'app-root',
    template: `<ejs-heatmap id="heatmap-container"></ejs-heatmap>`
})
export class AppComponent {}
```

## Populate heat map with data

This section explains how to populate a two-dimensional array as the HeatMap's [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/heatmap/index-default#datasource).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/getting-started/datasource-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/getting-started/datasource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/getting-started/datasource-cs1" %}

## Troubleshooting

**Legend/tooltip not appearing** — Feature service not registered. Add `LegendService` / `TooltipService` to the component's `providers` array.

**"Cannot find module" for HeatMap imports** — Package not installed. Re-run `npm install @syncfusion/ej2-angular-heatmap --save`.

## See also

For deeper coverage of individual features, see the following topics:

* [Axis](./axis)
* [Title and text styles](./appearance)
* [Legend](./legend)
* [Palette](./palette)
* [Tooltip](./tooltip)
* [Selection](./selection)
* [Events](./events)
* [Bubble HeatMap](./bubble-heatmap)
* [Working with data](./working-with-data)
* [TreeMap API Reference](https://ej2.syncfusion.com/angular/documentation/api/heatmap)