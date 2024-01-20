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

A [technical indicator](https://www.syncfusion.com/angular-components/angular-charts) is a mathematical calculation based on historic price, volume or open interest information that aims to forecast financial market direction.

Chart supports 10 types of technical indicators.

## Accumulation Distribution

Accumulation Distribution combines price and volume to show how money may be flowing into or out of stock.
To render a Accumulation Distribution Indicator, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) as `AccumulationDistribution` and inject `AccumulationDistributionIndicatorService` into the `@NgModule.providers`.
To calculate the signal line [`volume`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) field is additionally added with `dataSource`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/ad-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/technical-indicators/ad-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/ad-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/ad-cs1" %}

## Average True Range (ATR)

ATR measures the stock volatility by comparing the current value with the previous value. To render a Average True Range (ATR) Indicator, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) as `Atr` and inject `AtrIndicatorService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/atr-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/technical-indicators/atr-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/atr-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/atr-cs1" %}

## Bollinger Band

A chart overlay that shows the upper and lower limits of normal price movements based on the standard deviation of prices.
To render a Bollinger Band, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) as `BollingerBand` and inject `BollingerBandsService` into the `@NgModule.providers`.
Bollinger band will be represented by three lines (upperLine, lowerLine, signalLine).Bollinger Band default values of the [`period`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) is 14 and [`standardDeviations`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) is 2.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/bollinger-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/technical-indicators/bollinger-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/bollinger-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/bollinger-cs1" %}

**Customization of BollingerBand**

`stroke`, `stroke-width`, and `color` of upperLine can be customized by using,[`upperLine`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/), and the lowerLine can be customized by using [`lowerLine`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) properties of indicator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/bollinger-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/technical-indicators/bollinger-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/bollinger-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/bollinger-cs2" %}

## Exponential Moving Average (EMA)

Moving average Indicators are used to define the direction of the trend. To render a EMA Indicator, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) as `Ema` and inject `EMAIndicatorService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/ema-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/technical-indicators/ema-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/ema-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/ema-cs1" %}

## Momentum

Momentum shows the speed at which the price of the stock is changing. To render a Momentum indicator, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) as `Momentum`and inject `MomentumIndicatorService` into the `@NgModule.providers`. Momentum indicator will be represented by two lines (upperLine, signalLine).In momentum indicator the upperBand value is always render at the value 100.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/momentum-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/technical-indicators/momentum-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/momentum-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/momentum-cs1" %}

**Customization of MomentumIndicator**

`stroke`, `stroke-width`, and `color` of upperLine can be customized by using,[`upperLine`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/), property of indicator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/momentum-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/technical-indicators/momentum-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/momentum-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/momentum-cs2" %}

## Moving Average Convergence Divergence (MACD)

MACD is based on the difference between two EMA's. To render a MACD Indicator, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) as `MACD` and inject `MACDIndicatorService` into the `@NgModule.providers`.MACD indicator will be represented by MACD line,signal line, MACD histogram. MACD histogram is used to differentiate MACD line and signal line.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/macd-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/technical-indicators/macd-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/macd-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/macd-cs1" %}

**Customization of MACD**

`stroke`, `stroke-width`, and `color`of macdLine can be customized by using,[`macdLine`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/), property of indicator. The positive and negative changes of histogram can be customized by [`macdPositiveColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) and [`macdNegativeColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) properties. The [`macdType`] is used to define the type of MACD indicator. To customize the MACD period using [`slowPeriod`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) and [`fastPeriod`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/macd-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/technical-indicators/macd-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/macd-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/macd-cs2" %}

## Relative Strength Index (RSI)

RSI shows how strongly a stock is moving in its current direction. To render a RSI Indicator, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) as`Rsi` and inject `RsiIndicatorService` into the `@NgModule.providers`.RSI indicator will be represented by three lines (upperBand, lowerBand, signalLine). The upperBand and lowerBand values are customized by [`overBought`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) and [`overSold`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) properties of indicator and the signalLine is calculated by RSI formula.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/rsi-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/technical-indicators/rsi-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/rsi-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/rsi-cs1" %}

## Simple Moving Average (SMA)

Moving average Indicators are used to define the direction of the trend. To render a SMA Indicator, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) as `Sma` and inject `SmaIndicatorService` module using `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/sma-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/technical-indicators/sma-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/sma-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/sma-cs1" %}

## Stochastic

It shows how a stock is, when compared to previous state. To render a Stochastic indicator, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) as `Stochastic` and inject `StochasticIndicatorService` module using `@NgModule.providers` method.
stochastic indicator will be represented by four lines (upperLine, lowerLine, periodLine, signalLine).
In stochastic indicator the upperBand value and lowerBand value is customized by [`overBought`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) and [`overBought`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/)properties of indicators and the periodLine and signalLine is render based on stochastic formula.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/stochastic-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/technical-indicators/stochastic-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/stochastic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/stochastic-cs1" %}

**Customization of StochasticIndicator**

`stroke`, `stroke-width`, and `color` of upperLine can be customized by using,[`upperLine`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/), the lowerLine can be customized by using [`lowerLine`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) and the periodLine can be customized by using [`periodLine`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) properties of indicator. To customize the period to find the average price using [`kPeriod`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) and [`dPeriod`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/stochastic-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/technical-indicators/stochastic-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/stochastic-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/stochastic-cs2" %}

## Triangular Moving Average (TMA)

Moving average indicators are used to define the direction of the trend. To render a TMA Indicator, use indicator [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) as `TMA` and inject `TmaIndicatorService` module using `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/tma-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/technical-indicators/tma-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/tma-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/tma-cs1" %}

**Customization of Technical Indicators**

`stroke`, `stroke-width`, and `color` of signalLine can be customized by using,[`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/), [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) and [`dashArray`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) properties. and the [`period`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) property is used to predict the data forecast calculations. The [`field`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) value is used to the compare the current price with previous price. It is applicable to Bollinger bands and moving averages. The [`showZones`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#width) property is used to shows/Hides the overBought and overSold regions. It is applicable for RSI and stochastic indicators.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/sma-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/technical-indicators/sma-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/sma-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/sma-cs2" %}

**Data Source**

Usually technical indicators are added along with a financial series. The [`seriesName`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) represents the series, the data of which has to be analysed through indicators.

Technical indicators can also be added without series using [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart/technicalIndicatorModel/) property of indicator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/technical-indicators/sma-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/technical-indicators/sma-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/technical-indicators/sma-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/technical-indicators/sma-cs3" %}

**Module Dependencies**
To render a Indicator, it is mandatory to inject `LineSeriesService` module..
In addition to that, MACD Indicator requires `ColumnSeriesService` and BollingerBands requires `RangeAreaSeriesService`.
