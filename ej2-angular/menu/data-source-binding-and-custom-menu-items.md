---
layout: post
title: Data source binding in Angular Menu component | Syncfusion
description: Learn here all about Data source binding and custom menu items in Syncfusion Angular Menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Menu
documentation: ug
domainurl: ##DomainURL##
---

# Data source binding and custom menu items in Angular Menu component

This section covers binding the Angular Menu component to hierarchical or self-referential data sources and customizing menu items using templates.

## Data binding

The Menu component supports data source bindings such as arrays of JavaScript objects structured as either hierarchical or self-referential data.

### Hierarchical data

The Menu can be populated with a hierarchical data source by assigning it to the [`items`](https://ej2.syncfusion.com/angular/documentation/api/menu/menuItemModel/#items) property, and mapping fields with corresponding keys to the [`fields`](https://ej2.syncfusion.com/angular/documentation/api/menu/fieldSettingsModel/) property, which includes sub options like `itemId`, `text`, and `children` to align data source properties with the Menu’s structure.

#### JSON data

The Menu can generate its menu items from an array of complex data sources by mapping fields from the [`fields`](https://ej2.syncfusion.com/angular/documentation/api/menu/fieldSettingsModel/) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/data-binding-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/data-binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/data-binding-cs1" %}

#### Data Service

In application level, remote data binding can be achieved using [`DataManager`](https://ej2.syncfusion.com/angular/documentation/data).
To create Menu, assign items property with resultant data from [`callback`](https://ej2.syncfusion.com/documentation/api/data/deferred/#then) function.

The following example displays five employees' **FirstName** from the **Employees** table and **ShipName** details from the **Orders** table of the `Northwind` Data Service.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/data-service-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/data-service-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/data-service-cs1" %}

### Self-referential data

The Menu can be populated from a self-referential data structure, consisting of an array of JSON objects with `parentId` mapping.

Directly assign self-referential data to the [`items`](https://ej2.syncfusion.com/angular/documentation/api/menu/menuItemModel/#items) property, and map all field members with corresponding keys to the [fields](https://ej2.syncfusion.com/angular/documentation/api/menu/#fields) property, where `itemId` uniquely identifies each menu item and `parentId` links child items to their parent.

To render root-level nodes, specify `parentId` as null or omit the `parentId` for root-level nodes in the data source.

In the following example, the **id**, **pId**, and **text** columns from self-referential data have been mapped to the [`itemId`](https://ej2.syncfusion.com/angular/documentation/api/menu/fieldSettingsModel/#itemid), [`parentId`](https://ej2.syncfusion.com/angular/documentation/api/menu/fieldSettingsModel/#parentid), and [`text`](https://ej2.syncfusion.com/angular/documentation/api/menu/fieldSettingsModel/#text) fields, respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/getting-started-cs2" %}

## Custom menu items

The Menu can be customized using Essential<sup style="font-size:70%">&reg;</sup> JS2 [Template engine](https://ej2.syncfusion.com/documentation/common/template-engine) to render the elements.

To customize menu items in your application, set your customized template string to the [`template`](https://ej2.syncfusion.com/angular/documentation/api/menu/#template) property.
In the following example, the menu has been rendered with customized menu items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/menu/custom-menu-items-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/menu/custom-menu-items-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/menu/custom-menu-items-cs1" %}

> To prevent submenu closing, set `args.cancel` to `true` in the [`beforeClose`](../api/menu/#beforeclose) event handler to enable custom interaction logic.

## See Also

* [Render menu with items](./getting-started#getting-started)