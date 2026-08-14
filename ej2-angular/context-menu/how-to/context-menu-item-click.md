---
layout: post
title: How to open sub menu on item click in Angular Context Menu | Syncfusion
description: Open Angular Context Menu submenus only on click rather than hover by enabling the showItemOnClick property.
platform: ej2-angular
control: Context Menu
documentation: ug
domainurl: ##DomainURL##
---

# How to open sub menu on item click in Angular Context Menu

This section explains how to configure submenus to open on Context Menu item click instead of the default hover behavior. This functionality can be achieved by using the [`showItemOnClick`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#showitemOnclick) property of the Context Menu component.

By default, Context Menu submenus open when users hover over parent menu items. However, in scenarios where you want more deliberate user interaction or need to prevent accidental submenu activation, you can enable click-based submenu opening. When `showItemOnClick` is set to `true`, users must explicitly click on parent menu items to reveal their submenus, providing more controlled navigation and reducing unintentional submenu displays.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/context-menu/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/getting-started-cs2" %}