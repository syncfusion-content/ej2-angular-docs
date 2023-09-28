---
layout: post
title: Validate the text when renaming the tree node in Angular Treeview component | Syncfusion
description: Learn here all about Validate the text when renaming the tree node in Syncfusion Angular Treeview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Validate the text when renaming the tree node 
documentation: ug
domainurl: ##DomainURL##
---

# Validate the text when renaming the tree node in Angular Treeview component

You can validate the tree node text while editing using `nodeEdited` event of the TreeView.
Following is an example that shows how to validate and prevent empty values in tree node.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/validation-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tree-view/validation-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/validation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/validation-cs1" %}