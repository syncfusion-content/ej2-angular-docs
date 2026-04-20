---
layout: post
title: Editing in Angular Pivotview component | Syncfusion
description: Learn here all about Editing in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Editing 
documentation: ug
domainurl: ##DomainURL##
---

# Editing in Angular Pivotview component

> This feature is applicable only for the relational data source.

The cell editing option allows users to directly change data in the pivot table by adding, updating, or deleting raw data items within any value cell. When you double-click a value cell, the raw items appear in a data grid within a new window. In this data grid, you can perform CRUD operations by double-clicking cells or using toolbar options. After you finish editing the raw items, the pivot table automatically updates the aggregated values. To enable this option, set the [`allowEditing`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel#allowediting) property in [`editSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel) to **true**.

The [`editSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel) property provides comprehensive control over editing behavior through the following options:

* [`allowAdding`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel#allowadding): Enables adding new rows to the data grid.
* [`allowEditing`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel#allowediting): Allows editing existing records in the data grid.
* [`allowDeleting`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel#allowdeleting): Enables deleting records directly from the data grid.
* [`allowCommandColumns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel#allowcommandcolumns): Displays built-in command buttons (edit, delete, save, cancel) in the data grid.
* [`mode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel#mode): Sets the editing mode.
* [`allowEditOnDblClick`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel#alloweditondbclick): Enables users to start editing a cell by double-clicking it.
* [`showConfirmDialog`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel#showconfirmdialog): Shows a confirmation dialog before saving changes.
* [`showDeleteConfirmDialog`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel#showdeleteconfirmdialog): Shows a confirmation dialog before deleting a record.
* [`allowInlineEditing`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel#allowinlineediting): Allows users to edit content directly in the cell.

The CRUD operations available in the data grid toolbar and command column are:

| Toolbar Button | Actions |
|----------------|---------|
| Add | Add a new row.|
| Edit | Edit the current row or cell.|
| Delete | Delete the current row.|
| Update | Update the edited row or cell.|
| Cancel | Cancel the edited state. |

The following are the supported edit types in the data grid:

* Normal
* Dialog
* Batch
* Command Columns

## Normal

Normal edit mode allows users to edit one row at a time in the editing dialog with simple data changes and updates. In normal edit mode, when editing begins, the selected row changes to edit state. Cell values can be modified and saved to the data source by clicking the "Update" toolbar button. To enable normal edit mode, set the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel#mode) property in [`editSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel) to **Normal**.

> The normal edit mode **Normal** is set as the default mode for editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs53/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs53/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs53" %}

## Dialog

The dialog edit mode provides a focused editing environment by displaying the selected row data in an exclusive dialog window, ensuring clear visibility and controlled data modification. In dialog edit mode, when editing begins, the currently selected row data appears in a dedicated dialog. Cell values can be modified and saved to the data source by clicking the "Save" button in the dialog. To enable dialog editing, set the [`Mode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel#mode) property in [`editSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel) to **Dialog**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs54/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs54/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs54" %}

## Batch

Batch editing enables users to make multiple changes to data grid cells and save them all at once, improving efficiency for bulk updates. When a user double-clicks any data grid cell in batch mode, the target cell changes to edit state. Users can perform multiple changes and save all modifications (added, changed, and deleted data) to the data source by clicking the **Update** toolbar button. To enable batch editing, set the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel#mode) property in [`editSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel) to **Batch**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs55/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs55/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs55" %}

## Command column

The command column option provides dedicated action buttons within the data grid for streamlined CRUD operations as an alternative to using toolbar options. An additional column appears in the data grid layout containing command buttons to perform the CRUD operations. To enable the command columns, set the [`allowCommandColumns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel#allowcommandcolumns) property in [`editSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel) to **true**.

The available built-in command buttons are:

| Command Button | Actions |
|----------------|---------|
| Edit | Edit the current row.|
| Delete | Delete the current row.|
| Save | Update the edited row.|
| Cancel | Cancel the edited state. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs56/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs56/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs56" %}

## Inline Editing

The inline editing option provides streamlined data modification by allowing direct editing of value cells without opening an external dialog, improving workflow efficiency for quick data updates. This editing mode applies only when a single raw data item corresponds to the value of the cell and works with all editing modes including normal, batch, dialog, and column commands. Enable inline editing by setting the [`allowInlineEditing`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettings#allowinlineediting) property in [`editSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/celleditsettingsmodel) to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs57/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs57/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs57" %}

## Editing using the pivot chart

Pivot chart editing provides an alternative way to conveniently update, add, or remove underlying data associated with any chart data point. This empowers users to perform CRUD (Create, Read, Update, Delete) operations on the underlying raw items linked to visualized data points for enhanced analysis.

Clicking a data point in the pivot chart displays the underlying raw items in a data grid within a popup window. Users can then add, update, or delete these items using any of the supported edit types (normal, dialog, batch, or command column), following the same steps as for pivot table cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs58/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs58/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs58" %}

## Events

### EditCompleted

The event [`editCompleted`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#editcompleted) triggers when values cells are edited completely. The event provides edited cell(s) information along with its previous cell value. It also helps to do the CRUD operation by manually updating the data source which is connected to the component. It has the following parameters.

* [`currentData`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/editcompletedeventargs#currentdata) - It holds the current raw data of the edited cells.
* [`previousData`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/editcompletedeventargs#previousdata) - It holds the previous raw data of the edited cells.
* [`previousPosition`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/editcompletedeventargs#previousposition) - It holds the index of the raw data whose values are edited.
* [`cancel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/editcompletedeventargs#cancel) - It is a boolean property and if it is set as **true**, the editing won’t be reflected in the pivot table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs59/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs59/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs59" %}

### DrillThrough

For more information [`refer`](./drill-through#drillthrough) here.

### BeginDrillThrough

For more information [`refer`](./drill-through#begindrillthrough) here.

### ActionBegin

The [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actionbegin) event triggers when editing actions such as add, edit, save, or delete are started through the UI (either by dialog or inline editing). This event lets users monitor the editing workflow and take action before the operation completes. The following parameters are available in the event:

- [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#datasourcesettings): Contains the current data source settings, including all input data, rows, columns, values, filters, and format settings.
- [`actionName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#actionname): Shows the name of the editing action that has started. The possible action names are:

   | Action  | Action Name         |
   |---------|--------------------|
   | Editing | Edit record        |
   | Save    | Save edited records|
   | Add     | Add new record     |
   | Delete  | Remove record      |

- [`cancel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionbegineventargs#cancel): Allows users to stop (cancel) the action by setting this option to **true**.

For example, you can restrict add and save actions by setting **args.cancel** to **true** in the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actionbegin) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs60/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs60/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs60" %}

### ActionComplete

The [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actioncomplete) event triggers whenever a UI action, such as add, update, remove, or save (using dialog or inline editing), is finished. This lets users know exactly what kind of action has just been completed. The event provides the following details:

* [`dataSourceSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#datasourcesettings): Contains the current data source settings, including input data, rows, columns, values, filters, format settings, and more.
* [`actionName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#actionname): It holds the name of the current action completed. The following are the UI actions and their names:

   | Action | Action Name            |
   |--------|------------------------|
   | Save   | Edited records saved   |
   | Add    | New record added       |
   | Delete | Record removed         |
   | Update | Records updated        |

* [`actionInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactioncompleteeventargs#actioninfo): It holds the unique information about the current UI action. For example, if save action is completed, the event argument contains information such as mode of editing and saved records.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs61/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs61/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs61" %}

### ActionFailure

The [`actionFailure`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#actionfailure) event is triggered when a UI action fails to produce the expected result. This event provides detailed information about the failure through the following parameters:

* [`actionName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionfailureeventargs#actionname): It holds the name of the current action failed. The following are the UI actions and their names:

   | Action | Action Name|
   |------|-------------|
   | Editing| Edit record|
   | Save| Save edited records|
   | Add| Add new record|
   | Delete| Remove record|

* [`errorInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotactionfailureeventargs#errorinfo): It holds the error information of the current UI action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs62/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs62/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs62" %}