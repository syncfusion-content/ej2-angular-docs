---
layout: post
title: Icons and sub menu items in Angular Menu component | Syncfusion
description: Learn here all about Icons and sub menu items in Angular Menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Icons and sub menu items 
documentation: ug
domainurl: ##DomainURL##
---

# Icons and sub menu items in Angular Menu component

## Icons

The menu item contains an icon/image in it to provide a visual representation of an action.
To place the icon on a menu item, set the [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/menu/menuItemModel#iconcss) property with the required icon CSS. By default, the icon is positioned at the left of the menu item. In the following sample, the icons of `File` and `Edit` menu items and `Open`, `Save`, `Cut`, `Copy`,and `Paste` sub menu items are added using the `iconCss` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/getting-started-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/menu/getting-started-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/getting-started-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/getting-started-cs11" %}

## Navigation

Navigation in Menu is used to navigate to the other web page when a menu item is clicked.
It can be achieved by providing a link to the menu item using the [`url`](https://ej2.syncfusion.com/angular/documentation/api/menu/menuItemModel/#url) property. In the following sample, the Navigation URL is added to sub menu items using the url property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/getting-started-cs12/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/menu/getting-started-cs12/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/getting-started-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/getting-started-cs12" %}

## Multilevel nesting

The Menu supports multiple level nesting, and it can be achieved by mapping the [`items`](https://ej2.syncfusion.com/angular/documentation/api/menu/menuItemModel#items) property inside the parent [`menuItems`](https://ej2.syncfusion.com/angular/documentation/api/menu#items).
In the following sample, three-level nesting of menu has been provided.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/getting-started-cs13/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/menu/getting-started-cs13/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/getting-started-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/getting-started-cs13" %}

> You can achieve multi level nesting with data source by mapping `name` of the child items to the [`children`](https://ej2.syncfusion.com/angular/documentation/api/menu/fieldSettingsModel#children) sub-property of [`fields`](https://ej2.syncfusion.com/angular/documentation/api/menu/fieldSettingsModel) property. Also, we can specify [`id`](https://ej2.syncfusion.com/angular/documentation/api/menu/menuItemModel/#id) property for menu items. For more information, refer to the [`data source binding`](./data-source-binding-and-custom-menu-items#data-binding) section.
The below table represents the MenuItem properties and it's description.

Property Name | Type | Description
-----|----- | -----
|iconCss|string|Defines class/multiple classes separated by a space for the menu Item that is used to include an icon. Menu Item can include font icon and sprite image.
|id|string|Specifies the id for menu item.
|separator|boolean|Specifies separator between the menu items. Separator are either horizontal or vertical lines used to group menu items.
|items|MenuItemModel[]|Specifies the sub menu items that is the array of MenuItem model/
|text|string|Specifies text for menu item.
|url|string|Specifies url for menu item that creates the anchor link to navigate to the url provided.

## See Also

* [Customize menu items](./how-to/customize-menu-items)
* [Group menu items with separator](./getting-started#group-menu-items-with-separator)