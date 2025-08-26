---
layout: post
title: Multiple selection in Angular TreeView component | Syncfusion
description: Learn here all about Multiple selection in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView 
documentation: ug
domainurl: ##DomainURL##
---

# Multiple selection in Angular TreeView component

The TreeView component supports selecting multiple nodes simultaneously, enabling users to perform batch operations on several items. Selection highlights the chosen nodes and provides interactive feedback through visual indicators.

The TreeView supports multiple node selection by setting [allowMultiSelection](https://ej2.syncfusion.com/angular/documentation/api/treeview/#allowmultiselection) to **true**.

## Enabling multiple selection

To select multiple nodes, use these keyboard combinations:

* Hold **CTRL** key and click individual nodes to add or remove them from the selection
* Hold **SHIFT** key and click nodes to select a continuous range from the last selected node

In the following example, the `allowMultiSelection` property is enabled to demonstrate multiple node selection.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/getting-started-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/getting-started-cs10/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/getting-started-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/getting-started-cs10" %}

> Multiple selection is not supported through touch interactions on mobile devices.

## Managing selected nodes

Control and retrieve selected nodes using the [selectedNodes](https://ej2.syncfusion.com/angular/documentation/api/treeview/#selectednodes) property. This property accepts and returns an array of selected node IDs, allowing both initial configuration and dynamic updates.

### Selection events

The TreeView provides events to handle selection changes:

* The [`nodeSelecting`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeselecting) event triggers before a node selection changes and can prevent the selection by setting `cancel` to true
* The [`nodeSelected`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeselected) event triggers after a node selection is completed successfully

In the following example, **New South Wales** and **Western Australia** nodes are pre-selected at initialization. The selection events display alerts showing the selected node information.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/getting-started-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/getting-started-cs11/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/getting-started-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/getting-started-cs11" %}

## See Also

* [How to hover and select the multiple line tree nodes](./how-to/hover-multi-line-tree-node)

* [How to select only one child at a time, out of one specific parent](./how-to/select-one-child)