---
layout: post
title: Inline editing in Angular TreeGrid component | Syncfusion
description: Learn how to use inline editing in the Syncfusion Angular TreeGrid component, including cell, row, and programmatic editing along with advanced editing features.
platform: ej2-angular
control: Inline editing 
documentation: ug
domainurl: ##DomainURL##
---

# Inline editing in Angular TreeGrid component

The Angular TreeGrid component offers an inline editing feature to directly edit cell values within rows. This mode enables quick modifications without a separate editing form. In normal editing, the selected record enters edit state, allowing for in-place value changes that can be saved back to the data source.

> When enabling editing, set the [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnModel/#isprimarykey) property to **true** for the primary key column.

## Cell editing

Cell editing mode allows editing of individual cells within the TreeGrid. Double-click a cell to enter edit state and change its value. Changes are saved to the data source. To enable cell editing, set [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettingsModel/#mode) to `Cell`.

Example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/inline-edit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/inline-edit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/inline-edit-cs1" %}

> Cell edit mode is the default editing mode.
> The following events are triggered during cell editing:
> 1. [cellEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#celledit): When cell editing begins.
> 2. [cellSave](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#cellsave): When the cell is being saved.
> 3. [cellSaved](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#cellsaved): After the cell was saved.

## Row editing

Row editing mode enables editing of an entire row for the selected record. Entering edit state allows modification of all cell values in that row, which can then be saved to the data source. To enable row editing mode, set [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettingsModel/#mode) to `Row`.

Example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/inline-edit-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/inline-edit-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/inline-edit-cs2" %}

## Automatically update a specific column based on another column's edited value

Columns can be updated dynamically in response to editing another column by configuring [columns->edit->params](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edit) and specifying [editType](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnModel/#edittype). This is useful for real-time calculations and value propagation.

Example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/inline-edit-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/inline-edit-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/inline-edit-cs3" %}

## Cancel edit based on condition

The tree grid provides the ability to cancel the edit operations for particular row or cell based on specific conditions. This feature allows you to control over whether editing should be allowed or prevented for certain rows or cells in the tree grid. You can achieve this functionality by leveraging the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event of the TreeGrid component. This event is triggered when a CRUD (Create, Read, Update, Delete) operation is initiated in the tree grid.  

To cancel the edit operation based on a specific condition, you can handle the `actionBegin` event of the TreeGrid component and check the **requestType** parameter. This parameter indicates the type of action being performed, such as **beginEdit** for editing, **add** for adding, and **delete** for deleting. By applying your desired condition, you can cancel the edit, delete, or add operation by setting the `args.cancel` property to **true**.

In the following demo, the CRUD operation is prevented based on the **priority** column value. If the **priority** column is `Low`, that row cannot be edited or deleted.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/inline-edit-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/inline-edit-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/inline-edit-cs4" %}

## Perform CRUD action programmatically

CRUD actions can be performed programmatically:
- [addRecord](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#addrecord): Add a new row at a specified index or position.
- [startEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#startedit): Change the selected row to edit state.
- [updateRow](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#updaterow): Update row data at the specified index.
- [setCellValue](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#setcellvalue): Update only the cell value visually (useful for unbound columns).
- [updateCell](https://ej2.syncfusion.com/angular/documentation/api/treegrid#updatecell): Update the value of a cell and persist it to the data source.
- [deleteRecord](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#deleterecord): Delete the selected row.

Example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/inline-edit-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/inline-edit-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/inline-edit-cs5" %}

## Show confirmation dialog while deleting

Enable the [showDeleteConfirmDialog](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#showdeleteconfirmdialog) in [editSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings) to prompt for confirmation prior to deletion. By default, this is set to **false**.

Example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/inline-edit-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/inline-edit-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/inline-edit-cs6" %}

## Display default value for columns while adding

This feature is useful when you want to pre-fill certain column values with default values to streamline the data entry process. The TreeGrid component allows you to set default values for columns when adding a new record. 

To set a default value for a specific column in the tree grid, you can use the [defaultValue](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#defaultvalue) property of the [columns](https://ej2.syncfusion.com/angular/documentation/api/treegrid#columns) configuration. By providing a default value, the tree grid will automatically populate that value in the corresponding column when a new row is added.

Here's an example of how to set a default value for a column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/inline-edit-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/inline-edit-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/inline-edit-cs7" %}

## Delete multiple rows

Multiple row deletion can be performed using the TreeGrid toolbar or method calls. To enable multiple selection, set [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings/#type) to **Multiple**. Use the toolbar or these methods:
- [deleteRecord](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#deleterecord): Deletes selected records.
- [deleteRow](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#deleterow): Deletes a row by passing the `<tr>` element.

Example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/inline-edit-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/inline-edit-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/inline-edit-cs8" %}

> Also delete the selected records using keyboard shortcut key **delete**.

**Using method**

You can delete multiple rows programmatically by using following method.

1. [deleteRecord](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#deleterecord) -This method allows you to delete a record with the given options. If the **fieldname** (field name of the primary key column) and **data** parameters are not provided, the tree grid will delete the selected records.

    ```ts
        this.treegrid.deleteRecord();
    ```

2. [deleteRow](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#deleterow) - Using this method, you have the ability to delete any visible row by providing the corresponding <tr> element. To achieve this, you can utilize the [getSelectedRows](https://ej2.syncfusion.com/angular/documentation/api/treegrid#getselectedrows) method to retrieve the selected rows and then iterate over the rows. For each row, you can pass the <tr> element to the `deleteRow` method to initiate the deletion process. This approach allows you to selectively delete rows based on the <tr> elements obtained from the `getSelectedRows` method.

    ```ts
        const selectedRows: any[] = this.treegrid.getSelectedRows();
        selectedRows.forEach((row: HTMLTableRowElement) => {
        this.treegrid.deleteRow(row);
       });
    ```

> The `selectionSettings.type` property is set to **Multiple** to enable multiple row selection.
> To prevent accidental or undesired deletions, it is recommended to enable the `showDeleteConfirmDialog` property of the `editSettings` configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/inline-edit-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/inline-edit-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/inline-edit-cs9" %}

## Move the focus to a particular cell instead of first cell while editing a row

To move focus to a specific cell (rather than the first cell) on editing, handle the [recordDoubleClick](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#recordDoubleClick) and [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid#actioncomplete) events.

Example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/inline-edit-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/inline-edit-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/inline-edit-cs10" %}

## Enable editing with single click

Editing can be enabled with a single click in row editing mode by binding to the `mouseup` event and invoking [startEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#startedit) and [endEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#endedit). For cell editing mode, use [editCell](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#editcell).

Example for single-click editing:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/inline-edit-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/inline-edit-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/inline-edit-cs11" %}
