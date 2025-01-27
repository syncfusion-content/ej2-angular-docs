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

You can sort the TreeView nodes based on their hierarchical level. The [`sortOrder`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#sortorder) property sorts the entire TreeView. To sort a specific level, you can use the following code sample. The following code sample demonstrates how to sort only the parent nodes in TreeView.

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