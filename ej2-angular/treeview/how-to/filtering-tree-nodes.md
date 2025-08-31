---
layout: post
title: Filtering tree nodes in Angular TreeView component | Syncfusion
description: Learn here all about Filtering tree nodes in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Filtering tree nodes in Angular TreeView component

The TreeView component supports filtering nodes based on their text content using the `DataManager` plugin with the [`fields`](https://ej2.syncfusion.com/angular/documentation/api/treeview/fieldsSettingsModel/) property. This functionality enables users to search and display only matching nodes while preserving the hierarchical parent-child relationships.

The following code example demonstrates how to filter tree nodes in a TreeView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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
