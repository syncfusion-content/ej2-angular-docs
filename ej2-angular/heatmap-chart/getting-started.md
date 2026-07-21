---
layout: post
title: Getting started with Angular HeatMap chart component | Syncfusion
description:  Check out and learn about the Getting started with Angular HeatMap chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: HeatMap
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular HeatMap chart component

This section explains the steps required to create a HeatMap and demonstrates the basic usage of the HeatMap component.

You can explore some useful features in the HeatMap component with the following video.

{% youtube "https://www.youtube.com/watch?v=GG3l2cAst7Y" %}

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement), which covers supported Node.js, Angular, and `@syncfusion/ej2-angular-heatmap` versions.

You also need a modern code editor such as Visual Studio Code, Cursor, or Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio.

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

## Set up the Angular Application

Use the [`Angular CLI`](https://github.com/angular/angular-cli) to create and manage Angular applications. Install the CLI with one of the following approaches depending on preference.

```bash
npm install -g @angular/cli
```

Once the Angular CLI is installed, create a new Angular application by running the following command. Use the recommended flags to create a standalone, CSS-styled, non-routing app (required for the standalone component examples below).

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> HeatMap package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are published on npm under the `@syncfusion` scope. The Angular distribution is available in two package formats:

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler (ngcc) package for legacy compilation and rendering

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (`>=20.2.36` refers to the Syncfusion package version) use the Ivy distribution to support the Angular Ivy rendering engine. These packages are compatible with Angular version 21 and other recent Angular versions. Use the following command to install the Ivy package:

Install the [`@syncfusion/ej2-angular-heatmap`](https://www.npmjs.com/package/@syncfusion/ej2-angular-heatmap) package.

```bash
npm install @syncfusion/ej2-angular-heatmap --save
```

> **Note:** The latest `ej2-angular-heatmap` package is version-compatible with Angular 16+; Angular 21 and other recent versions are supported.

### Angular compatibility compiled package (ngcc)

> **Deprecation note:** The ngcc (Angular compatibility compiler) package format is deprecated and applies only to Angular versions earlier than 12. For Angular 12 and later, always use the Ivy distribution package described above.

To install the legacy (ngcc) variant, use the following command:

```bash
npm install @syncfusion/ej2-angular-heatmap@ngcc --save
```

To reference the ngcc package in `package.json`, add the `-ngcc` suffix to the package version, for example:

```bash
@syncfusion/ej2-angular-heatmap:"32.1.19-ngcc"
```

> Note: If the `-ngcc` suffix is not specified, the Ivy package will be installed and a compatibility warning may appear when using older Angular versions.

## Add HeatMap component

After installing the package, you need to add the HeatMap component to your application. To do this, modify the template in the `app.component.ts` file to render the `<ejs-heatmap>` component. Also, ensure the `HeatMapModule` (or `HeatMapAllModule` to include all features) is imported to register the component.

The following example demonstrates how to add a basic HeatMap to the application.

```typescript

import { HeatMapModule } from '@syncfusion/ej2-angular-heatmap';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
         HeatMapModule
    ],
    standalone: true,
    selector: 'my-app',
    // specifies the template string for the HeatMap component
    template: `<ejs-heatmap id="heatmap-container"></ejs-heatmap>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

}

```
<!-- markdownlint-disable MD033 -->

Now use the <code>my-app</code> in the index.html instead of default one.

```html
  <my-app></my-app>
```

To run the application locally, use the Angular CLI `ng serve` command (or `npm start` if your `package.json` defines a `start` script). The app is served by default at `http://localhost:4200/`.

```bash
  ng serve
```

The following example shows a basic HeatMap.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/getting-started/initialize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/getting-started/initialize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/heatmap/getting-started/initialize-cs1" %}

## Module injection

The HeatMap component's features are segregated into individual feature-wise modules. To use a feature, register its corresponding service in the component's `providers` array. The relevant services and their descriptions are listed below:

* `LegendService` - Provides the legend feature.
* `TooltipService` - Provides the tooltip feature.

> **Note:** `HeatMapAllModule` re-exports every feature service, so it can be used in place of the per-feature `providers` entries when you need a quick start. For tree-shaking and smaller bundle sizes, prefer importing only the services you need and registering them in the `providers` array.

The following example shows how to import the feature services and register them with the HeatMap component.

```typescript
import { Component } from '@angular/core';
import { HeatMapModule, LegendService, TooltipService } from '@syncfusion/ej2-angular-heatmap';

@Component({
    imports: [
        HeatMapModule
    ],
    standalone: true,
    providers: [ LegendService, TooltipService ],
    selector: 'app-root',
    template: `<ejs-heatmap id="heatmap-container" [legendSettings]='legendSettings' [tooltipSettings]='tooltipSettings'></ejs-heatmap>`
})
export class AppComponent {
    public legendSettings: Object = {
        visible: true,
        position: 'Right',
    };
    public tooltipSettings: Object = {
        enable: true
    };
}
```

## Populate heat map with data

This section explains how to populate a two-dimensional array as the HeatMap's `dataSource`.

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

**`ngcc` warning during install** — `-ngcc` suffix missing on a non-Ivy Angular project. Use the `@syncfusion/ej2-angular-heatmap@ngcc` package as described in the [ngcc section](#angular-compatibility-compiled-package-ngcc).

**"Cannot find module" for HeatMap imports** — Package not installed. Re-run `npm install @syncfusion/ej2-angular-heatmap --save`.

## See also

For deeper coverage of individual features, see the following topics:

- [Axis](./axis.md)
- [Title and text styles](./appearance.md)
- [Legend](./legend.md)
- [Palette](./palette.md)
- [Tooltip](./tooltip.md)
- [Selection](./selection.md)
- [Events](./events.md)
- [Bubble HeatMap](./bubble-heatmap.md)
- [Working with data](./working-with-data.md)
