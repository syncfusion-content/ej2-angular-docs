---
layout: post
title: Virtualization in Angular Diagram | Syncfusion®
description: Render only the nodes and connectors visible in the viewport in the Syncfusion® Angular Diagram to keep large diagrams responsive during scroll, pan, and zoom.
platform: ej2-angular
control: Virtualization 
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in Angular Diagram

Virtualization is a performance optimization technique that significantly improves diagram rendering and interaction speed, particularly when working with large-scale diagrams containing hundreds or thousands of nodes and connectors.

## Understanding Virtualization in Diagram

Virtualization enhances diagram performance by implementing on-demand loading of diagramming objects. Only the nodes and connectors currently visible within the diagram's viewport are rendered, while objects outside the visible area are excluded from rendering until they enter the view during scrolling or panning operations.

This selective rendering approach provides substantial performance benefits:

* **Reduced Memory Usage**: Only visible objects consume memory resources
* **Faster Initial Load**: Diagrams render quickly regardless of total object count  
* **Smooth Interactions**: Dragging, zooming, and panning remain responsive
* **Scalable Performance**: Performance remains consistent as diagram size increases

## When to Enable Virtualization

Virtualization is recommended for diagrams that meet any of these criteria:

* Contain 100 or more nodes and connectors
* Experience performance issues during scrolling or zooming
* Require frequent updates to large datasets
* Display complex organizational charts, network diagrams, or flowcharts

## Enabling Virtualization

To activate virtualization, include the `Virtualization` constraint in the diagram's constraints property. The virtualization feature works in conjunction with the diagram's scrolling capabilities to manage object loading dynamically. For more information, refer to the [`diagram constraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramconstraints).

The following code example demonstrates how to enable Virtualization mode in the diagram:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/virtualization/virtualization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/virtualization/virtualization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/virtualization/virtualization-cs1" %}