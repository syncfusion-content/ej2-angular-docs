---
layout: post
title: Filter menu in Angular Grid component | Syncfusion
description: Learn here all about Filter menu in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filter menu 
documentation: ug
domainurl: ##DomainURL##
---

# Filter menu in Angular Grid component

The filter menu in the Angular Grid component allows you to enable filtering and provides a user-friendly interface for filtering data based on column types and operators.

To enable the filter menu, you need to set the [filterSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings) property to **Menu**. This property determines the type of filter UI that will be rendered. The filter menu UI allows you to apply filters using different operators.

Here is an example that demonstrates the usage of the filter menu in the Syncfusion Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-menu-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-menu-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-menu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-menu-cs1" %}

> * [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowfiltering) must be set as true to enable filter menu.
> * By setting [columns.allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#allowfiltering) as false will prevent filter menu rendering for a particular column.

## Custom component in filter menu

The Syncfusion Angular Grid component provides the flexibility to integrate custom filter components into specific columns, allowing you to create tailored filter UIs that meet your specific requirements. 

You can use the [column.filter.ui](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filter) property to add custom filter components to a specific column in the Grid. To implement a custom filter UI, you need to define the following functions:

* **create**: This function is responsible for creating the custom component for the filter.
* **write**: The write function is used to wire events for the custom component. This allows you to handle changes in the custom filter UI.
* **read**: The read function is responsible for reading the filter value from the custom component. This is used to retrieve the selected filter value.

In the following sample, `DropDownList` is used  as custom component in the **OrderID** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-menu-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-menu-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-menu-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-menu-cs2" %}

## Show 24 hours time format in filter dialog

The Syncfusion Angular Grid provides a feature to display the time in a 24-hour format in the date or datetime column filter dialog. By default, the filter dialog displays the time in a 12-hour format (AM/PM) for the date or datetime column. However, you can customize the default format by setting the type as **dateTime** and the format as **M/d/y HH:mm**. To enable the 24-hour time format in the filter dialog, you need to handle the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event with [requestType](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/#requesttype) as [filterafteropen](https://ej2.syncfusion.com/angular/documentation/api/grid/action/) and set the `timeFormat` of the `DateTimepicker` to **HH:mm**.

Here is an example that demonstrates how to show 24 hours time format in filter dialog:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-menu-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-menu-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-menu-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-menu-cs3" %}

## Customizing filter menu operators list

The Syncfusion Angular Grid enables you to customize the default filter operator list by utilizing the [filterSettings.operators](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#operators) property. This feature allows you to define your own set of operators that will be available in the filter menu. You can customize operators for string, number, date, and boolean data types.

The available options for customization are:

* **stringOperator**- defines customized string operator list.
* **numberOperator** - defines customized number operator list.
* **dateOperator** - defines customized date operator list.
* **booleanOperator** - defines customized boolean operator list.
  
Here is an example of how to customize the filter operators list in Syncfusion Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-menu-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-menu-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-menu-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-menu-cs4" %}

## Filter by multiple keywords using filter menu

The Syncfusion Angular Grid allows you to perform filtering actions based on multiple keywords, rather than a single keyword, using the filter menu dialog. To enable this feature, you can set [filterSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/#type) as **Menu** and render the `MultiSelect` component as a custom component in the filter menu dialog.

Here is an example that demonstrates how to perform filtering by multiple keywords using the filter menu in the Syncfusion Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-menu-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-menu-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-menu-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-menu-cs5" %}

## Filter menu events

The Syncfusion Angular Grid offers the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid#actionbegin) and [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) events, which provide information about the actions being performed. Within the event handlers, you receive an argument named `requestType`. This argument specifies the [action](https://ej2.syncfusion.com/angular/documentation/api/grid/action/) that is being executed, such as `filterbeforeopen`, `filterafteropen`, or `filtering`. By analyzing this action type, you can implement custom logic or showcase messages.

**filtering** - Defines current action as filtering.
**filterbeforeopen** - Defines current action as filter dialog before open.
**filterafteropen** - Defines current action as filter dialog after open.

Here's an example of how to use these events to handle filter menu action in the Syncfusion Angular Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/filter-menu-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/filter-menu-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/filter-menu-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/filter-menu-cs6" %}

## Troubleshoot filter menu operator issue

When using the filter menu, the UI displays operators for all columns based on the data type of the first data it encounters. If the first data is empty or null, it may not work correctly. To overcome this issue, follow these steps to troubleshoot and resolve it:

**Explicitly Define Data Type:** When defining columns in your Angular Grid component, make sure to explicitly specify the data type for each column. You can do this using the type property within the columns configuration. For example:

```ts
<ejs-grid [dataSource]='data'>
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' type='number' width=120></e-column>
        <e-column field='CustomerName' headerText='Customer Name' type='string' width=150></e-column>
        <!-- Define data types for other columns as needed -->
    </e-columns>
</ejs-grid>
```

**Handle Null or Empty Data:** If your data source contains null or empty values, make sure that these values are appropriately handled within your data source or by preprocessing your data to ensure consistency.

**Check Data Types in Data Source:** Ensure that the data types specified in the column definitions match the actual data types in your data source. Mismatched data types can lead to unexpected behavior.

## See also

* [How to perform filter by using Wildcard and LIKE operator filter](./filtering/#wildcard-and-like-operator-filter)
