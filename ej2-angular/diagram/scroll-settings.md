---
layout: post
title: Scroll settings in Angular Diagram component | Syncfusion®
description: Learn here all about Scroll settings in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Scroll settings 
documentation: ug
domainurl: ##DomainURL##
---

# Scroll Settings in Angular Diagram Component

The diagram component provides comprehensive scrolling capabilities through both vertical and horizontal scrollbars, as well as mouse wheel navigation. The diagram's [`scrollSettings`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/) enable developers to monitor the current scroll status, viewport dimensions, zoom levels, and programmatically control diagram navigation. These settings are essential for managing large diagrams and providing smooth user interaction experiences.

## Access and Customize Scroll Settings

Scroll settings in a diagram provide access to various properties that control navigation and viewport behavior, including [`horizontalOffset`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/#horizontaloffset), [`verticalOffset`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/#verticaloffset), [`viewPortWidth`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/#viewportwidth), [`viewPortHeight`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/#viewportheight), [`currentZoom`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/#currentzoom), [`zoomFactor`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/#zoomfactor), [`maxZoom`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/#maxzoom), [`minZoom`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/#minzoom), [`scrollLimit`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/#scrolllimit), [`canAutoScroll`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/#canautoscroll), [`autoScrollBorder`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/marginModel/), [`autoScrollFrequency`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/#autoscrollfrequency), [`padding`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/marginModel/), and [`scrollableArea`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/rect/).

These properties enable developers to read and adjust the scroll status, scroll offsets, zoom levels, and scrolling behavior. For a comprehensive overview of all available properties, refer to the [`Scroll Settings`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/) API documentation.

## Define Scroll Offset

The diagram allows developers to set the initial scroll position before loading, ensuring that any desired region of a large diagram is immediately visible. The initial scroll position can be programmatically configured using the [`horizontalOffset`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/#horizontaloffset) and [`verticalOffset`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/#verticaloffset) properties of the scroll settings. The following code illustrates how to programmatically set the diagram's initial scroll position upon initialization, with `scrollLimit` defined as 'Infinity' to enable infinite scrolling. To learn more about scroll limits, refer to the [`scrollLimit`](https://helpej2.syncfusion.com/angular/documentation/diagram/scroll-settings#scroll-limit) section.

In the example below, the vertical scrollbar is positioned 100 pixels down, and the horizontal scrollbar is positioned 100 pixels to the right.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/scrollsettings/scroll-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/scrollsettings/scroll-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/scrollsettings/scroll-cs1" %}

## Update Scroll Offset at Runtime

The diagram provides multiple methods to update scroll offsets during runtime:

* **Scrollbar**: Use the horizontal and vertical scrollbars of the diagram for direct navigation.
* **Mouse wheel**: Scroll vertically with the mouse wheel. Hold the Shift key while scrolling to scroll horizontally.
* **Pan Tool**: Activate the ZoomPan [`tool`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/diagramTools/) in the diagram to scroll by panning.
* **Touch**: Use touch pad gestures for smooth scrolling on touch-enabled devices.

### Programmatically Update Scroll Offset

The scroll offsets of the diagram can be programmatically modified by customizing the [`horizontalOffset`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/#horizontaloffset) and [`verticalOffset`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/#verticaloffset) properties of [`Scroll Settings`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/) at runtime. The following code demonstrates how to change the scroll offsets dynamically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/scrollsettings/update-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/scrollsettings/update-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/scrollsettings/update-cs1" %}

## Update Zoom at Runtime

### Zoom Using Mouse Wheel

The mouse wheel provides a convenient method to zoom in and out of the diagram quickly without requiring additional tools or gestures.

- **Zoom in**: Press Ctrl+mouse wheel, then scroll upward.

- **Zoom out**: Press Ctrl+mouse wheel, then scroll downward.

### Zoom Using Keyboard Shortcuts

Keyboard shortcuts offer a quick and efficient way to zoom the diagram without using the mouse or touch pad.

- **Zoom in**: Press Ctrl and the plus (+) key.

- **Zoom out**: Press Ctrl and the minus (-) key.

### Programmatically Update Zoom

The current zoom level of the diagram can be programmatically modified by utilizing the [`zoomTo`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#zoomto) public method.

#### ZoomOptions

The [`zoomTo`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#zoomto) method accepts one parameter: [`zoomOptions`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/zoomOptions/). Within zoomOptions, developers can specify the [`focusPoint`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/pointModel/), [`type`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/zoomTypes/), and [`zoomFactor`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/zoomOptions/#zoomfactor).

The following example demonstrates how to zoom in and zoom out of the diagram using the zoomTo method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/scrollsettings/zoomoptions-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/scrollsettings/zoomoptions-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/scrollsettings/zoomoptions-cs1" %}

For more information on various ways to zoom and pan the diagram, refer to [`zoom and pan with various methods`](https://support.syncfusion.com/kb/article/12643/how-to-perform-zoom-and-pan-angular-diagram-in-various-ways?highlight=How%20to%20zoom%20and%20pan).

## AutoScroll

The autoscroll feature automatically scrolls the diagram when a node or connector is moved beyond the visible boundary. This functionality ensures that elements remain visible during operations such as dragging, resizing, and selection, providing a seamless user experience.

The autoscroll behavior activates automatically when any of the following actions occur near the edges of the diagram:

- Node dragging or resizing operations
- Connector control point editing
- Rubber band selection

The client-side event [`ScrollChange`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/iScrollChangeEventArgs/) is triggered when autoscroll occurs, enabling custom behavior implementation. Refer to the [`scrollChange event`](https://helpej2.syncfusion.com/angular/documentation/diagram/scroll-settings#scroll-change-event) section for more information.

Autoscroll behavior can be enabled or disabled using the [`canAutoScroll`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/#canautoscroll) property of the diagram.

## Autoscroll Border

The autoscroll border defines the maximum distance from the mouse pointer to the diagram edge that triggers autoscroll behavior. By default, this distance is set to 15 pixels for all sides (left, right, top, and bottom). This distance can be customized using the [`autoScrollBorder`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/marginModel/) property of the scroll settings.

The following example demonstrates how to configure autoscroll with custom border settings:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/scrollsettings/autoscroll-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/scrollsettings/autoscroll-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/scrollsettings/autoscroll-cs1" %}

N> To use autoscroll, the scrollLimit should be set as 'Infinity'.

## Controlling Autoscroll Speed

The frequency of automatic scrolling in the Diagram component during autoscroll behavior can be precisely controlled. The scrolling frequency can be adjusted from slow and smooth to quick and rapid to suit different requirements. Configure this by setting a value in milliseconds to the [`autoScrollFrequency`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/#autoscrollfrequency) property within the scrollSettings, allowing precise control over autoscroll timing.

![AutoscrollFrequency](./images/AutoscrollFrequency.gif)

## Scroll Limit

The [`scrollLimit`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/#scrolllimit) property allows developers to define the scrollable region of the diagram. It includes the following options:

* **Infinity**: Allows scrolling in all directions without any restriction.
* **Diagram**: Allows scrolling within the diagram region only.
* **Limited**: Allows scrolling within a specified scrollable area.

The `scrollLimit` property in scroll settings helps to define these scrolling boundaries.

### Scrollable Area

Scrolling beyond a particular rectangular area can be restricted by using the [`scrollableArea`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/rect/) property in [`scrollSettings`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/scrollSettingsModel/). To restrict scrolling beyond a custom region, set the scrollLimit to "limited" and define the desired bounds in the `scrollableArea` property.

The following code example illustrates how to specify the scroll limit and customize the scrollable area:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/scrollsettings/scrollablearea-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/scrollsettings/scrollablearea-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/scrollsettings/scrollablearea-cs1" %}

## Scroll Padding

The [`padding`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/marginModel/) property of the scroll settings allows developers to extend the scrollable region based on the scroll limit. This property is useful for adding extra space around the diagram content, making it easier to navigate and interact with elements near the edges.

The following code example illustrates how to set scroll padding for the diagram region:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/scrollsettings/scrolllimit-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/scrollsettings/scrolllimit-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/scrollsettings/scrolllimit-cs2" %}

## Reset Scroll and Zoom Settings

The [`reset`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#reset) method resets both the zoom level and scroller offsets to their default values. This is useful for returning the diagram to its initial state after user interactions.

```javascript
//Resets the scroll and zoom to default values
(this.diagram as Diagram).reset();
```

## Update Viewport Dimensions

The [`updateViewPort`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#updateviewport) method is used to update the dimensions of the diagram viewport. This method is typically called when the diagram container size changes or when dynamic resizing is required.

```javascript
//Updates diagram viewport dimensions
(this.diagram as Diagram).updateViewPort();
```

## Events

### Scroll Change Event

The [`scrollChange`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/iScrollChangeEventArgs/) event is triggered whenever the scrollbar is updated. This event occurs during actions such as zooming in, zooming out, using the mouse wheel, or panning. The following example shows how to capture and handle the `scrollChange` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/scrollsettings/scrolllimit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/scrollsettings/scrolllimit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/scrollsettings/scrolllimit-cs1" %}