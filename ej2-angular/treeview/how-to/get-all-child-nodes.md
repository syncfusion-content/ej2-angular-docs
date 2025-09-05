---
layout: post
title: Get all child nodes in Angular TreeView component | Syncfusion
description: Learn here all about Get all child nodes in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Get all child nodes in Angular TreeView component

This section demonstrates how to retrieve child nodes from a corresponding parent node ID in hierarchical data structures. The TreeView component provides the [`getNode`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#getnode) method to access node details and traverse the tree structure programmatically. This functionality is essential for scenarios such as expanding specific branches, performing operations on node hierarchies, or implementing custom navigation patterns.

The `getNode` method returns detailed information about a specific node, including its child elements, which enables you to access and manipulate the entire subtree. This approach is particularly useful when working with dynamic data sources or when you need to implement custom tree traversal logic based on parent-child relationships.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/get-child-nodes-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/get-child-nodes-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/get-child-nodes-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/get-child-nodes-cs1" %}