---
layout: post
title: Angular DataManager - Working in Offline Mode | Syncfusion
description: Use offline mode in Syncfusion Angular DataManager to load data once and process queries client-side.
platform: ej2-angular
control: Working in offline mode in Angular DataManager 
documentation: ug
domainurl: ##DomainURL##
---

# Offline mode with Angular DataManager

In Angular applications, remote data binding with DataManager typically sends a request to the server each time the `executeQuery` method is invoked. This repeated communication can increase latency and place additional load on the server.

To improve efficiency, DataManager provides an offline property. When enabled, all data is loaded during initialization, and subsequent query processing is handled on the client side. This eliminates unnecessary server calls, resulting in faster response times and reduced server overhead.

To enable offline mode in DataManager, set the `offline` property to `true` during initialization. This is demonstrated in the below code example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs19/src/app.component.ts %}
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
{% include code-snippet/data/getting-started/default-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs19" %}

> The loaded data will be cached in the **json** property of `DataManager`.

## When to use Offline mode

Offline mode is most effective when:

- The dataset is moderately sized and can be loaded during initialization.
- Data does not change frequently, reducing the risk of stale results.
- Client-side query processing provides a performance advantage.

## When to avoid Offline mode

Offline mode should be avoided in scenarios such as:

- Large datasets: Loading all records at once may cause performance issues in the browser.
- Frequently changing data: Cached data may become outdated quickly.
- Real-time requirements: Applications that depend on live or streaming data need server-side queries.
- Sensitive data: Storing all records on the client side may expose information unnecessarily.
