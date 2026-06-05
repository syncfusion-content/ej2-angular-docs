---
layout: post
title: Angular Grid - Inline Editing | Syncfusion
description: Angular Grid inline editing allows direct row edits, auto field updates, conditional control, CRUD actions, confirmations, and flexible add/delete.
platform: ej2-angular
control: In line editing 
documentation: ug
domainurl: ##DomainURL##
---

# Inline Editing in Angular Grid Component

The Angular Grid component provides an efficient inline editing feature, enabling direct modification of row or cell values within the grid. Inline editing is ideal for streamlining data entry and updates without invoking a separate form. In normal edit mode, the selected record enters an editable state, allowing updates to cell values which are then saved back to the data source.

To enable in-line editing in the grid component, set the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#mode) property to `Normal`. This property determines the editing mode of the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs25/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs25/src/main.ts %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/samples/grid/edit-cs25" %}

> * `Normal` edit mode is default mode of editing.
> * When enabling editing, it is necessary to set the [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel#isprimarykey) property value to `true` for the unique column.
> * For basic editing setup and configuration, refer to the [Edit Feature Setup](./edit#set-up-editing).

## Automatically update a specific column based on changes in another column

The Cell Edit Template feature enables automatic updating of a column’s value whenever a value in another column is edited. This powerful feature enables dynamic calculations and real-time updates to column values based on changes in related columns, streamlining data entry workflows. 

To enable this functionality:
- Define the [editType](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel#edittype) property to specify the editor type for editing.
- Provide an object for the [edit](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel#edit) property to customize editing behavior. 

In the following example, the "Total Cost" column value is updated based on changes to the "Unit Price" and "Unit In Stock" columns during editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs26/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs26/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs26" %}

## Cancel edit based on condition

The Grid provides the ability to cancel the edit operations for particular row or cell based on specific conditions. This feature allows controlling whether editing should be allowed or prevented for certain rows or cells in the grid. This functionality is achieved by leveraging the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid#actionbegin) event of the Grid component. This event is triggered when a CRUD (Create, Read, Update, Delete) operation is initiated in the grid.

This customization is useful when restricting editing for certain rows, such as read-only data, calculated values, or protected information. It helps maintain data integrity and ensures that only authorized changes can be made in the grid.

To cancel the edit operation based on a specific condition, handle the `actionBegin` event of the Grid component and check the `requestType` parameter. This parameter indicates the type of action being performed:

| Request Type | Description |
|--------------|-------------|
| `beginEdit` | Editing an existing record |
| `add` | Creating a new record |
| `save` | Updating a new or existing record |
| `delete` | Deleting an existing record |

Apply the desired condition and cancel the operation by setting the `args.cancel` property to `true`.

Example: Prevent CRUD actions for rows where the "Role" column equals "Admin".

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs27/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs27/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs27" %}

## Perform CRUD actions programmatically

Programmatic CRUD operations enable creating, reading, updating, and deleting data through code rather than manual user interaction. This approach provides flexibility for advanced data manipulation workflows. The following table outlines key methods for programmatic CRUD operations:

| Method | Description | Usage |
|--------|-------------|-------|
| [addRecord](https://ej2.syncfusion.com/angular/documentation/api/grid#addrecord) | Add a new record to the grid | Pass the `data` parameter to add a record. Use the `index` parameter for a specific position. Without parameters, creates an empty row at index zero. |
| [startEdit](https://ej2.syncfusion.com/angular/documentation/api/grid#startedit) | Change the selected row to edit state | First select the row, then invoke this method. The selected row enters edit mode immediately. Without row selection along with default `showConfirmDialog` enabled state, "No records selected for edit operation" dialog appears. |
| [updateRow](https://ej2.syncfusion.com/angular/documentation/api/grid#updaterow) | Update row data in the data source | Provide the row `index` and the updated `data` as parameters. The data source updates accordingly. |
| [setCellValue](https://ej2.syncfusion.com/angular/documentation/api/grid#setcellvalue) | Update a particular cell in a row | Provide the primary key value, field name, and new value. Changes appear visually in the UI only (not persisted). Useful for unbound columns, auto-calculated columns, and formula columns. |
| [deleteRecord](https://ej2.syncfusion.com/angular/documentation/api/grid#deleterecord) | Remove a selected row from the grid | First select the row, then invoke this method. The selected row is immediately removed. Without row selection along with default `showConfirmDialog` enabled state, "No records selected for delete operation" dialog appears. |

> In both `Normal` and `Dialog` editing modes, these methods can be used.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs28/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs28/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs28" %}

## Show confirmation dialog for deletion

The built-in confirmation dialog enhances data safety by requesting user confirmation before deleting records. Enable this dialog by setting [showDeleteConfirmDialog](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#showdeleteconfirmdialog) in `editSettings` to `true` (default is `false`).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs29/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs29/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs29" %}

> The [showDeleteConfirmDialog](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#showdeleteconfirmdialog) property supports all editing modes. 

## Display default values for columns when adding records

Preset column values streamline data entry for new records. Set [defaultValue](https://ej2.syncfusion.com/angular/documentation/api/grid/column#defaultvalue) for columns in the grid configuration to ensure these fields are pre-filled in new rows.

Example using default column values:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs30/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs30/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs30" %}

## Delete multiple rows

Multiple row deletion is supported via the in-built toolbar or through methods.

**Using the toolbar:** Set the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbar) and [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#type) to `Multiple`. Select rows and use the toolbar delete icon to remove them.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-toolbar-cs1" %}

> Selected records can also be deleted using the `Delete` key.

**Using methods:**

Multiple rows can be deleted programmatically using the following methods.

1. [deleteRecord](https://ej2.syncfusion.com/angular/documentation/api/grid#deleterecord) - This method deletes a record with the given options. If the `fieldname` (primary key field) and `data` parameters are not provided, the grid deletes the selected records.

    ```ts
        this.grid.deleteRecord();
    ```

2. [deleteRow](https://ej2.syncfusion.com/angular/documentation/api/grid#deleterow) - This method deletes a visible row by providing the corresponding `<tr>` element. Use `getSelectedRows` to retrieve the selected rows and iterate over them. For each row, pass the `<tr>` element to `deleteRow` to initiate deletion. This approach enables selective deletion based on the `<tr>` elements obtained from `getSelectedRows`.

    ```ts
        const selectedRows: any[] = this.grid.getSelectedRows();
        selectedRows.forEach((row: HTMLTableRowElement) => {
            this.grid.deleteRow(row);
        });
    ```

> Use `selectionSettings.type` = `Multiple` and consider enabling `showDeleteConfirmDialog` property of the `editSettings` to prevent accidental deletions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-multiple-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-multiple-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-multiple-cs1" %}

## Add new rows at the bottom of the grid

The Grid component enables seamless addition of new rows at the bottom of the grid, inserting records at the end of the existing data set. This convenient feature proves particularly useful for intuitive record addition without requiring scroll repositioning, improving workflow efficiency.

By default, new row's form is inserted at the top of the grid for data entry. To change this behavior, set the [newRowPosition](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#newrowposition) property in the `editSettings` configuration to `Bottom`. This property controls the position where the new row form is inserted.

Example using `newRowPosition`:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs31/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs31/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs31" %}

> * The [newRowPosition](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#newrowposition) property is supported for `Normal` and `Batch` editing modes.
> * When [newRowPosition](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#newrowposition) is set to `Bottom`, the grid displays a blank row form at the bottom by default for data entry. However, when the data is saved or updated, it is inserted at the top of the grid.


## Show add new row always in grid

The Angular Data Grid simplifies record addition by consistently presenting a blank "add new row" form within the grid. To enable this feature, set the [showAddNewRow](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#showaddnewrow) property within the `editSettings` configuration to `true`. This enables continuous record addition. The add new row displays at either the `top` or `bottom` of the grid content, depending on the [newRowPosition](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#newrowposition) property of `editSettings`. By default, the add new row displays at the top of the grid content.

The following sample demonstrates to add a new record continuously using `showAddNewRow` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs54/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs54/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs54" %}

> To save newly added records, press the <kbd>Enter</kbd> key or click the <kbd>Update</kbd> button on the toolbar after filling the add form.

### Limitations

* This feature is supported only for `Inline`/`Normal` editing mode and is not compatible with other edit modes.
* The new blank add row form will always be displayed at the top, even when the new row position is set to the bottom for virtual scrolling and infinite scrolling enabled grids.
* This feature is not compatible with the column virtualization feature.

## Move focus to a particular cell when editing a row

The Grid component enables moving focus to a specific cell when editing a row, rather than the default behavior of focusing on the first cell. This feature improves the editing experience by automatically focusing on the cell requiring immediate attention.

To achieve this functionality, leverage the [recordDoubleClick](https://ej2.syncfusion.com/angular/documentation/api/grid#recordDoubleClick) event of the Grid component. The `recordDoubleClick` event is triggered when a row is double-clicked, indicating intent to edit. Handle this event and programmatically move focus to the desired cell within the row.

Example moving focus to a specific cell:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs32/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs32/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs32" %}

## Enable single-click editing

Enabling single-click editing in the Angular Data Grid's `Normal` editing mode is a valuable and intuitive feature that makes a row editable with just one click. This seamless experience is achieved by using the [startEdit](https://ej2.syncfusion.com/angular/documentation/api/grid#startedit) and [endEdit](https://ej2.syncfusion.com/angular/documentation/api/grid#endedit) methods for rapid, efficient data modification.

To implement this feature, bind the `mouseup` event for the Grid and, within the event handler, call the `startEdit` and `endEdit` methods based on the clicked target element. This ensures editing mode is triggered when clicking on a specific element within the Grid.

The following sample demonstrates to enable editing in a single click using the `mouseup` event along with the `load` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/single-click-batch-editing-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/single-click-batch-editing-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/single-click-batch-editing-cs1" %}

## Disable editing for specific rows

Editing can be restricted for designated rows using the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid#actionbegin) event. Set `args.cancel = true` based on custom condition checks in the event handler.

In the below demo, the rows which are having the value for "Ship Country" column as "France" is prevented from editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs21/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs21" %}
