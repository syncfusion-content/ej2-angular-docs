---
layout: post
title: Label filtering in Angular Pivotview component | Syncfusion
description: Learn here all about Label filtering in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Label filtering 
documentation: ug
domainurl: ##DomainURL##
---

# Label filtering in Angular Pivotview component

Label filtering allows you to view the pivot table with particular records of a field based on headers. Label filtering can be enabled by setting the `allowLabelFilter` property to **true**. The following are the three different types of available label filtering:

* Text or label filtering.
* Date filtering.
* Number filtering.

## Label filtering through UI

Label filtering can be performed through the UI option available in the [`grouping bar`](./grouping-bar) and [`field list`](./field-list) at runtime.

## Text or label filtering through code

Text or label filtering allows you to view the pivot table with particular records of a field based on text. For example, to show only the groups for France, apply the text **france** with filter operator **Equals** on the country field.

Label filtering can be configured using the `filterSettings` option through code-behind. The settings required to filter at initial rendering are:

* `name`: Sets the field name.
* `type`: Sets the filter type as **Label** to the field.
* `condition`: Sets the operator type such as equals, greater than, less than, etc.
* `value1`: Sets the start value.
* `value2`: Sets the end value. It is applicable only for the operator such as 'Between' and 'NotBetween'.

Operators that can be used in label filtering are:

| Operator | Description |
|------|-------------|
| Equals| Displays the pivot table that matches with the text.|
| DoesNotEquals| Displays the pivot table that does not match with the given text.|
| BeginWith| Displays the pivot table that begins with text.|
| DoesNotBeginWith| Displays the pivot table that does not begins with text.|
| EndsWith| Displays the pivot table that ends with text.|
| DoesNotEndsWith| Displays the pivot table that does not ends with text.|
| Contains| Displays the pivot table that contains text.|
| DoesNotContains| Displays the pivot table that does not contain text.|
| GreaterThan| Displays the pivot table when the text is greater.|
| GreaterThanOrEqualTo| Displays the pivot table when the text is greater than or equal.|
| LessThan| Displays the pivot table when the text is lesser.|
| LessThanOrEqualTo| Displays the pivot table when the text is lesser than or equal.|
| Between| Displays the pivot table that records between the start and end text.|
| NotBetween| Displays the pivot table that does not record between the start and end text.|

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs180/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs180/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs180" %}

## Date filtering through code

Date filtering allows you to view the pivot table with particular records of a field based on date. For example, to show only the groups for the year 2016, apply the value as **2016** with the filter operator **Equals** on the year field.

Date filtering can be configured using the `filterSettings` option through code-behind. The settings required to filter at initial rendering are:

* `name`: Sets the field name.
* `type`: Sets the filter type as **Date** to the field.
* `condition`: Sets the operator type such as equals, before, after, etc.
* `value1`: Sets the start date.
* `value2`: Sets the end date. It is applicable only for the operator such as 'Between' and 'NotBetween'.

Operators that can be used in date filtering are:

| Operator | Description |
|------|-------------|
| Equals| Displays the pivot table that matches with the given date.|
| DoesNotEquals| Displays the pivot table that does not match with the given date.|
| Before| Displays the records on the pivot table before to the given date.|
| BeforeOrEqualTo| Displays the records on the pivot table before or equal to the given date.|
| After| Displays the records on the pivot table after to the given date.|
| AfterOrEqualTo| Display the records on the pivot table after or equal to the given date.|
| Between| Displays the pivot table that records between the start and end dates.|
| NotBetween| Displays the pivot table that does not record between the start and end dates.|

> Date filtering option is enabled only when the field has **date** type `formatsettings`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs181/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs181/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs181" %}

## Number filtering through code

Number filtering allows you to view the pivot table with particular records of a field based on numbers. For example, to show only the groups less than the value 40000, apply the value as **40000** with filter operator **LessThan** on the amount field.

Number filtering can be configured using the `filterSettings` option through the code-behind. The settings required to filter at initial rendering are:

* `name`: Sets the field name.
* `type`: Sets the filter type as **Number** to the field.
* `condition`: Sets the operator type such as equals, greater than, less than, etc.
* `value1`: Sets the start value.
* `value2`: Sets the end value. It is applicable only for the operator such as 'Between' and 'NotBetween'.

Operators that can be used in date filtering are:

| Operator | Description |
|------|-------------|
| Equals| Displays the pivot table that matches with the number.|
| DoesNotEquals| Displays the pivot table that does not match with the given number.|
| GreaterThan| Displays the pivot table when the number is greater.|
| GreaterThanOrEqualTo| Displays the pivot table when the number is greater than or equal.|
| LessThan| Displays the pivot table when the number is lesser.|
| LessThanOrEqualTo| Displays the pivot table when the number is lesser than or equal.|
| Between| Displays the pivot table that records between start and end numbers.|
| NotBetween| Displays the pivot table that does not record between the start and end numbers.|

> Number filtering option is enabled only when the field contains the **number** format.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs182/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs182/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs182" %}

## See Also

* [Member Filtering](./member-filtering)
* [Value Filtering](./value-filtering)