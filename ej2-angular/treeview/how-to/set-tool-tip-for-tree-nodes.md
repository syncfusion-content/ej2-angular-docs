---
layout: post
title: Set tooltip for tree nodes in Angular TreeView component | Syncfusion
description: Learn here all about Set tooltip for tree nodes in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Set tooltip for tree nodes in Angular TreeView component

The Angular TreeView component provides built-in tooltip support for tree nodes, enhancing user experience by displaying additional information when hovering over nodes. This feature is particularly useful for displaying supplementary details, descriptions, or help text without cluttering the tree interface.

## Configuring tooltips through data source

TreeView supports tooltip functionality through the [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/treeview/fieldsSettingsModel/#tooltip)property. The tooltip content is determined by mapping a specific field from your data source that contains the tooltip text for each node.

The following code example demonstrates how to set a tooltip for TreeView nodes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/tooltip-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/tooltip-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/tooltip-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/tooltip-cs1" %}