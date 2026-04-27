---
layout: post
title: Filtering in Angular Pivotview component | Syncfusion
description: Learn here all about Filtering in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filtering 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD012 -->

# Filtering in Angular Pivotview component

Filtering helps you focus on specific data by showing only the records you need in the Pivot Table. This allows you to analyze relevant information more effectively by including or excluding specific members through the user interface or programmatically.

The Pivot Table offers three types of filtering options:

* Member filtering
* Label filtering
* Value filtering

> When all filtering options are disabled programmatically, the filter icon will not appear in the field list or grouping bar interface.

## Member filtering

This filtering option displays the Pivot Table with selective records based on the members you choose to include or exclude in each field. By default, member filtering is enabled through the [`allowMemberFilter`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#allowmemberfilter) property in the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings). 

Users can apply member filters at runtime by clicking the filter icon next to any field in the row, column, and filter axes, available in both the field list and grouping bar interfaces.

![Member filter icon in field list](images/fieldlist_filtericon.png)
<br/>

![Member filter icon in grouping bar](images/filter_icon_gb.png)
<br/>

![Member filter dialog with checked and unchecked members](images/filter_dialog_gb.png)
<br/>

![Resultant pivot table on member filter](images/filter_grid_gb.png)

You can also configure filtering programmatically using the [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter) property during the initial rendering of the component. The essential settings required to add filter criteria are:

* [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#name): Sets the appropriate field name for filtering.
* [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#type): Specifies the filter type as **Include** or **Exclude** to include or exclude field members respectively.
* [`items`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#items): Defines the members that need to be either included or excluded from the display.
* [`levelCount`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filtermodel#levelcount): Sets the level count of the field to fetch data from the cube. **Note: This property is applicable only for OLAP data sources.**

> When you specify unavailable or inappropriate members in the include or exclude filter items collection, they will be ignored.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs92/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs92/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs92" %}

### Option to select and unselect all members

This option lets you quickly manage all members at once, saving time when working with large datasets. The member filter dialog includes an **All** option that provides a convenient way to select or deselect all available members with a single click.

When you check the **All** option, it selects all members in the list. When you uncheck it, all members become deselected. If you manually select some members while others remain unselected, the **All** option displays an intermediate state (partially checked) to show that the list contains both selected and unselected members.

![Intermediate state of All option](images/editor_inter.png)

> **Note:** When all members are deselected, the **OK** button becomes disabled. You must select at least one member to apply the filter and display data in the Pivot Table.

![All members unchecked state](images/editor_alluncheck.png)

### Provision to search specific member(s)

This option helps you quickly locate specific members without scrolling through long lists. The member filter dialog includes a built-in search box that allows you to find members by typing part of their name.

Simply enter the starting characters of the member name you want to find, and the list will automatically filter to show only matching members. This makes it easy to locate and select specific members, especially when dealing with large datasets.

![Search functionality in member filter](images/search.png)

### Option to sort members

This option allows you to organize members in a logical order for easier selection and review. The member filter dialog provides built-in sort icons that let you arrange members in ascending or descending order.

You can click the ascending sort icon to arrange members from A to Z (or lowest to highest for numerical values), or click the descending sort icon to arrange them from Z to A (or highest to lowest). When neither sorting option is selected, members appear in their original order as retrieved from the data source.

![Member sorting options](images/member-sort.png)

### Performance tips

The member filter dialog improves loading performance when working with large datasets by limiting the number of members displayed initially. This helps you work with extensive data without experiencing delays while the member list loads.

You can control how many members are displayed in the member filter dialog using the [`maxNodeLimitInMemberEditor`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#maxnodelimitinmembereditor) property. By default, this property is set to **1000**. When your data contains more members than this limit, only the specified number will be shown initially, and a message will indicate how many additional members are available.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs93/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs93/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs93" %}

When the member count exceeds your set limit, you can use the search option to find specific members beyond the displayed range. For example, if your data contains 5000 members named "Node 1", "Node 2", "Node 3", and so on, and you set the [`maxNodeLimitInMemberEditor`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#maxnodelimitinmembereditor) property to **500**, only the first 500 members will appear by default. The dialog will show a message like "4500 more items. Search to refine further." To access members 501 to 5000, type the starting characters in the search box to locate the desired members. Once the members appear in the list, you can select or deselect them to apply your filtering preferences.

### Loading members on-demand

> This option is applicable only for OLAP data sources.

This option improves the performance of the member editor by loading members only when needed, rather than loading all members at once. You can enable this by setting the [`loadOnDemandInMemberEditor`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#loadondemandinmembereditor) property to **true**. When enabled, only the first level members are loaded initially from the OLAP cube, allowing the member editor to open quickly without performance delays.

By default, this property is set to **true** and search operations will only apply to the currently loaded level members. You can load additional level members using either of the following methods:

* **Expand individual members**: Click the expander button next to any member to load only its child members.
* **Load by level selection**: Choose a specific level from the dropdown list to load all members up to that selected level from the cube.

This approach prevents performance issues when working with hierarchies that contain large numbers of members. Once level members are loaded, they remain available for all subsequent operations (such as reopening the dialog or drag-and-drop actions) and persist until you refresh the web page.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs94/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs94/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs94" %}

![Loading members on-demand](images/ondemand_member.png)

In the example above, the "Customer Geography" dimension loads with only the first level (Country) initially. Search operations will apply only to the "Country" level members. You can then load the next level members (State-Province) on-demand in two ways:

* **Expand specific countries**: When you expand "Australia", the "State-Province" members load only for Australia.
* **Load all states by level**: When you select "State-Province" from the dropdown list, all "State-Province" members load across all countries (Australia, Canada, France, etc.).

Once loaded, these members are stored internally and remain available until you refresh the page.

When the [`loadOnDemandInMemberEditor`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#loadondemandinmembereditor) property is set to **false**, all members from all levels are loaded during the initial setup. This approach executes a single query to retrieve all members at once. While this may cause slower performance when opening the member editor due to the large number of members being fetched, expand and search operations will be faster since all members are already available.

![Loading all members initially](images/initial_member.png)

### Loading members based on level number

> This property is applicable only for OLAP data sources.

This option enables you to control the depth of member loading by specifying how many levels should be loaded initially. By setting the [`levelCount`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filtermodel#levelcount) property in the [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettingsmodel#filtersettings), you can improve performance and focus filtering operations on specific hierarchy levels.

The [`levelCount`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filtermodel#levelcount) property is set to **1** by default, which means only the first level members are loaded initially. When you apply filters or search operations, they will only affect the members within the loaded levels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs95/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs95/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs95" %}

![Loading members based on level number](images/level-count.png)

In the above example, the [`levelCount`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filtermodel#levelcount) is set to **2** for the "Customer Geography" dimension in [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettingsmodel#filtersettings). This loads both the "Country" and "State-Province" levels during the initial loading process. Any search or filter operations will be applied only to the members within these two levels. To access members from deeper levels like "City", you can either expand the respective "State-Province" node or select the "City" level from the dropdown list.

## Label filtering

Label filtering allows you to display only the data with specific header text across row and column fields, making it easier to focus on relevant information in your Pivot Table. This filtering works with three types of data:

* String data type
* Number data type
* Date data type

To enable label filtering, set the [`allowLabelFilter`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#allowlabelfilter) property to **true** in the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings). Once enabled, you can access the filtering options by clicking the filter icon next to any field in the row or column axis of the field list or grouping bar. This opens the filtering dialog where you can navigate to the "Label" tab to apply your label filtering criteria.

### Filtering string data type through code

String-based label filtering enables you to programmatically show only data that matches specific text values in your row and column fields, making it easier to focus on the exact information you need.

This filtering approach is specifically designed for fields containing string data type members. You can configure the filtering through the [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter) property in your code. The following properties are required for label filtering:

* [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#name): Specifies the field name to apply the filter.
* [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#type): Sets the filter type as **Label** for the specified field.
* [`condition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#condition): Defines the operator type such as **Equals**, **GreaterThan**, **LessThan**, and others.
* [`value1`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#value1): Sets the primary value for comparison.
* [`value2`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#value2): Sets the secondary value for comparison. This property is only applicable for operators like **Between** and **NotBetween**.
* [`selectedField`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filtermodel#selectedfield): Specifies the level name of a dimension where the filter should be applied. **NOTE: This property is applicable only for OLAP data sources.**

For example, to display only countries containing "United" in their name from a "Country" field, set the [`value1`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#value1) property to "United" and the [`condition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#condition) property to **Contains**.

The following table shows all available **operators** for label filtering:

| Operator | Description |
|------|-------------|
| Equals| Shows records that exactly match the specified text.|
| DoesNotEquals| Shows records that do not match the specified text.|
| BeginWith| Shows records that start with the specified text.|
| DoesNotBeginWith| Shows records that do not start with the specified text.|
| EndsWith| Shows records that end with the specified text.|
| DoesNotEndsWith| Shows records that do not end with the specified text.|
| Contains| Shows records that contain the specified text anywhere.|
| DoesNotContains| Shows records that do not contain the specified text.|
| GreaterThan| Shows records where the text value is alphabetically greater.|
| GreaterThanOrEqualTo| Shows records where the text value is alphabetically greater than or equal.|
| LessThan| Shows records where the text value is alphabetically less.|
| LessThanOrEqualTo| Shows records where the text value is alphabetically less than or equal.|
| Between| Shows records with text values that fall between two specified values.|
| NotBetween| Shows records with text values that do not fall between two specified values.|

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs96/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs96/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs96" %}

### Filtering number data type through code

Filter numeric data programmatically to display only values that meet specific numeric conditions, helping you analyze data patterns and ranges more effectively. This filtering approach is specifically designed for fields containing numeric data types and follows the same configuration method as string data filtering, with one key difference: set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#type) property to **Number** enumeration instead of **Label**.

To filter numeric values, specify the filtering criteria using the following properties:
- [`value1`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#value1): The primary value for comparison
- [`condition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#condition): The comparison operator
- [`value2`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#value2): The secondary value (required for **Between** and **NotBetween** conditions)

For example, to display only sales data where the "Sold" field values are less than 40000, set [`value1`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#value1) to "40000" and [`condition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#condition) to **LessThan**.

<!-- markdownlint-disable MD028 -->
> The following operators are supported for number data type: **Equals**, **DoesNotEquals**, **GreaterThan**, **GreaterThanOrEqualTo**, **LessThan**, **LessThanOrEqualTo**, **Between**, and **NotBetween**.

> Number filtering is available only when the field contains numeric data format.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs97/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs97/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs97" %}

### Filtering date data type through code

This filtering option makes it simple to filter data based on date values in your fields, helping you quickly focus on records from specific time periods. This type of filtering is only available for fields that contain date data types and can be configured programmatically using the same approach as explained in the previous section "Filtering string data type through code", with one key difference: set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#type) property to **Date**.

To apply date filtering, specify your filtering criteria using the [`value1`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#value1) and [`condition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#condition) properties. For example, if you have a "Delivery Date" field and want to show delivery records from before a specific date like "2019-01-07", set the [`value1`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#value1) property to "2019-01-07" and the [`condition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#condition) property to **Before**. This will display only the records with delivery dates before January 7, 2019 in your Pivot Table.

> You can use the following operators with date data type filtering: **Equals**, **DoesNotEquals**, **Before**, **BeforeOrEqualTo**, **After**, **AfterOrEqualTo**, **Between**, and **NotBetween**.

> Date filtering is available only when the field has date type [`formatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettings) configured.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs98/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs98/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs98" %}

### Clearing the existing label filter

Users can clear the applied label filter by clicking the **Clear** option at the bottom of the filter dialog. This option is located under the **Label** tab for string and number type filtering, and under the **Date** tab for date type filtering.

![output](images/clearfilter.png)

## Value filtering

Value filtering allows you to filter data based on aggregated values from measure fields, helping you focus on specific data ranges that meet your criteria.

You can enable value filtering by setting the [`allowValueFilter`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#allowvaluefilter) property to **true** in the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings). Once enabled, click the filter icon next to any field in the row or column axis within the field list or grouping bar. A filtering dialog will appear where you can navigate to the "Value" tab to perform value filtering operations.

You can also configure value filtering programmatically using the [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter) property. The following properties are required for value filtering:

* [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#name): Specifies the field name to which the filter applies.
* [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#type): Sets the filter type as **Value**.
* [`measure`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#measure): Specifies the value field name used for filtering.
* [`condition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#condition): Defines the comparison operator such as **Equals**, **GreaterThan**, or **LessThan**.
* [`value1`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#value1): Sets the comparison value or the start value for range operations.
* [`value2`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#value2): Sets the end value, applicable only for **Between** and **NotBetween** operators.
* [`selectedField`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filtermodel#selectedfield): Specifies the dimension level name where filter settings apply. **Note: This property is only applicable for OLAP data sources.**

For example, to display data where the total sum of units sold for each country exceeds 1500, set the [`value1`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#value1) to "1500" and [`condition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter#condition) to **GreaterThan** for the "Country" field.

The following table shows the available operators for value filtering:

| Operator | Description |
|------|-------------|
| Equals| Shows records that match the specified value.|
| DoesNotEquals| Shows records that do not match the specified value.|
| GreaterThan| Shows records where the value is greater than the specified value.|
| GreaterThanOrEqualTo| Shows records where the value is greater than or equal to the specified value.|
| LessThan| Shows records where the value is less than the specified value.|
| LessThanOrEqualTo| Shows records where the value is less than or equal to the specified value.|
| Between| Shows records with values between the specified start and end values.|
| NotBetween| Shows records with values outside the specified start and end values.|

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs99/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs99/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs99" %}

### Clearing the existing value filter

You can clear the applied value filter by clicking the "Clear" option at the bottom of the filter dialog under the "Value" tab.

![Clearing the existing value filter](images/clearvaluefilter.png)

## Event

### MemberFiltering

The [`memberFiltering`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#memberfiltering) event gives you complete control over filter operations by triggering before any filter is applied through the filter dialog. This event activates specifically when you click the **"OK"** button in the filter dialog, allowing you to review, modify, or cancel the filtering process based on your requirements.

This event provides access to the current filter settings, enabling you to customize filter behavior programmatically. You can examine the filter items, modify filter types and conditions, or prevent the filter from being applied entirely.

The event includes the following parameters:

* [`cancel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/memberfilteringeventargs#cancel) - A boolean property that stops the filter from being applied when set to **true**.
* [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter) - Contains the current [filter settings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter) including filter items, types, and conditions.
* [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/memberfilteringeventargs#datasourcesettings) - Holds the updated [dataSourceSettings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings) after the filter is applied.

For example, you can use the [`memberFiltering`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#memberfiltering) event to block the filter action by setting `args.cancel` parameter to **true**. This is shown below:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs100/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs100/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs100" %}

### MemberEditorOpen

When you open the Member Editor dialog, the [`memberEditorOpen`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#membereditoropen) event is triggered. With this event, you can decide which field members are shown, making it easier to include or exclude specific items. The event provides the following options:

- [`fieldName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/membereditoropeneventargs#fieldname): The name of the field for which the Member Editor dialog opens.
- [`fieldMembers`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/membereditoropeneventargs#fieldmembers): The list of all members in the selected field.
- [`cancel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/membereditoropeneventargs#cancel): If you set this property to `true`, the Member Editor dialog will not open.
- [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/membereditoropeneventargs#filtersetting) - Contains the current [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter) including filter items, types, and conditions.

Here’s an example. In the Pivot Table below, only the selected member for the "Country" field appears in the Member Editor dialog:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs101/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs101/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs101" %}

### ActionBegin

The [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actionbegin) event is triggered when a user clicks the filter icon on a field button in either the grouping bar or the field list, allowing users to monitor and control actions in the Pivot Table. The event argument includes the following properties:

- [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#datasourcesettings): Contains the current data source configuration, including input data, rows, columns, values, filters, format settings, and other report settings.
- [`actionName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#actionname): Indicates the name of the action being initiated, such as **Filter field** for filtering.
- [`fieldInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#fieldinfo): Provides information about the selected field for the action.

> **Note**: The `fieldInfo` property is available only when the action involves a specific field, such as filtering, sorting, removing a field from the grouping bar, editing, or changing the aggregation type.

- [`cancel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#cancel): A boolean property that allows you to prevent the current action from completing. Set this to **true** to stop the action.

In the example below, you can prevent a filter action by setting **args.cancel** to **true** in the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actionbegin) event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs102/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs102/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs102" %}

### ActionComplete

The [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actioncomplete) event triggers when filtering actions are completed through the field button in both the grouping bar and field list UI. You can use this event to monitor current UI actions and implement custom logic based on the completed operations.

The event provides the following parameters:

- [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#datasourcesettings): Contains the current data source configuration, including input data source, rows, columns, values, filters, format settings, and other report settings.

- [`actionName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#actionname): Specifies the name of the completed action. For filtering operations, the action name appears as **Field filtered**.

- [`fieldInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#fieldinfo): Contains information about the selected field that was involved in the action.

> **Note**: This parameter is available only when the action involves a specific field, such as filtering, sorting, removing a field from the grouping bar, editing, or changing the aggregation type.

- [`actionInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#actioninfo): Provides detailed information about the current UI action. For filtering operations, this includes filter members, field name, and other relevant details.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs103/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs103/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs103" %}

### ActionFailure

The [`actionFailure`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actionfailure) event is triggered when a UI action fails to produce the expected result. This event provides detailed information about the failure through the following parameters:

* [`actionName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionfailureeventargs#actionname): It holds the name of the current action failed. For example, if the action fails while filtering, the action name will be shown as **Filter field**.

* [`errorInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionfailureeventargs#errorinfo): It holds the error information of the current UI action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs104/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs104/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs104" %}