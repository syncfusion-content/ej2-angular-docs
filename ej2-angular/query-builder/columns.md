---
layout: post
title: Columns in Angular Query builder component | Syncfusion
description: Learn here all about Columns in Syncfusion Angular Query builder component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Columns 
documentation: ug
domainurl: ##DomainURL##
---

# Columns in Angular Query builder component

Column definitions define the schema for the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#datasource) and control how the Query Builder renders and processes data. All Query Builder operations—such as creating/deleting conditions and groups—are based on these definitions. The [`field`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsModel/#field) property maps columns to data source values.

> If the column `field` property is not specified, the corresponding column values will be empty in the Query Builder.

## Auto generation

The [`columns`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#columns) are automatically generated when the [`columns`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#columns) declaration is empty or undefined while initializing the query builder. All the columns in the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#datasource) are bound as the query builder columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/filtering-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs1" %}

> When columns are auto-generated, the column type will be determined from the first record of the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#datasource).

## Labels

By default, the Query Builder displays the column label from the [`field`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsModel/#field) property. To customize the label, set the [`label`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsModel/#label) property.

## Operators

Define available operators for each column using the [`operators`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsModel/#operators) property. The following table lists all available operators and their supported data types:

| Operators | Description | Supported Types |
| ------------ | ----------------------- | ------------------ |
| startswith  | Checks whether the value begins with the specified value. | String |
| endswith  | Checks whether the value ends with the specified value. | String |
| contains | Checks whether the value contains the specified value. | String |
| equal | Checks whether the value is equal to the specified value. | String Number Date Boolean |
| notequal | Checks whether the value is not equal to the specified value. | String Number Date Boolean |
| greaterthan | Checks whether the value is greater than the specified value. | Date Number |
| greaterthanorequal | Checks whether a value is greater than or equal to the specified value. | Date Number |
| lessthan | Checks whether the value is less than the specified value.| Date Number |
| lessthanorequal | Checks whether the value is less than or equal to the specified value. | Date Number |
| between | Checks whether the value is between the two-specific value. | Date  Number |
| notbetween | Checks whether the value is not between the two-specific value. | Date  Number |
| in | Checks whether the value is one of the specific values. | String  Number |
| notin | Checks whether the value is not in the specific values. | String  Number |

## Step

The Query Builder allows you to set the step values to the number fields. So that you can easily access the numeric textbox. Use the [`step`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsModel/#step) property, to set the step value for number values.

## Format

The Query Builder formats date and number values. Use the [`format`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsModel/#format) property to format date and number values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/filtering-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs2" %}

## Validations

Validation allows you to validate the conditions and it display errors for invalid fields while using  the `validateFields` method.  To enable validation in the query builder , set the allowValidation to true. Column fields are validated after setting [`allowValidation`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#allowvalidation) as to true. So, you should manually configure the validation for Operator and, Value fields through [`validation`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsModel/#validation).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/filtering-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs3" %}

> Set [`isRequired`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/validation/#isrequired) validation for `Operator` and `Value` fields.

> Set [`max`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/validation/#max), [`min`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/validation/#min) values for number values.
