---
layout: post
title: Getting started with Angular TreeMap component | Syncfusion
description: Checkout and learn about Getting started with Angular TreeMap component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular TreeMap component

This document explains the steps required to create and render a TreeMap component and demonstrates the component's basic usage.

{% youtube "https://www.youtube.com/watch?v=1AvAKz1EPc8" %}

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement), which covers supported Node.js, Angular, and `@syncfusion/ej2-angular-treemap` versions.

You also need a modern code editor such as Visual Studio Code, Cursor, or Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio.

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

## Setup Angular Environment

Prerequisites: Node.js (LTS) and npm must be installed before creating an Angular project.

Use the [`Angular CLI`](https://github.com/angular/angular-cli) to create and manage Angular applications. Install the CLI globally or use `npx` to run it on demand.

```bash
npm install -g @angular/cli
```

```bash
npx @angular/cli new my-app
```

## Create an Angular Application

Create a new Angular application with the Angular CLI. Keep the defaults (the snippets in this guide use standalone components, which is the recommended approach for new projects).

```bash
ng new my-app
cd my-app
```

Note: Confirm that the installed Angular and Node.js versions meet project requirements before proceeding.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> TreeMap package

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

To install treemap component, use the following command.

```bash
npm install @syncfusion/ej2-angular-treemap --save
```

Note: For npm v5 and later, installed packages are added to `dependencies` by default. For earlier npm versions, include `--save` to add the package to `dependencies`.

## Add TreeMap component

Modify the template in `app.component.ts` to render the `ej2-angular-treemap` component. The example below shows a minimal standalone component that mounts an empty TreeMap container.

```typescript

import { Component, ViewEncapsulation } from '@angular/core';
import { TreeMapAllModule } from '@syncfusion/ej2-angular-treemap';

@Component({
    imports: [TreeMapAllModule],
    standalone: true,
    selector: 'app-container',
    // specifies the template string for the treemap component
    template: `<ejs-treemap id='treemap-container'></ejs-treemap>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }

```

Now use the `app-container` selector in `index.html` instead of the default content.

```html
<app-container></app-container>
```

Run the application with:

```bash
npm start
```

Since we did not specify [dataSource](https://ej2.syncfusion.com/angular/documentation/api/treemap#datasource) for the TreeMap, no items will be rendered and only an empty SVG element will be appended to the TreeMap container.

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

Here, the TreeMap is displayed using a data source, and the [weightValuePath](https://ej2.syncfusion.com/angular/documentation/api/treemap#weightvaluepath) property is set to the **Count** field of the data source as the weight value. The data fields used in this example are described below.

The leaf level items of the TreeMap can be customized using [leafItemSettings](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel). Common `leafItemSettings` properties include:

* [fill](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel#fill) - Background color of the leaf.
* [border](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel#border) - Border configuration for the leaf.
* [labelPosition](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel#labelposition) - Position of the label on the leaf (`Center`, `TopLeft`, `BottomRight`, etc.).
* [showLabels](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel#showlabels) - Toggles label visibility.

## Module Injection

The TreeMap component is divided into individual feature-based modules. To use a specific feature, you must inject its service provider. For standalone components, register services in the `providers` array of the component. For NgModule-based apps, add them to the `providers` array of `AppModule`. The available services are listed below.

* `TreeMapHighlightService` - Inject this provider to use highlight feature.
* `TreeMapSelectionService` - Inject this provider to use selection feature.
* `TreeMapLegendService` - Inject this provider to use legend feature.
* `TreeMapTooltipService` - Inject this provider to use tooltip feature.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { TreeMapModule, TreeMapHighlightService, TreeMapSelectionService, TreeMapLegendService, TreeMapTooltipService } from '@syncfusion/ej2-angular-treemap';

@Component({
    imports: [TreeMapModule],
    standalone: true,
    selector: 'app-root',
    providers: [TreeMapHighlightService, TreeMapSelectionService, TreeMapLegendService, TreeMapTooltipService],
})
export class AppComponent { }
```

## Troubleshooting

* Empty TreeMap container - Verify that `dataSource` and `weightValuePath` are set, and that the field referenced by `weightValuePath` contains numeric values.
* Feature not working (legend, tooltip, selection, highlight) - Ensure the matching service (`TreeMapLegendService`, `TreeMapTooltipService`, etc.) is registered in the `providers` array.
* Build errors with standalone components - Make sure `TreeMapAllModule` is imported in the `imports` array of every standalone component that uses TreeMap directives.

## See also

* [Color Mapping](color-mapping.md) - Learn about equal, range, and desaturated color mapping modes.
* [Data Label](data-label.md) - Customize label templates and positions.
* [Levels](levels.md) - Render hierarchical data with multiple levels.
* [Drilldown](drilldown.md) - Enable drill-down interaction on levels.
* [Legend](legend.md) - Configure legend items, modes, and templates.
* [Tooltip](tooltip.md) - Build custom tooltip templates.
* [Print and Export](print-and-export.md) - Export the TreeMap to PDF or image formats.
* [Selection and Highlight](selection-and-highlight.md) - Configure selection and highlight behavior.
* [Accessibility](accessibility.md) - Make the TreeMap accessible to assistive technologies.
