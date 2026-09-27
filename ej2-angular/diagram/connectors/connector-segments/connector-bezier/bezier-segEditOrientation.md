---
layout: post
title: Bezier Segment Edit Orientation in Angular Diagram | Syncfusion
description: Configure Bezier segment editing in the Angular Diagram with bidirectional axis constraints or unrestricted FreeForm movement.
platform: ej2-angular
control: bezier-segEditOrientation
documentation: ug
domainurl: ##DomainURL##
---

# Connector Bezier Segment Edit Orientation in Angular Diagram

Bezier connectors in diagrams provide smooth, curved connections between nodes with customizable control points. The segment edit orientation feature allows interactive modification of bezier connector segments to achieve the desired visual flow and connection paths.

## Interactive Editing of Bezier Segments

The intermediate control points between adjacent bezier segments can be edited interactively during runtime, controlled by the [`segmentEditOrientation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bezierSegmentEditOrientation) property within the [`bezierSettings`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bezierSettingsModel) configuration. The default value of the `segmentEditOrientation` property is **FreeForm**. This property determines the directional constraints applied when users drag the intermediate points to reshape the connector.

N> To edit Bezier segment points interactively, enable the [`DragSegmentThumb`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectorConstraints) constraint on the connector and inject the `ConnectorEditing` module into the Diagram.

### Segment Edit Orientation Options

The following table describes the available orientation modes and their interactive behavior:

| Value | Description | Output |
|-------- | -------- | -------- |
| BiDirectional | Constrains intermediate point movement to either vertical or horizontal directions only. Users can drag points along a single axis at a time, providing precise alignment control. | ![Bidirectional bezier segment editing showing constrained movement along single axis](../../../images/bez-bidirectional.gif) |
| FreeForm | Allows unrestricted movement of intermediate points in any direction. Users can drag points freely to create custom curves and complex path shapes. | ![Freeform bezier segment editing showing unrestricted point movement in all directions](../../../images/bez-freeform.gif) |


## Implementation Example

The following code demonstrates how to configure bezier connectors with interactive segment editing using both the [`smoothness`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bezierSmoothness) property for curve refinement and the `segmentEditOrientation` property for interaction control:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorbeziersegmentedit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorbeziersegmentedit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorbeziersegmentedit-cs1" %}