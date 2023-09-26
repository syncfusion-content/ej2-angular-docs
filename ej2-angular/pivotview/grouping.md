---
layout: post
title: Grouping in Angular Pivotview component | Syncfusion
description: Learn here all about Grouping in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Grouping 
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Angular Pivotview component

> This feature is applicable only for the relational data source.

Grouping is the most-useful feature in pivot table and the component automatically groups date, time, number and string. For example, the date type can be formatted and displayed based on year, quarter, month, and more. Likewise, the number type can be grouped range-wise, such as 1-5, 6-10, etc. These group fields will act as individual fields and allows users to drag them between different axes such as columns, rows, values, and filters and create pivot table at runtime.

The grouping can be enabled by setting the [`allowGrouping`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#allowgrouping) property to **true** property in the pivot table.
To perform the grouping action via UI, right click on the pivot table's row or column header, select "**Group**", a dialog will appear in which fill the appropriate options to group the data. To ungroup right click on the pivot table's row or column header, select "**Ungroup**".

To use calculated field option, you need to inject the `GroupingService` module in pivot table. The following are the three different types of grouping:

* Number Grouping
* Date Grouping
* Custom Grouping

> Similar to Excel, only one type of grouping can be applied for a field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs147/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs147/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs147/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs147" %}

## Number Grouping

Number grouping allows users to organize data, which is in number format into different ranges, such as 1-5, 6-10, etc. Number grouping can be configured via UI, by right-clicking on the number based header in the pivot table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs148/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs148/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs148/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs148" %}

![output](images/number-group-option.png "Context-menu options for number grouping")

### Range selection

The "**Starting at**" and "**Ending at**" options are used to set the number range depending on which the headers will be grouped. For example, if the "Product_ID" field holds the number from "1001" to "1010" and the user chooses to group the number range by setting "**1004**" to "**Starting at**" and "**1008**" to "**Ending at**" options on their own. Then the specified number range will be used for number grouping and the rest will be grouped as "**Out of Range**".

![output](images/number-group-settings-range-applied.png "Range options applied for number grouping")

### Range interval

The "**Interval by**" option is used to separate the selected number data type field into range-wise such as 1-5, 6-10, etc.
For example, if the user wants to display the "Product_ID" data field with a group interval of "**2**" by setting the "**Interval by**" option on their own. The "Product_ID" field will then be grouped by the specified range of intervals, such as "**1004-1005**", "**1006-1007**",etc.

![output](images/number-group-settings-applied.png "Grouping settings options applied for number grouping")
<br/>
![output](images/number-group-updated.png "Applied grouping settings updated in pivot table for number grouping")

Number grouping can also be configured using the [`groupSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupSettings/#groupsettings) property through code-behind. The properties required are:

* [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupSettings/#name): Allows user to set the field name.
* [`rangeInterval`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupSettings/#rangeinterval): Allows user to set the interval between two numbers.
* [`startingAt`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupSettings/#startingat): Allows user to set the starting number.
* [`endingAt`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupSettings/#endingat): Allows user to set the ending number.
* [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupSettings/#type): Allows user to set the group type. For number grouping, **Number** is set.

> If starting and ending numbers specified in [`startingAt`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupSettings/#startingat) and [`endingAt`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupSettings/#endingat) properties are in-between the number range, then rest of the numbers will be grouped and placed in “Out of Range” section introduced specific to this feature.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs149/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs149/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs149/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs149" %}

![output](images/number-group-updated.png "Applied grouping settings updated in pivot table for number grouping")

### Ungrouping the existing number groups

By right-clicking the appropriate header and selecting "**Ungroup**" from the context menu in the pivot table component, users can ungroup the applied number grouping.

![output](images/number-ungroup.png)

## Date Grouping

Date grouping allows users to organize data, which is in date format into different sections such as years, quarters, months, days, hours, minutes, and seconds. Date grouping can be configured via UI, by right-clicking on the date and time based header in the pivot table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs150/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs150/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs150/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs150" %}

![output](images/date-group-option.png "Context-menu options for date grouping")

### Range selection

The "**Starting at**" and "**Ending at**" options are used to set the date range depending on which the headers will be grouped. For example, if the "Date" field holds the date from "01/01/2015" to "02/12/2018" and the user chooses to group the date range by setting "**01/07/2015**" to "**Starting at**" and "**31/07/2017**" to "**Ending at**" options on their own. Then the specified date range will be used for date grouping and the rest will be considered as "**Out of Range**".

![output](images/date-group-settings-range-applied.png "Range options applied for date grouping")

### Group interval

The "**Interval by**" option is used to separate the selected date fields into years, quarters, months, days, hours, minutes and seconds. For example, if the user wants to display the "Date" field with group intervals as "**Years**" and "**Months**" by selecting the "**Interval by**" option on their own. The "Date" field will then be separated by the specified group intervals and created as two new fields, namely "**Years (Date)**" which holds the date years and "**Months (Date)**" which holds the date months. Such fields can be used for report manipulations in the pivot table at runtime.

> When none of the **Interval by** options are chosen, the **OK** button in the dialog will be disabled, meaning that at least one interval option should be selected in order to apply the date grouping.

![output](images/date-group-settings-interval-applied.png "Group interval option applied for date grouping")
<br/>
![output](images/date-group-settings-applied.png "Grouping settings options applied for date grouping")
<br/>
![output](images/date-group-updated.png "Applied grouping settings updated in pivot table for date grouping")

Date grouping can also be configured using the [`groupSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupSettings/#groupsettings) property through code-behind. The properties required are:

* [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupSettings/#name): Allows user to set the field name.
* [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupSettings/#type): Allows user to set the group type. For date grouping, **Date** is set.
* [`startingAt`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupSettings/#startingat): Allows user to set starting date.
* [`endingAt`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupSettings/#endingat): Allows user to set ending date.
* [`groupInterval`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupSettings/#groupinterval): Allows user to set interval in year, quarter, month, day, hour, minute, or second pattern.

> From the date format "YYYY-DD-MM HH:MM:SS", if user wants to display only year and month, then the [`groupInterval`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupSettings/#groupinterval) property should be set with **Years** and **Months** alone. Also, user can shuffle the order of year, quarter, month, day, hour, minute, or second based on their requirement and display the same in the pivot table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs151/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs151/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs151/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs151" %}

Furthermore, in the field list UI, these date group fields **Years (Date)**, **Quarters (Date)**, **Months (Date)**, etc... will be automatically grouped and displayed under the **Date** folder name.

![Date fields grouped and displayed under the "Date" folder](images/treeview.png "Group fields under a separate folder displayed in the field list UI")

### Ungrouping the existing date groups

By right-clicking the appropriate header and selecting "**Ungroup**" from the context menu in the pivot table component, users can ungroup the applied date grouping.

![output](images/date-ungroup.png)

## Custom Grouping

Custom grouping can group any data type, such as date, time, number and string, into a custom field based on the user's needs. It can be configured via the UI by right-clicking on any header in the pivot table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs152/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs152/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs152/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs152" %}

In order to create custom grouping in the pivot table, a minimum of two headers belonging to a specific field should be chosen. To select more than one header, press and hold the CTRL key or hold the SHIFT key and click the appropriate row or column headers. Once selection is done, right-click and select "**Group**".

![output](images/custom-group-option.png "Context-menu options for custom grouping")

In the dialog, the "**Field caption**" is the alias name of the new custom field that will be used to shown up in the pivot table component.

![output](images/custom-group-settings-caption-applied.png "Caption applied for custom grouping")

The "**Group Name**" option helps to set the name of the header to hold the other selected headers. For example, if the user wants to group headers such as "**Gloves**", "**Jerseys**" and "**Shorts**" in the "Products" field by setting the top level name as "**Clothings**" to "**Group Name**" on their own. The selected headers are then grouped under the name "**Clothings**" in the pivot table.

![output](images/custom-group-settings-applied.png "Grouping settings applied for custom grouping")
<br/>
![output](images/custom-group-updated.png "Applied grouping settings updated in pivot table for custom grouping")

User can also apply new custom grouping options to an existing custom field by right-clicking on the custom group header in the pivot table. For example, if the user wants to create a new custom group for the current custom group headers such as "**Bottles and Cages**", "**Cleaners**" and "**Fenders**" by setting the top level name as "**Accessories**" to "**Group Name**" on their own. The selected headers will then be grouped in the pivot table under the name "**Accessories**" with a new custom field called "**Product category 1**".

![output](images/nested-custom-group-option.png "Context-menu options for nested custom grouping")
<br/>
![output](images/nested-custom-group-settings-applied.png "Grouping settings applied for nested custom grouping")
<br/>
![output](images/nested-custom-group-updated.png "Applied grouping settings updated in pivot table for custom grouping")

Custom grouping can also be configured using the [`groupSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupSettings/#groupsettings) property through code-behind. The properties required are:

* [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupSettings/#name): Allows user to set the field name.
* [`caption`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupSettings/#caption): Allows user to set the caption name for custom grouping field.
* [`customGroups`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/customGroups/): Allows user to set the custom groups.
* [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/groupSettings/#type): Allows user to set the group type. For custom grouping, **Custom** is set.

The available custom group properties in [`customGroups`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/customGroups/) property are:

* [`groupName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/customGroups/#groupname): Allows user to set the group name (or title) for selected headers.
* [`items`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/customGroups/#items): It allows to set the headers which needs to be grouped from display.

> When the [`groupName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/customGroups/#groupname) with the headers listed in [`items`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/customGroups/#items) in the [`customGroups`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/customGroups/) property is grouped by the defined [`groupName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/customGroups/#groupname) and the rest is grouped by its own name in the pivot table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs153/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs153/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs153/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs153" %}

![output](images/custom-group-updated.png "Applied grouping settings updated in pivot table for custom grouping")

### Ungrouping the existing custom groups

By right-clicking the appropriate header and selecting "**Ungroup**" from the context menu in the pivot table component, users can ungroup the applied custom grouping.

> When a specific field is removed from the report after ungrouping, its custom group fields will also be removed from the pivot table.

![output](images/custom-ungroup.png)