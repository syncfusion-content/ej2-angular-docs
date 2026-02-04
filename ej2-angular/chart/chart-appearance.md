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

Customize the default color of series or points by providing a custom color palette using the [`palettes`](https://ej2.syncfusion.com/angular/documentation/api/chart#palettes) property.

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

Marker, data label, and fill color of individual data points can be customized using the [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/iPointRenderEventArgs) and [`textRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/iTextRenderEventArgs) events.

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
Use the [`background`](https://ej2.syncfusion.com/angular/documentation/api/chart#background) and [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart#border) properties on the chart to change its background color and border.

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

Set the chart margin relative to its container using the [`margin`](https://ej2.syncfusion.com/angular/documentation/api/chart#margin) property.

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

To customize the plotting region (chart area), use the `chartArea` properties: [`background`](https://ej2.syncfusion.com/angular/documentation/api/chart#background) and [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart#border) change the chart area's appearance, and [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAreaModel#width) adjusts its size.

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

Customize animation for a series using the [`animation`](https://ej2.syncfusion.com/angular/documentation/api/chart/animationModel) property. Use `enable` to turn animation on or off; `duration` controls the animation length and `delay` sets when the animation starts.

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