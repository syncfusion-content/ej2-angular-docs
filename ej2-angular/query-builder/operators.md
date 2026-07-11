---
layout: post
title: Operators in Angular Query builder component | Syncfusion
description: Learn here all about Operators in Syncfusion Angular Query builder component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Operators
documentation: ug
domainurl: ##DomainURL##
---

# Operators in Angular Query builder component

Operators define the comparison logic applied between a column's field and its value when building query rules. The Query Builder automatically assigns default operators based on the column's data type, and you can also customize them per column.

## Default operators

The following table lists all built-in operators, their descriptions, and the data types they support:

| Operator | Description | Supported Types |
| -------- | ----------- | --------------- |
| `startswith` | Checks whether the value begins with the specified value. | String |
| `endswith` | Checks whether the value ends with the specified value. | String |
| `contains` | Checks whether the value contains the specified value. | String |
| `equal` | Checks whether the value is equal to the specified value. | String, Number, Date, Boolean |
| `notequal` | Checks whether the value is not equal to the specified value. | String, Number, Date, Boolean |
| `greaterthan` | Checks whether the value is greater than the specified value. | Number, Date |
| `greaterthanorequal` | Checks whether the value is greater than or equal to the specified value. | Number, Date |
| `lessthan` | Checks whether the value is less than the specified value. | Number, Date |
| `lessthanorequal` | Checks whether the value is less than or equal to the specified value. | Number, Date |
| `between` | Checks whether the value is between two specific values. | Number, Date |
| `notbetween` | Checks whether the value is not between two specific values. | Number, Date |
| `in` | Checks whether the value is one of the specified values. | String, Number |
| `notin` | Checks whether the value is not among the specified values. | String, Number |

## Custom operators

Restrict the available operators for a specific column using the [`operators`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsmodel#operators) property. Each operator entry requires a `value` (operator key) and a `key` (display label).

In the following example, the `EmployeeID` number column is restricted to only **Equal**, **Not Equal**, **In**, and **Not In** operators instead of showing all default number operators.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/filtering-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/query-builder/filtering-cs2" %}
