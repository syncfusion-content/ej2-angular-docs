---
layout: post
title: Getting started with Angular Heatmap chart component | Syncfusion
description:  Checkout and learn about Getting started with Angular Heatmap chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Heatmap chart component

This section explains the steps required to create a heat map and demonstrates the basic usage of the HeatMap component.

You can explore some useful features in the HeatMap component using the following video.

{% youtube "https://www.youtube.com/watch?v=GG3l2cAst7Y" %}

## Setup Angular Environment

You can use `Angular CLI` to setup your Angular applications. To install Angular CLI use the following command.

```javascript
npm install -g @angular/cli
```

## Create an Angular Application

Start a new `Angular` application using below Angular CLI command.

```javascript
ng new my-app
cd my-app
```

## Installing Syncfusion Heatmap package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-heatmap`](https://www.npmjs.com/package/@syncfusion/ej2-angular-heatmap/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-heatmap --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-heatmap@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-heatmap/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-heatmap@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-heatmap:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Add Heatmap component

Modify the template in `app.component.ts` file to render the `ej2-ng-heatmap` component `[src/app/app.component.ts]`.

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

The below example shows a basic Heatmap.

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

You can add axis labels to the heat map and format those labels using the [xAxis](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#xaxis) and [yAxis](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#yaxis) properties. Axis labels provide additional information about the data points populated in the heat map.

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

Add a title using the [titleSettings](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#titlesettings) property to the heat map to provide quick information to the user about the data populated in the heat map.

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

Use a legend for the heat map in the [legendSettings](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#legendsettings) object by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/heatmap/legendSettings/#visible) property to **true** and injecting the `Legend` module using the `HeatMap.Inject(Legend)` method.

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

Add data labels to improve the readability of the heat map. This can be achieved by setting the [showLabel](https://ej2.syncfusion.com/angular/documentation/api/heatmap/cellSettings/#showlabel) property to **true** in the [cellSettings](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#cellsettings) object.

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

The default palette settings of the heat map cells can be customized by using the [paletteSettings](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#palettesettings) property. Using the [palette](https://ej2.syncfusion.com/angular/documentation/api/heatmap/paletteSettings/#palette) property in `paletteSettings` object, you can change the color set for the cells. You can change the color mode of the cells to `fixed` or `gradient` mode using the [type](https://ej2.syncfusion.com/angular/documentation/api/heatmap/paletteSettings/#type) property.

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

The tooltip is used when you cannot display information by using the data labels due to space constraints. You can enable the tooltip by setting the [showTooltip](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#showtooltip) property to true and injecting the Tooltip module using the `HeatMap.Inject(Tooltip)` method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/getting-started/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/getting-started/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/getting-started/tooltip-cs1" %}

> You can refer to our [Angular Heatmap Chart]( https://www.syncfusion.com/angular-ui-components/angular-heatmap-chart)  feature tour page for its groundbreaking feature representations. You can also explore our [Angular Heatmap Chart example](https://ej2.syncfusion.com/angular/demos/#/material/heatmap-chart/default) that shows how to render the Heatmap Chart in Angular.
