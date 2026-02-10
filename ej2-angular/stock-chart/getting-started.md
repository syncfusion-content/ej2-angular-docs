---
layout: post
title: Getting started with Angular Stock chart component | Syncfusion
description:  Checkout and learn about Getting started with Angular Stock chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Stock chart component

This section explains the steps required to create a simple [Angular Stock Chart](https://www.syncfusion.com/angular-components/angular-stock-chart) and demonstrates the basic usage of the Stock Chart component in an Angular environment.

To get started quickly with Angular Stock Chart using CLI and Schematics, view the following video:

{% youtube "https://www.youtube.com/watch?v=ge_uQtqNZMA" %}

## Setup angular environment

Use the [`Angular CLI`](https://github.com/angular/angular-cli) to set up an Angular application. For more details about Angular CLI and Node versions, please refer to this [page](https://ej2.syncfusion.com/angular/documentation/system-requirement).<br>

To install the Angular CLI, use the following command.

```bash
npm install -g @angular/cli
```

## Create an angular application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> stockChart package

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion<sup style="font-size:70%">&reg;</sup> package from npm [link](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

Currently, Syncfusion<sup style="font-size:70%">&reg;</sup> provides two package structures for Angular components:
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages (>=20.2.36) have moved to the Ivy distribution to support the Angular Ivy rendering engine (see https://angular.io/guide/ivy); these packages are compatible with Angular version 21 and later. To install the package, run:

Add [`@syncfusion/ej2-angular-charts`](https://www.npmjs.com/package/@syncfusion/ej2-angular-charts/v/32.1.19) package to the application.

```bash
npm install @syncfusion/ej2-angular-charts --save
```

### Angular compatibility compiled package(ngcc)

For Angular versions below 12, use the legacy (ngcc) package of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components. To install the `ngcc` package, run:

Add [`@syncfusion/ej2-angular-charts@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-charts/v/32.1.19-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-charts@ngcc --save
```

To reference the ngcc package in `package.json`, append the suffix `-ngcc` to the package version, for example:

```bash
@syncfusion/ej2-angular-charts:"32.1.19-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Add stockChart component

Modify the template in `app.component.ts` file to render the Stock Charts component `[src/app/app.component.ts]`.

```javascript

import { Component, ViewEncapsulation } from '@angular/core';
import { ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [ChartAllModule, StockChartAllModule],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Charts component
    template: `<ejs-stockchart id='chart-container'></ejs-stockchart>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }

```

Now use the <code>app-container</code> in the `index.html` instead of default one.

```
<app-container></app-container>
```

* Now use the `npm start` command to run the application in the browser.

```
npm start
```

## Module injection

Stock Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the `app.component.ts`. In the current application, we are going to modify the above basic Stock Chart to visualize stock value of a company. For this application we are going to use candle series, tooltip, data label, legend and datetime axis feature of the stock chart. Please find relevant feature service name and description as follows.

* `CandleSeriesService` - Inject this provider to use candle series.
* `LegendService` - Inject this provider to use legend feature.
* `TooltipService` - Inject this provider to use tooltip feature.
* `DataLabelService` - Inject this provider to use datalabel feature.
* `DateTimeService`  - Inject this provider to use datetime feature.

Now import the above-mentioned modules from the chart package and inject them into the Stock Chart component through the `provider` section.

 ```javascript
    import { Component } from '@angular/core';
    import { ChartAllModule, StockChartAllModule, DateTimeService, LegendService, TooltipService, DataLabelService, CandleSeriesService } from '@syncfusion/ej2-angular-charts';

    @Component({
        imports: [ChartAllModule, StockChartAllModule],
        standalone: true,
        providers: [ DateTimeService, LegendService, TooltipService, DataLabelService, CandleSeriesService ]
    })
```

## Populate chart with data

This section explains how to plot the following JSON data to the stock chart.

```javascript
    export class AppComponent implements OnInit {
    public chartData: Object[];
    ngOnInit(): void {
        // Data for chart series
        this.chartData = [{
            "x": new Date('2012-04-02T00:00:00.000Z'),
            "open": 320.705719,
            "high": 324.074066,
            "low": 317.737732,
            "close": 323.783783,
            "volume": 45638000
        }, {
            "x": new Date('2012-04-03T00:00:00.000Z'),
            "open": 323.028015,
            "high": 324.299286,
            "low": 319.639648,
            "close": 321.631622,
            "volume": 40857000
        }, {
            "x": new Date('2012-04-04T00:00:00.000Z'),
            "open": 319.544556,
            "high": 319.819824,
            "low": 315.865875,
            "close": 317.892883,
            "volume": 32519000
        }, {
            "x": new Date('2012-04-05T00:00:00.000Z'),
            "open": 316.436432,
            "high": 318.533539,
            "low": 314.599609,
            "close": 316.476471,
            "volume": 46327000
        }]
    }
}
```

Add a series object to the stock chart by using [`series`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockchartseriesdirective) property and then set the JSON data to [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockchartseriesdirective#datasource) property.

Since the JSON contains DateTime data, set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockchartaxisdirective#valuetype) for horizontal axis to `DateTime`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/getting-started/datasource-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/getting-started/datasource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/getting-started/datasource-cs1" %}

## Add stock chart title

You can add a title using the [`title`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockchartmodel#title) property to the stock chart to provide quick information to the user about the data plotted in the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/getting-started/title-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/getting-started/title-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/getting-started/title-cs1" %}

## Add stock chart crosshair

Crosshair has a vertical and horizontal line to view the value of the axis at mouse or touch position.

Crosshair lines can be enabled by using the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairsettings#enable) property in the [`crosshair`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockchartmodel#crosshair). Likewise tooltip label for an axis can be enabled by using [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairtooltip#enable) property of [`crosshairTooltip`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairtooltip) in the corresponding axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/getting-started/crosshair-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/getting-started/crosshair-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/getting-started/crosshair-cs1" %}

## Trackball

Trackball is used to track a data point closest to the mouse or touch position. Trackball marker indicates the closest point and trackball tooltip displays the information about the point. To use trackball feature, we need to inject `CrosshairService` and `TooltipService` into the `NgModule.providers`.

Trackball can be enabled by setting the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairsettings#enable) property of the [`crosshair`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockchartmodel#crosshair) to `true` and [`shared`](https://ej2.syncfusion.com/angular/documentation/api/chart/tooltipsettings#shared) property in [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockchartmodel#tooltip) to `true` in chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/getting-started/trackball-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/getting-started/trackball-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/getting-started/trackball-cs1" %}

> You can refer to our [Angular Stock Chart](https://www.syncfusion.com/angular-ui-components/angular-stock-chart) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Stock Chart example](https://ej2.syncfusion.com/angular/demos/#/tailwind3/stock-chart/default) that shows you how to present and manipulate data.