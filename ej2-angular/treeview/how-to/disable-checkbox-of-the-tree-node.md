---
layout: post
title: Disable check-box of the tree node in Angular TreeView component | Syncfusion
description: Learn here all about Disable check-box of the tree node in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Disable check-box of the tree node in Angular TreeView component

You can disable the check-box alone in the TreeView instead of disabling the whole node. You need to include the `e-checkbox-disabled` class into the check-box element using the [`drawNode`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#drawnode) event. Please refer to the following sample to see how to disable the check box of tree nodes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/disable-checkbox-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/disable-checkbox-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/disable-checkbox-cs1" %}