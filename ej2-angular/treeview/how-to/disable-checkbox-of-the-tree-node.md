---
layout: post
title: Disable Tree Node Checkbox in Angular TreeView | Syncfusion
description: Learn here all about Disable checkbox of the tree node in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Disable checkbox of the tree node in Angular TreeView component

You can disable the checkbox alone in the TreeView instead of disabling the whole node.

To implement this functionality, apply the `e-checkbox-disabled` CSS class to specific checkbox elements using the [`drawNode`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#drawnode) event. The `drawNode` event triggers during node rendering and provides access to the node element and its associated data, allowing conditional checkbox disabling based on your business logic.


Please refer to the following sample to see how to disable the check box of tree nodes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/disable-checkbox-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/disable-checkbox-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/disable-checkbox-cs1" %}