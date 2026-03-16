---
layout: post
title: Data markers in Angular Chart component | Syncfusion
description: Learn here all about Data markers in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data markers 
documentation: ug
domainurl: ##DomainURL##
---

# Data markers in Angular Chart component

Data markers are visual indicators placed at each data point on a series, helping to clearly identify and highlight individual values in your chart. Markers improve readability and accessibility, especially in line and area charts where data points may otherwise be unclear. Customize marker shape, color, size, and appearance to match your design requirements.

<img src="../../images/marker.png" alt="Chart markers highlighting data points">

## Marker

Enable markers for data points by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#visible) option to `true` in the [`marker`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#marker) property. Each series receives distinct markers by default, improving visual differentiation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/marker-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/marker-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/marker-cs1" %}

## Shape

Assign different shapes to markers such as Rectangle, Circle, Diamond, Triangle, and others using the [`shape`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettings#shape) property. Shape selection helps distinguish between multiple series and improves visual clarity.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/marker-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/marker-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/marker-cs2" %}

>Note : To know more about the marker shape type refer the [`shape`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettings#shape).

## Images

Apart from the shapes, you can also add custom images to mark the data point using the [`imageUrl`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#imageurl) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/marker-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/marker-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/marker-cs3" %}

## Customization

Marker's color and border can be customized using [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#fill) and [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#border) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/marker-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/marker-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/marker-cs4" %}

## Customizing specific point

You can also customize the specific marker and label using [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#pointrender) event. The [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#pointrender) event allows you to change the shape, color and border for a point.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/marker-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/marker-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/marker-cs5" %}

## Fill marker with series color

Marker can be filled with the series color by setting the [`isFilled`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#isfilled) property to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/marker-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/marker-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/marker-cs6" %}

## Customize the marker with different shape using event

Use the [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#pointrender) event to customize marker shapes. In the handler, set the `shape` for each data point as needed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs13" %}
