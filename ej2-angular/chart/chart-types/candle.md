---
layout: post
title: Candle Chart in Angular Charts | Syncfusion
description: Learn here all about Candle in Syncfusion Angular Charts component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Candle
documentation: ug
domainurl: ##DomainURL##
---

# Candle Chart in Angular Charts

## Candle

The Candle series, similar to the Hilo Open Close series, is used to represent the low, high, open, and closing prices over time. It is commonly used in financial charts to visualize stock price movements.

To render a [`candle`](https://www.syncfusion.com/angular-components/angular-charts/chart-types/stock-chart) series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:

1. **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#type) as `Candle` in your chart configuration. This indicates that the data should be represented as a candle chart, providing a detailed view of stock price fluctuations by displaying the high, low, open, and close values for each time period.

2. **Inject the CandleSeries module**: Use the `@NgModule.providers` method to inject the `CandleSeriesService` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering candle series are available in your chart.

3. **Provide high, low, open, and close values**: The `Candle` series requires five fields (x, high, low, open, and close) to accurately display the stock's high, low, open, and close prices. Ensure that your data source includes these fields to create a detailed representation of stock price movements over time.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/candle-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/candle-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/candle-cs1/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/candle-cs1" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#xname), [`high`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#high), [`low`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#low), [`open`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#open) and [`close`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#close) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/candle-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/candle-cs3/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/candle-cs3/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/candle-cs3" %}

## Hollow Candles

Hollow candles in candle charts allow you to visually compare the current price with the previous price by coloring them differently. The candles are filled or left hollow based on the following criteria:

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>States</b></td>
<td><b>Description </b></td>
</tr>
<tr>
<td>Filled</td>
<td>Candlesticks are filled when the close value is lesser than the open value</td>
</tr>
<tr>
<td>Unfilled</td>
<td>Candlesticks are unfilled when the close value is greater than the open value</td>
</tr>
</table>

The color of the candle will be defined by comparing it with previous values. The bear color will be applied when the current closing value is greater than the previous closing value. The bull color will be applied when the current closing value is less than the previous closing value.

By default, the `bullFillColor` is set to **red** and the `bearFillColor` is set to **green**.

## Solid Candles

The [`enableSolidCandles`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#enablesolidcandles) property is used to enable or disable solid candles. By default, it is set to **false**. The fill color of the candle will be determined by its opening and closing values.

* The [`bearFillColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#bearfillcolor) will be applied when the opening value is less than the closing value.
* The [`bullFillColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective#bullfillcolor) will be applied when the opening value is greater than the closing value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/candle-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/candle-cs2/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/candle-cs2/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/candle-cs2" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/chart/emptyPointSettingsModel#mode) property to control handling of empty points. Available modes: `Gap`, `Drop`, `Zero`, `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/candle-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/candle-cs4/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/candle-cs4/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/candle-cs4" %}

**Fill**
Use the [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/emptyPointSettingsModel#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/candle-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/candle-cs5/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/candle-cs5/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/candle-cs5" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/iSeriesRenderEventArgs) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/candle-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/candle-cs6/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/candle-cs6/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/candle-cs6" %}

### Point render

The [`pointRender`]([../../api/chart#pointrender](https://ej2.syncfusion.com/angular/documentation/api/chart/iPointRenderEventArgs)) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/candle-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/candle-cs7/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/chart/series/candle-cs7/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/candle-cs7" %}

## See Also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)