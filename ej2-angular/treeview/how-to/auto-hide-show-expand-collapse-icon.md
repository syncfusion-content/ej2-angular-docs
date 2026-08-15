---
layout: post
title: How to auto show or hide expand/collapse icons in Angular Tree View | Syncfusion
description: Auto show Angular Tree View expand and collapse icons on hover and hide them on mouse leave using the created event.
platform: ej2-angular
control: TreeView 
documentation: ug
domainurl: ##DomainURL##
---

# How to auto show or hide expand/collapse icons in Angular Tree View

The TreeView component allows you to create a cleaner interface by automatically hiding expand/collapse icons and displaying them only when needed. You can show the expand/collapse icons when hovering over the TreeView and hide them when the mouse leaves the component area. This behavior is implemented using the [`created`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#created) event to set up the necessary mouse event handlers and CSS styling.

Refer to the following code sample to hide/show the expand/collapse icon automatically using the mouse.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
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