---
layout: post
title: Data binding in Angular Data component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular Data component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Data Binding in Angular DataManager

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular DataManager enables efficient data management in Angular applications. It supports both RESTful JSON data services binding and local JavaScript object array binding, providing flexibility to handle and manipulate data.

Data binding is the process of connecting Syncfusion Angular components with data sources, allowing the UI to reflect changes in the data automatically. [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) simplifies this process by providing seamless integration with Angular components, enabling efficient data binding without unnecessary code.

## Local data binding

Local data binding allows to bind [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) directly to an array of JavaScript objects stored within the application. This approach is simple and efficient for small datasets or static data that does not need to be fetched from a server.

DataManager initialization enables binding local data by assigning the array of JavaScript objects to the `json` property or passing them to the constructor during instantiation. Once initialized, the array of JavaScript objects becomes the datasource for `DataManager`, enabling seamless querying and data manipulation. Follow these steps to bind local data using Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager`:

1. Define a local array of objects.
2. Initialize DataManager with the `json` property set to that array.
3. Use the `executeLocal` method of DataManager to run queries and perform data operations directly on local datasets.

The following example demonstrates how to bind JSON data using the [executeLocal](https://ej2.syncfusion.com/documentation/api/data/dataManager#executelocal) method of `DataManager`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight html tabtitle="app.template.html" %}
{% raw %}

<table class='e-table'>
    <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
    <tr *ngFor="let item of items">
        <td>{{item.OrderID}}</td><td>{{item.CustomerID}}</td><td>{{item.EmployeeID}}</td>
    </tr>
</table>

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/getting-started/default-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs4" %}

## Remote data binding

Remote data binding is particularly useful in scenarios where large datasets need to be fetched from a server, real-time data updates are required, or data needs to be accessed from an external API or database.

Follow these steps to bind remote data using Syncfusion<sup style="font-size:70%">&reg;</sup> `DataManager`:

1. Start by creating an instance of `DataManager` and assign the service endpoint URL to the `url` property.

2. Use the [executeQuery](https://ej2.syncfusion.com/documentation/api/data/dataManager#executequery) method to send a [query](https://ej2.syncfusion.com/documentation/api/data/query) to the server and fetch data in JSON format.

3. After calling `executeQuery`, the DataManager waits for the server response, converts it into a JSON format, and returns the data to the UI.

The following example demonstrates how to bind JSON data using the `executeQuery` method of `DataManager`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% raw %}

<table class='e-table'>
    <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
    <tr *ngFor="let item of items">
        <td>{{item.OrderID}}</td><td>{{item.CustomerID}}</td><td>{{item.EmployeeID}}</td>
    </tr>
</table>

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/getting-started/default-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs5" %}

> - The queried data will not be cached locally unless offline mode is enabled.
> - DataManager is directly bound to Syncfusion components such as the Grid through the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid#datasource) property rather than using `executeQuery`. Refer to the Grid data‑binding [documentation](https://ej2.syncfusion.com/angular/documentation/grid/data-binding/data-binding).

## See Also

* [Binding with OData service](../data/adaptors#odata-adaptor)
* [Binding with ODataV4 service](../data/adaptors#odatav4-adaptor)
* [Binding with Web API](../data/adaptors#web-api-adaptor)
* [How to write custom adaptor](../data/adaptors#customAdaptor)
* [How to work in offline mode](./how-to#work-in-offline-mode)
* [How to send additional parameters](./how-to#sending-additional-parameters-to-server)
* [How to add custom request headers](./how-to#adding-custom-headers)