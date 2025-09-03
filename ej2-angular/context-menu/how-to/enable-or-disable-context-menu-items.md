---
layout: post
title: Enable or Disable Items in Angular Context Menu | Syncfusion
description: Learn here all about Enable or disable context menu items in Syncfusion Angular Context menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Context Menu
documentation: ug
domainurl: ##DomainURL##
---

# Enable or disable context menu items in Angular Context menu component

The ContextMenu component supports dynamic state management of menu items through the [`enableItems`](https://ej2.syncfusion.com/angular/documentation/api/menu/#enableitems) method. This functionality allows you to control menu item availability based on application state, user permissions, or contextual conditions, enhancing user experience by showing only relevant actions.

The `enableItems` method accepts three parameters: an array of item identifiers (`items`), a boolean value (`enable`) to specify the desired state, and an optional `isUniqueId` parameter to indicate whether the identifiers refer to unique IDs or text content. When `enable` is set to `true`, the specified items become interactive; when `false`, they become disabled and visually dimmed.

In the following example, the **Display Settings** parent item and **Medium icons** sub menu item are disabled to demonstrate different levels of menu item control.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/template-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/template-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/template-cs3" %}

> To disable sub menu items, use the [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/menu/#beforeopen) event.