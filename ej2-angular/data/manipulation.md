---
layout: post
title: Manipulation in Angular Data component | Syncfusion
description: Learn here all about Manipulation in Syncfusion Angular Data component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Manipulation 
documentation: ug
domainurl: ##DomainURL##
---

# Manipulation in Angular Data component

In this section, you will see in detail about how to manipulate data using [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/). The [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) can create, update and delete records either in local data source or remote data source.

Each data sources uses different way in handling the CRUD operations and hence [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) uses data adaptors to manipulate data that can be understood by a particular data source.

## Insert

The [`insert`](https://ej2.syncfusion.com/documentation/api/data/dataManager/#insert) method of [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) is used to add new record to the data source. For remote data source, the new record will be send along with the request to the server.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/editing-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/editing-cs1/src/app.template.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/editing-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/editing-cs1" %}

> In remote data sources, when the primary key field is an identity field, then it is advised to return the created data in the response.

## Update

The [`update`](https://ej2.syncfusion.com/documentation/api/data/dataManager/#update) method of `DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) is used to modify/update a record in the data source. For remote data source, the modified record will be send along with the request to the server.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/editing-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/editing-cs2/src/app.template.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/editing-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/editing-cs2" %}

> Primary key name is required by the [`update`](https://ej2.syncfusion.com/documentation/api/data/dataManager/#update) method to find the record to be updated.

## Remove

The [`remove`](https://ej2.syncfusion.com/documentation/api/data/dataManager/#remove) method of [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) is used to remove a record from the data source. For remote data source, the record details such as primary key and data will be send along with the request to the server.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/editing-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/editing-cs3/src/app.template.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/editing-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/editing-cs3" %}

> Primary key name and its value are required to find the record to be removed.

## Batch Edit Operation

[`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) supports batch processing for the CRUD operations. You can use the [`saveChanges`](https://ej2.syncfusion.com/documentation/api/data/dataManager/#savechanges) method to batch the edit operation. For remote data source, requests to add, remove and change are handled altogether at a time rather than passing the request separately for each operation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/batchediting-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/batchediting-cs1/src/app.template.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/batchediting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/batchediting-cs1" %}