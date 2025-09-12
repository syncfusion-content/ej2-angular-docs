---
layout: post
title: Data binding in Angular ListView component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Angular ListView component

The ListView component provides flexible data binding capabilities that enable you to display data from various sources efficiently. Data binding is fundamental to creating dynamic, data-driven user interfaces and can be configured through the dataSource property, which supports both local data arrays and remote data services through DataManager integration.

ListView supports different kinds of data services such as OData, OData V4, Web API and data formats like XML, JSON, JSONP with the help of DataManager adaptors. This versatility makes it suitable for a wide range of applications, from simple static lists to complex enterprise data scenarios.

## Field configuration

The following table describes the field properties that can be mapped to customize how data is displayed and behaves within the ListView:

| Fields | Type | Description |
|------|------|-------------|
| id | string | Specifies the unique identifier attribute of list item, mapped from the dataSource. Used for item identification and selection operations. |
| text | string | Specifies the primary display text field for list items. This is the main content users will see for each item. |
| isChecked | string | Specifies the boolean field that determines the checked status of list item when checkboxes are enabled. |
| isVisible | string | Specifies the boolean field that controls the visibility state of individual list items. Hidden items are rendered in DOM. The visibility updated through display property as none through DOM element. |
| enabled | string | Specifies the boolean field that determines the enabled state of list items. Disabled items cannot be interacted with. |
| iconCss | string | Specifies the CSS class field for icons that will be displayed before the item text. Supports custom icon libraries and CSS classes. |
| child | string | Specifies the field containing child dataSource for nested list structures. Enables hierarchical data representation. |
| tooltip | string | Specifies the field containing tooltip text that appears on hover. Provides additional context for list items. |
| groupBy | string | Specifies the field used for categorizing and grouping list items. Items with the same groupBy value will be grouped together. |
| sortBy | string | Specifies the field used for sorting ListView data. Determines the order in which items are displayed. |
| htmlAttributes | string | Specifies the field containing custom HTML attributes as key-value pairs to be applied to individual list items. |

> When binding complex data to ListView, you should map the [`fields`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#fields) property correctly. Otherwise, the ListView properties remain as undefined or null, which can lead to rendering issues or unexpected behavior.

## Bind to local data

Local data can be bound to ListView in two primary ways, each suitable for different data structures and use cases.

### Array of simple data

ListView supports loading arrays of primitive data types like strings and numbers. In this scenario, both the **value** and **text** field represent the same data, making it ideal for simple lists like menus, tags, or basic item collections.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/data-binding-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/data-binding-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/data-binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/data-binding-cs1" %}

### Array of JSON data

ListView can generate list items from arrays of complex objects, providing greater flexibility for displaying structured data. To ensure proper rendering, you must map the appropriate object properties to the corresponding [`field`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#fields) properties.

In below example, role column has mapped with text field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/data-binding-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/data-binding-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/data-binding-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/data-binding-cs2" %}

## Bind to remote data

ListView supports to retrieve the data from remote data services with the help of DataManager component and Query property allows to fetch data and return it to ListView from the database.

In the below sample, displayed first 6 Products from Product table of NorthWind data service.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/data-binding-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/data-binding-cs3/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/data-binding-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/data-binding-cs3" %}