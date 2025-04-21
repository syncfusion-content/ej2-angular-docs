---
layout: post
title: Validate the text when renaming the tree node in Angular TreeView component | Syncfusion
description: Learn here all about Validate the text when renaming the tree node in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Validate the text when renaming the tree node in Angular TreeView component

You can validate the tree node text while editing using the [`nodeEdited`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeedited) event of the TreeView.

The following example demonstrates how to validate and prevent empty values in a tree node

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/validation-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/validation-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/validation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/validation-cs1" %}