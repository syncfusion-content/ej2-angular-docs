---
layout: post
title: Manipulating nodes in Angular TreeView component | Syncfusion
description: Learn here all about Manipulating nodes in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Node Manipulation in ##Platform_Name## TreeView component

The TreeView component provides Essential<sup style="font-size:70%">&reg;</sup> methods for dynamically managing nodes, enabling the creation of highly interactive and customizable tree structures:

* [addNodes](https://ej2.syncfusion.com/angular/documentation/api/treeview/#addnodes)
* [removeNodes](https://ej2.syncfusion.com/angular/documentation/api/treeview/#removenodes)
* [updateNode](https://ej2.syncfusion.com/angular/documentation/api/treeview/#updatenode)
* [refreshNode](https://ej2.syncfusion.com/angular/documentation/api/treeview/#refreshnode)
* [moveNodes](https://ej2.syncfusion.com/angular/documentation/api/treeview/#movenodes)

These methods provide the flexibility to add, remove, update, refresh, or relocate nodes as needed, facilitating fully interactive and customizable TreeView structures.

## Dynamically Adding Nodes

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

## Dynamically Removing Nodes

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

## Dynamically Updating Nodes

The TreeView component has the [`updateNode`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#updatenode) method, which allows you to change a specific node's text by providing its target (either the node ID or element) and the new text. To enable text editing, set the [`allowEditing`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#allowediting) property to true, ensuring correct functionality of the `updateNode` method.
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

## Dynamically Refreshing Nodes

The [`refreshNode`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#refreshnode) method updates the content of a specific node by providing the target node and new node data. To retrieve current node details, use the [`getTreeData`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#gettreedata) method in conjunction with the node's ID. This method refreshes the designated node within the TreeView with updated information.

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

## Dynamically Moving Nodes

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