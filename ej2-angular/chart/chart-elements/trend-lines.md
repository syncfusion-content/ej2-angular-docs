---
layout: post
title: Trend lines in Angular Chart component | Syncfusion
description: Learn here all about Trend lines in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Trend lines 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Trend lines in Angular Chart component

Trendlines are used to show the direction and speed of price.

Trendlines can be generated for Cartesian type series (Line, Column, Scatter, Area, Candle, Hilo etc.) except bar type series. You can add more than one trendline to a series.

<img src="../../images/trendlines.png" alt="Yes">

Chart supports 6 types of trendlines.

## Linear

A linear trendline is a best fit straight line that is used with simpler data sets. To render a linear trendline, use trendline [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/trendline/#type) as `Linear` and inject `TrendLines` .

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/trendlines/linear-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/trendlines/linear-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/trendlines/linear-cs1" %}

## Exponential

An exponential trendline is a curved line that is most useful when data values rise or fall at increasingly higher rates. You cannot create an exponential trendline, if your data contains zero or negative values.

To render a exponential trendline,
use trendline [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/trendline/#type) as `Exponential` and inject
`TrendLines`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/trendlines/exponential-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/trendlines/exponential-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/trendlines/exponential-cs1" %}

## Logarithmic

A logarithmic trendline is a best-fit curved line that is most useful when the rate of change in the data increases or decreases quickly and then levels out.

A logarithmic trendline can use negative and/or positive values.

To render a logarithmic trendline, use trendline [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/trendline/#type) as `Logarithmic` and inject `TrendLines` .

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/trendlines/logarithmic-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/trendlines/logarithmic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/trendlines/logarithmic-cs1" %}

## Polynomial

A polynomial trendline is a curved line that is used when data fluctuates.

To render a polynomial trendline, use trendline [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/trendline/#type) as `Polynomial` and inject `TrendLines`.

`polynomialOrder` used to define the polynomial value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/trendlines/polynomial-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/trendlines/polynomial-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/trendlines/polynomial-cs1" %}

## Power

A power trendline is a curved line that is best used with data sets that compare measurements that increase at a specific rate.

To render a power trendline, use trendline [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/trendline/#type) as `Power` and inject
`TrendLines`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/trendlines/power-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/trendlines/power-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/trendlines/power-cs1" %}

## Moving Average

A moving average trendline smoothen out fluctuations in data to show a pattern or trend more clearly.

To render a moving average trendline, use trendline [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/trendline/#type) as `MovingAverage` and inject `TrendLines` .

`period` property defines the period to find the moving average.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/trendlines/movingaverage-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/trendlines/movingaverage-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/trendlines/movingaverage-cs1" %}

**Customization of Trendlines**

The [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/trendline/#fill) and [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart/trendline/#width)
properties are used to customize the appearance of the trendline.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/trendlines/movingaverage-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/trendlines/movingaverage-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/trendlines/movingaverage-cs2" %}

## Forecasting

Trendlines forecasting is the prediction of future/past situations.

Forecasting can be classified into two types as follows

Forward Forecasting
Backward Forecasting

**Forward Forecasting**

The value set for forwardForecast is used to determine the distance moving towards the future trend.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/trendlines/movingaverage-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/trendlines/movingaverage-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/trendlines/movingaverage-cs3" %}

**Backward Forecasting**

The value set for the backwardForecast is used to determine the past trends.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/trendlines/movingaverage-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/trendlines/movingaverage-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/trendlines/movingaverage-cs4" %}

## Show or hide a trendline

You can show or hide the trendline by setting trendline `visible` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/trendlines/linear-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/trendlines/linear-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/trendlines/linear-cs2" %}