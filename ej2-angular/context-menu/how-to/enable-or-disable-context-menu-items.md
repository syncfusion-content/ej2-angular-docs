---
layout: post
title: Enable or disable context menu items in Angular Context menu component | Syncfusion
description: Learn here all about Enable or disable context menu items in Syncfusion Angular Context menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Enable or disable context menu items 
documentation: ug
domainurl: ##DomainURL##
---

# Enable or disable context menu items in Angular Context menu component

You can enable and disable the menu items using the [`enableItems`](https://ej2.syncfusion.com/angular/documentation/api/menu#enableitems) method in ContextMenu. To enable menuItems, set the `enable` property in argument to `true` and vice-versa.

In the following example, the **Display Settings** in parent items and **Medium icons** in sub menu items are disabled.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/template-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/template-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/template-cs3" %}

> To disable sub menu items, use the [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/menu#beforeopen) event.