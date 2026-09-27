---
layout: post
title: Connector Bezier Segments in Angular Diagram | Syncfusion®
description: Draw smooth bezier curves in the Syncfusion® Angular Diagram using fixed control points or dynamic vectors, with interactive thumbs for curve editing.
platform: ej2-angular
control: Connectors 
documentation: ug
domainurl: ##DomainURL##
---

# Connector Bezier Segments in Angular Diagram

Bezier connectors are used to create smooth, curved lines between nodes in a diagram. These curves are mathematically defined and can be finely controlled through control points or vectors, allowing for precise and aesthetically pleasing visual connections.

To create a Bezier connector, set the `type` property of the connector to `bezier`. The curve itself is defined by one or more segments of `type` as `bezier`. The following example shows how to define a simple Bezier connector.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsbezier-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsbezier-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsbezier-cs1" %}

## Bezier Segment Editing

The shape of a Bezier connector can be interactively modified by dragging its segment control points. These points, also known as thumbs, appear along the connector and allow you to adjust the curve's vectors and points. Interactive segment editing requires the `ConnectorEditing` module to be injected into the Diagram and the `DragSegmentThumb` connector constraint enabled.

![Interactive editing of a Bezier connector control points.](../../../images/Bezier-control.gif)

## Control Points

The curvature of a Bezier segment is determined by its control points. There are two primary ways to define the position of these control points:

*   **Fixed Positioning (`point1`, `point2`)**: When you use the [`point1`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bezierSegment#point1) and [`point2`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bezierSegment#point2) properties, the control points are set at fixed coordinates. These points remain stationary even when the connector's start or end points are moved. This is useful for creating static, predictable curves.

*   **Dynamic Positioning (`vector1`, `vector2`)**: When you use the [`vector1`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bezierSegment#vector1) and [`vector2`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bezierSegment#vector2) properties, the control points are defined by a vector (angle and distance) from the connector's endpoints. This approach allows the curve to adapt dynamically while maintaining its original shape relative to the endpoints.

### Using Fixed Points

The following example demonstrates how to configure a Bezier segment using the `point1` and `point2` properties for fixed control points.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsbezierpoints-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsbezierpoints-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsbezierpoints-cs1" %}

![A Bezier connector with control points defined by the point1 and point2 properties.](../../../images/Bezier-point1.gif)

### Using Dynamic Vectors

The following example shows how to configure a Bezier curve using the `vector1` and `vector2` properties for dynamic control points.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsbeziervector-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsbeziervector-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsbeziervector-cs1" %}

![A Bezier connector with control points defined by the vector1 and vector2 properties.](../../../images/Bezier-vector1.gif)

## Automatic Overlap Avoidance

By default, if no segments are explicitly defined for a Bezier connector, the Angular Diagram component automatically generates segments. This routing logic is designed to prevent the connector from overlapping with its connected source and target nodes, ensuring a clean and readable layout.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorBezierAvoidOverlapping-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorBezierAvoidOverlapping-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorBezierAvoidOverlapping-cs1" %}

## Segment Reset Behavior

The [`allowSegmentsReset`](https://ej2.syncfusion.com/angular/documentation/api/diagram/beziersettingsmodel#allowsegmentsreset) property gives you control over whether a Bezier segment's control points should be reset to their default positions when the source or target node is moved. This provides greater flexibility in maintaining custom curve shapes during diagram editing.

| Value | Description | Output |
|-------- | -------- | -------- |
| `true` | Moving a connected node will reset the Bezier control points, recalculating the curve. | ![Behavior of a Bezier connector when allowSegmentsReset is true.](../../../images/allowsegReset-true.gif) |
| `false` | The custom positions of the control points are preserved when a connected node is moved, maintaining the user-defined curve. | ![Behavior of a Bezier connector when allowSegmentsReset is false.](../../../images/allowsegReset-false.gif) |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorallowreset-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorallowreset-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorallowreset-cs1" %}

## Customizing Bezier Segment Thumb Size

The interactive thumbs used to edit Bezier segments have a default size of 10x10 pixels. This size can be customized either globally for all connectors or on a per-connector basis using the `segmentThumbSize` property.

To change the thumb size for all Bezier connectors in the diagram, set the [`segmentThumbSize`](https://ej2.syncfusion.com/angular/documentation/api/diagram#segmentthumbsize) property in the diagram's model.

To customize the thumb size for a specific connector, you must first disable the `InheritSegmentThumbSize` constraint and then set the connector's individual `segmentThumbSize` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsbezierthumbsize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsbezierthumbsize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsbezierthumbsize-cs1" %}