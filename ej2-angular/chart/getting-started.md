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

This section explains you the steps required to create a simple [Angular Chart](https://www.syncfusion.com/angular-components/angular-charts) and demonstrate the basic usage of the Chart component in an Angular environment.

To get start quickly with Angular Chart using CLI and Schematics, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=uAubTKfbBy8" %}

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

## Installing Syncfusion Chart package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
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

## Registering Chart Module

Import Chart module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-charts` [src/app/app.module.ts].

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the ChartModule for the Chart component
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ChartModule into NgModule
  imports:      [ BrowserModule, ChartModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

* Modify the template in `app.component.ts` file to render the `ej2-angular-charts` component
`[src/app/app.component.ts]`.

```javascript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-container',
  // specifies the template string for the Charts component
  template: `<ejs-chart id='chart-container'></ejs-chart>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }
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

The below example shows a basic Charts.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/getting-started/initialize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/getting-started/initialize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/getting-started/initialize-cs1" %}

## Module Injection

Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the AppModule. In the current application, we are going to modify the above basic chart to visualize sales data for a particular year.
For this application we are going to use  line series, tooltip, data label, category axis and legend feature of the chart. Please find relevant feature service name and description as follows.

* `LineSeriesService` - Inject this provider to use line series.
* `LegendService` - Inject this provider to use legend feature.
* `TooltipService` - Inject this provider to use tooltip feature.
* `DataLabelService` - Inject this provider to use datalabel feature.
* `CategoryService`  - Inject this provider to use category feature.

These modules should be injected to the provider section as follows,

 ```javascript
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    import { ChartComponent } from '@syncfusion/ej2-angular-charts';
    import { CategoryService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
    import { DataLabelService, LineSeriesService} from '@syncfusion/ej2-angular-charts';

    @NgModule({
        imports: [
            BrowserModule,
        ],
        declarations: [AppComponent, ChartComponent],
        bootstrap: [AppComponent],
        providers: [ CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService ]
    })

 ```

## Populate Chart with Data

This section explains how to plot below JSON data to the chart.

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

 Add a series object to the chart by using [`series`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/) property. Now map the field names `month` and `sales` in the JSON data to the [`xName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#yname) properties of the series, then set the JSON data to [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#datasource) property.

Since the JSON contains category data, set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#valuetype)for horizontal axis to `Category`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/getting-started/datasource-cs4" %}

The sales data are in thousands, so format the vertical axis label by adding
<b>$</b> as a prefix and `K` as a suffix to each label. This can be achieved by setting the
`${value}K` to the [`labelFormat`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#labelformat) property of axis. Here, `{value}` act as a placeholder
for each axis label.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/getting-started/datasource-cs5" %}

## Add Chart Title

You can add a title using [`title`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel/#title) property to the chart to provide
quick information to the user about the data plotted in the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/getting-started/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/getting-started/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/getting-started/tooltip-cs1" %}

## Enable Legend

You can use legend for the chart by setting the `visible` property to true in [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel/#legendsettings) object and by injecting the `LegendService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/getting-started/legend-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/getting-started/legend-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/getting-started/legend-cs1" %}

## Add Data Label

You can add data labels to improve the readability of the chart.
This can be achieved by setting the visible property to true in the `dataLabel` object  and by injecting `DataLabelService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/getting-started/datalabel-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/getting-started/datalabel-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/getting-started/datalabel-cs1" %}

## Enable Tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the enable property as true in [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel/#tooltip) object and by injecting `TooltipService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/getting-started/tooltip-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/getting-started/tooltip-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/getting-started/tooltip-cs2" %}

> You can also explore our [Angular Charts example](https://ej2.syncfusion.com/angular/demos/#/material/chart/line) that shows various chart types and how to represent time-dependent data, showing trends in data at equal intervals.