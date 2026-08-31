---
layout: post
title: Columns in Angular Query Builder UI | Syncfusion
description: Define Angular Query Builder UI columns with field, label, operators, format, step, and validation to control how rules render and behave.
platform: ej2-angular
control: Columns 
documentation: ug
domainurl: ##DomainURL##
---

# Columns in Angular Query Builder UI

Column definitions specify the schema for the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#datasource) and control how the Query Builder renders and processes data. All Query Builder operations—such as creating/deleting conditions and groups—are based on these definitions. The [`field`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsmodel#field) property maps columns to data source values.

> If the column `field` property is not specified, the corresponding column values will be empty in the Query Builder.

## Auto generation

The [`columns`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#columns) are automatically generated when the [`columns`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#columns) declaration is empty or undefined while initializing the query builder. All the columns in the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#datasource) are bound as the query builder columns.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/filtering-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs1" %}

> When columns are auto-generated, the column type is inferred from the first record of the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#datasource). If the first record contains mixed-type or null values for a field, the inferred type may not match the intended type, so explicitly defining the columns is recommended for such data sources.

## Labels

By default, the Query Builder displays the column label from the [`field`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsmodel#field) property. To customize the label, set the [`label`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsModel#label) property.

```typescript
<e-column field="EmployeeID" label="Employee ID" type="number"></e-column>
```

## Operators

Define available operators for each column using the [`operators`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsModel#operators) property. The following table lists all available operators and their supported data types:

| Operator | Description | Supported Types |
| ------------ | ----------------------- | ------------------ |
| startswith | Checks whether the value begins with the specified value. | String |
| endswith | Checks whether the value ends with the specified value. | String |
| contains | Checks whether the value contains the specified value. | String |
| equal | Checks whether the value is equal to the specified value. | String, Number, Date, Boolean |
| notequal | Checks whether the value is not equal to the specified value. | String, Number, Date, Boolean |
| greaterthan | Checks whether the value is greater than the specified value. | Date, Number |
| greaterthanorequal | Checks whether the value is greater than or equal to the specified value. | Date, Number |
| lessthan | Checks whether the value is less than the specified value. | Date, Number |
| lessthanorequal | Checks whether the value is less than or equal to the specified value. | Date, Number |
| between | Checks whether the value is between two specified values. | Date, Number |
| notbetween | Checks whether the value is not between two specified values. | Date, Number |
| in | Checks whether the value is one of the specified values. | String, Number |
| notin | Checks whether the value is not in the specified values. | String, Number |
| isempty | Checks whether the value is empty. | String |
| isnotempty | Checks whether the value is not empty. | String |
| isnull | Checks whether the value is null. | String, Number, Date, Boolean |
| isnotnull | Checks whether the value is not null. | String, Number, Date, Boolean |

For the `between` and `notbetween` operators, the rule value must be an array of two values specifying the lower and upper bounds (for example, `[10, 100]` or `['2022-01-01', '2022-12-31']`).

To restrict the operators available for a specific column, define the `operators` array on that column:

```typescript
<e-column field="TaskID" label="Task ID" type="number" [operators]="['equal', 'notequal', 'greaterthan']"></e-column>
```

## Step

The Query Builder allows you to set the step value for numeric columns, which controls the increment of the numeric textbox editor used to enter the value. Use the [`step`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsModel#step) property to set the step value for numeric columns.

```typescript
<e-column field="TaskID" label="Task ID" type="number" [step]="2"></e-column>
```

## Format

The Query Builder formats date and number values. Use the [`format`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsmodel#format) property to format date and number values. For date columns, the value uses standard date format tokens (for example, `dd/MM/yyyy`, `yyyy-MM-dd`, or `MM/dd/yyyy`). For numeric columns, the value uses numeric format strings (for example, `n2` for two decimal places, `c2` for currency with two decimal places, or `p0` for a percentage with no decimal places).

```typescript
<e-column field="HireDate" label="Hire Date" type="date" format="dd/MM/yyyy"></e-column>
```

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/filtering-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs2" %}

## Validations

Validation allows you to validate the conditions and it displays errors for invalid fields while using the `validateFields` method. To enable validation in the Query Builder, set the [`allowValidation`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#allowvalidation) property to `true`. Column fields are validated after setting [`allowValidation`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#allowvalidation) to `true`, so you should manually configure the validation for the Operator and Value fields through the [`validation`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsModel#validation) property.

The `validation` object is configured per column and supports the following properties:

| Property | Type | Description |
| --- | --- | --- |
| `isRequired` | boolean | Marks the Operator and Value fields as required for the column. |
| `min` | number | Sets the minimum allowed value for numeric columns. |
| `max` | number | Sets the maximum allowed value for numeric columns. |

```typescript
public validateRule: { [key: string]: boolean } = { isRequired: true };
```

```html
<e-column field="EmployeeID" label="Employee ID" type="number" validation="validateRule"></e-column>
```

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/filtering-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs3" %}

> Set [`isRequired`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/validation#isrequired) validation for `Operator` and `Value` fields.

> Set [`max`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/validation#max), [`min`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/validation#min) values for number values.
