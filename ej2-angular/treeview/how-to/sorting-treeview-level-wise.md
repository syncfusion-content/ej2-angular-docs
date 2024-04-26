---
layout: post
title: Sorting treeview level wise in Angular Treeview component | Syncfusion
description: Learn here all about Sorting treeview level wise in Syncfusion Angular Treeview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sorting treeview level wise 
documentation: ug
domainurl: ##DomainURL##
---

# Sorting treeview level wise in Angular Treeview component

You can sort the TreeView nodes based on their level. When using the `sortOrder` property, the whole TreeView is sorted. When you sort a particular level, you can use the following code sample. The following code sample demonstrates how to sort the parent node alone in TreeView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/sort-tree-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/sort-tree-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/sort-tree-cs1" %}