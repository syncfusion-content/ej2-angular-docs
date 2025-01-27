---
layout: post
title: Get dynamic icon in Angular TreeView component | Syncfusion
description: Learn here all about Get dynamic icon in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView 
documentation: ug
domainurl: ##DomainURL##
---

# Get dynamic icon in Angular TreeView component

In the TreeView component, you can get the original bound data using the [`getTreeData`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#gettreedata) method. If you pass the id of a tree node to this method, it returns the corresponding node information; otherwise, it returns information for all tree nodes. You can use this method to get the bound iconCss class in the [`nodeChecking`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodechecking) event. Please refer to the following sample for an implementation example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/icon-css-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/icon-css-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/icon-css-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/icon-css-cs1" %}
