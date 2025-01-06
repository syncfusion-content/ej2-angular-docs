---
layout: post
title: Restrict drag-and-drop in Angular TreeView Component | Syncfusion
description: Learn here all about Restrict the drag and drop for particular tree nodes in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Restrict drag and drop nodes in Angular TreeView component

You are able to restrict drag and drop operations to allow files to be dropped only under folders. This can be achieved by using [`nodeDragStop`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodedragstop) and [`nodeDragging`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodedragging) events of TreeView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/restrict-drag-drop-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/restrict-drag-drop-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/restrict-drag-drop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/restrict-drag-drop-cs1" %}
