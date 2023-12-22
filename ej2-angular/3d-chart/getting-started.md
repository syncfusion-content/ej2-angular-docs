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

This section explains you the steps required to create a simple `Angular 3D Chart` and demonstrate the basic usage of the 3D Chart component in an Angular environment.

## Setup angular environment

You can use [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install Angular CLI use the following command.

```bash
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using below Angular CLI command.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion 3D Chart package

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

## Registering 3D Chart module

Import 3D Chart module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-charts` [src/app/app.module.ts].

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the ChartModule for the Chart component
import { Chart3DModule } from '@syncfusion/ej2-angular-charts';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ChartModule into NgModule
  imports:      [ BrowserModule, Chart3DModule ],
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
  // specifies the template string for the 3D Charts component
  template: `<ejs-chart3d id='chart-container'></ejs-chart3d>`,
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

The below example shows a basic 3D Charts.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/getting-started/getting-started-cs1" %}

## Module injection

3D Chart component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the AppModule. In the current application, we are going to modify the above basic 3D Chart to visualize sales data for a particular year. For this application we are going to use column series, tooltip, data label, category axis and legend feature of the 3D Chart. Please find relevant feature service name and description as follows.

* `ColumnSeries3DService` - Inject this provider to use column series.
* `Legend3DService` - Inject this provider to use legend feature.
* `Tooltip3DService` - Inject this provider to use tooltip feature.
* `DataLabel3DService` - Inject this provider to use datalabel feature.
* `Category3DService`  - Inject this provider to use category feature.

These modules should be injected to the provider section as follows,

 ```javascript
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    import { Chart3DComponent } from '@syncfusion/ej2-angular-charts';
    import { Category3DService, Legend3DService, Tooltip3DService } from '@syncfusion/ej2-angular-charts';
    import { DataLabel3DService } from '@syncfusion/ej2-angular-charts';

    @NgModule({
        imports: [
            BrowserModule,
        ],
        declarations: [AppComponent, Chart3DComponent],
        bootstrap: [AppComponent],
        providers: [ Category3DService, Legend3DService, Tooltip3DService, DataLabel3DService ]
    })

 ```

## Populate chart with data

This section explains how to plot below JSON data to the 3D Chart.

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

Add a series object to the 3D Chart by using [`series`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DSeriesDirective/) property. Now map the field names `x` and `y` in the JSON data to the [`xName`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DSeriesDirective/#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DSeriesDirective/#yname) properties of the series, then set the JSON data to [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DSeriesDirective/#datasource) property.

Since the JSON contains category data, set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DDirective/#valuetype)for horizontal axis to `Category`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/getting-started/getting-started-cs2" %}

## Add 3D Chart title

You can add a title using [`title`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DModel/#title) property to the 3D Chart to provide quick information to the user about the data plotted in the 3D Chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/getting-started/getting-started-cs3" %}

## Enable legend

You can use legend for the 3D Chart by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/legendSettingsModel/#visible) property to true in [`legendSettings`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DModel/#legendsettings) object and by injecting the `Legend3DService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/getting-started/getting-started-cs4/" %}

## Add data label

You can add data labels to improve the readability of the 3D Chart.
This can be achieved by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/dataLabelStyle/#visible) property to true in the [`dataLabel`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DSeriesDirective/#datalabel) object and by injecting `DataLabel3DService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/getting-started/getting-started-cs5" %}

## Enable tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalTooltipSettingsModel/#enable) property as true in [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DModel/#tooltip) object and by injecting `Tooltip3DService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/getting-started/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/getting-started/getting-started-cs6" %}

> You can also explore our [Angular 3D Charts example](https://ej2.syncfusion.com/angular/demos/#/material3/three-dimension-chart/column) that shows various 3D Chart types and how to represent time-dependent data, showing trends in data at equal intervals.