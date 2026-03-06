---
layout: post
title: Angular Grid - Batch Editing | Syncfusion
description: Angular Grid batch editing provides streamlined edit workflows, server integration examples, and reliable strategies for saving updates.
platform: ej2-angular
control: Batch editing 
documentation: ug
domainurl: ##DomainURL##
---

# Batch Editing in Angular Grid Component

Batch editing is a powerful feature in the Grid component that enables simultaneous modification and saving of multiple cells in a single action. This feature provides an efficient way to make bulk changes without saving each change individually, making it particularly useful for large datasets.

To enable batch editing mode, set the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#mode) property to `Batch`. When activated, double-clicking a cell enters edit mode, and bulk updates can be saved via the toolbar's `Update` button or by invoking the [batchSave](https://ej2.syncfusion.com/angular/documentation/api/grid/edit#batchsave) method.

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

Synchronize column values dynamically by calculating and updating dependent columns in real-time as related columns are edited. This seamless data synchronization is particularly valuable for computed fields like totals, discounts, or derived metrics that depend on other cell values. This can be achieved using the [Cell Edit Template](https://ej2.syncfusion.com/angular/documentation/grid/editing/edit-types#custom-editors-using-template) feature, this approach maintains data consistency without manual recalculation.

In the following example, the "Total Cost" column value is updated based on changes to the "Unit Price" and "Units In Stock" columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs4" %}

> The [updateCell](https://ej2.syncfusion.com/angular/documentation/api/grid#updatecell) method enables programmatic updates to cells in batch mode.

## Cancel editing based on specific conditions

Batch edit mode provides control over CRUD operations by allowing specific rows or cells to be protected from editing, adding, or deletion. This data integrity feature ensures only authorized modifications proceed.

The following table summarizes the events and cancellation methods available for each operation:

| Operation | Event | Trigger Point | Cancellation Method |
|-----------|-------|---------------|---------------------|
| `Edit` | `cellEdit` | When a cell enters edit mode | Set `args.cancel` to `true` |
| `Add` | `beforeBatchAdd` | Before a new record is added | Set `args.cancel` to `true` |
| `Delete` | `beforeBatchDelete` | Before a record is deleted | Set `args.cancel` to `true` |

Each event handler receives operation context, allowing condition-based logic to block or permit the action.

In the following demo, CRUD operations are prevented based on the "Role" column value. When the "Role" column contains "Admin", edit and delete actions are prevented for that row.

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

The Grid can be configured to add new rows at the bottom of the data set, making it convenient to insert new records at the end. Set the [newRowPosition](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#newrowposition) property in `editSettings` to `Bottom` to activate this option.

>* When `newRowPosition` is set to `Bottom`, the <kbd>TAB</kbd> key facilitates data entry across cells or rows while in edit mode. Entering data and pressing <kbd>TAB</kbd> automatically creates new rows below the current one, allowing efficient entry for multiple records.
>* When `newRowPosition` is set to `Top`, a blank row is displayed at the top for data entry. Upon saving, the new record appears at the end of the grid.
>* If paging is enabled, updating the row causes it to move to the last page, depending on page size. This behavior applies to both local and remote data sources.
>* With scrolling enabled, the <kbd>TAB</kbd> key allows adding new rows, even beyond the visible portion of the grid.
>* The `newRowPosition` property is supported in both `Normal` and `Batch` editing modes.

The following example illustrates to enable the addition of new rows at the bottom of the grid with the `newRowPosition` property:

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

Confirmation dialogs provide an additional layer of protection when performing critical actions in batch editing mode. The Grid component offers built-in confirmation dialogs for the following scenarios:

| Action | Confirmation Trigger |
|--------|---------------------|
| **Save Changes** | Appears when clicking `Update` button in toolbar |
| **Cancel Changes** | Appears when clicking `Cancel` button to discard edits |
| **Delete Record** | Appears when deleting a row during batch mode |

Enable the confirmation dialog by setting [editSettings.showConfirmDialog](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#showconfirmdialog) to `true` in the `editSettings` configuration. The default value is `true`.

> * `editSettings.showConfirmDialog` requires [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#mode) to be set to `Batch`.
> * Setting `editSettings.showConfirmDialog` to `false` disables the confirmation dialog in batch editing mode.
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

By default, batch edit mode enables the <kbd>TAB</kbd> key to move between cells/rows for editing, while the <kbd>Enter</kbd> key moves to the adjacent row cell. To enable single-click editing, handle the [created](https://ej2.syncfusion.com/angular/documentation/api/grid#created) event and bind a click event to grid cells that calls the `editCell` method on click.

For arrow key navigation, handle the [load](https://ej2.syncfusion.com/angular/documentation/api/grid#load) event and bind a keydown event to the grid element. Respond to arrow key presses by determining the direction and programmatically invoking the `editCell` method for the intended cell.

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

To disable editing for specific cells in batch mode, utilize the [cellEdit](https://ej2.syncfusion.com/angular/documentation/api/grid#celledit) event in the grid. By setting `args.cancel` to `true` within the event handler, editing is prevented for the target cell.

For example, the following illustrates disabling editing for cells with the value "France" using the `cellEdit` event:

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

The Grid enables immediate saving or updating of batch mode changes, removing the necessity for a separate Save button. This supports efficient data editing workflows and instant feedback upon cell modification. The [cellSaved](https://ej2.syncfusion.com/angular/documentation/api/grid#cellsaved) event, in conjunction with the [batchSave](https://ej2.syncfusion.com/angular/documentation/api/grid/edit#batchsave) method, facilitates this approach.

By default, invoking the `batchSave` method displays a confirmation dialog. This dialog is used to verify the correctness of the changes being saved or canceled.

The `cellSaved` event triggers after saving a cell, allowing execution of custom logic upon cell save or update.

The `batchSave` method, provided by the grid's edit service, commits all added, edited, and deleted records in batch mode.

> To bypass the confirmation dialog when using `batchSave`, set `editSettings.showConfirmDialog` to `false`. Note that `editSettings.mode` must be configured as `Batch` for this property to take effect. This combination enables immediate persistence of changes without confirmation.

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
