---
layout: post
title: Getting started with Angular Stock Chart component | Syncfusion
description:  Checkout and learn about Getting started with Angular Stock Chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Stock Chart component

This section explains the steps required to create a simple [Angular Stock Chart](https://www.syncfusion.com/angular-components/angular-stock-chart) and demonstrates the basic usage of the Stock Chart component in an Angular environment.

> Note: This guide supports **Angular 21** and other recent Angular versions. For detailed compatibility with other Angular versions, please refer to the [Angular version support matrix](https://ej2.syncfusion.com/angular/documentation/system-requirement#angular-version-compatibility). Starting from Angular 19, standalone components are the default, and this guide reflects that architecture.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

To get started quickly with Angular Stock Chart using CLI and Schematics, view the following video:

{% youtube "https://www.youtube.com/watch?v=ge_uQtqNZMA" %}

## Prerequisites

Ensure your development environment meets the [System Requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Angular UI Components](https://ej2.syncfusion.com/angular/documentation/system-requirement).

## Setup the Angular application

A straightforward approach to begin with Angular is to create a new application using the [Angular CLI](https://github.com/angular/angular-cli). Install Angular CLI globally with the following command:

```bash
npm install -g @angular/cli
```

> **Angular 21 Standalone Architecture:** Standalone components are the default in Angular 21. This guide uses the modern standalone architecture. If you need more information about the standalone architecture, refer to the [Standalone Guide](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-standalone).

### Installing a specific version

To install a particular version of Angular CLI, use:

```bash
npm install -g @angular/cli@21.0.0
```

## Create a new application

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

* By default, a CSS-based application is created. Use SCSS if required:

```bash
ng new syncfusion-angular-app --style=scss
```

* During project setup, when prompted for the Server-side rendering (SSR) option, choose the appropriate configuration.

![Initial_setup](../images/SSR.png)

* Select the required AI tool or 'none' if you do not need any AI tool.

![Initial_setup](../images/Ai.png)

* Navigate to your newly created application directory:

```bash
cd syncfusion-angular-app
```

> Note: In Angular 19 and below, the CLI generates files like `app.component.ts`, `app.component.html`, `app.component.css`, etc. In Angular 20+, the CLI generates a simpler structure with `src/app/app.ts`, `app.html`, and `app.css` (no `.component.` suffixes).

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Angular packages

Syncfusion<sup style="font-size:70%">&reg;</sup>'s Angular component packages are available on [npmjs.com](https://www.npmjs.com/search?q=ej2-angular). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components, install the necessary package.

This guide uses the [Angular Stock Chart component](https://www.syncfusion.com/angular-components/angular-stock-chart) for demonstration. Add the Angular Stock Chart component with:

```bash
ng add @syncfusion/ej2-angular-charts
```

The above command will perform the following configurations:

- Add the `@syncfusion/ej2-angular-charts` package and peer dependencies to your `package.json`.
- Import the Stock Chart component in your application.

For more details on version compatibility, refer to the [Version Compatibility](https://ej2.syncfusion.com/angular/documentation/upgrade/version-compatibility) section.

Syncfusion<sup style="font-size:70%">&reg;</sup> offers two package structures for Angular components:		
1. Ivy library distribution package [format](https://angular.dev/tools/libraries/angular-package-format)		
2. Angular compatibility compiler (ngcc), which is Angular's legacy compilation pipeline.		
Syncfusion<sup style="font-size:70%">&reg;</sup>'s latest Angular packages are provided as Ivy-compatible and suited for Angular 12 and above. To install the package, execute:		
```bash		
ng add @syncfusion/ej2-angular-charts		
```		
For applications not compiled with Ivy, use the `ngcc` tagged packages:		
> The ngcc packages are still compatible with Angular CLI versions 15 and below. However, they may generate warnings suggesting the use of Ivy compiled packages. Starting from Angular 16, support for the ngcc package has been completely removed. If you have further questions regarding ngcc compatibility, please refer to the following [FAQ](https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/ngcc-compatibility).	

```bash		
npm add @syncfusion/ej2-angular-charts@32.1.19-ngcc		
```

## Add Stock Chart component

Modify the template in `app.component.ts` file to render the Stock Chart component `[src/app/app.component.ts]`.

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

Now use the <code>app-root</code> in the `index.html` instead of default one.

```
<app-root></app-root>
```

* Now use the `ng serve` command to run the application in the browser.

```
ng serve
```

## Module injection

Stock Chart components are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the `app.component.ts`. In the current application, we are going to modify the above basic Stock Chart to visualize the stock value of a company. For this application, we are going to use candle series, tooltip, data label, legend and datetime axis features of the Stock Chart. Please find the relevant feature service names and descriptions as follows:

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

This section explains how to plot the following JSON data to the Stock Chart.

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

Add a series object to the Stock Chart by using the [`series`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockchartseriesdirective) property and then set the JSON data to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockchartseriesdirective#datasource) property.

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

## Add Stock Chart title

You can add a title using the [`title`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockchartmodel#title) property to the Stock Chart to provide quick information to the user about the data plotted in the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/getting-started/title-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/getting-started/title-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/getting-started/title-cs1" %}

## Add Stock Chart crosshair

Crosshair has a vertical and horizontal line to view the value of the axis at the mouse or touch position.

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

Trackball is used to track a data point closest to the mouse or touch position. Trackball marker indicates the closest point and trackball tooltip displays the information about the point. To use trackball feature, we need to inject `CrosshairService` and `TooltipService` into the component's `providers` array.

Trackball can be enabled by setting the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart/crosshairsettings#enable) property of the [`crosshair`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockchartmodel#crosshair) to `true` and the [`shared`](https://ej2.syncfusion.com/angular/documentation/api/chart/tooltipsettings#shared) property in [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockchartmodel#tooltip) to `true` in the chart.

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