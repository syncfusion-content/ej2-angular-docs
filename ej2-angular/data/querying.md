---
layout: post
title: Angular DataManager - Querying | Syncfusion
description: Learn here all about Querying in Syncfusion Angular DataManager for filtering, sorting, paging, searching, grouping, aggregation, projection, expand, and hierarchical data.
control: Querying 
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Querying in Angular DataManager

The `Query` class in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular DataManager is used to build structured queries that interact with a data source. The queries define operations such as filtering, sorting, paging, and grouping, making it easier to retrieve and manipulate data in a consistent way.

By combining DataManager with the `Query` class, data operations can be executed either locally or against a remote service, depending on the configuration. This approach ensures that data handling remains efficient and flexible across different scenarios.

Key capabilities of `Query` class:
- **Filtering**: Retrieve records that match specific conditions.
- **Sorting**: Arrange records in ascending or descending order.
- **Paging**: Limit the number of records returned at once.
- **Grouping**: Organize records into logical categories.

## Specifying resource name using `from`

The `Query` class allows defining the source from which data should be retrieved. The `from` method specifies the resource name, such as a table or endpoint, and sets the context for all subsequent query operations. Once the resource is defined, filtering, sorting, paging, and other operations can be applied seamlessly to that target source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs12/src/app.component.ts %}
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
{% include code-snippet/data/getting-started/default-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs12" %}

## Projection using `select`

The `select` method in the `Query` class is used to project specific fields from a data source. Instead of retrieving all columns, select allows choosing only the required fields. This reduces the amount of data returned, minimizes payload size, and improves performance by limiting unnecessary information.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs13/src/app.component.ts %}
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
{% include code-snippet/data/getting-started/default-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs13" %}

## Loading related data with `expand`

The `expand` method in the `Query` class is used to include related records when retrieving data. This technique, known as eager loading, ensures that navigation properties are fetched along with the main dataset. By expanding relationships, hierarchical or associated data can be accessed directly using dot‑separated field notation, making complex data retrieval more efficient.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/expand-cs1/src/app.component.ts %}
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
{% include code-snippet/data/expand-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/expand-cs1" %}

## Sorting

The `sortBy` method in the `Query` class arranges records in "ascending" order by default, while `sortByDesc` applies "descending" order. Alternatively, the descending parameter in sortBy can be used to specify sort direction. These methods enable precise control over data ordering based on selected fields.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs14/src/app.component.ts %}
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
{% include code-snippet/data/getting-started/default-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs14" %}

> Multi sorting can be performed by simply chaining the multiple `sortBy` methods.

## Filtering

The `where` method in the `Query` class defines filter conditions to retrieve records that match specific criteria. Multiple filters can be combined using chainable syntax, enabling precise and efficient queries for complex scenarios.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs15/src/app.component.ts %}
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
{% include code-snippet/data/getting-started/default-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs15" %}

### Filter Operators

Filter operators are generally used to specify the filter type. The various filter operators supported by DataManager is listed below.

* greaterthan
* greaterthanorequal
* lessthan
* lessthanorequal
* equal
* notequal
* startswith
* endswith
* contains

> These filter operators are used for creating filter query using `where` method and `Predicate` class.

### Complex filter criteria using `Predicate`

The `Predicate` class enables advanced filtering by combining multiple conditions using logical operators like AND and OR. It offers a structured approach to building complex queries beyond simple chaining, supporting powerful and flexible data filtering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs16/src/app.component.ts %}
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
{% include code-snippet/data/getting-started/default-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs16" %}

## Searching

The `search` method in the `Query` class  performs a global search by applying a keyword across all fields in the dataset. It retrieves records with matches in any column, enabling broad and efficient data exploration beyond field‑specific filtering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs17/src/app.component.ts %}
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
{% include code-snippet/data/getting-started/default-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs17" %}

> To perform a search on specific fields, provide an array of field names as the second argument to the [search](https://ej2.syncfusion.com/documentation/api/data/query/#search) method.

## Grouping

The `group` method in the `Query` class organizes records into logical categories based on specified fields. This enables hierarchical structuring of data, making it easier to aggregate and present related records together. When combined with the DataManager, grouping supports efficient data analysis and visualization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/group-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="group.component.ts" %}
{% include code-snippet/data/group-cs1/src/group.component.ts %}
{% endhighlight %}

{% highlight html tabtitle="app.template.html" %}
{% raw %}

<table class='e-table' >
    <tr>
        <th>Order ID</th>
        <th>Customer ID</th>
        <th>Employee ID</th>
    </tr>
    <tbody group *ngFor="let item of items" [data]='item' ></tbody>
</table>

{% endraw %}
{% endhighlight %}


{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/group-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/group-cs1" %}

> Multiple grouping can be done by simply chaining the `group` method.

## Paging

The `page` method in the `Query` class retrieves records based on a specified page index and page size. This approach divides large datasets into smaller segments, improving performance and reducing memory consumption by loading only the required portion of data at a time.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs18/src/app.component.ts %}
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
{% include code-snippet/data/getting-started/default-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs18" %}

## Aggregation

The `aggregate` method in the `Query` class computes statistical summaries such as sum, average, count, minimum, and maximum for specified fields within a dataset. This enables concise metric derivation, supporting analytical evaluation and reporting without requiring manual calculations.

The built-in aggregate types are,

* sum
* average
* min
* max
* count
* truecount
* falsecount

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/aggregate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight html tabtitle="app.template.html" %}
{% raw %}

<table class='e-table'>
    <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
    <tr *ngFor="let item of items">
        <td>{{item.OrderID}}</td><td>{{item.CustomerID}}</td><td>{{item.EmployeeID}}</td>
    </tr>
    <tr><td></td><td></td><td>Min: {{min}}</td></tr>
</table>

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/aggregate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/aggregate-cs1" %}
