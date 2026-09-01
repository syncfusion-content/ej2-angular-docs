---
layout: post
title: Operators in Angular Query Builder UI | Syncfusion
description: List of default and custom operators available in the Syncfusion Angular Query Builder UI, with the data types each one supports.
platform: ej2-angular
control: Operators
documentation: ug
domainurl: ##DomainURL##
---

# Operators in Angular Query Builder UI

Operators define the comparison logic applied between a rule's field and value when building query rules. The Query Builder automatically assigns default operators based on the column's data type, and you can also customize them per column. For details on how the column `type` determines the value editor and the default operator set, see [Columns](./columns).

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
| `notin` | Checks whether the value is not one of the specified values. | String, Number |
| `isempty` | Checks whether the value is empty. | String |
| `isnotempty` | Checks whether the value is not empty. | String |
| `isnull` | Checks whether the value is null. | String, Number, Date, Boolean |
| `isnotnull` | Checks whether the value is not null. | String, Number, Date, Boolean |

> The `between` and `notbetween` operators require the rule value to be an array of two values specifying the lower and upper bounds (for example, `[10, 100]` or `['2022-01-01', '2022-12-31']`). The `in` and `notin` operators require the rule value to be an array of the values to match (for example, `['Davolio', 'Buchanan']`).

## Custom operators

Restrict or extend the available operators for a specific column using the [`operators`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsmodel#operators) property. Each operator entry requires a `value` (the operator key) and a `key` (the display label shown in the operator dropdown), and each entry follows the [`OperatorsModel`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/operatorsModel) shape. Any built-in operator key (for example, `startswith`, `between`, or `equal`) can be used as a `value` with a custom display `key`, and the custom operator entries fully replace the default operators for that column.

> The custom operators should match the column's data type. Selecting operators that are not valid for the column `type` (for example, using `startswith` on a `number` column) may cause the operator or value editor to render incorrectly.

Declare the operator entries as a component class property and bind them through the `[operators]` input:

```typescript
public employeeOperators: { value: string; key: string }[] = [
    { value: 'equal', key: 'Equal' },
    { value: 'notequal', key: 'Not Equal' },
    { value: 'in', key: 'In' },
    { value: 'notin', key: 'Not In' }
];
```

```html
<e-column field="EmployeeID" label="Employee ID" type="number" [operators]="employeeOperators"></e-column>
```

In the following example, the `EmployeeID` number column is restricted to only **Equal**, **Not Equal**, **In**, and **Not In** operators instead of showing all default number operators.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/filtering-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs2" %}

## See also

* [Columns](./columns)
* [Filtering](./filtering)
* [Data binding](./data-binding)
* [Model binding](./model-binding)
