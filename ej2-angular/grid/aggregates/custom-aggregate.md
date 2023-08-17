---
layout: post
title: Custom aggregate in Angular Grid component | Syncfusion
description: Learn here all about Custom aggregate in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Custom aggregate in Angular Grid component

The custom aggregate feature in Syncfusion's Angular Grid component allows you to calculate aggregate values using your own aggregate function. This feature can be useful in scenarios where the built-in aggregate functions do not meet your specific requirements. To use the custom aggregate option, follow the steps below:

* Set the [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#type) property to **Custom** in the [e-aggregate -> e-column](https://helpej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/).

* Provide your custom aggregate function in the [customAggregate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#CustomAggregate) property.

The custom aggregate function will be invoked differently for total and group aggregations:

**Total Aggregation:** The custom aggregate function will be called with the whole dataset and the current aggregate column object as arguments.

**Group Aggregation:** The custom aggregate function will be called with the current group details and the aggregate column object as arguments.

Here's an example that demonstrates how to use the custom aggregate feature in the Angular Grid component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-custom-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/grid/aggregates-custom-cs1/app/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-custom-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-custom-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-custom-cs1" %}

> To access the custom aggregate value inside template, use the key as **Custom**

## Show the count of distinct values in aggregate row

You can calculate the count of distinct values in an aggregate row by using custom aggregate functions. By specifying the [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#type) as **Custom** and providing a custom aggregate function in the [customAggregate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#CustomAggregate) property, you can achieve this behavior.

Here's an example that demonstrates how to show the count of distinct values for the **ShipCountry** column using a custom aggregate.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-custom-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% include code-snippet/grid/aggregates-custom-cs2/app/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-custom-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-custom-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-custom-cs2" %}

> To display the aggregate value of the current column in another column, you can use the [columnName](https://helpej2.syncfusion.com/documentation/api/grid/aggregateColumn/#columnname) property. If the `columnName` property is not defined, the field name value will be assigned to the `columnName` property.
