---
layout: post
title: How to sort TreeView nodes by level in Angular Tree View | Syncfusion
description: Sort Angular Tree View nodes by level using the sortOrder property plus custom logic for per-level Ascending or Descending order.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# How to sort TreeView nodes by level in Angular Tree View

The TreeView component provides sorting functionality through the [`sortOrder`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#sortorder) property, which applies sorting to the entire TreeView structure. However, for scenarios requiring level-specific sorting, you can implement custom sorting logic that targets specific hierarchical levels while leaving others unsorted.

The `sortOrder` property accepts three values: `None` (default), `Ascending`, and `Descending`.

> The `sortOrder` setting sorts the **entire** TreeView. To target only a particular level, supply a data preset whose first-level nodes are pre-sorted (for example, a custom `localData` array) and set `sortOrder` to `None`, or combine `sortOrder` with the [`drawNode`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#drawnode) event to re-order each subtree programmatically when it renders.

The following example demonstrates how to sort only the parent nodes (first level) in the TreeView.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tree-view/sort-tree-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/sort-tree-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/sort-tree-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/sort-tree-cs1" %}