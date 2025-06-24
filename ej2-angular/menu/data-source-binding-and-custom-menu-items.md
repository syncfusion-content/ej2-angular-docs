---
layout: post
title: Data source binding in Angular Menu component | Syncfusion
description: Learn here all about Data source binding and custom menu items in Syncfusion Angular Menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data source binding and custom menu items 
documentation: ug
domainurl: ##DomainURL##
---

# Data source binding and custom menu items in Angular Menu component

## Data binding

The Menu supports data source bindings such as array of JavaScript objects
that can be structured as either `hierarchical` or `self-referential` data.

### Hierarchical data

The Menu can be populated with hierarchical data source by assigning it to the [`items`](https://ej2.syncfusion.com/angular/documentation/api/menu/menuItemModel#items) property, and the fields with corresponding keys can be mapped to the [`fields`](https://ej2.syncfusion.com/angular/documentation/api/menu/fieldSettingsModel) property.

#### JSON data

The Menu can generate its menu items through an array of complex data source by mapping fields from the [`fields`](https://ej2.syncfusion.com/angular/documentation/api/menu/fieldSettingsModel) property.

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
To create Menu, assign items property with resultant data from [`callback`](https://ej2.syncfusion.com/documentation/api/data/deferred#then) function.

The following example displays five employees' **FirstName** from **Employees** table and **ShipName** details from **Orders** table of the `Northwind` Data Service.

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

Menu can be populated from self-referential data structure that contains array of JSON objects with `parentId` mapping.

You can directly assign self-referential data to the [`items`](https://ej2.syncfusion.com/angular/documentation/api/menu/menuItemModel#items) property, and map all the field members with corresponding keys from self-referential data to [fields](https://ej2.syncfusion.com/angular/documentation/api/menu#fields) property.

To render the root level nodes, specify the `parentId` as null or no need to specify the `parentId` in data source.

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

To customize menu items in your application, set your customized template string to the [`template`](https://ej2.syncfusion.com/angular/documentation/api/menu#template) property.
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

>To prevent sub menu closing, set `args.cancel` to `true` in [`beforeClose`](../api/menu#beforeclose) event.

## See Also

* [Render menu with items](./getting-started#getting-started)