---
layout: post
title: Hierarchical tree layout in Angular Diagram component | Syncfusion®
description: Learn how to create hierarchical tree layouts with multiple parent nodes in Syncfusion Angular Diagram component with data binding support.
platform: ej2-angular
control: Hierarchical tree layout 
documentation: ug
domainurl: ##DomainURL##
---

# Hierarchical tree layout in Angular Diagram control

The hierarchical tree layout arranges nodes in a tree-like structure where nodes can have multiple parent nodes, creating complex organizational relationships. Unlike traditional tree structures with single parent-child relationships, this layout supports scenarios such as matrix organizations, project dependencies, or any structure where entities report to multiple authorities. The layout automatically determines positioning without requiring a specified root node.

## Hierarchical tree layout with nodes and connectors

To arrange nodes in a hierarchical structure, specify the layout [`type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout#type) as **HierarchicalTree**. This approach provides full control over node and connector definitions while leveraging automatic positioning.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/hierarchicallayout-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/hierarchicallayout-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/automaticlayout/hierarchicallayout-cs1" %}

N> The HierarchicalTree module must be injected into the diagram to use hierarchical tree layout functionality.

## Hierarchical layout with DataSource

For data-driven scenarios, hierarchical layout can be created using a DataSource, which automatically generates nodes and connectors based on the data relationships. This approach is more efficient for large datasets and dynamic content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/hierarchicallayout-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/hierarchicallayout-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/automaticlayout/hierarchicallayout-cs2" %}

N> When using DataSource for layout generation, both DataBinding and HierarchicalTree modules must be injected into the diagram.
![Hierarchical tree layout showing nodes with multiple parent relationships](../images/hierarchicalTree.png)