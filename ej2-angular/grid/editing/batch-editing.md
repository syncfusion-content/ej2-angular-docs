---
layout: post
title: Batch editing in Angular Grid component | Syncfusion
description: Learn here all about Batch editing in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Batch editing 
documentation: ug
domainurl: ##DomainURL##
---

# Batch editing in Angular Grid component

Batch editing is a robust feature in the Grid component that enables simultaneous editing of multiple cells. This functionality allows efficient modification of several cells and the ability to save all changes with a single request to the data source. Batch editing is particularly advantageous when handling large datasets or when multiple cell updates are required.

In batch edit mode, double-clicking a grid cell changes the targeted cell to an editable state. Bulk updates to added, modified, and deleted data can be committed by clicking the toolbar's **Update** button or by programmatically invoking the [batchSave](https://ej2.syncfusion.com/angular/documentation/api/grid/edit/#batchsave) method.

To activate batch editing mode, set the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) property to **Batch**. This property controls the editing mode of the Grid and enables batch editing capabilities.

The following example demonstrates enabling batch editing in the Angular Grid component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs3" %}

## Automatically update a column based on changes in another column

It is possible to automatically update a column's value in batch mode based on the edited value of another column. This is beneficial for dynamic calculations, such as updating a computed field in real time as related columns change. The feature leverages the [Cell Edit Template](https://ej2.syncfusion.com/angular/documentation/grid/editing/edit-types#custom-editors-using-template) in the Grid component.

In this example, the **TotalCost** column value updates dynamically as changes are made to the **UnitPrice** and **UnitInStock** columns during batch editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs4" %}

> * The [updateCell](https://ej2.syncfusion.com/angular/documentation/api/grid/#updatecell) method enables programmatic updates to cells in batch mode.

## Cancel editing based on specific conditions

The Grid component allows canceling CRUD operations (Edit, Add, Delete) for particular rows or cells in batch edit mode based on custom logic. This provides granular control over which rows or cells are editable.

To cancel an edit action, handle the [cellEdit](https://ej2.syncfusion.com/angular/documentation/api/grid/#cellEdit) event, which triggers when a cell enters edit mode. Within the event handler, specify a condition to determine whether editing is allowed. When the condition is met, setting `args.cancel` to **true** aborts the edit operation.

To cancel adding a new record, use the [beforeBatchAdd](https://ej2.syncfusion.com/angular/documentation/api/grid/#beforeBatchAdd) event, which occurs prior to a record being added to the batch changes. Similarly, use a condition within the handler to decide if the add operation should proceed.

To cancel the delete action, you need to handle the [beforeBatchDelete](https://ej2.syncfusion.com/angular/documentation/api/grid/#beforeBatchDelete) event. This event is triggered before a record is deleted from the batch changes. Within the event handler, you can add a condition to control whether the delete operation should take place or be canceled. If the condition is met, set the `args.cancel` property to **true** to cancel the delete operation.

In the following demonstration, CRUD operations are prevented for rows in which the **Role** column has the value **Admin**:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs5" %}

## Adding a new row at the bottom of the grid

The Grid can be configured to add new rows at the bottom of the data set, making it convenient to insert new records at the end. Set the [newRowPosition](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#newrowposition) property in `editSettings` to **Bottom** to activate this option.

>* When `newRowPosition` is set to **Bottom**, the **TAB** key facilitates data entry across cells or rows while in edit mode. Entering data and pressing **TAB** automatically creates new rows below the current one, allowing efficient entry for multiple records.
>* When `newRowPosition` is set to **Top**, a blank row is displayed at the top for data entry. Upon saving, the new record appears at the end of the grid.
>* If paging is enabled, updating the row causes it to move to the last page, depending on page size. This behavior applies to both local and remote data sources.
>* With scrolling enabled, the **TAB** key allows adding new rows, even beyond the visible portion of the grid.
>* The `newRowPosition` property is supported in both **Normal** and **Batch** editing modes.

The following example illustrates how to enable the addition of new rows at the bottom of the grid with the `newRowPosition` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-batch-add-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-batch-add-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-batch-add-cs1" %}

## Confirmation dialog

A confirmation dialog provides verification before performing actions such as saving a record or canceling changes, enhancing data integrity by reducing accidental modifications. The Grid features a built-in confirmation dialog to confirm save, cancel, and related actions.

Enable the confirmation dialog by setting [editSettings.showConfirmDialog](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#showconfirmdialog) to **true** in the `editSettings` configuration. The default value is **true**.

> * `editSettings.showConfirmDialog` requires [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) to be set to **Batch**.
> * Setting `editSettings.showConfirmDialog` to **false** disables the confirmation dialog in batch editing mode.
> * During updates and deletions, a dedicated delete confirmation dialog appears when selecting the delete button or pressing the delete key.

The following example demonstrates enabling or disabling the confirmation dialog using the `showConfirmDialog` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs6" %}

## Single-click editing and navigation with arrow keys

The Grid can be configured for single-click cell editing and navigation across cells or rows using arrow keys, streamlining data entry without requiring double-clicks or mouse navigation. 

By default, batch edit mode enables the **TAB** key to move between cells/rows for editing, while the **Enter** key moves to the adjacent row cell. To enable single-click editing, handle the [created](https://ej2.syncfusion.com/angular/documentation/api/grid/#created) event and bind a click event to grid cells that calls the `editCell` method on click.

For arrow key navigation, handle the [load](https://ej2.syncfusion.com/angular/documentation/api/grid/#load) event and bind a keydown event to the grid element. Respond to arrow key presses by determining the direction and programmatically invoking the `editCell` method for the intended cell.

Below is an example showing both single-click editing and arrow key navigation by using the `created` and `load` events alongside the `editCell` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/batch-edit/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/batch-edit/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/batch-edit" %}

## Disable editing for specific cells

Editing can be restricted for designated cells based on custom criteria, enhancing data integrity by preventing changes to read-only, calculated, or protected information.

To disable editing for specific cells in batch mode, utilize the [cellEdit](https://ej2.syncfusion.com/angular/documentation/api/grid/#celledit) event in the grid. By setting **args.cancel** to **true** within the event handler, editing is prevented for the target cell.

For example, the following illustrates disabling editing for cells with the value **France** using the `cellEdit` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs22/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs22" %}

## Immediate save or update of changes

The Grid enables immediate saving or updating of batch mode changes, removing the necessity for a separate Save button. This supports efficient data editing workflows and instant feedback upon cell modification. The [cellSaved](https://ej2.syncfusion.com/angular/documentation/api/grid/#cellsaved) event, in conjunction with the [batchSave](https://ej2.syncfusion.com/angular/documentation/api/grid/edit/#batchsave) method, facilitates this approach.

By default, invoking the `batchSave` method displays a confirmation dialog. This dialog is used to verify the correctness of the changes being saved or canceled.

The `cellSaved` event triggers after saving a cell, allowing execution of custom logic upon cell save or update.

The `batchSave` method, provided by the grid's edit service, commits all added, edited, and deleted records in batch mode.

> * To bypass the confirmation dialog when using `batchSave`, set `editSettings.showConfirmDialog` to **false**. Note that `editSettings.mode` must be configured as **Batch** for this property to take effect. This combination enables immediate persistence of changes without confirmation.

The following example demonstrates immediate saving or updating using the `cellSaved` event and the `batchSave` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-batch-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/grid/edit-batch-cs1/src/app.component.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-batch-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-batch-cs1" %}
