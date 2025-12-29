---
layout: post
title: Field list in Angular Pivotview component | Syncfusion
description: Learn here all about Field list in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Field list 
documentation: ug
domainurl: ##DomainURL##
---

# Field list in Angular Pivotview component

The Field List makes it easy to organize and analyze data in your Pivot Table. It provides a user-friendly interface similar to Microsoft Excel that allows you to add or remove fields and move them between different axes like columns, rows, values, and filters. You can also apply sorting and filtering options while working with your data.

The Field List can be displayed in two different ways to work with your Pivot Table:

* **In-built Field List (Popup)**: Shows a field list icon in the Pivot Table interface. Click this icon to open the field list in a dialog box.
* **Stand-alone Field List (Fixed)**: Displays the field list in a fixed position on your web page alongside the Pivot Table.

## In-built Field List (Popup)

The built-in field list provides quick access to modify your PivotTable report settings without taking up permanent space on your webpage. To enable this option, set the [`showFieldList`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#showfieldlist) property of the PivotTable to **true**. A field list icon will then appear in the top-left corner of the PivotTable. When you click this icon, the field list dialog opens.

> The field list icon appears in the top right corner of the Pivot Table when the grouping bar is enabled.

To use the field list, you need to add the `FieldListService` module to your Pivot Table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs76/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs76/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs76" %}

## Stand-alone Field List (Fixed)

The stand-alone Field List allows users to keep the Field List visible at a specific place on the web page, making it easy to access its options without opening a popup each time. To configure the stand-alone Field List, set the [`renderMode`](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/index-default#rendermode) property to **Fixed** in the Pivot Field List component.

> To ensure the field list works seamlessly with the Pivot Table, use the [`updateView`](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/index-default#updateview) and [`update`](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/index-default#update) methods. These methods synchronize data source changes between the field list and Pivot Table components, keeping both components in sync when users make modifications.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs77/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs77/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs77" %}

## Search desired field

The field search option helps you quickly locate and work with specific fields in the Field List. Instead of scrolling through the entire list of available fields, you can simply type the field name in the search box to instantly filter and find the desired field.

You can enable the field search option in two different Field List configurations: the Stand-alone Field List or the Pivot Table's built-in popup Field List.

**Stand-alone Field List**

To enable the search box in the stand-alone Field List UI, set the [`enableFieldSearching`](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/index-default#enablefieldsearching) property to **true** in `ejs-pivotfieldlist`.

> By default, the field search option is disabled in the Field List UI.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs78/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs78/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs78" %}

**Pivot Table's Built-in Popup Field List**

To enable the search box in the Pivot Table's built-in popup Field List UI, set the [`enableFieldSearching`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#enablefieldsearching) property to **true** in `ejs-pivotview`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs79/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs79/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs79" %}

## Option to sort fields

The field list provides a simple way to organize fields in different orders, making it easier to locate and work with the data you need. Users can sort fields in the field list UI in ascending, descending, or default order (as obtained from the data source) using the built-in sort icons.

> By default, fields are displayed in the default order as they appear in the data source.

![Field list with sorting options](images/fieldlist-default-sort.png)

### Sort fields in a desired order

To display the fields in descending order by default whenever the Field List opens, you can set the [`defaultFieldListOrder`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/loadeventargs#defaultfieldlistorder) property to **Descending** within the [`load`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#load) event of the Pivot Table. This lets users immediately see fields sorted from Z to A when they open the Field List.

Below is an example showing how to set up this option when initializing the Pivot Table:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs309/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs309/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs309" %}

## Group fields under desired folder name

Organizing fields into custom folders in the Field List helps users manage and locate fields more efficiently. Users can group fields under a specific folder name in the Field List UI by setting the [`groupName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldoptionsmodel#groupname) property within the [`fieldMapping`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#fieldmapping) configuration of the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings). This feature allows users to visually categorize fields in the Pivot Table for improved organization and clarity.

> **Note**: Fields can only be grouped under a single level using the [`groupName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldoptionsmodel#groupname) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs80/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs80/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs80" %}

## Add or remove fields

The Field List allows users to quickly modify their data analysis by selecting or unselecting fields as needed. Using the checkbox beside each field, users can easily add fields to include them in the report or remove fields to exclude them from the current analysis at runtime.

![Field List with checkboxes for adding or removing fields](images/fieldlist_treeview.png)

## Remove specific field(s) from displaying

When you connect a data source to the Pivot Table, all available fields from the data source are automatically shown in the field list. If you want to hide certain fields from the field list, you can do so easily. To hide one or more fields, add their names to the [`excludeFields`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#excludefields) option inside the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs81/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs81/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs81" %}

## Re-arranging fields

To rearrange fields, users can drag a field from the Field List and drop it into the desired axis (column, row, value, or filter) using the drag-and-drop holder. This allows users to modify the report dynamically during runtime, adjusting the layout to suit their needs.

![output](images/fieldlist_axes.png)

## Filtering members

Users can filter members in the row, column, and filter axes by selecting the filter icon next to each field. This opens a dialog where users can choose to include or exclude specific members from the Pivot Table. To learn more about filtering members, [refer to the filtering documentation](./filtering).

![Filter icon next to each field](images/fieldlist_filtericon.png)

![Filter dialog to include or exclude members](images/fieldlist_editor.png)

![Pivot Table after filtering members](images/fieldlist_filteringgrid.png)

## Sorting members

The Pivot Table allows users to sort members in the row and column axes using a sort icon next to each field. By clicking this icon, users can arrange members in either ascending or descending order at runtime. This option helps users organize data in a way that suits their needs. For more details on sorting members, [refer here](./sorting).

![Sorting the field list](images/fieldlist_sorticon.png)
<br/>

![Sorted pivot table](images/fieldlist_sortgrid.png)

## Calculated fields

The calculated field option allows users to create a new field based on existing fields from the data source using basic arithmetic operations, such as addition, subtraction, multiplication, and division. To use this option in the Field List UI, set the [`allowCalculatedField`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#allowcalculatedfield) property in the Pivot Table to **true**. When enabled, a button appears in the Field List UI. Clicking this button opens the calculated field dialog, where users can define a new calculated field. For more details on calculated fields, refer to [this section](./calculated-field).

![Enabling calculated field in Field List UI](images/gs_calc_button.png)
<br/>

![Creating new calculated field](images/gs_calc_dialog.png)
<br/>

![New calculated field named Total Amount has been added in the Pivot Table](images/gs_calc_grid.png)

## Changing aggregation type of value fields at runtime

Users can perform calculations on a group of values by selecting an aggregation type. Each value field in the Field List appears with a dropdown icon. Clicking this icon allows users to choose an aggregation type, such as sum, average, or count, at runtime. Once selected, the Pivot Table updates automatically to reflect the chosen aggregation type for the values. For more details on aggregation, refer to [aggregation](./aggregation).

![Icon to change aggregation type](images/aggregation_fl_icon.png)
<br/>

![List of pre-defined aggregation types](images/fieldlist_aggregation_avg.png)
<br/>

![Resultant Pivot Table shows that the average aggregation type has been applied to the Unit Sold value field](images/fieldlist_aggregation_grid.png)

## Defer layout update

The defer layout update option allows users to update the Pivot Table only when needed, instead of after every change in the Field List. To enable this option, set the [`allowDeferLayoutUpdate`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#allowdeferlayoutupdate) property to **true** in the Pivot Table. When enabled, a checkbox appears in the Field List, checked by default. Users can uncheck this checkbox to make changes without updating the Pivot Table immediately, and then apply all changes at once. For more details on defer layout update, refer to [defer update](./defer-update).

![Defer layout update checkbox](images/fieldlist_deferupdate.png)

## Show built-in Field List (Popup) over specific target

The built-in Field List dialog can be displayed over a specific element on a web page by setting the target element in the [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#databound) event. By default, the dialog appears over the Pivot Table's parent element. Users can change this by passing a different target element, such as `document.body`, to show the Field List dialog in a desired location.

The sample code below demonstrates how to display the built-in Field List dialog using `document.body` as the target element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs82/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs82/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs82" %}

## Show field list using toolbar

The Field List can be displayed in the toolbar by enabling specific options in the Pivot Table. To show the Field List in the toolbar, set the [`showFieldList`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#showfieldlist) and [`showToolbar`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#showtoolbar) properties to **true**. Additionally, include the **FieldList** item in the [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#toolbar) property. When these options are enabled, the Field List icon automatically appears in the toolbar, and it will not be displayed in the top-left corner of the Pivot Table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs83/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs83/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs83" %}

## Invoking dynamic Field List (Customized)

You can open the Field List dialog independently using an external button, allowing you to interact with the Pivot Table dynamically. To achieve this, set the [`renderMode`](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/index-default#rendermode) property to `Popup`. This setting ensures the Field List dialog appears when you click the external button.

You can also specify where the Field List dialog appears on the web page by using the `target` property. By default, the `target` value is set to `null`, which positions the dialog relative to the `document.body` element.

To ensure the Field List and Pivot Table stay in sync, use the [`updateView`](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/index-default#updateview) and [`update`](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/index-default#update) methods. These methods update the data source in both the Field List and the Pivot Table at the same time, keeping the displayed data consistent.

The sample code below shows how to open the Field List dialog using an external button click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs84/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs84/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs84" %}

## Set caption to fields which isn’t bound to the report

You can assign captions to all fields in the data source, even if they are not currently used in the Pivot Table report. This is done using the [`enginePopulated`](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/index-default#enginepopulated) event. When you set a caption, it appears in both the Grouping Bar and the Field List for the respective field.

In the example below, captions are set for the `Year` and `Quarter` fields dynamically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs85/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs85/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs85" %}

## Show values button

At runtime, the **Values** button in the field list allows users to move the values position to a different place (index) among other fields in the column or row axis of the Pivot Table. To enable the **Values** button, set the [`showValuesButton`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#showvaluesbutton) property to **true**.

> This option is only available for relational data source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs86/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs86/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs86" %}

## Events

### EnginePopulated

The [`enginePopulated`](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/index-default#enginepopulated) event is available in both the Pivot Table and the Field List. It triggers after the data engine is populated with the updated report settings, allowing the Pivot Table and Field List to stay in sync when changes are made.

- In the Field List, the [`enginePopulated`](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/index-default#enginepopulated) event is triggered whenever the report is modified, such as when fields are added, removed, or rearranged. The updated report is sent to the Pivot Table using the [`updateView`](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/index-default#updateview) method within this event to refresh the Pivot Table's display.
- In the Pivot Table, the [`enginePopulated`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#enginepopulated) event is triggered when the report is updated. The modified report is passed to the Field List using the [`update`](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/index-default#update) method to ensure the Field List reflects the changes.

This event includes the following parameters: [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/enginepopulatedeventargs#datasourcesettings), [`pivotFieldList`](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/enginepopulatedeventargs#pivotfieldlist), and [`pivotValues`](https://ej2.syncfusion.com/angular/documentation/api/pivotfieldlist/enginepopulatedeventargs#pivotvalues).

> Note: This event is not needed for the popup Field List, as it is built into the Pivot Table.

### FieldListRefreshed

The [`fieldListRefreshed`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#fieldlistrefreshed) event triggers whenever a change occurs in the field list UI, such as adding, removing, or rearranging fields, or applying sort or filter options. This event provides two parameters: [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldlistrefreshedeventargs#datasourcesettings) and [`pivotValues`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fieldlistrefreshedeventargs#pivotvalues). These parameters allow users to track and respond to updates in the field list. The event applies only to the static field list.

For example, when a user sorts a field in the field list, the field list updates, and the [`fieldListRefreshed`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#fieldlistrefreshed) event triggers. Users can perform custom operation inside that event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs87/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs87/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs87" %}

### OnFieldDropped

The [`onFieldDropped`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#onfielddropped) event triggers when a user drops a field into an axis in the Pivot Table. This event provides access to details about the dropped field and the Pivot Table's configuration through its parameters. The event includes the following parameters:

- [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fielddroppedeventargs#datasourcesettings): Represents the current report configuration of the Pivot Table, defined in the [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings) property. It provides access to the Pivot Table's data structure and settings.
- [`droppedAxis`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fielddroppedeventargs#droppedaxis): Indicates the axis (such as row, column, value, or filter) where the field has been dropped.
- [`droppedField`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fielddroppedeventargs#droppedfield): Contains details about the field item that was dropped, including its properties.
- [`droppedPosition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fielddroppedeventargs#droppedposition): Specifies the position within the axis where the field was placed.
- [`fieldName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/fielddroppedeventargs#fieldname): Provides the name of the dropped field.

In the following code example, we changed the caption of the dropped field using this event at runtime:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs88/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs88/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs88" %}

### ActionBegin

The [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actionbegin) event triggers when UI actions such as sorting, filtering, aggregation, or editing calculated fields begin in the field list. This event allows users to identify the current action being performed at runtime and provides the following parameters:

* [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#datasourcesettings): Contains the current data source settings, including input data source, rows, columns, values, filters, format settings, and other configurations.

* [`actionName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#actionname): Contains the name of the current action that has begun. The following table shows the UI actions and their corresponding action names:

   | Action | Action Name|
   |------|-------------|
   | [`Sort icon`](./field-list#sorting-members)| Sort field|
   | [`Filter icon`](./field-list#filtering-members)| Filter field|
   | [`Aggregation`](./field-list#changing-aggregation-type-of-value-fields-at-runtime) (Value type dropdown and menu)| Aggregate field|
   | [`Edit icon`](./calculated-field#editing-through-the-field-list-and-the-grouping-bar)| Edit calculated field|
   | [`Calculated field button`](./field-list#calculated-fields)| Open calculated field dialog|
   | [`Field list`](./field-list#in-built-field-list-popup)| Open field list|
   | [`Field list tree – Sort icon`](./field-list#option-to-sort-fields)| Sort field tree|

* [`fieldInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#fieldinfo): Contains information about the selected field.

> **Note**: This parameter is available only when the action involves a specific field, such as filtering, sorting, removing a field from the grouping bar, editing, or changing the aggregation type.

* [`cancel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#cancel): A boolean property that allows you to prevent the current action from completing. Set this to **true** to stop the action from proceeding.

In the following sample, you can restrict opening the popup field list by setting the **args.cancel** option to **true** in the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actionbegin) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs89/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs89/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs89" %}

### ActionComplete

The [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actioncomplete) event is triggered when UI actions such as sorting, filtering, aggregation, or editing calculated fields in the field list are completed. This event allows users to identify which UI action has been completed at runtime. The event provides the following parameters:

- [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#datasourcesettings): Contains the current [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#datasourcesettings) such as input data source, rows, columns, values, filters, format settings, and other configurations.

- [`actionName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#actionname): Contains the name of the completed action. The following table shows the UI actions and their corresponding names:

| Action | Action Name |
|------|-------------|
| [`Sort icon`](./field-list#sorting-members) | Field sorted |
| [`Filter icon`](./field-list#filtering-members) | Field filtered |
| [`Aggregation`](./field-list#changing-aggregation-type-of-value-fields-at-runtime) (Value type dropdown and menu) | Field aggregated |
| [`Edit icon`](./calculated-field#editing-the-existing-calculated-field-formula) | Calculated field edited |
| [`Calculated field button`](./field-list#calculated-fields) | Calculated field applied |
| [`Field list`](./field-list#in-built-field-list-popup) | Field list closed |
| [`Field list tree – Sort icon`](./field-list#option-to-sort-fields) | Field tree sorted |

- [`fieldInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#fieldinfo): Contains information about the selected field. This parameter is available only when field-based UI actions are performed, such as filtering, sorting, removing fields from the grouping bar, editing, and changing aggregation types.

> **Note**: This parameter is available only when the action involves a specific field, such as filtering, sorting, removing a field from the grouping bar, editing, or changing the aggregation type.

- [`actionInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#actioninfo): Contains specific information about the current UI action. For example, when sorting is completed, this parameter includes details such as the sort order and field name.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs90/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs90/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs90" %}

### ActionFailure

The [`actionFailure`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actionfailure) event is triggered when a UI action fails to produce the expected result. This event provides detailed information about the failure through the following parameters:

* [`actionName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionfailureeventargs#actionname): It holds the name of the current action failed. The following are the UI actions and their names:

   | Action | Action Name|
   |------|-------------|
   | [`Sort icon`](./field-list#sorting-members)| Sort field|
   | [`Filter icon`](./field-list#filtering-members)| Filter field|
   | [`Aggregation`](./field-list#changing-aggregation-type-of-value-fields-at-runtime) (Value type drop down and menu)| Aggregate field|
   | [`Edit icon`](./calculated-field#editing-the-existing-calculated-field-formula)| Edit calculated field|
   | [`Calculated field button`](./field-list#calculated-fields)| Open calculated field dialog|
   | [`Field list`](./field-list#in-built-field-list-popup)| Open field list|
   | [`Field list tree – Sort icon`](./field-list#option-to-sort-fields)| Sort field tree|

* [`errorInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionfailureeventargs#errorinfo): It holds the error information of the current UI action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs91/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs91/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs91" %}

## See Also

* [Change load limited data in member editor](./filtering#performance-tips)
* [Customize the icons for pivot table](./how-to/customize-the-icons-for-pivot-grid)