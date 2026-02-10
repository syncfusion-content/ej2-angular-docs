---
layout: post
title: Getting started with Angular 3D Chart component | Syncfusion
description:  Checkout and learn about Getting started with Angular 3D Chart component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular 3D Chart component

This section explains the steps required to create a simple [Angular 3D Chart](https://www.syncfusion.com/angular-components/angular-3d-chart) and demonstrates the basic usage of the 3D Chart component in an Angular environment.

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

## Installing Syncfusion<sup style="font-size:70%">&reg;</sup> 3D chart package

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

## Add 3D chart component

Modify the template in `app.component.ts` file to render the 3D Charts component `[src/app/app.component.ts]`.

```javascript
import { Component, ViewEncapsulation } from '@angular/core';
import { Chart3DModule, Chart3DAllModule } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [Chart3DModule, Chart3DAllModule],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the 3D Charts component
    template: `<ejs-chart3d id='chart-container'></ejs-chart3d>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }
```

Now use the <code>app-container</code> in the `index.html` instead of default one.

```
<app-container></app-container>
```

* Now use the `npm start` command to run the application in the browser.

```
npm start
```

The below example shows a basic 3D Chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/getting-started/getting-started-cs1" %}

## Module injection

3D Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the `app.component.ts`. In the current application, we are going to modify the above basic 3D Chart to visualize sales data for a particular year. For this application we are going to use column series, tooltip, data label, category axis and legend feature of the 3D Chart. Please find relevant feature service name and description as follows.

* `ColumnSeries3DService` - Inject this provider to use column series.
* `Legend3DService` - Inject this provider to use legend feature.
* `Tooltip3DService` - Inject this provider to use tooltip feature.
* `DataLabel3DService` - Inject this provider to use datalabel feature.
* `Category3DService`  - Inject this provider to use category feature.

Now import the above-mentioned modules from the chart package and inject them into the Chart3D component through the `provider` section.

 ```javascript
    import { Chart3DModule, ColumnSeries3DService, Legend3DService, Tooltip3DService, DataLabel3DService, Category3DService } from '@syncfusion/ej2-angular-charts';
    import { Component } from '@angular/core';

    @Component({
        imports: [Chart3DModule],
        standalone: true,
        providers: [ ColumnSeries3DService, Legend3DService, Tooltip3DService, DataLabel3DService, Category3DService ]
    })
 ```

## Populate chart with data

This section explains how to plot the following JSON data to the 3D Chart.

```javascript
    export class AppComponent implements OnInit {
    public chartData: Object[];
    ngOnInit(): void {
        // Data for chart series
        this.chartData = [
            { x: 'Tesla', y: 137429 },
            { x: 'Aion', y: 80308 },
            { x: 'Wuling', y: 76418 },
            { x: 'Changan', y: 52849 },
            { x: 'Geely', y: 47234 },
            { x: 'Nio', y: 31041 },
            { x: 'Neta', y: 22449 },
            { x: 'BMW', y: 18733 }
        ];
    }
}
```

Add a series object to the 3D Chart by using the [`series`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dseriesdirective) property. Map the JSON fields `month` and `sales` to the series [`xName`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dseriesdirective#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dseriesdirective#yname) properties, and set the JSON array as the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dseriesdirective#datasource) property. 

Since the JSON contains category data, set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3daxismodel#valuetype) for the horizontal axis (primaryXAxis) to `Category`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/getting-started/getting-started-cs2" %}

## Add 3D chart title

You can add a title using the [`title`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dmodel#title) property to the 3D Chart to provide quick information to the user about the data plotted in the 3D Chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/getting-started/getting-started-cs3" %}

## Enable legend

You can use legend for the 3D Chart by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dlegendsettingsmodel#visible) property to `true` in [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dmodel#legendsettings) object and by injecting the `Legend3DService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/getting-started/getting-started-cs4/" %}

## Add data label

You can add data labels to improve the readability of the 3D Chart. This can be achieved by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3ddatalabelsettingsmodel#visible) property to `true` in the [`dataLabel`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dseriesdirective#datalabel) object and by injecting `DataLabel3DService` into the `@NgModule.providers`. Now, the data labels are arranged smartly based on series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/getting-started/getting-started-cs5" %}

## Enable tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dtooltipsettingsmodel#enable) property as `true` in [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3dmodel#tooltip) object and by injecting `Tooltip3DService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/getting-started/getting-started-cs6" %}

> You can refer to our [Angular 3D Charts](https://www.syncfusion.com/angular-components/angular-3d-chart) feature tour page for its groundbreaking feature representations. You can also explore our [Angular 3D Charts example](https://ej2.syncfusion.com/angular/demos/#/material3/three-dimension-chart/column) that shows various 3D Chart types and how to represent time-dependent data, showing trends in data at equal intervals.