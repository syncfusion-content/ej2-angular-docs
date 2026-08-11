---
layout: post
title: Getting Started with Angular TreeMap | Syncfusion
description: Checkout and learn about Getting started with Angular TreeMap component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular TreeMap

This document explains the steps required to create and render a TreeMap component and demonstrates the component's basic usage.

{% youtube "https://www.youtube.com/watch?v=1AvAKz1EPc8" %}

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement), which covers supported Node.js, Angular, and `@syncfusion/ej2-angular-treemap` versions.

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

## Adding the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeMap package

To install the **Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeMap** package, use the following command:

```bash
ng add @syncfusion/ej2-angular-treemap
```

The `ng add` command installs the package, registers it in `package.json`, and configures the required entries in your workspace automatically.

If `ng add` is unavailable in your setup, install the package manually with:

```bash
npm install @syncfusion/ej2-angular-treemap
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeMap component

Modify the template in `app.component.ts` to render the `ej2-angular-treemap` component. The example below shows a minimal standalone component that mounts an empty TreeMap container.

```typescript

import { Component } from '@angular/core';
import { TreeMapModule } from '@syncfusion/ej2-angular-treemap';

@Component({
    imports: [TreeMapModule],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the treemap component
    template: `<ejs-treemap id='treemap-container'></ejs-treemap>`,
})
export class AppComponent { }

```

## Run the application

Run the following command to launch the development server and open the application in your default browser:

```bash
npm start
```

## Module Injection

The TreeMap component is divided into individual feature-based modules. To use a specific feature, you must inject its service provider. For standalone components, register services in the `providers` array of the component. This example uses the tooltip feature of the TreeMap component.

* `TreeMapTooltipService` - Inject this provider to use tooltip feature.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { TreeMapModule, TreeMapTooltipService } from '@syncfusion/ej2-angular-treemap';

@Component({
    imports: [TreeMapModule],
    standalone: true,
    selector: 'app-root',
    providers: [TreeMapTooltipService],
})
export class AppComponent { }
```

## Render TreeMap with Data

This section shows how to render a TreeMap using a bound data source. The example visualizes the number of international airports in South America.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs15" %}

## Troubleshooting

* Empty TreeMap container - Verify that `dataSource` and `weightValuePath` are set, and that the field referenced by `weightValuePath` contains numeric values.
* Feature not working (legend, tooltip, selection, highlight) - Ensure the matching service (`TreeMapLegendService`, `TreeMapTooltipService`, etc.) is registered in the `providers` array.
* Build errors with standalone components - Make sure `TreeMapAllModule` is imported in the `imports` array of every standalone component that uses TreeMap directives.

## See also

* [Learn about equal, range, and desaturated color mapping modes](color-mapping)
* [Customize label templates and positions](data-label)
* [Render hierarchical data with multiple levels](levels)
* [Enable drill-down interaction on levels](drilldown)
* [Configure legend items, modes, and templates](legend)
* [Build custom tooltip templates](tooltip)
* [Export the TreeMap to PDF or image formats](print-and-export)
* [Configure selection and highlight behavior](selection-and-highlight)
* [Make the TreeMap accessible to assistive technologies](accessibility)
* [TreeMap API Reference](https://ej2.syncfusion.com/angular/documentation/api/treemap)