---
layout: post
title: Chart events in Angular Chart component | Syncfusion
description: Learn here all about Chart events in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chart events 
documentation: ug
domainurl: ##DomainURL##
---

# Chart Event in Angular Chart Component

Chart events are callback functions that the Syncfusion EJ2 Chart component triggers at different stages of its life cycle. They allow developers to respond to user interactions, customize rendering, control behavior, and extend chart functionality without modifying the core control. These events enable developers to implement custom logic, enhance interactivity, and tailor the chart's behavior to specific requirements, thereby providing a more dynamic and responsive user experience.


## Animation

### animationComplete
After a series animation has completed, the animationComplete event will be triggered. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/ianimationcompleteeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/animationComplete/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/animationComplete/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/animationComplete" %}


## Labels and Axes

### axisLabelRender
Before an axis label is rendered, the axisLabelRender event will be triggered to customize label text and style. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/iaxislabelrendereventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/axisLabelRender/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/axisLabelRender/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/axisLabelRender" %}

### axisLabelClick
The axisLabelClick event will be triggered when an axis label is clicked. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/iaxislabelclickeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/axisLabelClick/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/axisLabelClick/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/axisLabelClick" %}

### axisRangeCalculated
After an axis range (minimum, maximum, interval) is calculated, the axisRangeCalculated event will be triggered, allowing you to override the values. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/iaxisrangecalculatedeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/axisRangeCalculated/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/axisRangeCalculated/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/axisRangeCalculated" %}

### axisMultiLabelRender
Before multi-level axis labels are rendered, the axisMultiLabelRender event will be triggered to customize label text and style. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/iaxismultilabelrendereventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/axisMultiLabelRender/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/axisMultiLabelRender/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/axisMultiLabelRender" %}

### multiLevelLabelClick
The multiLevelLabelClick event will be triggered when a multi-level axis label segment is clicked. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/imultilevellabelclickeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/multiLevelLabelClick/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/multiLevelLabelClick/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/multiLevelLabelClick" %}

## Series and Points

### seriesRender
Before a series is rendered, the seriesRender event will be triggered to customize series appearance and properties. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/iseriesrendereventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/seriesRender/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/seriesRender/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/seriesRender" %}

### pointClick
The pointClick event will be triggered when a data point or its symbol is clicked. Use this event to perform actions such as highlighting, drilling down, or showing custom details for the selected point. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/ipointeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/pointClick/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/pointClick/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/chart-events/pointClick" %}

### pointDoubleClick
The pointDoubleClick event will be triggered when a data point or its symbol is double-clicked. Use this event for quick-edit workflows, navigation, or toggling detailed views for the target point. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/ipointeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/pointDoubleClick/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/pointDoubleClick/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/chart-events/pointDoubleClick" %}

### pointMove
The pointMove event will be triggered when the pointer moves over a data point. Use this event to show contextual UI, update external indicators, or track the hovered point dynamically. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/ipointeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/pointMove/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/pointMove/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/chart-events/pointMove" %}

### pointRender
Before an individual data point is rendered, the pointRender event will be triggered to customize its visual (color, border, shape, size, corner radius). To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/ipointrendereventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/pointRender/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/pointRender/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/pointRender" %}

### textRender (Data Labels)
Before a data label is rendered, the textRender event will be triggered to customize label text, style, template, or position. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/itextrendereventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/textRender/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/textRender/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/textRender" %}

### dragStart

Triggered when a data point drag operation begins on a series with dragging enabled (via dragSettings). Use this event to validate the drag action, apply constraints, or cancel the drag before it proceeds. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/idataeditingeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/dragStart/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/dragStart/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/dragStart" %}

### drag

Triggered continuously while a data point is being dragged. Use this event to provide live feedback, enforce boundaries, or update UI as the point’s position changes. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/idataeditingeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/drag/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/drag/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/drag" %}

### dragEnd

Triggered when a data point drag operation is completed (pointer released) and the new value is committed. Use this event to persist changes, refresh related UI, or perform post-edit actions. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/idataeditingeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/dragEnd/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/dragEnd/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/dragEnd" %}

## Tooltip

### tooltipRender
Before a tooltip for a single series point is shown, the tooltipRender event will be triggered to customize content and style. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/itooltiprendereventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/tooltipRender/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/tooltipRender/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/tooltipRender" %}

### sharedTooltipRender
Before a shared tooltip is shown (multiple series at the same x-value), the sharedTooltipRender event will be triggered to customize aggregated content. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/isharedtooltiprendereventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/sharedTooltipRender/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/sharedTooltipRender/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/sharedTooltipRender" %}

## Legend

### legendRender
Before a legend item is rendered, the legendRender event will be triggered to customize the legend text, shape, and fill. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/ilegendrendereventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/legendRender/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/legendRender/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/legendRender" %}

### legendClick
The legendClick event will be triggered when a legend item is clicked. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/ilegendclickeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/legendClick/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/legendClick/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/legendClick" %}

## Annotations

### annotationRender
Before the chart annotation is rendered, the annotationRender event will be triggered. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/iannotationrendereventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/annotationRender/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/annotationRender/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/annotationRender" %}

## Zooming and Scrolling

### zooming
During zoom or pan interactions, the zooming event will be triggered, providing per-axis zoom information that can be modified or canceled. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/izoomingeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/zooming/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/zooming/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/zooming" %}

### zoomComplete
After a zoom or pan action completes for an axis, the zoomComplete event will be triggered. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/izoomcompleteeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/zoomComplete/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/zoomComplete/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/zoomComplete" %}

### scrollChanged
During scrollbar interactions, the scrollChanged event will be triggered to indicate visible range or zoom changes. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/iscrolleventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/scrollChanged/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/scrollChanged/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/scrollChanged" %}

## Selection and Drag

### dragComplete
After a drag-selection area or zoom region is completed, the dragComplete event will be triggered. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/idragcompleteeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/dragComplete/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/dragComplete/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/dragComplete" %}

### selectionComplete
After a selection action (by click or drag) completes, the selectionComplete event will be triggered. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/iselectioncompleteeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/selectionComplete/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/selectionComplete/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/selectionComplete" %}

## Mouse Events

### chartMouseDown
The chartMouseDown event will be triggered when a mouse down action occurs over the chart area. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/imouseeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/chartMouseDown/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/chartMouseDown/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/chartMouseDown" %}

### chartMouseMove
The chartMouseMove event will be triggered when the mouse moves over the chart area. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/imouseeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/chartMouseMove/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/chartMouseMove/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/chartMouseMove" %}

### chartMouseUp
The chartMouseUp event will be triggered when a mouse up action occurs over the chart area. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/imouseeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/chartMouseUp/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/chartMouseUp/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/chartMouseUp" %}

### chartMouseLeave
The chartMouseLeave event will be triggered when the mouse leaves the chart area. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/imouseeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/chartMouseLeave/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/chartMouseLeave/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/chartMouseLeave" %}

### chartMouseClick
The chartMouseClick event will be triggered when a mouse click occurs within the chart area. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/imouseeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/chartMouseClick/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/chartMouseClick/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/chartMouseClick" %}

### chartDoubleClick
The chartDoubleClick event will be triggered when a double-click occurs within the chart area. Use this event to reset zoom, toggle modes, or open detailed panels based on the double-click location. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/imouseeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/chartDoubleClick/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/chartDoubleClick/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/chart-events/chartDoubleClick" %}

## Life cycle and Layout

### load
Before the chart starts initial rendering, the load event will be triggered. Use this event to set themes, localization, palettes, or modify chart/series properties programmatically prior to rendering. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/iloadedeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/load/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/load/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/chart-events/load" %}

### loaded
After the chart is fully loaded and initial rendering is completed, the loaded event will be triggered. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/iloadedeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/loaded/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/loaded/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/loaded" %}

### beforeResize
Before a resize is performed, the beforeResize event will be triggered, and you can cancel the subsequent resizing. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/ibeforeresizeeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/beforeResize/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/beforeResize/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/beforeResize" %}

### resized
After the chart has been resized, the resized event will be triggered. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/iresizeeventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/resized/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/resized/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/resized" %}

### beforePrint
The beforePrint event will be triggered before the chart is printed, providing access to the HTML content being printed. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/iprinteventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/beforePrint/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/beforePrint/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/chart-events/beforePrint" %}

### beforeExport
Before a chart export operation begins (such as exporting to PNG, JPEG, SVG, or PDF), the beforeExport event will be triggered, allowing you to customize file name, export type, page settings, or cancel the export. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/iexporteventargs).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/beforeExport/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/beforeExport/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/chart-events/beforeExport" %}

### afterExport
After a chart export operation completes, the afterExport event will be triggered. Use this event to perform post-export actions such as notifications, logging, or initiating downloads in custom flows. To know more about the arguments of this event, refer [`here`](https://ej2.syncfusion.com/angular/documentation/api/chart/index-default).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/chart-events/afterExport/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/chart-events/afterExport/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/chart-events/afterExport" %}

