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

> **Note:** In Angular 19 and below, the CLI generates files like `app.component.ts`, `app.component.html`, etc. In Angular 20+, the CLI generates a simpler structure with `app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Installing Syncfusion® Sankey Chart Package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use the [Angular Sankey Chart component](https://www.syncfusion.com/angular-components/angular-sankey-chart), add the [Angular Chart package](https://www.npmjs.com/package/@syncfusion/ej2-angular-charts) using the Angular CLI:

```bash
ng add @syncfusion/ej2-angular-charts
```

The above command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-charts` package and peer dependencies to your `package.json`.
- Import the required chart modules into your application automatically.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:

```bash
ng add @syncfusion/ej2-angular-charts
```

### Angular compatibility compiled package (ngcc)

For applications not compiled with Ivy, use the `ngcc` tagged packages:

```bash
npm install @syncfusion/ej2-angular-charts@32.1.19-ngcc
```

> **Note:** The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of Ivy compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility).

## Add the Sankey Chart Component

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

> **Note:** `SankeyAllModule` registers every available service at once, which is convenient for getting started. For production, prefer the granular `SankeyModule` (shown later in this guide) and inject only the services you need.

Use the `ng serve` command to run the application in the browser:

```bash
ng serve
```

## Module Injection

Sankey features are segregated into individual feature-wise services. To use a particular feature, you need to inject its corresponding service in `app.component.ts`.

There are two ways to register Sankey services:

- **`SankeyAllModule`** — Registers every available service at once. Use this for quick setup or when you need most features.
- **`SankeyModule`** — Registers only the services you explicitly add to the `providers` array. This granular form is recommended for production applications to keep bundle size small.

For this application, the tooltip and legend features of the Sankey Chart are used. The relevant feature service names and descriptions are:

| Service | Description |
| --- | --- |
| `SankeyTooltipService` | Required to render the tooltip. |
| `SankeyLegendService` | Required to render the legend. |

Update `src/app/app.component.ts` to import the granular `SankeyModule` and the required services, and add them to the `providers` array of the component:

```ts
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

The following example uses `SankeyModule` with the granular providers registered above and renders the empty chart with the tooltip and legend services ready to be used.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/getting-started/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/getting-started/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/getting-started/tooltip-cs1" %}

## Bind Data to the Sankey Chart

Now that the granular services are registered, you can populate the Sankey Chart with data. Nodes represent the categories, and links represent the flow between them. Each node has a unique `id`, and each link connects a `source` node to a `target` node with a numeric `value`. The following example shows a simple energy-flow Sankey:

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
* **Data not displayed**: Check that your data contains `source`, `target`, and `value` properties and that node ids match exactly between links.
* **Build errors**: Run `ng version` to confirm that Node.js, Angular CLI, and `@syncfusion/ej2-angular-charts` are on supported versions.

## See also

* [Configure the legend for the Sankey diagram](legend)
* [Customize the tooltip on links and nodes](tool-tip)
* [Add a title and subtitle to the chart](title-and-sub-title)