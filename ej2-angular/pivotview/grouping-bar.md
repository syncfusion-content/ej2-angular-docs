---
layout: post
title: Grouping bar in Angular Pivotview component | Syncfusion
description: Learn here all about Grouping bar in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Grouping bar 
documentation: ug
domainurl: ##DomainURL##
---

# Grouping bar in Angular Pivotview component

The Grouping Bar option in the Pivot Table automatically displays fields from the bound data source. It allows users to drag and drop fields between different axes such as columns, rows, values, and filters to create a pivot table at runtime. You can enable it by setting the [`showGroupingBar`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#showgroupingbar) property to **true**.

The grouping bar provides intuitive interactions similar to the Field List, making report creation accessible to all users. These interactions include:

* Re-arranging fields through drag-and-drop operations between row, column, value, and filter axes.
* Removing fields from the existing report using the remove icon.
* Adding fields to the report using the fields panel option.
* Filtering members of specific fields using the filter icon.
* Sorting members of specific fields using the sort icon.

To use the grouping bar, you need to inject the `GroupingBarService` module in the Pivot Table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs125/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs125/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs125" %}

The grouping bar offers additional options to modify its appearance and behavior using the [`groupingBarSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#groupingbarsettings) property.

## Show or hide fields panel

The fields panel appears above the grouping bar and shows all the fields that are available in the data source but not currently used in the Pivot Table report. Users can drag and drop these fields into the appropriate axes (rows, columns, values, or filters) to build their desired Pivot Table layout. When a field is removed from any axis, it automatically returns to the fields panel for reuse.

To display the fields panel, set the [`showFieldsPanel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupingbarsettings#showfieldspanel) property to **true** within the [`groupingBarSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupingbarsettings) configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs126/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs126/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs126" %}

## Show or hide all filter icon

The Grouping Bar provides an option to filter members of specific fields during runtime in the Pivot Table. To filter members in a field, click the filter icon next to the field name and select or deselect the members you want to display. 

By default, the filter icon appears next to each field in the grouping bar. If you want to hide the filter icon, set the [`showFilterIcon`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupingbarsettings#showfiltericon) property to **false** within the [`groupingBarSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupingbarsettings) configuration.

> By default, the filter icon is enabled in the grouping bar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs127/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs127/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs127" %}

## Show or hide specific filter icon

By default, the filter icon appears for all fields in the grouping bar. To hide the filter icon for specific fields, set the [`showFilterIcon`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldoptions#showfiltericon) property to **false** for those fields in the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings). This lets you control which fields can be filtered, providing a cleaner and more focused user interface.

In the sample below, the filter icons for the "Quarter" and "Products" fields are hidden.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs128/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs128/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs128" %}

## Show or hide all sort icon

The Grouping Bar provides an option to sort members of a particular field in either ascending or descending order at runtime. To sort a field, click the sort icon next to the field name. To reverse the sort direction, click the same sort icon again. By default, the sort icon is displayed next to each field in the grouping bar, and members are arranged in ascending order. 

To disable the sort option, set the [`showSortIcon`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupingbarsettings#showsorticon) property to **false** within the [`groupingBarSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupingbarsettings) configuration.

> By default, the sort icon is enabled in the grouping bar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs129/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs129/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs129" %}

## Show or hide specific sort icon

You can choose to show or hide the sort icon for individual fields in the Pivot Table's grouping bar. To hide the sort icon for a particular field, set the [`showSortIcon`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldoptions#showsorticon) property to **false** for that field in the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings) property.

In the example below, the sort icons for the "Quarter" and "Country" fields are hidden in the grouping bar. This allows users to prevent sorting for these fields while keeping other fields sortable.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs130/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs130/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs130" %}

## Show or hide all remove icon

The grouping bar in the Pivot Table lets users remove any field at runtime by clicking the remove icon next to the field. By default, the remove icon is visible beside each field in the grouping bar. 

If you want to hide the remove icon, set the [`showRemoveIcon`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupingbarsettings#showremoveicon) property to **false** within the [`groupingBarSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupingbarsettings) configuration. This will prevent users from removing fields directly from the grouping bar.

> Note: The remove icon is enabled in the grouping bar by default.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs131/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs131/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs131" %}

## Show or hide a specific remove icon

You can hide the remove icon for an individual field button in the Pivot Table grouping bar. To do this, set the [`showRemoveIcon`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldoptions#showremoveicon) property to **false** for the desired field within the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings) options.

In the example below, the remove icon for the "Year", "Sold", and "Products" fields has been hidden. This helps prevent users from accidentally removing those fields while interacting with the Pivot Table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs132/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs132/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs132" %}

## Disable all fields from dragging

In the Pivot Table, the grouping bar lets users move fields between the row, column, value, and filter axes to change the report as needed. By default, all fields can be moved using drag-and-drop in the grouping bar. To prevent users from dragging any fields, set the [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupingbarsettings#allowdraganddrop) option in [`groupingBarSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupingbarsettings) to **false**. This will lock the layout of the current report, so users cannot rearrange fields in the grouping bar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs133/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs133/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs133" %}

## Disable specific field from dragging

You can prevent users from dragging certain fields in the grouping bar of the Pivot Table. To do this, set the [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldoptions#allowdraganddrop) property to **false** for the specific field within the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings).

In the example below, users cannot drag the "Year" and "Products" fields. This setting helps you control which fields can be arranged in the column, row, value, or filter axes at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs134/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs134/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs134" %}

## Remove specific field(s) from displaying

When you bind a report to the Pivot Table, all fields from the data source are automatically displayed in the Grouping Bar. However, you can hide specific fields from appearing in the Grouping Bar to simplify the user interface.

To exclude specific fields, add the field names to the [`excludeFields`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#excludefields) property within the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings) configuration. This prevents the selected fields from being displayed in the Grouping Bar while keeping them available in the underlying data source.

> **Note:** When you exclude fields using the `excludeFields` property, these fields will also be hidden in the field list UI. For more information about field list behavior, refer to this [link](https://ej2.syncfusion.com/angular/documentation/pivotview/field-list#remove-specific-fields-from-displaying).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs135/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs135/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs135" %}

## Changing aggregation type of value fields at runtime

Users can easily perform calculations on groups of values in the Pivot Table by using the aggregation option. Each value field in the Pivot Table appears in the grouping bar with a dropdown icon next to it. This icon lets users select a different aggregation type, such as Sum, Average, or Count, at runtime. When an aggregation type is selected, the Pivot Table values update immediately to reflect the new calculation.

By default, the icon for setting the aggregation type is visible in the grouping bar. To hide this icon, set the [`showValueTypeIcon`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupingbarsettings#showvaluetypeicon) property to **false** inside [`groupingBarSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupingbarsettings). For more details about aggregation options, see the [aggregation](./aggregation) section.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs136/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs136/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs136" %}

## Show or hide specific dropdown icon

You can hide the dropdown icon for a particular field button in the Pivot Table’s grouping bar. To do this, set the [`showValueTypeIcon`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldoptions#showvaluetypeicon) property to **false** for the desired field within the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings).

In the following example, the dropdown icon for the "Sold" field is hidden:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs137/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs137/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs137" %}

> The following properties—[`showFilterIcon`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldoptions#showfiltericon), [`showSortIcon`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldoptions#showsorticon), [`showValueTypeIcon`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldoptions#showvaluetypeicon), and [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldoptions#allowdraganddrop)—in the fields of [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings) apply to both the grouping bar and field list.

## Show values button

The **Values** button appears in the grouping bar when the [showValuesButton](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#showvaluesbutton) property is set to **true**. This button can be moved to a different position among the fields in either the column or row axis while working with the Pivot Table. To enable this option, set [`showValuesButton`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#showvaluesbutton) to **true** in the [Pivot Table](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default) settings.

> This option is available only when using relational data sources.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs138/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs138/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs138" %}

## Event

### OnFieldDropped

The [`onFieldDropped`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#onfielddropped) event in the Pivot Table triggers whenever a user moves and drops a field into a new axis, such as columns, rows, values, or filters. This event provides the following parameters:

- [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#datasourcesettings): Defines the current report in the Pivot Table.
- [`droppedAxis`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fielddroppedeventargs#droppedaxis): Defines the axis where the field has been dropped.
- [`droppedField`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fielddroppedeventargs#droppedfield): Defines the dropped field item.
- [`droppedPosition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fielddroppedeventargs#droppedposition): Defines the position where the field has been dropped.

For example, you can use this event to change the caption of the [`droppedField`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fielddroppedeventargs#droppedfield) instantly at runtime when a user moves a field to a different axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs139/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs139/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs139" %}

### FieldDragStart

The [`fieldDragStart`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#fielddragstart) event is triggered when a field begins to be dragged from its axis in the Pivot Table. Users can use this event to limit or prevent the drag action based on certain conditions. The event provides the following parameters:

- [`fieldName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fielddragstarteventargs#fieldname): This parameter contains the name of the field being dragged.
- [`fieldItem`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fielddragstarteventargs#fielditem): This parameter holds the complete details of the field as described in the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#datasourcesettings).
- [`axis`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fielddragstarteventargs#axis): This specifies the axis (such as columns, rows, values, or filters) from which the field is being dragged.
- [`cancel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fielddragstarteventargs#cancel): This boolean property can be set to **true** by the user to prevent the selected field from being dragged.
- [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#datasourcesettings): This property returns the current [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#datasourcesettings) used in the Pivot Table.

In the following example, the drag action is prevented only for fields placed in the rows axis. Users will not be able to drag fields from the rows axis, but can still drag fields from other axes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs140/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs140/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs140" %}

### FieldDrop

The [`fieldDrop`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#fielddrop) event is triggered whenever a user drags and drops a field into a different axis in the Pivot Table. This event helps users control whether a field should be allowed to move to a new axis by using the event’s parameters. The event provides the following information:

* [`fieldName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fielddropeventargs#fieldname): The name of the field being moved.
* [`draggedAxis`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fielddropeventargs#draggedaxis): The axis where the user started dragging the field.
* [`dropAxis`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fielddropeventargs#dropaxis): The axis where the field is dropped.
* [`dropPosition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fielddropeventargs#dropposition): The position where the field is dropped among the fields in the target axis.
* [`dropField`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fielddropeventargs#dropfield): The complete definition of the field as defined in the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#datasourcesettings).
* [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#datasourcesettings): The entire configuration of the Pivot Table’s data source.
* [`cancel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fielddropeventargs#cancel): A boolean value. If set to **true**, this stops the field from being dropped into the axis.

In the example below, dropping any field into the "Values" axis is prevented. This is managed by setting the `cancel` parameter to **true** when a field is dropped onto the "Values" axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs141/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs141/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs141" %}

### FieldRemove

The [`fieldRemove`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#fieldremove) event occurs when a user tries to remove a field from an axis in the Pivot Table. This event can be used to control whether a field should be removed, based on specific conditions.

The event provides the following parameters:

- [`fieldName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldremoveeventargs#fieldname): The name of the field that the user wants to remove.
- [`fieldItem`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldremoveeventargs#fielditem): The full definition of the field as specified in the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#datasourcesettings).
- [`axis`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldremoveeventargs#axis): The name of the axis (row, column, value, or filter) from which the field will be removed.
- [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#datasourcesettings): The complete configuration of the Pivot Table data source.
- [`cancel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldremoveeventargs#cancel): A boolean property; set this to **true** to prevent the field from being removed.

In the following example, the field "Country" cannot be removed from the report by any UI action. This is achieved by handling the [`fieldRemove`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#fieldremove) event and setting the `cancel` property to **true** if the field name matches "Country".

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs142/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs142/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs142" %}

### AggregateMenuOpen

The [`aggregateMenuOpen`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#aggregatemenuopen) event is triggered when a user clicks the dropdown icon in a value field button in the Pivot Table’s grouping bar. This event allows users to control which aggregation types appear in the dropdown menu.

The event provides the following parameters:

- [`fieldName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/aggregatemenuopeneventargs#fieldname): The name of the field for which the aggregation menu is opened.
- [`aggregateTypes`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#aggregatetypes): The list of aggregation types available for the selected field.
- [`displayMenuCount`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/aggregatemenuopeneventargs#displaymenucount): The number of options shown in the dropdown initially. By default, this value is 7.
- [`cancel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/aggregatemenuopeneventargs#cancel): A boolean that, when set to true, prevents the dropdown menu from opening.

In the following sample, the dropdown menu for the "Amount" field is customized to show specific aggregation types.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs143/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs143/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs143" %}

> The [`aggregateMenuOpen`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#aggregatemenuopen), [`fieldRemove`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#fieldremove), [`fieldDrop`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#fielddrop), [`fieldDragStart`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#fielddragstart), and [`onFieldDropped`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#onfielddropped) events are available for both the grouping bar and field list.

### ActionBegin

The [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actionbegin) event occurs whenever an action begins in the grouping bar of the Pivot Table. These actions include sorting, filtering, changing aggregation, removing fields, or editing a calculated field using the grouping bar UI. This event helps the user identify and manage what is happening in real time. The event provides several helpful parameters:

- [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#datasourcesettings): This provides the current [report settings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#datasourcesettings), which include the input data, row fields, column fields, values, filters, formatting settings, and more.
- [`actionName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#actionname): This contains the name of the action that has started. The most common actions and their respective names are:

  | Action                                 | Action Name         |
  |-----------------------------------------|---------------------|
  | Clicking the sort icon                  | Sort field          |
  | Using the filter icon                   | Filter field        |
  | Selecting aggregation in the drop-down  | Aggregate field     |
  | Clicking the remove icon                | Remove field        |
  | Clicking the edit icon                  | Edit calculated field|

- [`fieldInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#fieldinfo): This provides information about the selected field on which the action is performed.

> Note: This option applies only to actions performed through the field-based UI, such as filtering, sorting, removing a field from the grouping bar, editing, and changing the aggregation type.

- [`cancel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#cancel): Set this property to **true** within the event to prevent the current action from being completed.

For example, in the sample below, users can restrict actions like sorting or filtering from the grouping bar by setting `args.cancel` to **true** within the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actionbegin) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs144/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs144/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs144" %}

### ActionComplete

The [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actioncomplete) event in the Pivot Table is triggered whenever a user completes a UI action in the grouping bar, such as sorting, filtering, changing the aggregation type, editing a calculated field, or removing a field. This event helps users track the specific interaction that has just been finished, supporting a smooth workflow within the Pivot Table.

The event provides the following parameters:

- [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#datasourcesettings): Contains the current [report settings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#datasourcesettings), including information about the input data, rows, columns, values, filters, and format settings used in the Pivot Table.

- [`actionName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#actionname): Specifies the name of the action just completed. The table below lists possible UI actions and their corresponding action names:

  | Action                                          | Action Name               |
  |-------------------------------------------------|--------------------------|
  | Sort icon clicked                               | Field sorted             |
  | Filter icon clicked                             | Field filtered           |
  | Aggregation changed (using value type dropdown) | Field aggregated         |
  | Remove icon clicked                             | Field removed            |
  | Edit icon (calculated field) clicked            | Calculated field edited  |

- [`fieldInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#fieldinfo): Provides information about the field selected during the action.

  > Note: The [`fieldInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#fieldinfo) parameter is provided only for actions related to sorting, filtering, aggregation changes, removing a field, or editing a calculated field using the grouping bar.

- [`actionInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#actioninfo): Supplies detailed information about the UI action. For example, when sorting is finished, this parameter includes the sort order and the name of the field involved.

  
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs145/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs145/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs145" %}

### ActionFailure

The [`actionFailure`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actionfailure) event occurs when a user action in the Pivot Table does not complete as expected. This event helps users understand what went wrong during interactions with the grouping bar.

**Event Parameters**

- [`actionName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionfailureeventargs#actionname): Identifies which user action did not succeed. The table below lists the actions and their corresponding names:

  | Action                                                | Action Name         |
  |-------------------------------------------------------|---------------------|
  | Clicking the sort icon                                | Sort field          |
  | Applying a filter using the filter icon               | Filter field        |
  | Choosing a value type from the aggregation dropdown   | Aggregate field     |
  | Removing a field by clicking the remove icon          | Remove field        |
  | Editing a calculated field using the edit icon        | Edit calculated field|

- [`errorInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionfailureeventargs#errorinfo): Provides details about the error that occurred for the specific user action.

When this event is triggered, users can refer to the information in these parameters to identify the action that failed and the reason for the failure. This helps users correct issues with actions such as sorting, filtering, aggregating, removing, or editing fields in the Pivot Table's grouping bar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs146/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs146/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs146" %}

## See Also

* [Change load limited data in member editor](./filtering#performance-tips)
* [Customize the icons for pivot table](./how-to/customize-the-icons-for-pivot-grid)