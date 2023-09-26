---
layout: post
title: Data binding in Angular List box component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular List box component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Angular List box component

The ListBox loads the data either from local data sources or remote data services using the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/list-box/#datasource) property. It supports the data type of `array` or `DataManager`.

| Fields | Type | Description |
|------|------|-------------|
| [`text`](https://ej2.syncfusion.com/angular/documentation/api/list-box/fieldSettingsModel/#text) |  `string` | Specifies the display text of each list item. |
| [`value`](https://ej2.syncfusion.com/angular/documentation/api/list-box/fieldSettingsModel/#value) |  `string` | Specifies the hidden data value mapped to each list item that should contain a unique value. |
| [`groupBy`](https://ej2.syncfusion.com/angular/documentation/api/list-box/fieldSettingsModel/#groupby) |  `string` | Specifies the category under which the list item has to be grouped. |
| [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/list-box/fieldSettingsModel/#iconcss) |  `string` | Specifies the iconCss class that needs to be mapped. |
| [`htmlAttributes`](https://ej2.syncfusion.com/angular/documentation/api/list-box/fieldSettingsModel/#htmlattributes) |  `string` | Allows additional attributes to configure the elements in various ways to meet the criteria. |

> When binding complex data to the ListBox, fields should be mapped correctly. Otherwise, the selected item remains undefined.

## Local Data

Local data can be represented by the following ways as described below.

### Array of string

The ListBox has support to load array of primitive data such as strings or numbers. Here, both value and text field acts as same.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listbox/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/listbox/getting-started-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listbox/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listbox/getting-started-cs2" %}

### Array of object

The ListBox can generate its list items through an array of object data. For this,
the appropriate columns should be mapped to the [`fields`](https://ej2.syncfusion.com/angular/documentation/api/list-box/#fields) property.

In the following example, `id` and `sports` column from complex data have been mapped to the `value` field and `text` field, respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listbox/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/listbox/getting-started-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listbox/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listbox/getting-started-cs3" %}

### Array of complex object

The ListBox can generate its list items through an array of complex data. For this,
the appropriate columns should be mapped to the [`fields`](https://ej2.syncfusion.com/angular/documentation/api/list-box/#fields) property.

In the following example, `Sports.Name` column from complex data have been mapped to the `text` field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listbox/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/listbox/getting-started-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listbox/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listbox/getting-started-cs4" %}

## Remote Data

The ListBox supports retrieval of data from remote data services with the help of [`DataManager`](https://ej2.syncfusion.com/documentation/data/getting-started/) component. The [`Query`](https://ej2.syncfusion.com/angular/documentation/api/list-box/#query) property is used to fetch data from the database and bind it to the ListBox.

The following sample displays the first 10 products from `Products` table of the `Northwind` Data Service.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listbox/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/listbox/getting-started-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listbox/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listbox/getting-started-cs5" %}