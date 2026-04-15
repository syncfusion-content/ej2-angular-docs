---
layout: post
title: Angular DataManager - Sending Additional Parameters to Server | Syncfusion
description: Pass additional custom parameters to the server with Syncfusion Angular DataManager using addParams method.
platform: ej2-angular
control: Sending additional parameters to server in Angular DataManager 
documentation: ug
domainurl: ##DomainURL##
---

# Sending additional parameters to server with Angular DataManager

In Angular applications, when working with remote data sources, it's often necessary to pass additional parameters to the server to customize the data retrieval process. These parameters could include filters, sorting criteria, or any other information required for server-side processing. 

The Syncfusion<sup style="font-size:70%">&reg;</sup> [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) provides a convenient method for including custom parameters in data requests, allowing for enhanced server-side processing. By utilizing the [addParams](https://ej2.syncfusion.com/documentation/api/data/query/addparams) method of the [query](https://ej2.syncfusion.com/documentation/api/data/query) class, helps to seamlessly integrate additional information into the data requests.

In the following example, the top 15 records of the service are displayed in the table using the `addParams` method of `query` class.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs11/src/app.component.ts %}
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
{% include code-snippet/data/getting-started/default-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs11" %}
