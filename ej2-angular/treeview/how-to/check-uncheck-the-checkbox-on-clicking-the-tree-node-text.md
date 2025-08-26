---
layout: post
title: Toggle checkbox by node click in Angular TreeView | Syncfusion
description: Learn here all about Check uncheck the checkbox on clicking the tree node text in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView 
documentation: ug
domainurl: ##DomainURL##
---

# Checkbox toggle on node click in Angular TreeView

You can enable checkbox toggling functionality by clicking on the tree node text instead of just the checkbox itself. This behavior is implemented using the [`nodeClicked`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeclicked) event of TreeView, which provides access to the clicked node and allows programmatic manipulation of its checkbox state.

This approach is particularly useful when you want to provide a larger click target for users or create a more intuitive interaction pattern where any part of the node can toggle its selection state.

## Prerequisites

Ensure that the [`showCheckBox`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#showcheckbox) property is enabled on your TreeView component, as this functionality requires checkboxes to be visible and interactive.

## Implementation

The [`nodeClicked`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeclicked) event provides a `NodeClickEventArgs` object containing the clicked node information. Use this event to programmatically check or uncheck nodes based on their current state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/treeview-node-check-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/treeview-node-check-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/treeview-node-check-cs1" %}