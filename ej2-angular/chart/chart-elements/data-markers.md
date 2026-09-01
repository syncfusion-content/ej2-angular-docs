---
layout: post
title: Markers in Angular Chart | Syncfusion
description: Learn here all about Data markers in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data markers
documentation: ug
domainurl: ##DomainURL##
---

# Markers in Angular Chart

Data markers are visual indicators placed at each data point on a series, helping you to clearly identify and highlight individual values in your chart. Markers improve readability and accessibility, especially in line and area charts where data points may otherwise be unclear. You can customize the marker shape, color, size, and appearance to match your design requirements.

<img src="../../images/marker.png" alt="Chart markers highlighting data points">

## Marker

Enable markers for data points by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#visible) option to `true` in the [`marker`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#marker) property. Each series receives a distinct marker shape by default, improving visual differentiation across series.

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

Assign different shapes to markers — such as Rectangle, Circle, Diamond, Triangle, Pentagon, Star, HorizontalLine, VerticalLine, and Cross — using the [`shape`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#shape) property. Shape selection helps distinguish between multiple series and improves visual clarity.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/marker-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/marker-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/marker-cs2" %}

>**Note** : To know more about the marker shape types, refer to the [`shape`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#shape) property and its supported values.

## Images

In addition to built-in shapes, you can also mark each data point with a custom image using the [`imageUrl`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#imageurl) property. Provide a URL or relative asset path that resolves to a PNG, JPG, or SVG file. For best results, set `width` and `height` on the marker to match the image's natural dimensions.

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

Marker color, size, and border can be customized using the [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#fill), [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#width), [`height`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#height), and [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#border) properties. The `width` and `height` set the **marker** size (not the series line width). The `border` object accepts `width` and `color` keys.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/marker-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/marker-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/marker-cs4" %}

## Customizing specific markers

You can customize individual markers using the [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#pointrender) event. Inside the event handler, assign values to `args.fill`, `args.shape`, and `args.border` to override defaults for any data point based on its index or value.

The following example changes the fill, shape, and border for the marker at index `3`:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/marker-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/marker-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/marker-cs5" %}

### Assigning different shapes per point

You can also use the [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#pointrender) event to dynamically assign a different `shape` to each data point — useful when you want to vary marker shapes across the series based on the point index or value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs13" %}

## Fill marker with series color

The marker can be filled with the series color by setting the [`isFilled`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#isfilled) property to **true**. When `isFilled` is enabled, any explicitly set `fill` is overridden by the series color.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/marker-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/marker-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/marker-cs6" %}
