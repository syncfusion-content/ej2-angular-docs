---
layout: post
title: Remove parent checkbox in Angular TreeView component | Syncfusion
description: Learn here all about Remove parent checkbox in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView 
documentation: ug
domainurl: ##DomainURL##
---

# Remove parent checkbox in Angular TreeView component

By enabling the [`showCheckBox`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#showcheckbox) property, you can render checkbox before each node of TreeView. However, some applications need to render checkboxes only for child nodes. In such cases, you can remove the checkbox of the parent node by customizing the CSS.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/remove-parent-checkbox-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/remove-parent-checkbox-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/remove-parent-checkbox-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/remove-parent-checkbox-cs1" %}
