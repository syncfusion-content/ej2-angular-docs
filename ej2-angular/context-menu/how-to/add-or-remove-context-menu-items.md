---
layout: post
title: Add or remove context menu items in Angular Context menu component | Syncfusion
description: Learn here all about Add or remove context menu items in Syncfusion Angular Context menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Add or remove context menu items 
documentation: ug
domainurl: ##DomainURL##
---

# Add or remove context menu items in Angular Context menu component

ContextMenu items can be added or removed using the [`insertAfter`](https://ej2.syncfusion.com/angular/documentation/api/menu/#insertafter), [`insertBefore`](https://ej2.syncfusion.com/angular/documentation/api/menu/#insertbefore) and [`removeItems`](https://ej2.syncfusion.com/angular/documentation/api/menu/#removeitems) methods.

In the following example, the **Display Settings** menu items are added before the **Personalize** item, the **Sort By** menu items are added after the **Refresh**, and the **Paste** item is removed from context menu.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/template-cs1" %}