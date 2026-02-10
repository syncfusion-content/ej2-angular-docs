---
layout: post
title: Nodes in Angular Diagram component | Syncfusion®
description: Learn here all about Nodes in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Nodes 
documentation: ug
domainurl: ##DomainURL##
---

# Nodes in Angular Diagram Component

Nodes are graphical objects that visually represent entities, processes, data flow, or any business logic within diagrams. They serve as the fundamental building blocks for creating flowcharts, organizational charts, network diagrams, and other visual representations. Each node can be customized with different shapes, sizes, colors, and interactive behaviors to suit specific diagram requirements.

![Node](../images/node.png)

<!-- markdownlint-disable MD033 -->

## Node fundamentals

Before creating nodes, understanding their core properties helps in effective diagram development:

- **Position**: Defined by `offsetX` and `offsetY` properties for precise placement
- **Size**: Controlled through `width` and `height` properties
- **Identification**: Each node requires a unique `id` for runtime operations
- **Stacking**: Nodes are layered from bottom to top based on addition order

## Creating nodes

### Add nodes through nodes collection

To create a node, define the [`node`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node#node) object and add it to the [`nodes`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodemodel) collection of the diagram model. The [`id`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node#id) property serves as the unique identifier for runtime operations and customization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-cs1" %}

N> Node ID must begin with a letter, remain unique across all shapes and connectors, and avoid whitespace or special characters.

### Create nodes from data source

Nodes can be generated automatically using the dataSource property. Default properties for these nodes are retrieved from [`getNodeDefaults`](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#getnodedefaults) settings. For detailed information about data binding, refer to [DataBinding](https://ej2.syncfusion.com/angular/documentation/diagram/data-binding).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-cs3" %}

### Add nodes from symbol palette

Nodes can be predefined in a symbol palette and dragged into the diagram as needed. This approach provides users with a library of reusable components. For comprehensive guidance on symbol palette integration, refer to [Symbol Palette](https://ej2.syncfusion.com/angular/documentation/diagram/symbol-palette/symbol-palette).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-cs2" %}

### Draw nodes interactively

To enable interactive node drawing, activate the drawing tool by setting `DrawOnce` or `ContinuousDraw` to the [`tool`](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#tool) property and configure the node template using the [`drawingObject`](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#drawingobject) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-cs4" %}

## Runtime node operations

### Add and remove individual nodes

Nodes can be dynamically added using the [`add`](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#add) method and removed using the [`remove`](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#remove) method. Both operations trigger the [`collectionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#collectionchange) event, allowing for custom handling of diagram modifications.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/run-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/run-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/nodes/run-cs1" %}

### Add multiple nodes simultaneously

Collections of nodes can be efficiently added using the [`addElements`](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#addelements) method. This approach is optimal for bulk operations and triggers the [`collectionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#collectionchange) event for each added element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/nodecollection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/nodecollection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/nodecollection-cs1" %}

### Update node properties

Node properties can be modified at runtime with immediate visual updates. Changes take effect instantly, allowing for dynamic diagram manipulation based on user interactions or data updates.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-cs5" %}

N> Call the `dataBind` method after property updates to ensure immediate reflection of changes.

### Clone nodes

Node cloning creates new instances with identical properties and attributes. Use the [`copy`](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#copy) and [`paste`](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#paste) methods to duplicate existing nodes programmatically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-cs6" %}

## Advanced node integration

### Import nodes from external components

Custom [`dragEnter`](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#dragenter) functionality enables conversion of elements from other components, such as tree views, into diagram nodes based on the dragged element's data properties.

## See Also

* [How to add annotations to the node](../labels/labels)
* [How to add ports to the node](../ports/ports)
* [How to enable/disable the behavior of the node](../constraints)
* [How to add nodes to the symbol palette](../symbol-palette/symbol-palette)
* [How to edit the node visual interface](../interaction#selection)
* [How to create diagram nodes using drawing tools](../tools)