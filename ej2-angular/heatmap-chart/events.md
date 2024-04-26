---
layout: post
title: Events in Angular Heatmap chart component | Syncfusion
description: Learn here all about Events in Syncfusion Angular Heatmap chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Events 
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular Heatmap chart component

This section describes the HeatMap chart event, which occurs when the required actions are performed.

## cellClick

When you click on a HeatMap cell, the [cellClick](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#cellclick) event is triggered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/heatmap/icellclickeventargs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/events/events-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/events/events-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/events/events-cs1" %}


## cellDoubleClick

When you double click on a HeatMap cell, the [cellDoubleClick](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#celldoubleclick) event is triggered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/heatmap/iCellClickEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/events/events-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/events/events-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/heatmap/events/events-cs2" %}

## cellRender

The [cellRender](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#cellrender) event will be triggered before each HeatMap cell is rendered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/heatmap/iCellEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/events/events-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/events/events-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/events/events-cs3" %}

## cellSelected

When single or multiple cells in the HeatMap are selected, the [cellSelected](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#cellselected) event is triggered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/heatmap/iSelectedEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/events/events-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/events/events-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/events/events-cs4" %}

## created

Once HeatMap has been completely rendered, the [created](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#created) event is triggered.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/events/events-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/events/events-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/events/events-cs5" %}

## legendRender

The [legendRender](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#legendrender) event is triggered before the legend is rendered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/heatmap/iLegendRenderEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/events/events-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/events/events-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/events/events-cs6" %}

## load

The [load](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#load) event is triggered before the HeatMap is rendered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/heatmap/iLoadedEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/events/events-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/events/events-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/events/events-cs7" %}

## loaded

Once HeatMap is loaded, the [loaded](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#loaded) event is triggered. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/heatmap/iLoadedEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/events/events-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/events/events-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/events/events-cs8" %}

## resized

When the window is resized, the [resized](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#resized) event is triggered to notify the resize of the HeatMap. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/heatmap/iResizeEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/events/events-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/events/events-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/events/events-cs9" %}

## tooltipRender

The [tooltipRender](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#tooltiprender) event is triggered before the tooltip is rendered on the HeatMap cell. To know more about arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/heatmap/iTooltipEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/events/events-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/events/events-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/events/events-cs10" %}