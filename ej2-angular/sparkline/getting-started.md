---
layout: post
title: Getting Started with Angular Sparkline | Syncfusion
description: Learn how to get started with the Syncfusion Angular Sparkline control. Explore setup, features, examples, and customization options.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular Sparkline

This section explains the steps required to create a simple [Angular Sparkline](https://www.syncfusion.com/angular-components/angular-sparkline) and demonstrates the basic usage of the Sparkline component in an Angular environment.

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

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. For more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

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

* By default, the CLI creates a CSS-based application. Use SCSS if preferred:

```bash
ng new syncfusion-angular-app --style=scss
```

* During project setup, when prompted for the Server-side rendering (SSR) option, choose the appropriate configuration.

![Server-side rendering prompt](../images/SSR.png)

* Select the required AI tool or `none` if you do not need any AI tool.

![AI tool selection prompt](../images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> In Angular 19 and below, the CLI generates files like `app.component.ts`, `app.component.html`, `app.component.css`, etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Sparkline Chart package

To install the **Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Sparkline Chart** package, use the following command:

```bash
ng add @syncfusion/ej2-angular-charts
```

The `ng add` command installs the package, registers it in `package.json`, and configures the required entries in your workspace automatically.

If `ng add` is unavailable in your setup, install the package manually with:

```bash
npm install @syncfusion/ej2-angular-charts
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Sparkline Chart Component

Open `src/app/app.component.ts` (Angular 19 and below) or `src/app/app.ts` (Angular 20+) and replace its contents with the following to render the Sparkline component. 

```typescript
import { SparklineModule } from '@syncfusion/ej2-angular-charts';
import { Component } from '@angular/core';

@Component({
    imports: [SparklineModule],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Sparkline component
    template: `<ejs-sparkline id='sparkline-container'></ejs-sparkline>`,
})
export class AppComponent { }
```

## Module injection

Sparkline features are provided by optional services. To enable a feature, register its service either in the application module `providers` (module-based applications) or in a standalone component's `providers` array. This example uses the tooltip feature of the Sparkline Chart component.

- `SparklineTooltipService` - Inject this provider to enable tooltip support for the Sparkline.

The following example demonstrates enabling tooltip support. Import `SparklineTooltipService` from `@syncfusion/ej2-angular-charts` and add it to the component's `providers` array.

```typescript
import { SparklineModule, SparklineTooltipService } from '@syncfusion/ej2-angular-charts';
import { Component } from '@angular/core';

@Component({
    imports: [SparklineModule],
    standalone: true,
    selector: 'app-root',
    providers: [SparklineTooltipService],
    template: `<ejs-sparkline id='sparkline-container'></ejs-sparkline>`
})
export class AppComponent {}
```

## Bind data source to Sparkline Chart

The [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/sparklinemodel#datasource) property binds data to the Sparkline. This property accepts an array of primitive values or an array of objects. For object arrays, set [`xName`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/sparklinemodel#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/sparklinemodel#yname) to map object fields to the Sparkline's X and Y values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sparkline/getting-started/sparkline-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/sparkline/getting-started/sparkline-cs14" %}

##  Run the application

Run the development server with `ng serve`. Alternatively, `npm start` works if a `start` script is configured in `package.json`.

```bash
npm start
```

## Troubleshooting

- **`ejs-sparkline is not a known element` at build time** — `SparklineModule` is not imported into the standalone component. Add `imports: [SparklineModule]` to the component's `@Component` decorator.
- **Tooltip does not appear on hover** — `SparklineTooltipService` is not registered. Add `providers: [SparklineTooltipService]` to the component (or to the application module for module-based apps).
- **Sparkline renders as an empty SVG** — `dataSource` is missing, or `width`/`height` are not set. Bind a `dataSource` and set `width` and `height` on `<ejs-sparkline>`.
- **`npm install` fails with peer-dependency warnings on Angular 16+** — The installed package uses the legacy `ngcc` distribution. Install the Ivy distribution with `ng add @syncfusion/ej2-angular-charts` instead of the `-ngcc` tagged version.
- **Build fails on Angular 20+ with `app.component.ts` not found** — The CLI generates `src/app/app.ts` (no `.component.` suffix) from Angular 20 onwards. Rename references in the steps above to `src/app/app.ts`, `app.html`, and `app.css`.
- **`ejs-sparkline` selector is unrecognized after upgrade** — Stale module references after upgrading `@syncfusion/ej2-angular-charts`. Re-run `ng add @syncfusion/ej2-angular-charts` to refresh schematics, then restart the dev server.

## See also

- [Sparkline Dimensions](sparkline-dimension)
- [Sparkline Types](sparkline-types)
- [Axis Customization](axis-customization)
- [Special Points Customization](special-points-customization)
- [Range Band](range-band)
- [Markers](marker)
- [Data Labels](data-labels)
- [User Interaction](user-interaction)
- [Appearance](appearance)
- [Localization](localization)
- [Accessibility](accessibility)
- [Migration from Essential JS 1](ej1-api-migration)
- [Sparkline API Reference](https://ej2.syncfusion.com/angular/documentation/api/sparkline)