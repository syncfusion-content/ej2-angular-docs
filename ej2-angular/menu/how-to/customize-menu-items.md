---
layout: post
title: Customize menu items in Angular Menu component | Syncfusion
description: Learn here all about Customize menu items in Syncfusion Angular Menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Menu
documentation: ug
domainurl: ##DomainURL##
---

# Customize menu items in Angular Menu component

This section demonstrates how to dynamically add, remove, enable, disable, show, or hide menu items in the Angular Menu component using methods like `insertAfter`, `insertBefore`, `removeItems`, `enableItems`, `showItems`, and `hideItems`, along with the `beforeOpen` event for advanced customization.

## Add or remove menu items

Menu items can be added or removed using the [`insertAfter`](https://ej2.syncfusion.com/angular/documentation/api/menu/#insertafter), [`insertBefore`](https://ej2.syncfusion.com/angular/documentation/api/menu/#insertbefore), and [`removeItems`](https://ej2.syncfusion.com/angular/documentation/api/menu/#removeitems) methods, which accept a `string[]` of item identifiers (text or ID) and an optional `isUniqueId` parameter to specify whether the `id` property is used.

In the following example, **Europe** menu items are added before the **Oceania** item, **Africa** menu items are added after **Asia**, and **South America** and **Mexico** items are removed from the menu.

> Set `isUniqueId` to `true` to process items using their `id` property instead of `text`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/getting-started-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/getting-started-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/getting-started-cs8" %}

## Enable or disable menu items

Menu items can be enabled or disabled using the [`enableItems`](https://ej2.syncfusion.com/angular/documentation/api/menu/#enableitems) method, which accepts a `string[]` of item identifiers and a boolean `enable` parameter. Disabled items appear grayed out and are non-interact able. Set `enable` to `true` to enable items and `false` to disable them.

In the following example, the **Directory** header item, **Conferences**, and **Music** submenu items are disabled.

> Use the [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/menu/#beforeopen) event to dynamically enable or disable submenu items by modifying the `args.items` array.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/enable-disable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/enable-disable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/enable-disable-cs1" %}

## Hide or show menu items

Menu items can be shown or hidden using the [`showItems`](https://ej2.syncfusion.com/angular/documentation/api/menu/#showitems) and [`hideItems`](https://ej2.syncfusion.com/angular/documentation/api/menu/#hideitems) methods.

In the following example, the **Movies** header item, **Workshops**, and **Music** submenu items are hidden.

> Since the Menu initially supports hiding only header items, use the [`beforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/menu/#beforeopen) event to dynamically hide submenu items by updating `args.items`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/enable-disable-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/enable-disable-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/enable-disable-cs2" %}
