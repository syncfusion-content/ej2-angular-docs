---
layout: post
title: Getting Started with Angular Sankey Chart component | Syncfusion
description:  Check out and learn about Getting Started with Angular Sankey Chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting Started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Sankey Chart Component

This section explains the steps required to create a simple [Angular Sankey Chart](https://www.syncfusion.com/angular-components/angular-sankey-chart) and demonstrates the basic usage of the Angular Sankey Chart component.

> **Note:** This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

## Prerequisites

Before getting started, ensure that your environment meets the [system requirements for Syncfusion® Angular UI components](https://ej2.syncfusion.com/angular/documentation/system-requirement), which covers supported Node.js, Angular, and `@syncfusion/ej2-angular-charts` versions.

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
  Less            [ http://lesscss.org]
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

## Adding the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Sankey Chart package

To install the **Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Sankey Chart** package, use the following command:

```bash
ng add @syncfusion/ej2-angular-charts
```

The `ng add` command installs the package, registers it in `package.json`, and configures the required entries in your workspace automatically.

If `ng add` is unavailable in your setup, install the package manually with:

```bash
npm install @syncfusion/ej2-angular-charts
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Sankey Chart component

Update `src/app/app.component.ts` (or `src/app/app.ts` in Angular 20+) to render the Sankey Chart component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/getting-started/initialize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/getting-started/initialize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/getting-started/initialize-cs1" %}

## Run the application

Run the application using the following command:

```bash
ng serve
```

## Module Injection

Sankey components are segregated into individual feature-wise modules. To use a particular feature, you need to inject its feature service in `src/app/app.ts` (Angular 20+) or `src/app/app.component.ts` (Angular 19 and below). This example will use the tooltip and legend features of the Sankey Chart.

* `SankeyTooltipService` - Inject this provider to render the tooltip.
* `SankeyLegendService` - Inject this provider to render the legend.

Replace the contents of `src/app/app.ts` (or `src/app/app.component.ts` on Angular 19 and below) with the following:

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { SankeyModule, SankeyTooltipService, SankeyLegendService } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [SankeyModule],
    standalone: true,
    selector: 'app-root',
    providers: [SankeyTooltipService, SankeyLegendService],
    template: `<ejs-sankey id="sankey-container"></ejs-sankey>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }
```

## Bind Data to the Sankey Chart

Now that the granular services are registered, you can populate the Sankey Chart with data. Nodes represent the categories, and links represent the flow between them. Each node has a unique [id](https://ej2.syncfusion.com/angular/documentation/api/sankey/sankeynodemodel#id). Each link uses [sourceId](https://ej2.syncfusion.com/angular/documentation/api/sankey/sankeylinkmodel#sourceid) and [targetId](https://ej2.syncfusion.com/angular/documentation/api/sankey/sankeylinkmodel#targetid) to reference the source and target node IDs, while [value](https://ej2.syncfusion.com/angular/documentation/api/sankey/sankeylinkmodel#value) defines the flow amount between the connected nodes. The following example shows a simple energy-flow Sankey:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/getting-started/data-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/getting-started/data-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/getting-started/data-cs1" %}

The Sankey diagram renders nodes (rectangles) sized proportionally to their flow, with links (curved bands) connecting source nodes to target nodes. Hovering over a link displays a tooltip with the source, target, and value.

## Troubleshooting

If the Sankey Chart does not render as expected, check for these common issues:

* **Chart not visible**: Verify that `ViewEncapsulation.None` is set on the component, that the `id` on `<ejs-sankey>` is unique, and that the `selector` matches the root element in `index.html` (commonly `<app-root>`).
* **Data not displayed**: Check that your data contains `sourceId`, `targetId`, and `value` properties and that node ids match exactly between links.
* **Build errors**: Run `ng version` to confirm that Node.js, Angular CLI, and `@syncfusion/ej2-angular-charts` are on supported versions.

## See also

* [Configure the legend for the Sankey diagram](legend)
* [Customize the tooltip on links and nodes](tool-tip)
* [Add a title and subtitle to the chart](title-and-sub-title)
* [Sankey Chart API reference](https://ej2.syncfusion.com/angular/documentation/api/sankey/index-default)