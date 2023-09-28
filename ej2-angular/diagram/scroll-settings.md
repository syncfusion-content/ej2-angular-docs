---
layout: post
title: Scroll settings in Angular Diagram component | Syncfusion
description: Learn here all about Scroll settings in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scroll settings 
documentation: ug
domainurl: ##DomainURL##
---

# Scroll settings in Angular Diagram component

The diagram can be scrolled by using the vertical and horizontal scrollbars. In addition to the scrollbars,mousewheel can be used to scroll the diagram. Diagram’s [`scrollSettings`](https://ej2.syncfusion.com/angular/documentation/api/diagram) enable you to read the current scroll status, view port size, current zoom, and zoom factor. It also allows you to scroll the diagram programmatically.

## Get current scroll status

Scroll settings allow you to read the scroll status, [`viewPortWidth`](https://ej2.syncfusion.com/angular/documentation/api/diagram/scrollSettings), [`viewPortHeight`](https://ej2.syncfusion.com/angular/documentation/api/diagram/scrollSettings), and [`currentZoom`](https://ej2.syncfusion.com/angular/documentation/api/diagram/scrollSettings) with a set of properties. To explore those properties, see [`Scroll Settings`](https://ej2.syncfusion.com/angular/documentation/api/diagram/scrollSettings).

## Define scroll status

Diagram allows you to pan the diagram before loading, so that any desired region of a large diagram is made to view. You can programmatically pan the diagram with the [`horizontalOffset`](https://ej2.syncfusion.com/angular/documentation/api/diagram/scrollSettings) and [`verticalOffset`](https://ej2.syncfusion.com/angular/documentation/api/diagram/scrollSettings) properties of scroll settings. The following code illustrates how to set pan the diagram programmatically.

In the following example, the vertical scroll bar is scrolled down by 50px and horizontal scroll bar is scrolled to right by 100px.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/scrollsettings/scroll-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/scrollsettings/scroll-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/scrollsettings/scroll-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/scrollsettings/scroll-cs1" %}

## Update scroll status

You can programmatically change the scroll offsets at runtime by using the client-side method update. The following code illustrates how to change the scroll offsets and zoom factor at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/scrollsettings/update-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/scrollsettings/update-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/scrollsettings/update-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/scrollsettings/update-cs1" %}

## AutoScroll

Autoscroll feature automatically scrolls the diagram, whenever the node or connector is moved beyond the boundary of the diagram. So that, it is always visible during dragging, resizing, and multiple selection operations. Autoscroll is automatically triggered when any one of the following is done towards the edges of the diagram.

* Node dragging, resizing
* Connection editing
* Rubber band selection
* Label dragging

The diagram client-side event [`ScrollChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram) gets triggered when the autoscroll (scrollbars) is changed and you can do your own customization in this event.

The autoscroll behavior in your diagram can be enabled/disabled by using the [`canAutoScroll`](https://ej2.syncfusion.com/angular/documentation/api/diagram/scrollSettings) property of the diagram.

## Autoscroll border

The autoscroll border is used to specify the maximum distance between the object and diagram edge to trigger autoscroll. The default value is set as 15 for all sides (left, right, top, and bottom) and it can be changed by using the [`autoScrollBorder`](https://ej2.syncfusion.com/angular/documentation/api/diagram/scrollSettings) property of page settings. The following code example illustrates how to set autoscroll border.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/scrollsettings/autoscroll-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/scrollsettings/autoscroll-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/scrollsettings/autoscroll-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/scrollsettings/autoscroll-cs1" %}

## Scroll limit

The scroll limit allows you to define the scrollable region of the diagram. It includes the following options:

* Allows to scroll in all directions without any restriction.
* Allows to scroll within the diagram content.
* Allows to scroll within the specified scrollable area.
* The [`scrollLimit`](https://ej2.syncfusion.com/angular/documentation/api/diagram/scrollSettings) property of scroll settings helps to limit the scrolling.

The scrollSettings [`scrollableArea`](https://ej2.syncfusion.com/angular/documentation/api/diagram/scrollSettings) allow to extend the scrollable region that is based on the scroll limit.

The following code example illustrates how to specify the scroll limit.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/scrollsettings/scrolllimit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/scrollsettings/scrolllimit-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/scrollsettings/scrolllimit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/scrollsettings/scrolllimit-cs1" %}

## Scroll padding

The [`padding`](https://ej2.syncfusion.com/angular/documentation/api/diagram/scrollSettings) property of scroll settings allows you to extend the scrollable region that is based on the scroll limit.

The following code example illustrates how to set scroll padding to diagram region.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/scrollsettings/scrolllimit-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/scrollsettings/scrolllimit-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/scrollsettings/scrolllimit-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/scrollsettings/scrolllimit-cs2" %}

## Scrollable Area

Scrolling beyond any particular rectangular area can be restricted by using the [`scrollableArea`](https://ej2.syncfusion.com/angular/documentation/api/diagram/scrollSettings) property of scroll settings. To restrict scrolling beyond any custom region, set the [`scrollLimit`](https://ej2.syncfusion.com/angular/documentation/api/diagram/scrollSettings) as “limited”. The following code example illustrates how to customize scrollable area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/scrollsettings/scrollablearea-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/scrollsettings/scrollablearea-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/scrollsettings/scrollablearea-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/scrollsettings/scrollablearea-cs1" %}

## UpdateViewport

The [`updateViewPort`](https://ej2.syncfusion.com/angular/documentation/api/diagram) method is used to update the diagram page and view size at runtime.