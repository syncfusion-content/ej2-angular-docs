---
layout: post
title: Angular Data - JSON Adaptors | Syncfusion
description: Use JsonAdaptor in Syncfusion Angular DataManager for fast client-side operations on JavaScript arrays no server required.
control: Adaptors 
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# JSON Adaptors in Angular DataManager

The `JsonAdaptor` is a highly efficient and versatile adaptor designed for performing data operations directly on in‑memory JavaScript objects and arrays. The `JsonAdaptor` eliminates the need for remote servers or complex data services, making the adaptor ideal for applications that rely heavily on local datasets. Whether data is sourced from static JSON files, dynamically generated collections, or client‑side state management systems, the `JsonAdaptor` offers a seamless and optimized way to manage and manipulate data.

With built‑in support for essential data operations such as filtering, sorting, grouping, searching, paging, and CRUD the `JsonAdaptor` provides a powerful abstraction layer that simplifies complex data transformations. Instead of manually writing data-handling logic, the `JsonAdaptor` leverages the `DataManager` engine to execute operations efficiently and consistently.

By combining performance with simplicity, the `JsonAdaptor` helps developers reduce boilerplate code and maintain a clean, predictable workflow. The adaptor proves particularly valuable for applications like dashboards, offline-first systems, data-heavy UI components, or any scenario where smooth local processing is critical.

## Key advantages of the JsonAdaptor

- **Seamless local data processing:** Operates entirely on JavaScript arrays without additional server calls, ensuring lightning‑fast data manipulation.

- **Built‑in support for advanced operations:** Automatically handles filtering, sorting, grouping, paging, aggregates, and other data transformations with minimal setup.

- **Ideal for client-side data handling:** Perfect for offline scenarios, demo/sample apps, static data files, or applications relying on local state stores.

- **Reduces development effort:** Removes the burden of writing repetitive data-processing logic, allowing developers to focus on UI and application behavior.

- **Consistent results across components:** Works seamlessly with Syncfusion components (`Grid`, `ListView`, `Charts`, `Dropdowns`, etc.), ensuring uniform behavior across the application.

## When to use JsonAdaptor?

Use `JsonAdaptor` when the application:

- Works primarily with client-side data.
- Requires fast, local operations without network latency.
- Uses data from JSON files, static assets, or generated datasets.
- Needs rapid prototyping or offline/low-network environments.
- Must apply complex filters, queries, or transformations on large arrays.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs1/src/app.component.ts %}
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
{% include code-snippet/data/getting-started/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs1" %}

## See also

- [Customize data handling](./custom-adaptor) 
- [Connect to custom REST APIs](./url-adaptor)
- [Connect to GraphQL services](./graphql-adaptor)
- [Connect to OData v4 services](./odatav4-adaptor)
- [Hybrid data binding](./remote-save-adaptor)
- [Connect to Web Method services](./web-method-adaptor)
- [Connect to ASP.NET Web API](./webapi-adaptor)
- [Adding custom headers](../how-to#adding-custom-headers)