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

This section explains you the steps required to create a simple StockChart and demonstrate the basic usage of the StockChart component in an Angular environment.

To get start quickly with Angular Stock Charts using CLI and Schematics, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=ge_uQtqNZMA" %}

## Setup Angular Environment

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular Application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion StockChart package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-charts`](https://www.npmjs.com/package/@syncfusion/ej2-angular-charts/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-charts --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-charts@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-charts/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-charts@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-charts:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Add StockChart component

Modify the template in `app.component.ts` file to render the `ej2-angular-charts` component `[src/app/app.component.ts]`.

```javascript

import { ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts'
import { Component,ViewEncapsulation } from '@angular/core';

@Component({
imports: [
  ChartAllModule, StockChartAllModule
],
standalone: true,
selector: 'app-root',
// specifies the template string for the Charts component
template: `<ejs-stockchart id='chart-container'></ejs-stockchart>`,
encapsulation: ViewEncapsulation.None
})
export class AppComponent { }

```

<!-- markdownlint-disable MD033 -->

Now use the <code>app-container</code> in the index.html instead of default one.

```
<app-container></app-container>
```

* Now run the application in the browser using the below command.

```
npm start
```

## Module Injection

Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the `app.component.ts`. In the current application, we are going to modify the above basic chart to visualize sales stock value of a company.
For this application we are going to use  candle series, tooltip, data label, datetime axis and legend feature of the chart. Please find relevant feature service name and description as follows.

* `CandleSeriesService` - Inject this provider to use candle series.
* `LegendService` - Inject this provider to use legend feature.
* `TooltipService` - Inject this provider to use tooltip feature.
* `DataLabelService` - Inject this provider to use datalabel feature.
* `DateTimeService`  - Inject this provider to use datetime feature.

These modules should be injected to the provider section as follows,

 ```javascript
    import { Component } from '@angular/core';
    import { ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts'
    import { DateTimeService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
    import { DataLabelService, CandleSeriesService} from '@syncfusion/ej2-angular-charts';

    @Component({
        imports: [
            ChartAllModule, 
            StockChartAllModule
        ],
        standalone: true,
        providers: [ DateTimeService, LegendService, TooltipService, DataLabelService, CandleSeriesService ]
    })

 ```

## Populate Chart with Data

This section explains how to plot below JSON data to the chart.

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

 Add a series object to the chart by using [`series`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartSeriesDirective/) property and then set the JSON data to [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartSeriesDirective/#datasource-any) property.

Since the JSON contains datetime data, set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartAxisDirective/#valuetype-any)for horizontal axis to `DateTime`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/getting-started/datasource-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/getting-started/datasource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/getting-started/datasource-cs1" %}

## Add Stock Chart Title

You can add a title using [`title`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/#title) property to the chart to provide quick information to the user about the data plotted in the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/getting-started/title-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/getting-started/title-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/getting-started/title-cs1" %}

## Add Stock Chart Crosshair

Crosshair has a vertical and horizontal line to view the value of the axis at mouse or touch position.

Crosshair lines can be enabled by using [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairSettings/#enable) property in the `crosshair`. Likewise tooltip label for an axis can be enabled by using [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairTooltip/#enable) property of `crosshairTooltip` in the corresponding axis.

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

Trackball can be enabled by setting the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairSettings/#enable) property of the crosshair to true and [`shared`](https://ej2.syncfusion.com/angular/documentation/api/chart/tooltipSettings/#shared) property in `tooltip` to true in chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/getting-started/trackball-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/getting-started/trackball-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/getting-started/trackball-cs1" %}

> You can refer to our [Angular Stock Chart](https://www.syncfusion.com/angular-ui-components/angular-stock-chart) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Stock Chart example](https://ej2.syncfusion.com/angular/demos/#/material/stock-chart) that shows you how to present and manipulate data.