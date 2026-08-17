---
layout: post
title: Connector Multiple Segments in Angular Diagram | Syncfusion®
description: Combine multiple straight, orthogonal, or bezier segments in the Syncfusion® Angular Diagram to route connectors around obstacles and build custom path shapes.
platform: ej2-angular
control: Multiple segments 
documentation: ug
domainurl: ##DomainURL##
---

# Connector Multiple Segments in Angular Diagram

Connectors in the Angular Diagram component can be composed of multiple segments to create complex routing paths between nodes. Multiple segments allow you to define precise connection routes that navigate around obstacles or follow specific pathways in your diagram layout.

## Understanding connector segments

A connector segment represents a portion of the connector's path. By combining multiple segments, you can create connectors that change direction multiple times, forming L-shapes, Z-shapes, or more complex routing patterns. Each segment can have different properties and behaviors depending on the segment type used.

## Create multiple segments

Multiple segments can be defined sequentially to form a complete connector path. To create a connector with multiple segments, define and add the segments to the [`segments`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#segments) collection.

The following example demonstrates how to create a connector with multiple segments that forms a custom routing path:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectormultiseg-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectormultiseg-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectormultiseg-cs1" %}

## Use cases

Multiple segments are particularly useful for:

* Routing connectors around obstacles or other nodes using additional segment points that single-segment connectors cannot accommodate
* Building flowcharts with specific directional requirements by inserting mid-path inflection points where the connector changes direction
* Creating network diagrams with custom connection paths that weave between densely placed nodes
* Implementing organizational charts with complex hierarchical connections that require intermediate segment points to avoid overlapping existing connectors

## Undo/Redo support for connector segments

The Diagram control provides comprehensive undo and redo functionality for all connector segment operations. This includes reversible actions such as dragging, resizing, and rotating source or target nodes, as well as modifying segment points and endpoints.

Key undo/redo capabilities include:

* Modifying and adjusting segment points.
* Changing connector endpoints between nodes or ports.
* Performing node operations that affect connected segments.
* Adding, removing, or reordering segments.

This functionality ensures consistent editing behavior across all connector types and interactions, enabling users to experiment with complex routing configurations while retaining the ability to revert changes.

The following example demonstrates undo and redo functionality for connector segments:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectors-segundo/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectors-segundo/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectors-segundo" %}

## Related topics

* [Connector segments overview](./connector-segments)
* [Straight segments](./connector-straight)
* [Orthogonal segments](./connector-orthogonal)
* [Bezier segments](./connector-bezier/connector-bezier)