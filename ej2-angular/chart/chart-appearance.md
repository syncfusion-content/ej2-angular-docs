---
layout: post
title: Chart appearance in Angular Chart component | Syncfusion
description: Learn here all about Chart appearance in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chart appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Chart appearance in Angular Chart component

## Custom color palette

You can customize the default color of series or points by providing a custom color palette of your choice by using the [`palettes`](https://ej2.syncfusion.com/angular/documentation/api/chart#palettes) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs25/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs25/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs25" %}

## Data point customization

The color of individual data point or data points within a range can be customized using the options below.

### Point color mapping

You can bind the color for the points from [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/chart/series#datasource) for the series using [`pointColorMapping`](https://ej2.syncfusion.com/angular/documentation/api/chart/series#pointcolormapping) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs26/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs26/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs26" %}

### Range color mapping

You can differentiate data points based on their y values using [`rangeColorSettings`](https://ej2.syncfusion.com/angular/documentation/api/chart/rangeColorSetting) in the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs27/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs27/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs27" %}

## Point level customization

Marker, datalabel and fill color of each data point can be customized with [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/iPointRenderEventArgs) and [`textRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/iTextRenderEventArgs) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs12" %}

<!-- markdownlint-disable MD036 -->

## Chart area customization

<!-- markdownlint-disable MD036 -->

**Customize the chart background**

<!-- markdownlint-disable MD013 -->
Using [`background`](https://ej2.syncfusion.com/angular/documentation/api/chart#background) and [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart#border) properties, you can change the background color and border of the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs13" %}

**Chart margin**

You can set margin for chart from its container through [`margin`](https://ej2.syncfusion.com/angular/documentation/api/chart#margin) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs14" %}

**Chart area background**

The chart area background can be customized by using the [`background`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAreaModel#background) property in the [`chartArea`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAreaModel).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs15" %}

**Chart area margin**

You can customize the space between the chart area from its chart container through [`margin`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAreaModel#margin) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs52/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs52/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs52" %}

## Animation

You can customize animation for a particular series using [`animation`](https://ej2.syncfusion.com/angular/documentation/api/chart/animationModel) property. You can enable or disable animation of the series using `enable` property, `duration` specifies the duration of an animation and `delay` allows us to start the animation at desire time.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs16" %}

## Fluid animation

Fluid animation used to animate series with updated dataSource continues animation rather than animation whole series. You can customize animation for a particular series using [`animate`] method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs17" %}

## See also

* [Customize the series points using patterns](./how-to/points-customization#customize-the-series-points-by-using-patterns)