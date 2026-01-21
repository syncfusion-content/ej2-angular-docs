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

Data markers are used to provide information about the data points in the series. You can add a shape to adorn each data point.

<img src="../../images/marker.png" alt="Yes">

<!-- markdownlint-disable MD036 -->

## Marker

<!-- markdownlint-disable MD036 -->

Markers can be added to points by enabling the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#visible) option of the marker property. By default, distinct markers will be enabled for each series in the chart.

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

Markers can be assigned with different shapes such as Rectangle, Circle, Diamond, etc. using the [`shape`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettings#shape) property.

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

Marker's color and border can be customized using `fill` and `border` properties.

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

You can also customize the specific marker and label using [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart#pointrender-emittypeipointrendereventargs) event. The `pointRender` event allows you to change the shape, color and border for a point.

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

Marker can be filled with the series color by setting the [`isFilled`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#isFilled-boolean) property to <b>true</b>.

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

Use the [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel/#pointrender) event to customize marker shapes. In the handler, set the `shape` for each data point as needed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/how-to-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/how-to-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/how-to-cs13" %}
