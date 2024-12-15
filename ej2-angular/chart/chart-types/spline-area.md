---
layout: post
title: Spline Area Chart in Angular Chart component | Syncfusion
description: Learn here all about Spline Area Chart in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Spline Area Chart
documentation: ug
domainurl: ##DomainURL##
---
# Spline Area in Angular Chart component

## Spline Area

To render a [spline area](https://www.syncfusion.com/angular-components/angular-charts/chart-types/spline-area-chart) series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:

1. **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#type) as `SplineArea` in your chart configuration. This indicates that the data should be represented as a spline area chart, where data points are connected by smooth, curved lines (splines) instead of straight lines.

2. **Inject the SplineAreaSeries module**: Use the `@NgModule.providers` method to inject the `SplineAreaSeriesService` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering spline area series are available in your chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/line-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/line-cs6/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/line-cs6/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/line-cs6" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#yname) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/line-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/line-cs6/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/line-cs6/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/line-cs6" %}

## Series customization

The following properties can be used to customize the `spline area` series.

**Fill**

The [fill](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#fill) property determines the color applied to the series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/splinearea-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/splinearea-cs/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/splinearea-cs/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/splinearea-cs" %}

The [fill](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#fill) property can be used to apply a gradient color to the spline area series. By configuring this property with gradient values, you can create a visually appealing effect in which the color transitions smoothly from one shade to another.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/splinearea-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/splinearea-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/splinearea-cs1/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/splinearea-cs1" %}


**Opacity**

The [opacity](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#opacity) property specifies the transparency level of the fill. Adjusting this property allows you to control how opaque or transparent the fill color of the series appears.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/splinearea-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/splinearea-cs2/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/splinearea-cs2/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/splinearea-cs2" %}

**Border**

Use the [border](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#border) property to customize the width, color and dasharray of the series border.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/splinearea-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/splinearea-cs3/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/splinearea-cs3/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/splinearea-cs3" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/emptyPointSettingsModel/#mode) property to define how empty or missing data points are handled in the series. The default mode for empty points is `Gap`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/splinearea-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/splinearea-cs4/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/splinearea-cs4/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/splinearea-cs4" %}


**Fill**

Use the [`fill`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/emptyPointSettingsModel/#fill) property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/splinearea-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/splinearea-cs5/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/splinearea-cs5/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/splinearea-cs5" %}

**Border**

Use the [`border`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/emptyPointSettingsModel/#border) property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/splinearea-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/splinearea-cs6/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/splinearea-cs6/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/splinearea-cs6" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/angular/documentation/api/sparkline/iSeriesRenderingEventArgs/) event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/splinearea-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/splinearea-cs7/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/splinearea-cs7/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/splinearea-cs7" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/iPointRenderEventArgs/) event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/splinearea-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/splinearea-cs8/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/splinearea-cs8/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/splinearea-cs8" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)
