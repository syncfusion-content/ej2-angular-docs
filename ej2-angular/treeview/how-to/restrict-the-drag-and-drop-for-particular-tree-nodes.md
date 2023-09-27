---
layout: post
title: Restrict the drag and drop for particular tree nodes in Angular Treeview component | Syncfusion
description: Learn here all about Restrict the drag and drop for particular tree nodes in Syncfusion Angular Treeview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Restrict the drag and drop for particular tree nodes 
documentation: ug
domainurl: ##DomainURL##
---

# Restrict the drag and drop for particular tree nodes in Angular Treeview component

You can able to restrict to drag and drop files under folder only.
These can be achieved by using 'nodeDragStop' and 'nodeDragging' event of TreeView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/restrict-drag-drop-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tree-view/restrict-drag-drop-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/restrict-drag-drop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/restrict-drag-drop-cs1" %}