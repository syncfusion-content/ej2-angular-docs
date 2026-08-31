---
layout: post
title: Check or uncheck checkbox by clicking tree node text in Angular Tree View | Syncfusion
description: Toggle an Angular Tree View node checkbox by clicking its text using the nodeClicked event and TreeView check methods.
platform: ej2-angular
control: TreeView 
documentation: ug
domainurl: ##DomainURL##
---

# How to check or uncheck checkbox by clicking tree node text in Angular Tree View

You can enable checkbox toggling functionality by clicking on the tree node text instead of just the checkbox itself. This behavior is implemented using the [`nodeClicked`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeclicked) event of TreeView, which provides access to the clicked node and allows programmatic manipulation of its checkbox state.

This approach is particularly useful when you want to provide a larger click target for users or create a more intuitive interaction pattern where any part of the node can toggle its selection state.

## Prerequisites

* The [`showCheckBox`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#showcheckbox) property must be enabled so each node renders a checkbox.
* Initialize the TreeView with an `@ViewChild` reference so the event handler can call the `checkAll`/`uncheckAll` TreeView methods.

## Implementation

The [`nodeClicked`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeclicked) event provides a `NodeClickEventArgs` object containing the clicked node information. Use this event to programmatically check or uncheck nodes based on their current state. Inside the handler, `args.node` is the clicked DOM element and you can toggle the matching data record's `isChecked` flag before invoking `tree.checkAll([id])` or `tree.uncheckAll([id])`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tree-view/treeview-node-check-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/treeview-node-check-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/treeview-node-check-cs1" %}