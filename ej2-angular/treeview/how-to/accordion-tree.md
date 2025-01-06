---
layout: post
title: Accordion tree in Angular TreeView component | Syncfusion
description: Learn here all about Accordion tree in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Accordion tree in Angular TreeView component

Accordion is an interface where a list of items can be collapsed or expanded, but only one list can be collapsed or expanded at a time. You can customize the TreeView to make it behave like an Accordion using [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#cssclass) property and [`nodeSelected`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeselected) event. Refer to the following code sample to create an accordion tree.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/accordion-tree-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/accordion-tree-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/accordion-tree-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/accordion-tree-cs1" %}
