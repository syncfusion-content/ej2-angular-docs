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

Filtering allows to view the pivot table with selective records based on members that can be either included or excluded through UI and code-behind.

The following are the three different types of filtering:

* Member filtering
* Label filtering
* Value filtering

> When all the above filtering options are disabled via code-behind, then the filter icon would be disabled in the field list or grouping bar UI.

## Member filtering

Allows to view the pivot table with selective records based on included and excluded members in each field. By default, member filter option is enabled by the [`allowMemberFilter`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#allowmemberfilter) boolean property in [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/). This UI option helps end user to filter members by clicking the filter icon besides any field in the row, column and filter axes available in the field list or grouping bar UI at runtime.

![output](images/fieldlist_filtericon.png "Member filter icon in field list")
<br/>
![output](images/filter_icon_gb.png "Member filter icon in grouping bar")
<br/>
![output](images/filter_dialog_gb.png "Member filter dialog with checked and unchecked members")
<br/>
![output](images/filter_grid_gb.png "Resultant pivot table on member filter")

Meanwhile filtering can also be configured at code behind using the [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/) while initial rendering of the component. The basic settings required to add filter criteria are:

* [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#name): It allows to set the appropriate field name.
* [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#type): It allows to set the filter type as **Include** or **Exclude** to include or exclude field members respectively.
* [`items`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#items): It allows to set the members which needs to be either included or excluded from display.
* [`levelCount`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filterModel/#levelcount): It allows to set level count of the field to fetch data from the cube. **NOTE: This property applicable only for OLAP data source.**

> When specifying unavailable or inappropriate members to include or exclude filter items collection, they will be ignored.

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

The member filter dialog comes with an option "All", which on checked selects all members and on unchecked deselects all members. The option "All" would appear in intermediate state mentioning that both selected and unselected child members are available.

![output](images/editor_inter.png)

When all members are deselected, the "Ok" button in member filter dialog would be disabled, meaning, atleast one member should be selected and bound to the pivot table component.

![output](images/editor_alluncheck.png)

### Provision to search specific member(s)

By default, search option is available to quickly navigate to the desired members. It can be done by entering the starting character(s) of the actual members.

![output](images/search.png)

### Option to sort members

User can sort members within the member editor either to ascending (or) descending using the built-in sort icons. When both ascending and descending options are not chosen, then members will be shown in the default order (retrieved as such from data source).

![output](images/member-sort.png)

### Performance Tips

In member filter dialog, end user can set the limit to display members while loading large data. Based on this limit, initial loading will get completed quickly without any performance constraint. Also, a message with remaining member count, which are not part of the UI, will be displayed in the member editor.

The data limit can be set using the [`maxNodeLimitInMemberEditor`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#maxnodelimitinmembereditor) property in pivot table. By default, the property holds the numeric value **1000**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs93/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs93/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs93" %}

Meanwhile, end user can utilize the search option to refine the members from the exceeded limit. For example, consider that there are 5000 members in the name "Node 1", "Node 2", "Node 3", and so on... and user has set the property [`maxNodeLimitInMemberEditor`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#maxnodelimitinmembereditor) to **500**. In this case, only the initial 500 members will be displayed by default leaving a message "4500 more items. Search to refine further.". To get the member(s) between 501 to 5000, enter the starting character(s) in search option to bring the desired member(s) from the exceeded limit to the UI. Now, end user can either check or uncheck to continue with the filtering process.

### Loading members on-demand

> This property is applicable only for OLAP data sources.

Allows to load members inside the filter dialog on-demand by setting the [`loadOnDemandInMemberEditor`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#loadondemandinmembereditor) property to **true**. By default, first level is loaded in the member editor from the OLAP cube. So, the member editor will be opened quickly, without any performance constraints. By default, this property is set to **true** and the search will only be applied to the level members that are loaded. In the meantime, the next level members can be added using either of the following methods.

* By clicking on the expander button of the respective member, only its child members will be loaded.
* Select a level from the drop-down list that will load all members up to the chosen level from the cube.

This will help to avoid performance lags when opening a member editor whose hierarchy has a large number of members. Once level members are queried and added one after the other, they will be maintained internally (for all operations like dialog re-opening, drag and drop, etc...) and will not be removed until the web page is refreshed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs94/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs94/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs94" %}

![output](images/ondemand_member.png)

In the example above, "Customer Geography" dimension is loaded with first level (Country) during initial loading. The search will therefore be applied on the members of the "Country" level alone. After that, you can load members to the next level (State-Province) on-demand by expanding the "Australia" node (or) by selecting the "State-Province" level from the drop down list.

* When you expand "Australia", the "State-Province" members will be loaded to "Australia" alone.
* If you load the members by selecting the "State-Province" level from the drop-down list means, the "State-Province" members will be loaded across all countries like Australia, Canada, France, etc...

Once members are loaded, they are maintained internally and will not be removed until the page is refreshed.

If the property is set to **false**, all members of all levels will be queried and added during initial loading itself. Only one query is executed here to retrieve all members from all levels. Since it fetches large number of members, you can feel the performance difference while opening the member editor. But still, expand and search operation is quick here because the members have already been retrieved and populated.

![output](images/initial_member.png)

### Loading members based on level number

> This property is applicable only for OLAP data sources.

Allows user to load the members on the basis of the level number set in the [`levelCount`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filterModel/#levelcount) property in the [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettingsModel/#filtersettings). By default, this property is set to **1** and the search will only take place within the members of the first level.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs95/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs95/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs95" %}

![output](images/level-count.png)

In the example above, we set [`levelCount`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filterModel/#levelcount) as **2** for the "Customer Geography" dimension in [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettingsModel/#filtersettings). So, the "Customer Geography" dimension is loaded with the "Country" and "State-Province" levels during initial loading itself. The search will therefore be applied only to the members of the "Country" and "State-Province" levels. After that, you can load members to the next level on-demand by expanding the respective "State-Province" node (or) by selecting the "City" level from the drop-down list.

## Label filtering

The label filtering helps to view the pivot table with selective header text in fields across row and column axes based on the applied filter criteria. The following are the three different types of label filtering available:

* Filtering string data type
* Filtering number data type
* Filtering date data type

The label filtering dialog can be enabled by setting the [`allowLabelFilter`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#allowmemberfilter) property in [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/) to **true**. After enabling this API, click the filter icon besides any field in row or column axis available in field list or grouping bar UI. Now a filtering dialog will appear and navigate to "Label" tab to perform label filtering operations.

### Filtering string data type through code

This type of filtering is exclusively applicable for fields with members in string data type. The filtering can be configured using the [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/) through code-behind. The properties required for label filter are:

* [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#name): Sets the field name.
* [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#type): Sets the filter type as **Label** to the field.
* [`condition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#condition): Sets the operator type such as **Equals**, **GreaterThan**, **LessThan**, etc.
* [`value1`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#value1): Sets the start value.
* [`value2`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#value2): Sets the end value. It is applicable only for the operator such as **Between** and **NotBetween**.
* [`selectedField`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filterModel/#selectedfield): Sets level name of a dimension, where the filter settings are to be applied. **NOTE: This property applicable only for OLAP data source.**

For example, in a "Country" field, to show countries names that contains "United" text alone, set [`value1`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#value1) to "United" and [`condition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#condition) to **Contains** for desired output in pivot table.
**Operators** that can be used in label filtering are:

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
{% include code-snippet/pivot-grid/getting-started-cs96/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs96/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs96" %}

### Filtering number data type through code

This type of filtering is exclusively applicable for fields with members in number data type. The filtering can be configured in a similar way explained in the previous section - "Filtering string data type through code", except the [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#type) property setting. For number data type, set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#type) property to **Number** enumeration.

For example, in a "Sold" field, to show the values less than "40000", set [`value1`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#value1) to "40000" and [`condition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#condition) to **LessThan** for desired output in pivot table.
<!-- markdownlint-disable MD028 -->
> Operators like **Equals**, **DoesNotEquals**, **GreaterThan**, **GreaterThanOrEqualTo**, **LessThan**, **LessThanOrEqualTo**, **Between**, and **NotBetween** are alone applicable for number data type.

> Number filtering option is enabled only when the field contains the **number** format.

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

This type of filtering is exclusively applicable for fields with members in date data type. The filtering can be configured in a similar way explained in the prior section - "Filtering string data type through code", except the [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#type) property setting. For date data type, set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#type) property to **Date** enumeration.

For example, in a "Delivery Date" field, to show the delivery records of the first week of the year 2019, then set [`Value1`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#value1) to "2016" and [`Condition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#condition) to **Before** for desired output in pivot table.

> Operators like **Equals**, **DoesNotEquals**, **Before**, **BeforeOrEqualTo**, **After**, **AfterOrEqualTo**, **Between**, and **NotBetween** are alone applicable for date data type.

> Date filtering option is enabled only when the field has **date** type `formatsettings`.

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

End user can clear the applied label filter by simply click the "Clear" option at the bottom of the filter dialog under "Label" tab.

![output](images/clearfilter.png)

## Value filtering

The value filtering helps to perform filter operation based only on value fields and its resultant aggregated values over other fields defined in row and column axes.

The value filtering dialog can be enabled by setting the [`allowValueFilter`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/#allowvaluefilter) property in [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings/) to **true**. After enabling this API, click the filter icon besides any field in row or column axis available in field list or grouping bar UI. Now a filtering dialog will appear and navigate to "Value" tab to perform value filtering operations.

The value filtering can also be configured using the [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/) through code-behind. The properties required for value filter are:

* [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#condition): Sets the normal field name.
* [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#condition): Sets the filter type as **Value**to the field.
* [`measure`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#condition): Sets the value field name.
* [`condition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#condition): Sets the operator type such as **Equals**, **GreaterThan**, **LessThan** etc.
* [`value1`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#condition): Sets the start value.
* [`value2`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#condition): Sets the end value. It is applicable only for the operator such as **Between** and **NotBetween**.
* [`selectedField`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filterModel/#selectedfield): Sets level name of a dimension, where the filter settings are to be applied. **NOTE: This property applicable only for OLAP data source.**

For example, to show the data where total sum of units sold for each country exceeding 2000, set [`Value1`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#value1) to "1500" and [`Condition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/#condition) to **GreaterThan** in the "Country" field.

**Operators** that can be used in value filtering are:

| Operator | Description |
|------|-------------|
| Equals| Displays the pivot table that matches with the value.|
| DoesNotEquals| Displays the pivot table that does not match with the given value.|
| GreaterThan| Displays the pivot table when the value is greater.|
| GreaterThanOrEqualTo| Displays the pivot table when the value is greater than or equal.|
| LessThan| Displays the pivot table when the value is lesser.|
| LessThanOrEqualTo| Displays the pivot table when the value is lesser than or equal.|
| Between| Displays the pivot table that records between start and end values.|
| NotBetween| Displays the pivot table that does not record between start and end values.|

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

End user can clear the applied value filter by simply click the "Clear" option at the bottom of the filter dialog under "Value" tab.

![output](images/clearvaluefilter.png)

## Event

### MemberFiltering

The event [`memberFiltering`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#memberfiltering) triggers before applying filter using the dialog, that is, specifically while clicking the **"OK"** button. Using this event user can view or modify the applied [filter settings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/) such as filter items, type of filter, conditions, etc. It has following parameters:

* `cancel` - Boolean property, when the parameter `cancel` is set to **true**, applied filtering will not be updated
* [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/) - It holds current [filter settings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/filter/).
* `dataSourceSettings` - It holds updated datasource settings.

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

The event [`memberEditorOpen`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#membereditoropen) fires while opening member editor dialog. It allows to customize the field members to be displayed in the dialog. It has the following parameters

* `fieldName`: It holds the name of the appropriate field.

* `fieldMembers`: It holds the members of a field.

* `cancel`: It is a boolean property and by setting this to true, dialog won’t be created.

In the below sample, the member editor of field "Country" shows only the selected Item.

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

The event [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#actionbegin) triggers when clicking the filter icon in the field button, which is present in both grouping bar and field list UI. This allows user to identify the current action being performed at runtime. It has the following parameters:

* `dataSourceSettings`:  It holds the current data source settings such as input data source, rows, columns, values, filters, format settings and so on.

* `actionName`: It holds the name of the current action began. For example, while filtering, the action name will be shown as **Filter field**.

* `fieldInfo`: It holds the selected field information.

>Note: This option is applicable only when the field based UI actions are performed such as filtering, sorting, removing field from grouping bar, editing and aggregation type change.

* `cancel`: It allows user to restrict the current action.

In the below sample, filter action can be restricted by setting the **args.cancel** option to **true** in the `actionBegin` event.

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

The event [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#actioncomplete) triggers when the filtering action via the field button, which is present in both grouping bar and field list UI, is completed. This allows user to identify the current UI actions being completed at runtime. It has the following parameters:

* `dataSourceSettings`:  It holds the current data source settings such as input data source, rows, columns, values, filters, format settings and so on.

* `actionName`: It holds the name of the current action completed. For example, after filtering , the action name will be shown as **Field filtered**.

* `fieldInfo`: It holds the selected field information.

>Note: This option is applicable only when the field based UI actions are performed such as filtering, sorting, removing field from grouping bar, editing and aggregation type change.

* `actionInfo`: It holds the unique information about the current UI action. For example, if the filter action is completed, the event argument contains information such as filter members, field name, and so on.

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

The event [`actionFailure`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#actionfailure) triggers when the current UI action fails to achieve the desired result. It has the following parameters:

* `actionName`: It holds the name of the current action failed. For example, if the action fails while filtering, the action name will be shown as **Filter field**.

* `errorInfo`: It holds the error information of the current UI action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs104/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs104/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs104" %}