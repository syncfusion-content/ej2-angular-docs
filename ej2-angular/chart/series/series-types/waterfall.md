---
layout: post
title: Waterfall Chart in Angular Charts | Syncfusion
description: Learn here all about Waterfall Chart in Syncfusion Angular Charts component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Waterfall
documentation: ug
domainurl: ##DomainURL##
---

# Waterfall Chart in Angular Charts

## Waterfall Chart

A waterfall chart shows how an initial value changes step-by-step through additions and subtractions.
It helps visualize running totals, such as profit breakdowns or budget changes.

<img src="../../../../images/waterfall.png" alt="Waterfall chart showing cumulative changes">

To render a `waterfall` series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:

1. **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#type) as `Waterfall` in your chart configuration. This indicates that the data should be represented as a waterfall chart, which helps illustrate the cumulative effect of sequentially introduced positive and negative values.

2. **Inject the WaterfallSeries module**: Use the `@NgModule.providers` method to inject the `WaterfallSeriesService` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering waterfall series are available in your chart.

3. **Configure intermediate and cumulative sums**: Use the [`intermediateSumIndexes`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#intermediatesumindexes) property to represent intermediate sum values, and the [`sumIndexes`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#sumindexes) property to represent cumulative sum values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/waterfall-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/waterfall-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/waterfall-cs1/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/waterfall-cs1" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#xname) and [`yName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#yname) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/waterfall-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/waterfall-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/waterfall-cs1/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/waterfall-cs1" %}

## Series customization

In waterfall charts, you can customize the appearance of different types of data changes using specific properties. The [`negativeFillColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#negativefillcolor) property is used to specify the color for negative changes, which helps visually distinguish decreases in the data. Similarly, the [`summaryFillColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#summaryfillcolor) property is used to define the color for summary changes. By default, the [`negativeFillColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#negativefillcolor) is set to **#E94649** (red), and the [`summaryFillColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#summaryfillcolor) is set to **#4E81BC** (blue).


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/waterfall-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/waterfall-cs2/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/waterfall-cs2/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/waterfall-cs2" %}

## Empty points 

Data points with `null` or `undefined` values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/chart/emptyPointSettingsModel/#mode) property to define how empty or missing data points are handled in the series. The default mode for empty points is `Gap`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/waterfall-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/waterfall-cs3/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/waterfall-cs3/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/waterfall-cs3" %}

**Fill**

Use the [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/emptyPointSettingsModel/#fill) property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/waterfall-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/waterfall-cs4/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/waterfall-cs4/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/waterfall-cs4" %}

**Border**

Use the [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/emptyPointSettingsModel/#border) property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/waterfall-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/waterfall-cs5/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/waterfall-cs5/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/waterfall-cs5" %}

## Corner radius

The [`cornerRadius`](https://ej2.syncfusion.com/angular/documentation/api/chart/series/#cornerradius) property in the chart series is used to customize the corner radius for waterfall series. This allows you to create bars with rounded corners, giving your chart a more polished appearance. You can customize each corner of the bars using the `topLeft`, `topRight`, `bottomLeft`, and `bottomRight` properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/waterfall-cs6A/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/waterfall-cs6A/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/waterfall-cs6A/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/waterfall-cs6A" %}

### Point corner radius

You can customize the corner radius for individual points in the chart series using the [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/iPointRenderEventArgs) event by setting the [`cornerRadius`](https://ej2.syncfusion.com/angular/documentation/api/chart/iPointRenderEventArgs/#cornerradius) property in its event argument.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/waterfall-cs6B/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/waterfall-cs6B/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/waterfall-cs6B/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/waterfall-cs6B" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/iSeriesRenderEventArgs) event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/waterfall-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/waterfall-cs7/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/waterfall-cs7/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/waterfall-cs7" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/iPointRenderEventArgs) event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/waterfall-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/waterfall-cs6/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/waterfall-cs6/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/waterfall-cs6" %}



## See Also

* [Data label](../../chart-elements/data-labels)
* [Tooltip](../../chart-interactive/tool-tip)