---
layout: post
title: Hover multi line tree node in Angular TreeView component | Syncfusion
description: Learn here all about Hover multi line tree node in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Hover multi line tree node in Angular TreeView component

This section demonstrates how to hover and select a multi-line tree node. Here, you can set the row height (element class: `e-fullrow`) to be the same as the row content (element class: `e-text-content`) using the [`created`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#created) and the [`nodeSelecting`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeselecting) events.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/multi-line-tree-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/multi-line-tree-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/multi-line-tree-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/multi-line-tree-cs1" %}
