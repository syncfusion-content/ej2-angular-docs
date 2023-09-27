---
layout: post
title: Disable checkbox of the tree node in Angular Treeview component | Syncfusion
description: Learn here all about Disable checkbox of the tree node in Syncfusion Angular Treeview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Disable checkbox of the tree node 
documentation: ug
domainurl: ##DomainURL##
---

# Disable checkbox of the tree node in Angular Treeview component

You can disable the check box alone in TreeView instead of disabling the whole node. You need to include the `e-checkbox-disabled` class into the check box element using the `drawNode` event. Please refer to the following sample to disable the check box of the tree nodes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/disable-checkbox-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tree-view/disable-checkbox-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/disable-checkbox-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/disable-checkbox-cs1" %}