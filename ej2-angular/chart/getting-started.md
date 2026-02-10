---
layout: post
title: Getting started with Angular Chart component | Syncfusion
description:  Checkout and learn about Getting started with Angular Chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Chart component

This section explains the steps required to create a simple [Angular Chart](https://www.syncfusion.com/angular-components/angular-charts) and demonstrates the basic usage of the Chart component in an Angular environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Angular development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/angular/documentation/ai-coding-assistant/overview)

To get started quickly with Angular Chart using CLI and Schematics, view the following video:

{% youtube "https://www.youtube.com/watch?v=uAubTKfbBy8" %}

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

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> chart package

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

## Add chart component

Modify the template in `app.component.ts` file to render the Charts component `[src/app/app.component.ts]`.

```javascript

import { Component, ViewEncapsulation } from '@angular/core';
import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [ChartModule, ChartAllModule],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Charts component
    template: `<ejs-chart id='chart-container'></ejs-chart>`,
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

The below example shows a basic Chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/getting-started/initialize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/getting-started/initialize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/getting-started/initialize-cs1" %}

## Module injection

Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the `app.component.ts`. In the current application, we are going to modify the above basic chart to visualize sales data for a particular year. For this application we are going to use line series, tooltip, data label, category axis and legend feature of the chart. Please find relevant feature service name and description as follows.

* `LineSeriesService` - Inject this provider to use line series.
* `LegendService` - Inject this provider to use legend feature.
* `TooltipService` - Inject this provider to use tooltip feature.
* `DataLabelService` - Inject this provider to use datalabel feature.
* `CategoryService`  - Inject this provider to use category feature.

Now import the above-mentioned modules from the chart package and inject them into the Chart component through the `provider` section.

 ```javascript
    import { Component } from '@angular/core';
    import { ChartModule, ChartAllModule, LineSeriesService, LegendService, TooltipService, DataLabelService, CategoryService } from '@syncfusion/ej2-angular-charts';

    @Component({
        imports: [ChartModule, ChartAllModule],
        standalone: true,
        providers: [LineSeriesService, LegendService, TooltipService, DataLabelService, CategoryService]
    })
 ```

## Populate chart with data

This section explains how to plot the following JSON data to the Chart.

```javascript
    export class AppComponent implements OnInit {
    public chartData: Object[];
    ngOnInit(): void {
        // Data for chart series
        this.chartData = [
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
        ];
    }
}
```

Add a series object to the chart by using the [`series`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective) property. Map the JSON fields `month` and `sales` to the series [`xName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#yname) properties, and set the JSON array as the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesdirective#datasource) property.

Since the JSON contains category data, set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisdirective#valuetype) for the horizontal axis (primaryXAxis) to `Category`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/getting-started/datasource-cs4" %}

The sales data are in thousands, so format the vertical axis label by adding `$` as a prefix and `K` as a suffix to each label. This can be achieved by setting the `${value}K` to the [`labelFormat`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisdirective#labelformat) property of axis. Here, `{value}` act as a placeholder for each axis label.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/getting-started/datasource-cs5" %}

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart/tooltipsettingsmodel#enable) property as `true` in [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartmodel#tooltip) object and by injecting `TooltipService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/getting-started/tooltip-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/getting-started/tooltip-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/getting-started/tooltip-cs2" %}

> You can refer to our [Angular Charts](https://www.syncfusion.com/angular-components/angular-charts) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Charts example](https://ej2.syncfusion.com/angular/demos/#/material/chart/line) that shows various chart types and how to represent time-dependent data, showing trends in data at equal intervals.