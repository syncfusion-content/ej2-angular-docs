---
layout: post
title: Connector Interaction in Angular Diagram Component | Syncfusion®
description: Explore how to interact with connectors in the Syncfusion Angular Diagram Component, including selection, dragging, endpoint manipulation, and flipping.
platform: ej2-angular
control: Connector Interaction 
documentation: ug
domainurl: ##DomainURL##
---

# Connector Interaction in Angular Diagram Component

Connectors in the Angular Diagram component support various interaction capabilities including selection, dragging, endpoint manipulation, segment editing, and flipping operations. These interactions enable users to dynamically modify connector behavior and appearance within the diagram.

## Select and unselect connector

A connector can be selected by clicking on it. This selection enables further operations such as dragging, editing, or applying transformations.

Connectors can be selected programmatically at runtime using the `select` method and selection can be cleared using the `clearSelection` method. The following code demonstrates how to select and clear selection in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/ConnectorSelect-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/ConnectorSelect-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/ConnectorSelect-cs1" %}

## Drag connector

Connectors can be repositioned by clicking and dragging them to a new location within the diagram canvas.

![Connector Drag Animation](../images/connector-dragGif.gif)

A connector can be dragged programmatically at runtime using the `drag` method. The following code demonstrates how to drag a connector using the drag method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/ConnectorDrag-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/ConnectorDrag-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/ConnectorDrag-cs1" %}

## Endpoint dragging

When a connector is selected, circular handles (thumbs) appear at the source and target endpoints. These handles allow users to adjust the connector's start and end positions by clicking and dragging them.

![End Point Drag Animation](../images/EndPointDragGif.gif)

The end points of connectors can also be updated programmatically using the [`dragSourceEnd`](https://ej2.syncfusion.com/angular/documentation/api/diagram#dragsourceend) and [`dragTargetEnd`](https://ej2.syncfusion.com/angular/documentation/api/diagram#dragtargetend) methods of the diagram component.

The following code example demonstrates how to drag connector end points at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/ConnectorEndPointDrag-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/ConnectorEndPointDrag-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/ConnectorEndPointDrag-cs1" %}

## Segment editing

The diagram allows editing of individual connector segments at runtime. To enable this feature, activate the [`DragSegmentThumb`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectorConstraints) constraint for the connector.

```typescript
connector.constraints = 
    ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
```

N> To edit connector segments, you must inject the `ConnectorEditing` module into the diagram's providers.

![Connector Segment Editing Animation](../images/connectorEditing.gif)

## Flip

The diagram provides support for flipping connectors to create mirrored versions of the original element. The [`flip`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#flip) operation transforms the connector based on the specified flip direction.

The available flip types are:

* **Horizontal Flip** - Flips the connector horizontally across a central vertical axis, creating a mirror image.

* **Vertical Flip** - Flips the connector vertically across a central horizontal axis.

* **Both** - Reverses the connector's direction by swapping its source and target points.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsdecorator-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsdecorator-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorsdecorator-cs2" %}

>Note: The flip operation is not applicable when connectors are connected to nodes.