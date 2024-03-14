---
layout: post
title: Multiple selection in Angular Treeview component | Syncfusion
description: Learn here all about Multiple selection in Syncfusion Angular Treeview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Multiple selection 
documentation: ug
domainurl: ##DomainURL##
---

# Multiple selection in Angular Treeview component

Selection provides an interactive support and highlights the node that you select. Selection can be done through simple mouse down or keyboard interaction.

The TreeView also supports selection of multiple nodes by setting [allowMultiSelection](https://ej2.syncfusion.com/angular/documentation/api/treeview/#allowmultiselection) to **true**.

To multi-select, press and hold **CTRL** key and click the desired nodes. To select range of nodes, press and hold the **SHIFT** key and click the nodes.

In the following example, the `allowMultiSelection` property is enabled.

> Multi selection is not applicable through touch interactions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/getting-started-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tree-view/getting-started-cs10/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/getting-started-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/getting-started-cs10" %}

## Selected nodes

You can get or set the selected nodes in TreeView at initial rendering and dynamically by using the
[selectedNodes](https://ej2.syncfusion.com/angular/documentation/api/treeview/#selectednodes) property. It will return the selected node’s ID as an array.

* The [`nodeselecting`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeselecting) event is triggered before a node is selected/unselected which can be used to prevent the selection.

* The [`nodeSelected`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeselected) event is triggered once a node is successfully selected/unselected.

In the following example, **New South Wales** and **Western Australia** nodes are selected at initial rendering.
When a node is selected, the selected node’s ID is displayed in alert.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/getting-started-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tree-view/getting-started-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/getting-started-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/getting-started-cs11" %}

## See Also

* [How to hover and select the multiple line tree nodes](./how-to/hover-multi-line-tree-node)

* [How to select only one child at a time, out of one specific parent](./how-to/select-one-child)