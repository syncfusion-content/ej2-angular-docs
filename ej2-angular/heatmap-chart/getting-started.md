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

import { HeatMapModule, HeatMapAllModule } from '@syncfusion/ej2-angular-heatmap';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
imports: [
         HeatMapModule, HeatMapAllModule
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
    template: `<ejs-heatmap id="heatmap-container"></ejs-heatmap>`
})
export class AppComponent { }
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

## Enable axis labels

You can add axis labels to the HeatMap and format those labels using the [xAxis](https://ej2.syncfusion.com/angular/documentation/api/heatmap/xAxis) and [yAxis](https://ej2.syncfusion.com/angular/documentation/api/heatmap/yAxis) properties. Axis labels provide additional information about the data points populated in the HeatMap.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/getting-started/axis-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/getting-started/axis-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/getting-started/axis-cs1" %}

## Add heat map title

Add a title using the [titleSettings](https://ej2.syncfusion.com/angular/documentation/api/heatmap/titleSettings) property to the HeatMap to provide quick information to the user about the data populated in the HeatMap.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/getting-started/title-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/getting-started/title-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/getting-started/title-cs1" %}

## Enable legend

Use a legend for the HeatMap in the [legendSettings](https://ej2.syncfusion.com/angular/documentation/api/heatmap/index-default#legendsettings) object by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/heatmap/legendSettings#visible) property to **true** and registering the `LegendService` in the component's `providers` array (see the [Module injection](#module-injection) section above).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/getting-started/legend-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/getting-started/legend-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/getting-started/legend-cs1" %}

## Add data label

Add data labels to improve the readability of the HeatMap. This can be achieved by setting the [showLabel](https://ej2.syncfusion.com/angular/documentation/api/heatmap/cellSettings#showLabel) property to **true** in the [cellSettings](https://ej2.syncfusion.com/angular/documentation/api/heatmap#cellSettings) object.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/getting-started/datalabel-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/getting-started/datalabel-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/getting-started/datalabel-cs1" %}

## Add custom cell palette

The default palette settings of the HeatMap cells can be customized by using the [paletteSettings](https://ej2.syncfusion.com/angular/documentation/api/heatmap#paletteSettings) property. Using the [palette](https://ej2.syncfusion.com/angular/documentation/api/heatmap/paletteSettings#palette) property in the `paletteSettings` object, you can change the color set for the cells. You can change the color mode of the cells to `Fixed` or `Gradient` using the [type](https://ej2.syncfusion.com/angular/documentation/api/heatmap/paletteSettings#type) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/getting-started/palette-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/getting-started/palette-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/getting-started/palette-cs1" %}

## Enable tooltip

The tooltip is used to display information that cannot fit in the data labels due to space constraints. You can enable the tooltip by setting the [showTooltip](https://ej2.syncfusion.com/angular/documentation/api/heatmap#showTooltip) property to **true** and registering the `TooltipService` in the component's `providers` array (see [Module injection](#module-injection) above).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/getting-started/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/getting-started/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/getting-started/tooltip-cs1" %}

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

> Refer to the [Angular HeatMap Chart](https://www.syncfusion.com/angular-ui-components/angular-heatmap-chart) feature tour page for its groundbreaking feature representations. You can also explore the [Angular HeatMap Chart example](https://ej2.syncfusion.com/angular/demos/#/material/heatmap-chart/default) that shows how to render the HeatMap Chart in Angular.
