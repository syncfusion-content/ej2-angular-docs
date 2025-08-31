---
layout: post
title: Multiple Segments for Connectors in Angular Diagram | Syncfusion®
description: Learn how to create connectors with multiple segments in Syncfusion® Angular Diagram Component, including configuration and practical examples.
platform: ej2-angular
control: Multiple segments 
documentation: ug
domainurl: ##DomainURL##
---

# Multiple Segments for Connectors

Connectors in the Angular Diagram component can be composed of multiple segments to create complex routing paths between nodes. Multiple segments allow you to define precise connection routes that navigate around obstacles or follow specific pathways in your diagram layout.

## Understanding Connector Segments

A connector segment represents a portion of the connector's path. By combining multiple segments, you can create connectors that change direction multiple times, forming L-shapes, Z-shapes, or more complex routing patterns. Each segment can have different properties and behaviors depending on the segment type used.

## Create Multiple Segments

Multiple segments can be defined sequentially to form a complete connector path. To create a connector with multiple segments, define and add the segments to the [`segments`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector/#segments) collection.

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

* Creating connectors that route around obstacles or other nodes
* Designing flowcharts with specific directional requirements
* Building network diagrams with custom connection paths
* Implementing organizational charts with complex hierarchical connections

## Related topics

* [Connector segments overview](./segments)
* [Orthogonal segments](./orthogonal-segments)
* [Bezier segments](./bezier-segments)
* [Connector routing](../connector-routing)