---
layout: post
title: Add or remove Context Menu items in Angular Context Menu | Syncfusion
description: Add and remove Angular Context Menu items at runtime using the insertAfter, insertBefore, and removeItems methods.
platform: ej2-angular
control: Context Menu 
documentation: ug
domainurl: ##DomainURL##
---

# How to add or remove Context Menu items in Angular Context Menu

The ContextMenu component provides dynamic item management capabilities, allowing you to add or remove menu items programmatically at runtime. This functionality enables responsive menu systems that adapt to changing application states, user permissions, or contextual requirements.

ContextMenu items can be dynamically modified using the [`insertAfter`](https://ej2.syncfusion.com/angular/documentation/api/menu#insertafter), [`insertBefore`](https://ej2.syncfusion.com/angular/documentation/api/menu#insertbefore) and [`removeItems`](https://ej2.syncfusion.com/angular/documentation/api/menu#removeitems) methods.

The `insertAfter` method adds new menu items after a specified target item, while `insertBefore` adds items before the target. The `removeItems` method removes specified items from the menu structure.

In the following example, the **Display Settings** menu items are added before the **Personalize** item, the **Sort By** menu items are added after the **Refresh**, and the **Paste** item is removed from context menu.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/context-menu/template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/template-cs1" %}