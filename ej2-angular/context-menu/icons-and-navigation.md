---
layout: post
title: Icons and navigation in Angular Context menu component | Syncfusion
description: Learn here all about Icons and navigation in Syncfusion Angular Context menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Icons and navigation 
documentation: ug
domainurl: ##DomainURL##
---

# Icons and navigation in Angular Context menu component

## Icons

The ContextMenu item can have an icon/image in it to provide visual representation of the action. To place the icon on a menu item, set the [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/menuItemModel#iconcss) property to e-icons with the required icon CSS. By default, the icon is positioned to the left side of the menu item. In the following sample, the icons for Cut, Copy and Paste menu items are added using the `iconCss` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/icons-and-navigation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/icons-and-navigation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/icons-and-navigation-cs1" %}

## Navigation

Navigation in ContextMenu is usage to navigate to the other web page when menu item is clicked. This can be achieved by providing link to the menu item using the [`url`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/menuItemModel#url) property.
In the following sample, Navigation URL for Flipkart, Amazon, and Snapdeal menu items are added using the `url` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/icons-and-navigation-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/icons-and-navigation-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/icons-and-navigation-cs2" %}

> To open the links in new tab, set `target` attribute with the value `_blank` in the [`beforeItemRender`](https://ej2.syncfusion.com/angular/documentation/api/context-menu#beforeitemrender) event.

## See Also

* [How to change menu items dynamically](./how-to/change-menu-items-dynamically)
