---
layout: post
title: Getting started with Angular HeatMap chart component | Syncfusion
description:  Checkout and learn about Getting started with Angular HeatMap chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular HeatMap chart component

This section explains the steps required to create a HeatMap and demonstrates the basic usage of the HeatMap component.

You can explore some useful features in the HeatMap component with the following video.

{% youtube "https://www.youtube.com/watch?v=GG3l2cAst7Y" %}

## Set up the Angular Application

Prerequisites: Node.js (LTS) and npm must be installed before creating an Angular project.

Use the [`Angular CLI`](https://github.com/angular/angular-cli) to create and manage Angular applications. Install the CLI with one of the following approaches depending on preference.

```bash
npm install -g @angular/cli
```

Once the Angular CLI is installed, create a new Angular application by running the following command.

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

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages(`>=20.2.36`) use the Ivy distribution to support the Angular Ivy rendering engine. These packages are compatible with Angular version 21 and other latest angular versions. Install the Ivy package with the following command:

Add [`@syncfusion/ej2-angular-heatmap`](https://www.npmjs.com/package/@syncfusion/ej2-angular-heatmap/v/32.1.19) package to the application.

```bash
npm install @syncfusion/ej2-angular-heatmap --save
```

### Angular compatibility compiled package (ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-heatmap@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-heatmap/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-heatmap@ngcc --save
```

To reference the ngcc package in `package.json`, add the `-ngcc` suffix to the package version, for example:

```bash
@syncfusion/ej2-angular-heatmap:"32.1.19-ngcc"
```

> Note: If the `-ngcc` suffix is not specified, the Ivy package will be installed and a compatibility warning may appear when using older Angular versions.

## Add HeatMap component

After installing the package, you need to add the HeatMap component to your application. To do this, modify the template in the `app.component.ts` file to render the `<ejs-heatmap>` component. Also, ensure the `HeatMapModule` is imported to register the component.

The following example demonstrates how to add a basic HeatMap to the application.

  ```javascript

import { HeatMapModule, HeatMapAllModule} from '@syncfusion/ej2-angular-heatmap'
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

Use the `npm run start` command to run the application in the browser.

  ```
  npm start
  ```

The below example shows a basic HeatMap.

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

The heat map components are segregated into individual feature-wise modules. To use its feature, you need to inject its feature module using the `HeatMap.Inject()` method. In the current application,the basic heat map is modified to visualize sales revenue data for week, and  the tooltip and legend features of the heat map are used. Find the relevant feature modules and descriptions as follows.

* `LegendService` - Provides the legend feature by injecting it.
* `TooltipService` - Provides the tooltip feature by injecting it.

Now, import the above-mentioned modules from the heat map package and inject them into the heat map component as follows.

 ```javascript
 
    import { HeatMapModule, HeatMapAllModule, LegendService, TooltipService } from '@syncfusion/ej2-angular-heatmap'
    import { Component } from '@angular/core';

    @Component({
        imports: [
            HeatMapModule, HeatMapAllModul
        ],
        standalone: true,
        providers: [ LegendService, TooltipService ]
    })

 ```

## Populate heat map with data

This section explains how to populate the following two-dimensional array data to the heat map.

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

You can add axis labels to the heat map and format those labels using the [xAxis](https://ej2.syncfusion.com/angular/documentation/api/heatmap#xaxis) and [yAxis](https://ej2.syncfusion.com/angular/documentation/api/heatmap#yaxis) properties. Axis labels provide additional information about the data points populated in the heat map.

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

Add a title using the [titleSettings](https://ej2.syncfusion.com/angular/documentation/api/heatmap#titlesettings) property to the heat map to provide quick information to the user about the data populated in the heat map.

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

Use a legend for the heat map in the [legendSettings](https://ej2.syncfusion.com/angular/documentation/api/heatmap#legendsettings) object by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/heatmap/legendSettings#visible) property to **true** and injecting the `Legend` module using the `HeatMap.Inject(Legend)` method.

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

Add data labels to improve the readability of the heat map. This can be achieved by setting the [showLabel](https://ej2.syncfusion.com/angular/documentation/api/heatmap/cellSettings#showlabel) property to **true** in the [cellSettings](https://ej2.syncfusion.com/angular/documentation/api/heatmap#cellsettings) object.

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

The default palette settings of the heat map cells can be customized by using the [paletteSettings](https://ej2.syncfusion.com/angular/documentation/api/heatmap#palettesettings) property. Using the [palette](https://ej2.syncfusion.com/angular/documentation/api/heatmap/paletteSettings#palette) property in `paletteSettings` object, you can change the color set for the cells. You can change the color mode of the cells to `fixed` or `gradient` mode using the [type](https://ej2.syncfusion.com/angular/documentation/api/heatmap/paletteSettings#type) property.

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

The tooltip is used when you cannot display information by using the data labels due to space constraints. You can enable the tooltip by setting the [showTooltip](https://ej2.syncfusion.com/angular/documentation/api/heatmap#showtooltip) property to true and injecting the Tooltip module using the `HeatMap.Inject(Tooltip)` method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/getting-started/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/getting-started/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/getting-started/tooltip-cs1" %}

> You can refer to our [Angular HeatMap Chart]( https://www.syncfusion.com/angular-ui-components/angular-heatmap-chart)  feature tour page for its groundbreaking feature representations. You can also explore our [Angular HeatMap Chart example](https://ej2.syncfusion.com/angular/demos/#/material/heatmap-chart/default) that shows how to render the HeatMap Chart in Angular.
