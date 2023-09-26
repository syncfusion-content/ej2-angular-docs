---
layout: post
title: Querying in Angular Data component | Syncfusion
description: Learn here all about Querying in Syncfusion Angular Data component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Querying 
documentation: ug
domainurl: ##DomainURL##
---

# Querying in Angular Data component

In this section, you will see in detail about how to build query using [`Query`](https://ej2.syncfusion.com/documentation/api/data/query/) class and consume
the data source.

## Specifying resource name using `from`

The [`from`](https://ej2.syncfusion.com/documentation/api/data/query/#from) method is used to specify the resource name or table name from where the data should be retrieved.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs12/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/getting-started/default-cs12/src/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/data/getting-started/default-cs12/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/getting-started/default-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs12" %}

## Projection using `select`

The [`select`](https://ej2.syncfusion.com/documentation/api/data/query/#select) method is used to select particular fields or columns from the data source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs13/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/getting-started/default-cs13/src/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/data/getting-started/default-cs13/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/getting-started/default-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs13" %}

## Eager loading navigation properties

You can use the [`expand`](https://ej2.syncfusion.com/documentation/api/data/query/#expand) method to eagerly load navigation properties. The navigation properties
values are accessed using appropriate field names separated by dot(.) sign.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/expand-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/expand-cs1/src/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/data/expand-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/expand-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/expand-cs1" %}

## Sorting

You can use the [`sortBy`](https://ej2.syncfusion.com/documentation/api/data/query/#sortby) method to perform sort operation in the
data source. Default sorting order is **ascending**. To change the sort order, either you can
specify the second argument of [`sortBy`](https://ej2.syncfusion.com/documentation/api/data/query/#sortby) as **descending** or use the
[`sortByDesc`](https://ej2.syncfusion.com/documentation/api/data/query/#sortbydesc) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs14/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/getting-started/default-cs14/src/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/data/getting-started/default-cs14/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/getting-started/default-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs14" %}

> Multi sorting can be performed by simply chaining the multiple `sortBy` methods.

## Filtering

You can use the [`where`](https://ej2.syncfusion.com/documentation/data/api-query.html#where) method to build filter criteria which allows you to get reduced view of
records. The [`where`](https://ej2.syncfusion.com/documentation/data/api-query.html#where) method can also be chained to form multiple filter criteria.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs15/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/getting-started/default-cs15/src/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/data/getting-started/default-cs15/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/getting-started/default-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs15" %}

### Filter Operators

Filter operators are generally used to specify the filter type. The various filter operators
supported by [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) is listed below.

* greaterthan
* greaterthanorequal
* lessthan
* lessthanorequal
* equal
* notequal
* startswith
* endswith
* contains

> These filter operators are used for creating filter query using
[`where`](https://ej2.syncfusion.com/documentation/api/data/query/#where) method and [`Predicate`](https://ej2.syncfusion.com/documentation/api/data/predicate/) class.

### Build complex filter criteria using `Predicate`

Sometimes chaining [`where`](https://ej2.syncfusion.com/documentation/api/data/query/#where) method is not sufficient to create very
complex filter criteria, in such cases we can use [`Predicate`](https://ej2.syncfusion.com/documentation/api/data/predicate/) class to create composite filter criteria.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs16/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/getting-started/default-cs16/src/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/data/getting-started/default-cs16/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/getting-started/default-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs16" %}

## Searching

You can use the [`search`](https://ej2.syncfusion.com/documentation/api/data/query/#search) method to create search criteria, it
differs from the filter in the way that search criteria will applied to all fields in the data
source whereas filter criteria will be applied to a particular field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs17/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/getting-started/default-cs17/src/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/data/getting-started/default-cs17/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/getting-started/default-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs17" %}

> You can search particular fields by passing the field name collection in the second argument of [`search`](https://ej2.syncfusion.com/documentation/api/data/query/#search) method.

## Grouping

[`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) allow you to group records by category. The
[`group`](https://ej2.syncfusion.com/documentation/api/data/query/#group) method is used to add group query.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/group-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/group-cs1/src/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/data/group-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/group-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/group-cs1" %}

> Multiple grouping can be done by simply chaining the [`group`](https://ej2.syncfusion.com/documentation/api/data/query/#group) method.

## Paging

You can query paged data using [`page`](https://ej2.syncfusion.com/documentation/data/api-query.html#page) method. This allow you to query
particular set of records based on the page size and index.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/getting-started/default-cs18/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/getting-started/default-cs18/src/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/data/getting-started/default-cs18/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/getting-started/default-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/getting-started/default-cs18" %}

## Aggregation

The [`aggregate`](https://ej2.syncfusion.com/react/documentation/data/querying/#aggregation) method allows you to get aggregated value for a field based on the type.

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
{% include code-snippet/data/aggregate-cs1/src/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/data/aggregate-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/aggregate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/aggregate-cs1" %}

## Hierarchical query

You can use the [`hierarchy`](https://ej2.syncfusion.com/documentation/api/data/query/#hierarchy) method to build nested query.
The hierarchical queries are commonly required when you use foreign key binding.

The [`foreignKey`](https://ej2.syncfusion.com/documentation/api/data/query/#foreignkey) method is used to specify the key field of the
foreign table and the second argument of the [`hierarchy`](https://ej2.syncfusion.com/documentation/api/data/query/#hierarchy) method
accepts a selector function which selects the records from the foreign table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/data/hierarchy-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/data/hierarchy-cs1/src/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/data/hierarchy-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/data/hierarchy-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/data/hierarchy-cs1" %}