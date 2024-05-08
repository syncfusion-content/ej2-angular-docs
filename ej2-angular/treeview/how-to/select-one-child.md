---
layout: post
title: Select one child in Angular Treeview component | Syncfusion
description: Learn here all about Select one child in Syncfusion Angular Treeview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Select one child 
documentation: ug
domainurl: ##DomainURL##
---

# Select one child in Angular Treeview component

TreeView allows both single and multiple selections. If your application needs to select one child at a time under one specific parent, refer to the following example. Here, you can achieve this in the `nodeSelecting` event of TreeView. However, you can reset the selected child and make another selection by pressing Ctrl + selected nodes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/select-one-child-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/select-one-child-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/select-one-child-cs1" %}