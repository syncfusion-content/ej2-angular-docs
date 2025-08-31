---
layout: post
title: Sorting TreeView level wise in Angular TreeView component | Syncfusion
description: Learn here all about Sorting TreeView level wise in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Sorting TreeView level wise in Angular TreeView component

The TreeView component provides sorting functionality through the [`sortOrder`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#sortorder) property, which applies sorting to the entire TreeView structure. However, for scenarios requiring level-specific sorting, you can implement custom sorting logic that targets specific hierarchical levels while leaving others unsorted.

The `sortOrder` property accepts three values: `None` (default), `Ascending`, and `Descending`.

The following example demonstrates how to sort only the parent nodes (first level) in the TreeView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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