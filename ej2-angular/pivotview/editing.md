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

Cell edit allows to add, delete, or update the raw items of any value cell from the pivot table. The raw items can be viewed in a data grid inside a new window on double-clicking the appropriate value cell. In the data grid, CRUD operations can be performed by double-clicking the cells or using toolbar options. Once user finishes editing raw items, aggregation will be performed for the updated values in pivot table component immediately. This support can be enabled by setting the [`allowEditing`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/cellEditSettingsModel/#allowediting) property in [`editSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/cellEditSettingsModel/) to **true**.

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

In normal edit mode, when user starts editing, the state of the currently selected row alone will be completely changed to edit state. User can change the cell values and save it to the data source by clicking "Update" toolbar button. To enable the normal edit, set the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/cellEditSettingsModel/#mode) property in [`editSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/cellEditSettingsModel/) to **Normal**.

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

In dialog edit mode, when user starts editing, the currently selected row data will be shown in an exclusive dialog. User can change cell values and save it to the data source by clicking "Save" button in the dialog. To enable the dialog edit, set the [`Mode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/cellEditSettingsModel/#mode) property in [`editSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/cellEditSettingsModel/) to **Dialog**.

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

In batch edit mode, when user double-clicks any data grid cell, the state of target cell is changed to edit state. User can perform bulk changes and finally save (added, changed, and deleted data in the single request) to the data source by clicking "Update" toolbar button. To enable the batch edit, set the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/cellEditSettingsModel/#mode) property in [`editSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/cellEditSettingsModel/) to **Batch**. You can perform bulk save (added, changed, and deleted data in the single request) to the data source by clicking the toolbar's **Update** button.

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

An additional column appended in the data grid layout holds the command buttons to perform the CRUD operation. To enable the command columns, set the [`allowCommandColumns`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/cellEditSettingsModel/#allowcommandcolumns) property in [`editSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/cellEditSettingsModel/) to **true**.

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

Allows editing of a value cell directly without the use of an external edit dialog. It is applicable if and only if a single raw data is used for the value of the cell. It is applicable to all editing modes, such as normal, batch, dialog and column commands. It can be enabled by setting the [`allowInlineEditing`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/cellEditSettings/#allowinlineediting) property in [`editSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/cellEditSettingsModel/) to **true**.

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

Users can also add, delete, or update the underlying raw items of any data point via pivot chart. The raw items will be shown in the data grid in the new window by clicking the appropriate data point. Then you can edit the raw items as mentioned above by any of the edit types (normal, dialog, batch and command column).

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

The event [`editCompleted`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#editcompleted) triggers when values cells are edited completely. The event provides edited cell(s) information along with its previous cell value. It also helps to do the CRUD operation by manually updating the database which is connected to the component. It has the following parameters.
* `currentData` - It holds the current raw data of the edited cells.
* `previousData` - It holds the previous raw data of the edited cells.
* `previousPosition` - It holds the index of the raw data whose values are edited.
* `cancel` - It is a boolean property and if it is set as **true**, the editing won’t be reflected in the pivot table.

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

For more information [`refer`](./drill-through/#drillthrough) here.

### BeginDrillThrough

For more information [`refer`](./drill-through/#begindrillthrough) here.

### ActionBegin

The event [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#actionbegin) triggers when the UI actions such as CRUD operations (via dialog) and inline editing begin. This allows user to identify the current action being performed at runtime. It has the following parameters:

* `dataSourceSettings`: It holds the current data source settings such as input data source, rows, columns, values, filters, format settings and so on.

* `actionName`: It holds the name of the current action began. The following are the UI actions and their names:

   | Action | Action Name|
   |------|-------------|
   | Editing| Edit record|
   | Save| Save edited records|
   | Add| Add new record|
   | Delete| Remove record|

* `cancel`: It allows user to restrict the current action.

In the below sample, editing actions such as add and save can be restricted by setting the **args.cancel** option to **true** in the `actionBegin` event.

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

The event [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#actioncomplete) triggers when the UI action such as CRUD operations (via dialog) or inline editing, is completed. This allows user to identify the current UI actions being completed at runtime. It has the following parameters:

* `dataSourceSettings`: It holds the current data source settings such as input data source, rows, columns, values, filters, format settings and so on.

* `actionName`: It holds the name of the current action completed. The following are the UI actions and their names:

   | Action | Action Name|
   |------|-------------|
   | Save| Edited records saved|
   | Add| New record added|
   | Delete| Record removed |
   | Update| Records updated|

* `actionInfo`: It holds the unique information about the current UI action. For example, if save action is completed, the event argument contains information such as mode of editing and saved records.

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

The event [`actionFailure`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#actionfailure) triggers when the current UI action fails to achieve the desired result. It has the following parameters:

* `actionName`: It holds the name of the current action failed. The following are the UI actions and their names:

   | Action | Action Name|
   |------|-------------|
   | Editing| Edit record|
   | Save| Save edited records|
   | Add| Add new record|
   | Delete| Remove record|

* `errorInfo`: It holds the error information of the current UI action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs62/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs62/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs62" %}