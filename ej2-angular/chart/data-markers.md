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

<!-- markdownlint-disable MD036 -->

## Marker

<!-- markdownlint-disable MD036 -->

Enable markers for data points by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#visible) option to `true` in the marker property. Each series receives distinct markers by default, improving visual differentiation.

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

Use custom images as markers instead of predefined shapes by setting the [`imageUrl`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#imageurl) property. This allows branded or thematic markers that enhance visual appeal and user engagement.

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

Customize marker appearance by modifying the `fill` (background color) and `border` properties. Combined with shape and image options, these customizations enable comprehensive marker styling to match your application design.

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

Use the [`pointRender`](https://ej2.syncfusion.com/angular/documentation/api/chart#pointrender-emittypeipointrendereventargs) event to customize markers for individual data points. This event allows you to conditionally change shape, color, and border properties based on data values or other criteria.

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

Fill markers with the series color by enabling the [`isFilled`](https://ej2.syncfusion.com/angular/documentation/api/chart/markerSettingsModel#isFilled-boolean) property. This creates a cohesive visual design where markers inherit the series color automatically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/data-marker/marker-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/data-marker/marker-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/data-marker/marker-cs6" %}

## See also

* [Customize the marker with different shape](./how-to/marker-customization#customize-the-marker-with-different-shape)