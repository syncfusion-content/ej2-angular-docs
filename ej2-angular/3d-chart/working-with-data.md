---
layout: post
title: Working with data source in Angular 3D Chart control | Syncfusion
description: Learn here all about working with data source in Syncfusion Angular 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: 3D Chart
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Working with data in Angular 3D Chart control

## Local data

A simple JSON data can be bound to the 3D chart using [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#datasource) property in series. Now map the fields in JSON to [`xName`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#yname) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/working-with-data/working-with-data-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/working-with-data/working-with-data-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/working-with-data/working-with-data-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/working-with-data/working-with-data-cs1" %}

## Remote data

The remote data can be bound to the 3D chart using the [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/). The `DataManager` requires minimal information like web service URL, adaptor and cross domain to interact with service endpoint properly. Assign the instance of the `DataManager` to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#datasource) property in series and map the fields of data to [`xName`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#yname) properties. You can also use the [`query`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#query) property of the series to filter the data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/working-with-data/working-with-data-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/working-with-data/working-with-data-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/working-with-data/working-with-data-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/working-with-data/working-with-data-cs2" %}

## Binding data using ODataAdaptor

`OData` is a standardized protocol for creating and consuming data. You can retrieve data from OData service using the `DataManager`. Refer to the following code example for remote data binding using OData service.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/working-with-data/working-with-data-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/working-with-data/working-with-data-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/working-with-data/working-with-data-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/working-with-data/working-with-data-cs3" %}

## Empty points

The data points that uses the `null` or `undefined` as value are considered as empty points. The empty data points are ignored and is not plotted in the chart. When the data is provided by using the points property, by using [`emptyPointSettings`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#emptypointsettings) property in series, the empty can be customized. The default [`mode`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalEmptyPointSettingsModel/#mode) of the empty point is **Gap**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/working-with-data/working-with-data-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/working-with-data/working-with-data-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/working-with-data/working-with-data-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/working-with-data/working-with-data-cs4" %}

**Customizing empty point**

The specific color for empty point can be set by the [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalEmptyPointSettingsModel/#fill) property in [`emptyPointSettings`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#emptypointsettings).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/working-with-data/working-with-data-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/working-with-data/working-with-data-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/working-with-data/working-with-data-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/working-with-data/working-with-data-cs5" %}