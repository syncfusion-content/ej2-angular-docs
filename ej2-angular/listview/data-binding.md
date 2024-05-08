---
layout: post
title: Data binding in Angular Listview component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular Listview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Angular Listview component

ListView provides the option to load the data either from local data sources or remote data services.
This can be done through dataSource property which supports the data type of array or through DataManager.

ListView supports different kind of data services such as OData, OData V4, Web API and
data formats like XML, JSON, JSONP with the help of DataManager Adaptors.

| Fields | Type | Description |
|------|------|-------------|
| id | string | Specifies ID attribute of list item, mapped in dataSource. |
| text | string | Specifies list item display text field. |
| isChecked | string | Specifies checked status of list item. |
| isVisible | string | Specifies visibility state of list item. |
| enabled | string | Specifies enabled state of list item. |
| iconCss | string | Specifies the icon class of each list item which will be add before to inner text. |
| child | string | Specifies child dataSource fields. |
| tooltip | string | Specifies tooltip title text field. |
| groupBy | string | Specifies category of each list item. |
| sortBy | string | Specifies sorting field, which is used to sort the listview data. |
| htmlAttributes | string | Specifies list item html attributes field. |

> When complex data bind to ListView, you should map the fields properly. Otherwise, the ListView properties remain as undefined or null.

## Bind to local data

Local data represents in two ways, which are described below.

* Array of simple data
* Array of JSON data.

### Array of simple data

ListView supports to load the array of primitive data like string and numbers. Here, both value and text field act as same.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/data-binding-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/data-binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/data-binding-cs1" %}

### Array of JSON data

ListView can generate its list items through an array of complex data. To get it work properly, you should map the appropriate columns to field property.

In below example, role column has mapped with text field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/data-binding-cs2/src/app.component.ts %}
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

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/data-binding-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/data-binding-cs3" %}