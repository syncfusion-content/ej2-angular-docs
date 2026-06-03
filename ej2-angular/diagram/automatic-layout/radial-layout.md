---
layout: post
title: Radial tree layout in Angular Diagram component | Syncfusion®
description: Learn here all about Radial tree layout in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Radial tree layout 
documentation: ug
domainurl: ##DomainURL## ..
---

# Radial tree layout in Angular Diagram control

A radial tree layout is a specialized diagram that presents hierarchical information with a central node at the core, surrounded by branches extending outward in a circular, tree-like structure. This layout is particularly effective for visualizing organizational charts, family trees, mind maps, and network relationships where understanding the relationship distance from a central concept is important.

The central node represents the main concept or topic, with child nodes arranged in concentric circles based on their hierarchical level. The layout [`root`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout#root) property can be used to define the root node of the layout. When no root node is specified, the algorithm automatically identifies the node without any incoming edges (InEdges connector count of 0) as the root node. To create a radial tree, set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout#type) property of the layout to `RadialTree`.

The RadialTree layout provides comprehensive support for controlling node spacing and arrangement. The [`horizontalSpacing`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layoutModel#horizontalspacing) and [`verticalSpacing`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layoutModel#verticalspacing) properties allow precise control over the space between nodes, measured in pixels. The arrangement creates an expanding concentric pattern where radial proximity to the root node indicates the hierarchical level.

![Radial tree layout example](../images/RadialTree.png)

## Prerequisites

To use radial tree layouts, ensure the following modules are injected into the diagram:
- `RadialTree` module for layout functionality
- `DataBinding` module (when using data source)

## Radial tree with DataSource

Creating a radial tree layout with a data source provides automatic node generation and connection management. This approach is ideal when working with structured data objects that define hierarchical relationships.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/radiallayout-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/radiallayout-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/radiallayout-cs1" %}

> **Note:** When converting a data source into a radial layout, inject both DataBinding and RadialTree modules in the diagram component.

## Radial tree with nodes and connectors

For scenarios requiring manual control over node creation and positioning, the radial tree layout can be applied to explicitly defined nodes and connectors. This approach offers greater flexibility for custom node styling and specific layout requirements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/radiallayout-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/radiallayout-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/radiallayout-cs2" %}

> **Note:** To use radial tree layout functionality, inject the RadialTree module in the diagram component.

![Radial tree](../images/RadialTree.png)