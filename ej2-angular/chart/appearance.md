---
layout: post
title: Appearance in Angular Chart component | Syncfusion
description: Learn here all about Appearance in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Angular Chart component

## Custom Color Palette

Customize the default color of series or points by providing a custom color palette using the [`palettes`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#palettes) property.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs1" %}

## Point Level Customization

Marker, data label, and fill color of individual data points can be customized using the [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#pointrender) and [`textRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#textrender) events.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs1" %}

<!-- markdownlint-disable MD036 -->

## Chart Area Customization

<!-- markdownlint-disable MD036 -->

**Customize the Chart Background**

<!-- markdownlint-disable MD013 -->
Use the [`background`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#background) and [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#border) properties on the chart to change its background color and border.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs2" %}

**Chart Margin**

Set the chart margin relative to its container using the [`margin`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#margin) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs3" %}

**Chart Area Customization**

To customize the plotting region (chart area), use the [`chartArea`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartarea) properties: [`background`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAreaModel#background) and [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAreaModel#border) change the chart area's appearance, and [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartAreaModel#width) adjusts its size.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs4" %}

## Animation

Customize animation for a series using the [`animation`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#enableanimation) property. Use `enable` to turn animation on or off; `duration` controls the animation length and `delay` sets when the animation starts.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/column-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/column-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/column-cs5" %}