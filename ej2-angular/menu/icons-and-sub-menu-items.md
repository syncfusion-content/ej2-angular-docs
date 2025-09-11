---
layout: post
title: Icons and sub menu items in Angular Menu component | Syncfusion
description: Learn here all about Icons and sub menu items in Syncfusion Angular Menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Menu
documentation: ug
domainurl: ##DomainURL##
---

# Icons and sub menu items in Angular Menu component

This section demonstrates how to enhance the Angular Menu component with icons, navigation links, and multilevel nesting for improved usability and functionality.

## Icons

Menu items can include an icon or image to visually represent an action. To place the icon on a menu item, set the [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/menu/menuItemModel/#iconcss) property with the required CSS class names for font icons or sprite images. By default, the icon is positioned to the left of the menu item; custom positioning requires additional CSS styling. In the following sample, icons for the `File` and `Edit` menu items, and the `Open`, `Save`, `Cut`, `Copy`, and `Paste` submenu items, are added using the `iconCss` property.

> Ensure proper CSS imports  for `iconCss` to render correctly.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/getting-started-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/getting-started-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/getting-started-cs11" %}

## Navigation

Navigation in the Menu component directs users to another web page when a menu item is clicked. This is achieved by providing a link to the menu item using the [`url`](https://ej2.syncfusion.com/angular/documentation/api/menu/menuItemModel/#url) property, which accepts a string representing a valid URL and creates an anchor link that opens in the same tab by default. In the following sample, navigation URLs are added to submenu items using the `url` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/getting-started-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/getting-started-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/getting-started-cs12" %}

## Multilevel nesting

Building on menu item configuration, the Menu component supports multilevel nesting, achieved by mapping the [`items`](https://ej2.syncfusion.com/angular/documentation/api/menu/menuItemModel/#items) property inside the parent [`menuItems`](https://ej2.syncfusion.com/angular/documentation/api/menu/#items). In the following sample, three-level nesting is provided.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/getting-started-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/getting-started-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/getting-started-cs13" %}

> You can achieve multi level nesting with data source by mapping `name` of the child items to the [`children`](https://ej2.syncfusion.com/angular/documentation/api/menu/fieldSettingsModel/#children) sub-property of [`fields`](https://ej2.syncfusion.com/angular/documentation/api/menu/fieldSettingsModel/) property. Also, we can specify [`id`](https://ej2.syncfusion.com/angular/documentation/api/menu/menuItemModel/#id) property for menu items. For more information, refer to the [`data source binding`](./data-source-binding-and-custom-menu-items#data-binding) section.
The following table represents the `MenuItem` properties and their descriptions.

Property Name | Type | Description
--------------|----- | -----------
iconCss|string|Defines class/multiple classes separated by a space for the menu item that is used to include an icon. Menu items can include font icons and sprite images.
id|string|Specifies the ID for the menu item.
separator|boolean|Specifies separator between the menu items. Separator are either horizontal or vertical lines used to group menu items.
items|MenuItemModel[]|Specifies the submenu items as an array of `MenuItemModel` objects.
text|string|Specifies the text for the menu item.
url|string|Specifies the URL for the menu item that creates the anchor link to navigate to the provided URL.

## See Also

* [Customize menu items](./how-to/customize-menu-items)
* [Group menu items with separator](./getting-started#group-menu-items-with-separator)