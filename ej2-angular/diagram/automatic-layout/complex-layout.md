---
layout: post
title: Complex Hierarchical Tree Layout in Angular Diagram | Syncfusion®
description: Learn to implement complex hierarchical tree layouts with multiple parents in Angular Diagram, including line distribution and routing.
platform: ej2-angular
control: Complex hierarchical tree layout
documentation: ug
domainurl: ##DomainURL##
---


# Complex hierarchical tree layout in Angular Diagram control

Complex hierarchical tree layout arranges nodes in a tree-like structure where child nodes can have multiple parent nodes, creating interconnected relationships beyond traditional single-parent hierarchies. This layout type is ideal for organizational charts with dotted-line relationships, project dependencies, or any structure where entities report to multiple authorities. This layout extends the standard hierarchical tree layout to support these complex relationships.

To create a complex hierarchical tree, set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout#type) property of layout to `ComplexHierarchicalTree`.
## Complex hierarchical tree layout with nodes and connectors

This example demonstrates how to create a complex hierarchical tree layout by manually defining nodes and connectors. The layout automatically positions nodes based on their hierarchical relationships while handling multiple parent-child connections.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/complexhiertree-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/complexhiertree-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/complexhiertree-cs1" %}

## Complex hierarchical tree layout with DataSource

When working with large datasets, binding the layout to a data source provides better maintainability and dynamic content management. The following example shows how to create a complex hierarchical tree using a data source configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/complexhiertree-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/complexhiertree-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/automaticlayout/complexhiertree-cs2" %}

![Complex hierarchical tree layout](../images/complex-2.png)

> **Note:** In Diagram layouts, all root nodes will always render at the same level. This default behavior cannot be changed to render different trees at distinct levels.

## Line Distribution

Line distribution prevents connector overlap by controlling how multiple connectors from a single parent node are positioned. Without line distribution, connectors may overlap and create visual confusion in complex layouts.

The [`connectionPointOrigin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectionPointOrigin#connectionpointorigin) property controls this behavior:

- **SamePoint (default)**: All connectors from a parent originate from the same point
- **DifferentPoint**: Each connector originates from a different point, distributing connections around the node

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/complexhiertree-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/complexhiertree-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/complexhiertree-cs3" %}

> **Note:** Line distribution requires the LineDistribution module to be injected in the diagram.

![Different point](../images/complex-diffPoint.png)

## Linear Arrangement

Linear arrangement positions child nodes in a straight line with their parent node centered relative to the children. This creates a more organized appearance when dealing with nodes that have multiple children.

When line distribution is enabled, linear arrangement activates automatically. The [`arrangement`](https://ej2.syncfusion.com/angular/documentation/api/diagram/childarrangement) property provides control over this feature:

- **Nonlinear (default)**: Child nodes are arranged based on available space
- **Linear**: Child nodes are arranged in a straight line with the parent centered

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/complexhiertree-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/complexhiertree-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/complexhiertree-cs4" %}
> **Note:** Linear arrangement requires the LineDistribution module and is applicable only for complex hierarchical tree layouts.

## Enable routing for layout

In complex diagrams with intricate parent-child relationships, connectors may pass through or overlap with nodes, making the diagram difficult to read. Routing functionality automatically calculates connector paths that avoid intersecting with nodes and other obstacles.

Set the [`enableRouting`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layoutModel#enablerouting) property to `true` to activate intelligent connector routing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/complexhiertree-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/complexhiertree-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/complexhiertree-cs5" %}

## Best Practices

- Use data source binding for dynamic content and better maintainability
- Enable line distribution when dealing with nodes that have multiple connections
- Consider enabling routing for complex layouts to improve visual clarity
- Test layout performance with large datasets and optimize as needed
- Ensure proper module injection for advanced features like line distribution