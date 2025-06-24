---
layout: post
title: Manipulating nodes in Angular TreeView component | Syncfusion
description: Learn here all about Manipulating nodes in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Nodes Manipulation in ##Platform_Name## TreeView component

The TreeView component provides Essential<sup style="font-size:70%">&reg;</sup> methods for dynamically managing nodes, offering the ability to create a highly interactive and customizable tree structure,

* [addNodes](https://ej2.syncfusion.com/angular/documentation/api/treeview/#addnodes)
* [removeNodes](https://ej2.syncfusion.com/angular/documentation/api/treeview/#removenodes)
* [updateNode](https://ej2.syncfusion.com/angular/documentation/api/treeview/#updatenode)
* [refreshNode](https://ej2.syncfusion.com/angular/documentation/api/treeview/#refreshnode)
* [moveNodes](https://ej2.syncfusion.com/angular/documentation/api/treeview/#movenodes)

These methods provide the flexibility to add, remove, update, refresh, or relocate nodes as needed, facilitating a fully interactive and customizable TreeView structure.

## Dynamically adding nodes

The [`addNodes`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#addnodes) method of the TreeView allows you to insert new nodes at designated positions within the TreeView by passing the necessary node information.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/manipulating-nodes-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/manipulating-nodes-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/manipulating-nodes-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/manipulating-nodes-cs1" %}

## Dynamically removing nodes

The TreeView component has the [`removeNodes`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#removenodes) method, which allows you to change a specific node's text by providing its target (either the node ID or element) and the new text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/manipulating-nodes-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/manipulating-nodes-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/manipulating-nodes-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/manipulating-nodes-cs2" %}

## Dynamically update nodes

The TreeView component has the [`updateNode`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#updatenode) method, which allows you to change a specific node's text by providing its target (either the node ID or element) and the new text. To enable text editing, set the [`allowEditing`](https://ej2.syncfusion.com/angular/documentation/api/treeview#allowediting) property to true, ensuring correct functionality of the `updateNode` method.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/manipulating-nodes-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/manipulating-nodes-cs3/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/manipulating-nodes-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/manipulating-nodes-cs3" %}

## Dynamically refresh nodes

The [`refreshNode`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#refreshnode) method in TreeView allows you to update the content of a specific node by providing its target and the new details. To retrieve the current details of the node, use the [`getTreeData`](https://ej2.syncfusion.com/angular/documentation/api/treeview#gettreedata) method in conjunction with the node's ID. This method refreshes a designated node within the TreeView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/manipulating-nodes-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/manipulating-nodes-cs4/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/manipulating-nodes-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/manipulating-nodes-cs4" %}

## Dynamically move nodes

The [`moveNodes`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#movenodes) method in TreeView allows you to relocate a node by defining the node to be moved, the target location, and the index within that target. It facilitates the repositioning of nodes within the same TreeView based on the specified target.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/manipulating-nodes-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/manipulating-nodes-cs5/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/manipulating-nodes-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/manipulating-nodes-cs5" %}