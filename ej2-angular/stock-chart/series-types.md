---
layout: post
title: Series types in Angular Stock chart component | Syncfusion
description: Learn here all about Series types in Syncfusion Angular Stock chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Series types 
documentation: ug
domainurl: ##DomainURL##
---

# Series types in Angular Stock chart component

Essential JS 2 StockChart supports 7 major types of series namely `Line`, `Spline`, `Area`, `Hilo`, `HiloOpenClose`, `Hollow Candle` and `Candle` . By using the series dropdown button you can navigate between the above listed series types.

<!-- markdownlint-disable MD036 -->

## Line

To render a line series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockSeriesModel/#type) as `Line` and inject `LineSeriesService` into the `@NgModule.providers`.

## Spline

To render a spline series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockSeriesModel/#type) as `Spline` and inject `SplineSeriesService` into the `@NgModule.providers`.

## Area

To render a area series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockSeriesModel/#type) as `Area` and inject `AreaSeriesService` into the `@NgModule.providers`.

## Hilo

To render a hilo series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockSeriesModel/#type) as `Hilo` and inject `HiloSeries` into the `@NgModule.providers`.

## HiloOpenClose

To render a hiloOpenClose series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockSeriesModel/#type) as `HiloOpenClose` and inject `HiloOpenCloseSeries` into the `@NgModule.providers`..

## HollowCandle

To render a hollowcandle series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockSeriesModel/#type) as `Candle` and set `enableSolidCandle` as false. Now inject `CandleSeries` into the `@NgModule.providers`.

## Candle

To render a candle series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockSeriesModel/#type) as `Candle` and inject `CandleSeries` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/series-types/candle-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/series-types/candle-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/series-types/candle-cs1" %}