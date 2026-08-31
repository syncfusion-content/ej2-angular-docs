---
layout: post
title: Icons and Navigation in Angular Context Menu | Syncfusion
description: Add font or image icons and URL navigation to Angular Context Menu items via the iconCss and url properties for click-to-navigate actions.
platform: ej2-angular
control: Context Menu 
documentation: ug
domainurl: ##DomainURL##
---

# Icons and Navigation in Angular Context Menu

The ContextMenu component supports two types of contextual enhancements for menu items: configurable icons (CSS classes or image URLs) and click-to-navigate `<a>` targets. Use these features to give users clear, unambiguous cues for each action.

## Icons

The ContextMenu component supports both font-based icons and image-based icons on menu items to provide visual representation of actions and enhance the user experience. To add a font-based icon to a menu item, configure the [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/menuItemModel#iconcss) property with the appropriate CSS class. By default, icons are positioned to the left side of the menu item text. In the following sample, icons for Cut, Copy, and Paste menu items are added using the `iconCss` property with built-in `e-icons` CSS classes.

### Font-based icons

Syncfusion ships built-in icon classes in the `e-icons` font. To apply them to Context Menu items, set the `iconCss` to the corresponding class name. The `e-cm-icons` mapping is also provided for common context-menu actions and is automatically registered when the navigations theme stylesheet is imported.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/context-menu/icons-and-navigation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/icons-and-navigation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/icons-and-navigation-cs1" %}

## URL Navigation

The ContextMenu component enables navigation to external web pages or internal routes when menu items are clicked. This functionality is implemented by configuring the [`url`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/menuItemModel#url) property with the target destination URL. When a menu item with a URL is selected, the browser navigates to the specified location. In the following sample, navigation URLs for Flipkart, Amazon, and Snapdeal menu items are configured using the `url` property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
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