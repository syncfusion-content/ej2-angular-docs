---
layout: post
title: Hide expand/collapse icons in Angular TreeView component | Syncfusion
description: Learn here all about Auto hide show expand collapse icon in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView 
documentation: ug
domainurl: ##DomainURL##
---

# Auto hide show expand collapse icon in Angular TreeView component

The TreeView component allows you to create a cleaner interface by automatically hiding expand/collapse icons and displaying them only when needed. You can show the expand/collapse icons when hovering over the TreeView and hide them when the mouse leaves the component area. This behavior is implemented using the [`created`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#created) event to set up the necessary mouse event handlers and CSS styling.

Refer to the following code sample to hide/show the expand/collapse icon automatically using the mouse.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/auto-hide-icons-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/auto-hide-icons-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/auto-hide-icons-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/auto-hide-icons-cs1" %}