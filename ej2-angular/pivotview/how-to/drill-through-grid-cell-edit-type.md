---
layout: post
title: Drill through grid cell edit type in Angular Pivotview | Syncfusion
description: Learn here all about Drill through grid cell edit type in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Drill through grid cell edit type 
documentation: ug
domainurl: ##DomainURL##
---

# Drill through grid cell edit type in Angular Pivotview component

The drill-through feature in the pivot table allows users to view the raw data behind aggregated values by opening a detailed grid dialog. When this dialog appears, you can customize the edit behavior of specific columns to provide appropriate input controls based on their data types.

Using the [`drillThrough`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#drillthrough) event, you can define the edit type for any column in the drill-through grid. This is accomplished by checking the column name within the event handler and setting the appropriate edit type using the [`editType`](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edittype) property of the grid column.

## Edit type options

The following edit types are available for different data types:

* [`NumericTextBox`](https://ej2.syncfusion.com/angular/documentation/numerictextbox/getting-started) - For integer, double, and decimal data types
* [`TextBox`](https://ej2.syncfusion.com/angular/documentation/textbox/getting-started) - For string data type
* [`DropDownList`](https://ej2.syncfusion.com/angular/documentation/drop-down-list/getting-started) - To display all unique values for that field
* [`CheckBox`](https://ej2.syncfusion.com/angular/documentation/check-box/getting-started) - For boolean data type
* [`DatePicker`](https://ej2.syncfusion.com/angular/documentation/datepicker/getting-started) - For date data type
* [`DateTimePicker`](https://ej2.syncfusion.com/angular/documentation/datetimepicker/getting-started) - For date time data type

> The [`editType`](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edittype) property must be set based on the column's data type. For example, string data will not work properly with numeric text box edit type.

## Implementation example

The following example demonstrates how to set the `Country` column to use a `DropDownList` edit type in the drill-through grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs166/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs166/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs166" %}
