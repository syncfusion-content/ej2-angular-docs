---
layout: post
title: Synchronized Charts in Angular Chart component | Syncfusion
description: Learn here all about Synchronized Charts in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Synchronized charts
documentation: ug
domainurl: ##DomainURL##
---

# Synchronized Charts in Angular Chart component

## Tooltip synchronization

The tooltip can be synchronized across multiple charts using the [`showTooltip`](https://ej2.syncfusion.com/angular/documentation/api/chart/#showtooltip) and [`hideTooltip`](https://ej2.syncfusion.com/angular/documentation/api/chart/#hidetooltip) methods. When we hover over a data point in one chart, we call the `showTooltip` method for the other charts to display related information in other connected charts simultaneously.

In the `showTooltip` method, specify the following parameters programmatically to enable tooltip for a particular chart:

* `x` - Data point x-value or x-coordinate value.
* `y` - Data point y-value or y-coordinate value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/synchronized-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/synchronized-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/synchronized-cs1" %}

## Crosshair synchronization

The crosshair can be synchronized across multiple charts using the [`showCrosshair`](https://ej2.syncfusion.com/angular/documentation/api/chart/#showcrosshair) and [`hideCrosshair`](https://ej2.syncfusion.com/angular/documentation/api/chart/#hidecrosshair) methods. When we hover over one chart, we call the `showCrosshair` method for the other charts to align with data points in other connected charts, simplifying data comparison and analysis.

In the `showCrosshair` method, specify the following parameters programmatically to enable crosshair for a particular chart:

* `x` - Specifies the x-value of the point or x-coordinate.
* `y` - Specifies the y-value of the point or y-coordinate.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/synchronized-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/synchronized-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/synchronized-cs2" %}

## Zooming synchronization

You can maintain constant zoom levels across multiple charts using the [`zoomComplete`](https://ej2.syncfusion.com/angular/documentation/api/chart/iZoomCompleteEventArgs/) event. In the `zoomComplete` event, obtain the [`zoomFactor`](https://ej2.syncfusion.com/angular/documentation/api/chart/iZoomCompleteEventArgs/#currentzoomfactor) and [`zoomPosition`](https://ej2.syncfusion.com/angular/documentation/api/chart/iZoomCompleteEventArgs/#currentzoomposition) values of the particular chart, and then apply those values to the other charts.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/synchronized-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/synchronized-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/synchronized-cs3" %}

## Selection synchronization

You can select the data across multiple charts using the [`selectionComplete`](https://ej2.syncfusion.com/angular/documentation/api/chart/iSelectionCompleteEventArgs/) event. In the `selectionComplete` event, obtain the selected values of the particular chart, and then apply those values to the other charts.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/synchronized-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/synchronized-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/synchronized-cs4" %}