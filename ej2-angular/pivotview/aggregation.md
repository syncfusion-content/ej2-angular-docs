---
layout: post
title: Aggregation in Angular Pivotview component | Syncfusion
description: Learn here all about Aggregation in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Aggregation 
documentation: ug
domainurl: ##DomainURL##
---

# Aggregation in Angular Pivotview component

> This feature is applicable only for the relational data source.

End users can perform calculations on groups of values (specifically for value fields placed in the value axis) by using different aggregation types. By default, values are combined by summing them. Additional aggregation types are described below.

> Numeric fields support all aggregation types listed below, except **CalculatedField**. Fields of type string, date, datetime, boolean, and similar types support only **Count** and **DistinctCount** aggregation.

| Operator | Description |
|------|-------------|
| Sum| Displays the total sum for the selected field values.|
| Product| Displays the product of the selected field values.|
| Count| Displays the number of records for the selected field.|
| DistinctCount| Displays the number of unique records for the selected field.|
| Min| Displays the minimum value for the selected field.|
| Max| Displays the maximum value for the selected field.|
| Avg| Displays the average (mean) of the selected field values.|
| Median| Displays the median value for the selected field.|
| Index| Displays the index value for the selected field data.|
| PopulationStDev| Displays the standard deviation of the population for the selected field.|
| SampleStDev| Displays the sample standard deviation for the selected field.|
| PopulationVar| Displays the variance of the population for the selected field.|
| SampleVar| Displays the sample variance for the selected field.|
| RunningTotals| Displays the running total for the selected field values.|
| DifferenceFrom| Displays the pivot table values with difference from the value of the base item in the base field.|
| PercentageOfDifferenceFrom| Displays the pivot table values with percentage difference from the value of the base item in the base field.|
| PercentageOfGrandTotal| Displays the pivot table values with percentage of grand total of all values.|
| PercentageOfColumnTotal| Displays the pivot table values in each column with percentage of total values for the column.|
| PercentageOfRowTotal| Displays the pivot table values in each row with percentage of total values for the row.|
| PercentageOfParentTotal| Displays the pivot table values with percentage of total of all values based on selected field.|
| PercentageOfParentColumnTotal| Displays the pivot table values with percentage of its parent total in each column.|
| PercentageOfParentRowTotal| Displays the pivot table values with percentage of its parent total in each row.|
| CalculatedField| Displays the pivot table with calculated field values. It allows user to create a new calculated field alone.|

## Assigning aggregation type for value fields through API

For each value field, the aggregation type can be set using the property [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldoptionsmodel#type) in [`values`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#values). Meanwhile, aggregation types like **DifferenceFrom** and **PercentageOfDifferenceFrom** can check for specific field of specific item using [`baseField`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldoptionsmodel#basefield) and [`baseItem`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldoptionsmodel#baseitem) properties. Likewise, **PercentageOfParentTotal** type can for specific field using [`baseField`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldoptionsmodel#basefield) property. For instance, the aggregation type **DifferenceFrom** would intake the specified field and its corresponding member as input and its value is compared across other members in the same field and also across different fields to formulate an appropriate output value.  

* [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldoptionsmodel#type): It allows to set the aggregate type of the field.
* [`baseField`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldoptionsmodel#basefield): It allows to set the specific field to aggregate the values.
* [`baseItem`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldoptionsmodel#baseitem): It allows to set the specific member to aggregate the values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs1" %}

> By default, the aggregation will be considered as **Sum** to the value fields which had number type and for the value fields which had non-number type values such as string, date, datetime, boolean, etc., the aggregation type will be considered as **Count**.

## Modifying aggregation type for value fields at runtime

You can dynamically modify the aggregation type for value fields in the Pivot Table component through the UI at runtime. Value fields, displayed in the grouping bar and field list, include a dropdown icon that allows you to select from various aggregation types (e.g., **Sum**, **Average**, **Count**). Once you select a new aggregation type, the pivot table updates instantly to reflect the change, providing a seamless experience for data analysis.

<!-- markdownlint-disable MD012 -->
![List of pre-defined aggregation types to be changed via Field List](images/aggregation_fl_menu.webp)
<br/>

![List of pre-defined aggregation types to be changed via Grouping Bar](images/aggregation_gb_menu.webp)

## Show desired aggregation types in its dropdown menu

By default, the dropdown menu for value fields includes all available aggregation types. However, you can customize this menu to display only specific aggregation types relevant to your application using the [`aggregateTypes`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#aggregatetypes) property. This allows you to tailor the user experience by limiting the options to those that best fit your use case.

The following code demonstrates how to configure the pivot table component to display only the **DistinctCount**, **Average**, and **Product** aggregation types in the dropdown menu.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs2" %}

## Hiding aggregation type from button text

By default, each field in the value axis is displayed with its name and aggregation type (e.g., "Sum of Units Sold"). To display only the field name (e.g., "Units Sold") and hide the aggregation type, set the [`showAggregationOnValueField`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#showaggregationonvaluefield) property in the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings) to **false**.

This customization enhances the clarity of the pivot table’s interface by simplifying the button text, making it more concise and user-friendly.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs3" %}

## Hiding aggregation type icon from UI

By default, the dropdown icon to change the aggregation type is visible in the grouping bar. To hide this icon, set the [`showValueTypeIcon`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupingbarsettings#showvaluetypeicon) property within [`groupingBarSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupingbarsettings) to **false**.

> The aggregation type icon can only be hidden in the Grouping Bar, not in the Field List.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs4" %}

## Event

### AggregateCellInfo

The [`aggregateCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#aggregatecellinfo) event triggers each time a value cell is rendered. This allows users to override the cell's value or skip formatting. The event provides the following parameters:

* `fieldName` - It holds current cell's field name.
* `row` - It holds current cell's row value.
* `column` - It holds current cell's column value.
* `value` - It holds value of current cell.
* `cellSets` - It holds raw data for the aggregated value cell.
* `rowCellType` - It holds row cell type value.
* `columnCellType` - It holds column cell type value.
* `aggregateType` - It holds aggregate type of the cell.
* `skipFormatting` - boolean property, it allows to skip formatting if applied.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs5" %}

### ActionBegin

The event [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actionbegin) triggers when clicking and selecting the aggregate type via the dropdown icon in the value field button, which is present in both grouping bar and field list UI. This allows the user to identify the current action being performed at runtime. It has the following parameters:

* [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#datasourcesettings): Contains the current data source settings such as input data source, rows, columns, values, filters, format settings and more.

* [`actionName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#actionname): Provides the name of the current action initiated. For example, when selecting aggregation, the action name is **Aggregate field**.

* [`fieldInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#fieldinfo): Contains information regarding the selected value field.

> Note: This option applies only to actions performed through the field-based UI, such as filtering, sorting, removing a field from the grouping bar, editing, and changing the aggregation type.

* [`cancel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#cancel): Allows restricting the current action.

In the following example, an action taken during aggregation type selection via the dropdown icon can be prevented by setting the **args.cancel** option to **true** in the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actionbegin) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs6" %}

### ActionComplete

The [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actioncomplete) event is triggered when a UI action is completed, such as changing the aggregation type using the dropdown icon in the value field button, available within both the grouping bar and field list user interfaces. This event enables users to identify which UI action has been completed at runtime. The event provides the following parameters:

* [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#datasourcesettings): The current data source settings, including input data source, rows, columns, values, filters, format settings, and related properties.
* [`actionName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#actionname): Specifies the name of the completed action. For example, after changing the aggregation type, the value will be **Field aggregated**.
* [`fieldInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#fieldinfo): Contains information about the selected value field.
* [`actionInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#actioninfo): Defines the unique information about the current UI action performed.

> Note: This event is triggered only when field-based UI actions are performed, such as filtering, sorting, removing a field from the grouping bar, editing, or changing the aggregation type.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs7" %}

### ActionFailure

The [`actionFailure`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actionfailure) event is triggered when a UI action fails to produce the expected result. This event provides detailed information about the failure through the following parameters:

- [`actionName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionfailureeventargs#actionname): Specifies the name of the failed action. For example, if the failure occurs during aggregation, the action name will be **Aggregate field**.
- [`errorInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionfailureeventargs#errorinfo): Contains detailed error information related to the failed UI action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs8" %}