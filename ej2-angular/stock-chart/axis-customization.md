---
layout: post
title: Axis customization in Angular Stock chart component | Syncfusion
description: Learn here all about Axis customization in Syncfusion Angular Stock chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Axis customization 
documentation: ug
domainurl: ##DomainURL##
---

# Axis customization in Angular Stock chart component

## Axis Crossing

An axis can be positioned in the Stock Chart area using [`crossesAt`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartAxisModel/#crossesat) and [`crossesInAxis`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartAxisModel/#crossesinaxis) properties. The [`crossesAt`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartAxisModel/#crossesat) property specifies the values (datetime, numeric, or logarithmic) at which the axis line has to be intersected with the vertical axis or vice-versa, and the [`crossesInAxis`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartAxisModel/#crossesinaxis) property specifies the axis name with which the axis line has to be crossed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/axis-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/axis-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/axis-cs1" %}

## Title

You can add a title to the axis using [`title`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartAxisModel/#title) property to provide quick information to the user about the data plotted in the axis. Title style can be customized using [`titleStyle`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartAxisModel/#titlestyle) property of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/axis-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/axis-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/axis-cs2" %}

## Tick Lines Customization

You can customize the  `width`, `color` and `size` of the minor and major tick lines, using [`majorTickLines`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartAxisModel/#majorticklines) and [`minorTickLines`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartAxisModel/#minorticklines) properties in the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/axis-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/axis-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/axis-cs3" %}

## Grid Lines Customization

You can customize the `width`, `color` and `dashArray` of the minor and major grid lines, using [`majorGridLines`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartAxisModel/#majorgridlines) and [`minorGridLines`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartAxisModel/#minorgridlines) properties in the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/axis-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/axis-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/axis-cs4" %}

## Multiple Axis

In addition to primary X and Y axis, we can add n number of axis to the Stock Chart. Series can be associated with this [`axis`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartAxisModel), by mapping with axis's unique name.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/multiple-axis-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/multiple-axis-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/multiple-axis-cs1" %}

## Inversed Axis

<!-- markdownlint-disable MD033 -->

When an axis is inversed, highest value of the axis comes closer to origin and vice versa. To place an axis in inversed manner set this property [`isInversed`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartAxisModel/#isinversed) to true.

 {% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/axis-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/axis-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/axis-cs5" %}

## Opposed Position

To place an axis opposite from its original position, set [`opposedPosition`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartAxisModel/#opposedposition) property of the axis to true.

 {% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/axis-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/axis-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/axis-cs6" %}