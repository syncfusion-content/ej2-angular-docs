---
layout: post
title: Icons and navigation in Angular Context menu component | Syncfusion
description: Learn here all about Icons and navigation in Syncfusion Angular Context menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Context Menu 
documentation: ug
domainurl: ##DomainURL##
---

# Icons and navigation in Angular Context menu component

## Icons

The ContextMenu component supports icons and images on menu items to provide visual representation of actions and enhance user experience. To add an icon to a menu item, configure the [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/menuItemModel/#iconcss) property with the appropriate CSS class. By default, icons are positioned to the left side of the menu item text. In the following sample, icons for Cut, Copy and Paste menu items are added using the `iconCss` property with e-icons CSS classes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/icons-and-navigation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/icons-and-navigation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/icons-and-navigation-cs1" %}

## URL Navigation

The ContextMenu component enables navigation to external web pages or internal routes when menu items are clicked. This functionality is implemented by configuring the [`url`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/menuItemModel/#url) property with the target destination URL. When a menu item with a URL is selected, the browser navigates to the specified location. In the following sample, navigation URLs for Flipkart, Amazon, and Snapdeal menu items are configured using the `url` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/icons-and-navigation-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/icons-and-navigation-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/icons-and-navigation-cs2" %}

> To open the links in new tab, set `target` attribute with the value `_blank` in the [`beforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/#beforeitemrender) event.

## See Also

* [How to change menu items dynamically](./how-to/change-menu-items-dynamically)