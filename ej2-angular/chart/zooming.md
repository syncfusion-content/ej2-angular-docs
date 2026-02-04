---
layout: post
title: Zooming in Angular Chart component | Syncfusion
description: Learn here all about Zooming in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Zooming 
documentation: ug
domainurl: ##DomainURL##
---

# Zooming in Angular Chart component

## Enable zooming

The chart supports zooming through the following three interaction methods:

* **Selection** – By setting [`enableSelectionZooming`](https://ej2.syncfusion.com/angular/documentation/api/chart/zoomSettingsModel#enableselectionzooming) to **true** in `zoomSettings`, zooming can be performed using a rubber-band selection.
* **Mouse wheel** – By setting [`enableMouseWheelZooming`](https://ej2.syncfusion.com/angular/documentation/api/chart/zoomSettingsModel#enablemousewheelzooming) to **true** in `zoomSettings`, the chart can be zoomed in and out by scrolling the mouse wheel.
* **Pinch** – By setting [`enablePinchZooming`](https://ej2.syncfusion.com/angular/documentation/api/chart/zoomSettingsModel#enablepinchzooming) to **true** in `zoomSettings`, zooming can be performed using pinch gestures on touch-enabled devices.

> Pinch zooming is supported only in browsers that support multi-touch gestures.

To known about Zooming and Panning, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=B9_gRlZ5B94" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/zoom-cs5" %}

>Note: To use zooming feature, inject `ZoomService` into the `NgModule.providers`.

After zooming, a toolbar is displayed that includes **zoom**, **zoomin**, **zoomout**, **pan**, and **reset** buttons.  
Selecting **Pan** allows the chart to be panned, and selecting **Reset** restores the chart to its original zoom state.

## Modes

The [`mode`](https://ej2.syncfusion.com/angular/documentation/api/chart/zoomSettingsModel#mode) property in `zoomSettings` specifies whether zooming can be applied along the horizontal axis, vertical axis, or both. The default value is **XY**.

The supported zooming modes are:

* **X** – Allows zooming along the horizontal axis.
* **Y** – Allows zooming along the vertical axis.
* **XY** – Allows zooming along both horizontal and vertical axes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/zoom-cs6" %}

## Toolbar

By default, the **zoomin**, **zoomout**, **pan**, and **reset** buttons are displayed when the chart is zoomed. The toolbar contents can be customized by using the [`toolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/chart/zoomSettingsModel#toolbaritems) property.  
Additionally, the zooming toolbar can be displayed during initial rendering by setting the [`showToolbar`](https://ej2.syncfusion.com/angular/documentation/api/chart/zoomSettingsModel#showtoolbar) property to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/zoom-cs7" %}

### Toolbar customization

The zoom toolbar position can be customized by using the [`toolbarPosition`](https://ej2.syncfusion.com/angular/documentation/api/chart/zoomSettingsModel#toolbarposition) property. This property supports horizontal alignments (**Near**, **Center**, and **Far**) and vertical alignments (**Top**, **Middle**, and **Bottom**). The default values are **Far** for horizontal alignment and **Top** for vertical alignment.
For precise placement, the  [`x`](https://ej2.syncfusion.com/angular/documentation/api/chart/toolbarPositionModel#x) and [`y`](https://ej2.syncfusion.com/angular/documentation/api/chart/toolbarPositionModel#y) properties can be used.  
Enabling the [`draggable`](https://ej2.syncfusion.com/angular/documentation/api/chart/toolbarPositionModel#draggable) property allows the toolbar to be repositioned freely within the chart area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/zoom-cs11" %}

## Enable pan

Using [`enablePan`](https://ej2.syncfusion.com/angular/documentation/api/chart/zoomSettingsModel#enablePan) property you can able to pan the zoomed chart without help of toolbar items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/zoom-cs8" %}

## Enable scrollbar

By using the [`enableScrollbar`](https://ej2.syncfusion.com/angular/documentation/api/chart/zoomSettingsModel#enablescrollbar) property, a scrollbar can be displayed for the zoomed chart. This scrollbar supports both zooming and panning interactions.
Scrollbar appearance can be customized using properties within [`scrollbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/chart/scrollbarSettingsModel/). For example:
- [`trackColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/scrollbarSettingsModel#trackcolor) and [`trackRadius`](https://ej2.syncfusion.com/angular/documentation/api/chart/scrollbarSettingsModel#trackradius) control the track appearance.
- [`scrollbarColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/scrollbarSettings#scrollbarcolor) and [`scrollbarRadius`](https://ej2.syncfusion.com/angular/documentation/api/chart/scrollbarSettingsModel#scrollbarradius) customize the scroller.
- Zooming through the scrollbar can be enabled or disabled using [`enableZoom`](https://ej2.syncfusion.com/angular/documentation/api/chart/scrollbarSettingsModel#enablezoom).
- The grip color and scrollbar height can be customized using [`gripColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/scrollbarSettingsModel#gripcolor) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/chart/scrollbarSettingsModel#height).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/scrollbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/scrollbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/scrollbar-cs1" %}

### Position
The [`position`](https://ej2.syncfusion.com/angular/documentation/api/chart/scrollbarSettings#position) property specifies where the scrollbar is rendered. By default, both vertical and horizontal scrollbars are placed near their respective axes.
The available positions are:
* **Default** – `placeNextToAxisLine`
* **Horizontal scrollbar** – `Top`, `Bottom`
* **Vertical scrollbar** – `Left`, `Right`

* Default: `placeNextToAxisLine`.
* Horizontal scrollbar: Available positions are `Top` and `Bottom`.
* Vertical scrollbar: Available positions are `Left` and `Right`.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/scrollbar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/scrollbar-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/scrollbar-cs2" %}

## Enable animation

Use the [`enableAnimation`](https://ej2.syncfusion.com/angular/documentation/api/chart/zoomSettingsModel#enableAnimation) property to apply smooth animation effects during zoom operations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/zoom-cs10" %}

## Auto interval on zooming

By using the [`enableAutoIntervalOnZooming`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#enableAutoIntervalOnZooming)property, the axis interval is calculated automatically based on the current zoomed range.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/user-interaction/zoom-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/zoom-cs9" %}