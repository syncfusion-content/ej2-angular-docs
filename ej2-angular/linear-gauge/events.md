---
layout: post
title: Events in Angular Linear gauge component | Syncfusion
description: Learn here all about Events in Syncfusion Angular Linear gauge component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Events 
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular Linear gauge component

This section describes the Linear Gauge component's event that gets triggered when corresponding operations are performed.

## animationComplete

When the pointer animation is completed, the [`animationComplete`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#animationcomplete) event will be triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/iAnimationCompleteEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/axis-cs14/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/axis-cs14/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/axis-cs14/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/axis-cs14" %}

## annotationRender

Before the annotation is rendered in the Linear Gauge, the [`annotationRender`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#annotationrender) event will be triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/iAnnotationRenderEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/axis-cs15/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/axis-cs15/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/axis-cs15/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/axis-cs15" %}

## axisLabelRender

Before each axis label is rendered in the Linear Gauge, the [`axisLabelRender`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#axislabelrender) event is fired. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/iAxisLabelRenderEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/axis-cs16/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/axis-cs16/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/axis-cs16/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/axis-cs16" %}

## beforePrint

The [`beforePrint`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#beforeprint) event is fired before the print begins. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/iPrintEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/print-and-export-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/print-and-export-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/print-and-export-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/print-and-export-cs1" %}

## dragEnd

The [`dragEnd`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#dragend) event will be fired before the pointer drag is completed. To know more about the argument of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/iPointerDragEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/axis-cs17/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/axis-cs17/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/axis-cs17/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/axis-cs17" %}

## dragMove

The [`dragMove`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#dragmove) event will be fired when the pointer is dragged. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/iPointerDragEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/axis-cs18/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/axis-cs18/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/axis-cs18/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/axis-cs18" %}

## dragStart

When the pointer drag begins, the [`dragStart`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#dragstart) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/iPointerDragEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/axis-cs19/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/axis-cs19/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/axis-cs19/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/axis-cs19" %}

## gaugeMouseDown

When mouse is pressed down on the gauge, the [`gaugeMouseDown`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#gaugemousedown) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/axis-cs20/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/axis-cs20/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/axis-cs20/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/axis-cs20" %}

## gaugeMouseLeave

When mouse pointer moves over the gauge, the [`gaugemouseleave`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#gaugemouseleave) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/axis-cs21/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/axis-cs21/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/axis-cs21/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/axis-cs21" %}

## gaugeMouseMove

When mouse pointer leaves the gauge, the [`gaugeMouseMove`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#gaugemousemove) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/axis-cs22/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/axis-cs22/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/axis-cs22/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/axis-cs22" %}

## gaugeMouseUp

When the mouse pointer is released over the Linear Gauge, the [`gaugeMouseUp`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#gaugemouseup) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/axis-cs23/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/axis-cs23/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/axis-cs23/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/axis-cs23" %}

## load

Before the Linear Gauge is loaded, the [`load`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#load) event is fired. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/iLoadEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/axis-cs24/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/axis-cs24/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/axis-cs24/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/axis-cs24" %}

## loaded

After the Linear Gauge has been loaded, the [`loaded`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#loaded) event will be triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/iLoadedEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/axis-cs25/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/axis-cs25/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/axis-cs25/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/axis-cs25" %}

## resized

After the window resizing, the [`resized`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#resized) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/iResizeEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/axis-cs26/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/axis-cs26/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/axis-cs26/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/axis-cs26" %}

## tooltipRender

The [`tooltipRender`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#tooltiprender) event is fired before the tooltip is rendered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/iTooltipRenderEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/axis-cs27/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/axis-cs27/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/axis-cs27/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/axis-cs27" %}

## valueChange

The [`valueChange`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#valuechange) event is triggered when the pointer is dragged from one value to another. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/iValueChangeEventArgs/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/axis-cs28/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/linear-gauge/axis-cs28/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/axis-cs28/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/axis-cs28" %}
