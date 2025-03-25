---
layout: post
title: Nodes in Angular Diagram component | Syncfusion®
description: Learn here all about Nodes in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Nodes 
documentation: ug
domainurl: ##DomainURL##
---

# Nodes in Angular Diagram component

Nodes are graphical objects used to visually represent the geometrical information, process flow, internal business procedure, entity, or any other kind of data.

![Node](images/node.png)

<!-- markdownlint-disable MD033 -->

## Create node

A node can be created and added to the diagram either programmatically or interactively. The [`id`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node/#id) property of a node is used to define its unique identifier and can later be used to find the node at runtime for customization. Nodes are stacked on the diagram area from bottom to top in the order they are added.

N> When setting a Node's ID, ensure that it does not contain white spaces, does not start with numbers or special characters, and does not include special characters like underscores (_) or spaces.

## Add node through nodes collection

To create a node, define the [`node`](https://ej2.syncfusion.com/angular/documentation/api/diagram/node/#node) object and add that to [`nodes`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel/) collection of the [`diagram model`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramModel/). The following code example illustrates how to add a node to the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-cs1" %}

>Note: Node id should not begin with numbers(should begin with a letter).Node Id should be unique for all the shapes and connectors.

## Add/Remove node at runtime

Nodes can be added at runtime by using public method, [`add`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#add) and can be removed at runtime by using public method, [`remove`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#remove). On adding/removing node at runtime, the nodes collection is changed and the [`collectionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#collectionchange) event will trigger.

* The node’s ID property is used to define the name of the node and its further used to find the node at runtime and do any customization.

The following code illustrates how to add a node.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/run-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/run-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/nodes/run-cs1" %}

## Add collection of nodes at runtime

* The collection of nodes can be dynamically added using [`addElements`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#addelements) method.Each time an element is added to the diagram canvas, the [`collectionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#collectionChange--emittypecollectionchangeeventargs) event will be triggered.

The following code illustrates how to add nodes at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/nodecollection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/nodecollection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/nodecollection-cs1" %}

## Add node from palette

Nodes can be predefined and added to the palette, and can be dropped into the diagram when needed. For more information about adding nodes from symbol palette, refer to [`Symbol Palette`](https://ej2.syncfusion.com/angular/documentation/diagram/symbol-palette).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-cs2" %}

## Create node through data source

Nodes can be generated automatically with the information provided through dataSource property. The default properties for these nodes are fetched from default settings ([`getNodeDefaults`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#getnodedefaults)). For more information about data source, refer to  [`DataBinding`](./data-binding).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-cs3" %}

## Draw nodes

To draw a shape, you have to activate the drawing tool by setting `DrawOnce` or `ContinuousDraw` to the [`tool`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#tool) property and you need to set the `node` object by using the [`drawingObject`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#drawingobject) property. The following code example illustrates how to draw a rectangle at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-cs4" %}

## Update node at runtime

You can modify any node properties at runtime, and the changes will be instantly reflected. For example, here you can change the size and color of the node.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-cs5" %}

N> Once the property is updated, you should call the `dataBind` to reflect the changes instantly.

## Clone node at runtime

Cloning a node creates a new node instance with identical properties and attributes. You can clone a node using the [`copy`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#copy) and [`paste`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#paste) public methods of the diagram model.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-cs6" %}

## Add nodes from tree view

By customizing the [`dragEnter`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#dragenter) functionality, we can allow elements from other components, such as the tree view, to be converted into nodes based on the data of the dragged element.

## See Also

* [How to add annotations to the node](./labels)
* [How to add ports to the node](./ports)
* [How to enable/disable the behavior of the node](./constraints)
* [How to add nodes to the symbol palette](./symbol-palette)
* [How to edit the node visual interface](./interaction#selection)
* [How to create diagram nodes using drawing tools](./tools)