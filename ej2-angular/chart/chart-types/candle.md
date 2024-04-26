---
layout: post
title: Candle in Angular Chart component | Syncfusion
description: Learn here all about Candle in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Candle
documentation: ug
domainurl: ##DomainURL##
---

# Candle in Angular Chart component

## Candle

Candle series are similar to Hilo Open Close series, are used to represent the low, high, open and closing price over time. To render a candle series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#type) as `Candle` and inject `CandleSeriesService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/candle-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/candle-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/candle-cs1" %}

## Hollow Candles

Candle charts allow to visually compare the current price with previous price by customizing the appearance.

Candles are filled/left as hollow based on the following criteria.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>States</b></td>
<td><b>Description </b></td>
</tr>
<tr>
<td>Filled</td>
<td>candle sticks are filled when the close value is lesser than the open value</td>
</tr>
<tr>
<td>Unfilled</td>
<td>candle sticks are unfilled when the close value is greater than the open value</td>
</tr>
</table>

The color of the candle will be defined by comparing with previous values.

Bear color  will be applied when the current closing value is greater than the previous closing value.
Bull color will be applied when the current closing value is less than the previous closing value.

By default, bullFillColor is set as red and bearFillColor is set as green.

## Solid Candles

[`enableSolidCandles`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#enableSolidCandles) is used to enable/disable the solid candles. By default is set to be false. The fill color of the candle will be defined by its opening and closing values.

[`bearFillColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#bearFillColor) will be applied when the opening value is less than the closing value.
[`bullFillColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#bullFillColor) will be applied when the opening value is greater than closing value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/candle-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/candle-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/candle-cs2" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)