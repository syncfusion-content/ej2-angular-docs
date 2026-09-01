---
layout: post
title: How to filter treeview nodes in Angular Tree View | Syncfusion
description: Filter Angular Tree View nodes by text using DataManager and the fields property to display only matching hierarchical results.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# How to filter treeview nodes in Angular Tree View

The TreeView component supports filtering nodes based on their text content using the `DataManager` plugin with the [`fields`](https://ej2.syncfusion.com/angular/documentation/api/treeview/fieldsSettingsModel/) property. This functionality enables users to search and display only matching nodes while preserving the hierarchical parent-child relationships.

The filter performs a case-insensitive, partial match against the field mapped to `text` in the data source. Only matching nodes — together with their ancestor chain — are rendered, so the hierarchy remains visible. To trigger the filter at runtime, update the `fields.query` parameter and reassign it to the TreeView instance followed by `tree.dataBind()`.

The following code example demonstrates how to filter tree nodes in a TreeView.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tree-view/filtering-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/filtering-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/filtering-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/filtering-cs1" %}
