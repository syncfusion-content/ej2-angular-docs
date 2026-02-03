---
layout: post
title: Technical indicators in Angular Chart component | Syncfusion
description: Learn here all about Technical indicators in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Technical indicators 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Technical indicators in Angular Chart component

A [technical indicator](https://www.syncfusion.com/angular-components/angular-charts) is a mathematical calculation based on historical price, volume, or open‑interest information that aims to forecast financial market direction.

Chart supports 10 types of technical indicators.

## Accumulation Distribution

Accumulation Distribution combines price and volume to show how money may be flowing into or out of a stock. To render an Accumulation Distribution indicator, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#type) as `AccumulationDistribution` and inject `AccumulationDistributionIndicatorService` into the `@NgModule.providers`. To calculate the signal line, the [`volume`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#volume) field must be included in the `dataSource`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/ad-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/ad-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/ad-cs1" %}

## Average True Range (ATR)

ATR measures stock volatility by comparing the current value with the previous value. To render an Average True Range (ATR) indicator, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#type) as `Atr` and inject `AtrIndicatorService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/atr-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/atr-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/atr-cs1" %}

## Bollinger Band

A chart overlay that shows the upper and lower limits of normal price movements based on the standard deviation of prices. To render a Bollinger Band, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#type) as `BollingerBand` and inject `BollingerBandsService` into the `@NgModule.providers`. Bollinger Band is represented by three lines (`upperLine`, `lowerLine`, `signalLine`). The default values of the Bollinger Band [`period`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#period) is 14 and [`standardDeviations`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#standarddeviation) is 2.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/bollinger-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/bollinger-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/bollinger-cs1" %}

**Customization of BollingerBand**

`stroke`, `stroke-width`, and `color` of `upperLine` can be customized by using [`upperLine`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#upperline), and the `lowerLine` can be customized by using [`lowerLine`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#lowerline) properties of the indicator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/bollinger-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/bollinger-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/bollinger-cs2" %}

## Exponential Moving Average (EMA)

Moving average indicators are used to define the direction of the trend. To render an EMA indicator, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#type) as `Ema` and inject `EMAIndicatorService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/ema-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/ema-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/ema-cs1" %}

## Momentum

Momentum shows the speed at which the stock price is changing. To render a Momentum indicator, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#type) as `Momentum` and inject `MomentumIndicatorService` into the `@NgModule.providers`. The Momentum indicator is represented by two lines (`upperLine`, `signalLine`). In the Momentum indicator, the `upperBand` value is always rendered at 100.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/momentum-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/momentum-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/momentum-cs1" %}

**Customization of MomentumIndicator**

`stroke`, `stroke-width`, and `color` of `upperLine` can be customized by using the [`upperLine`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#upperline) property of the indicator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/momentum-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/momentum-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/momentum-cs2" %}

## Moving Average Convergence Divergence (MACD)

MACD is based on the difference between two EMAs. To render a MACD indicator, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#type) as `Macd` and inject `MACDIndicatorService` into the `@NgModule.providers`. The MACD indicator is represented by the MACD line, signal line, and MACD histogram. The MACD histogram highlights the difference between the MACD line and the signal line.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/macd-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/macd-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/macd-cs1" %}

**Customization of MACD**

`stroke`, `stroke-width`, and `color` of `macdLine` can be customized by using the [`macdLine`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#macdline) property of the indicator. The positive and negative changes of the histogram can be customized by [`macdPositiveColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#macdpositivecolor) and [`macdNegativeColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#macdnegativecolor) properties. The [`macdType`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#macdtype) is used to define the type of MACD indicator. Customize the MACD period using [`slowPeriod`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#slowperiod) and [`fastPeriod`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#fastperiod) properties.

By default, `macdType` is `Both`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/macd-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/macd-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/macd-cs2" %}

## Relative Strength Index (RSI)

RSI shows how strongly a stock is moving in its current direction. To render an RSI indicator, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#type) as `Rsi` and inject `RsiIndicatorService` into the `@NgModule.providers`. The RSI indicator is represented by three lines (`upperBand`, `lowerBand`, `signalLine`). The `upperBand` and `lowerBand` values are customized by [`overBought`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#overbought) and [`overSold`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#oversold) properties of the indicator, and the `signalLine` is calculated using the RSI formula.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/rsi-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/rsi-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/rsi-cs1" %}

## Simple Moving Average (SMA)

Moving average indicators are used to define the direction of the trend. To render an SMA indicator, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#type) as `Sma` and inject `SmaIndicatorService` module using `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/sma-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/sma-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/sma-cs1" %}

## Stochastic

Stochastic shows how a stock compares to its previous price levels. To render a Stochastic indicator, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#type) as `Stochastic` and inject `StochasticIndicatorService` module using `@NgModule.providers`. The Stochastic indicator is represented by four lines (`upperLine`, `lowerLine`, `periodLine`, `signalLine`). The `upperBand` and `lowerBand` values are customized by [`overBought`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#overbought) and [`overSold`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#oversold) properties of the indicator, and the `periodLine` and `signalLine` are rendered based on the stochastic formula.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/stochastic-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/stochastic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/stochastic-cs1" %}

**Customization of StochasticIndicator**

`stroke`, `stroke-width`, and `color` of `upperLine` can be customized by using [`upperLine`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#upperline), the `lowerLine` can be customized by using [`lowerLine`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#lowerline), and the `periodLine` can be customized by using [`periodLine`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#periodline) properties of the indicator. Customize the period used to find the average price using [`kPeriod`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#kperiod) and [`dPeriod`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#dperiod) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/stochastic-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/stochastic-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/stochastic-cs2" %}

## Triangular Moving Average (TMA)

Moving average indicators are used to define the direction of the trend. To render a TMA indicator, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#type) as `Tma` and inject `TmaIndicatorService` module using `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/tma-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/tma-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/tma-cs1" %}

**Customization of Technical Indicators**

`stroke`, `stroke-width`, and `color` of `signalLine` can be customized by using [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#fill), [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#width), and [`dashArray`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#dasharray) properties. The [`period`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#period) property defines the number of data points used for calculations. The [`field`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#field) value determines which price value to compare with the previous price. It is applicable to Bollinger Bands and moving averages. The [`showZones`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#showzones) property shows or hides the overbought and oversold regions. It is applicable for RSI and Stochastic indicators.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/sma-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/sma-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/sma-cs2" %}

**Data Source**

Usually, technical indicators are added along with a financial series. The [`seriesName`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#seriesname) represents the series whose data has to be analyzed through indicators.

Technical indicators can also be added without a series by using the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel#datasource) property of the indicator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/sma-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/sma-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/sma-cs3" %}

**Module Dependencies** 
To render an indicator, it is mandatory to inject the `LineSeries` module using `Chart.Inject(LineSeries)`. In addition, the MACD indicator requires `ColumnSeries`, and Bollinger Bands requires `RangeAreaSeries`.
