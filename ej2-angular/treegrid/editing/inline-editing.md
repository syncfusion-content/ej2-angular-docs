---
layout: post
title: Cell editing in Angular TreeGrid component | Syncfusion
description: Learn here all about Inline editing in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Cell editing 
documentation: ug
domainurl: ##DomainURL##
---

# Inline editing in Angular TreeGrid component

The Angular TreeGrid component provides a powerful in-line editing feature that allows you to edit cell values of row directly within the tree grid. This feature is especially useful when you want to quickly modify data without the need for a separate edit form. In normal editing, the selected record is changed to an edit state, and you can modify the cell values and save the edited data to the data source.

> When enabling editing, it is necessary to set the [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnModel/#isprimarykey) property value to **true** for the unique column.

## Cell editing

Cell editing mode allows to edit individual cells within the Tree Grid. When a cell is double-clicked, it enters the edit state, allowing you to modify the cell value directly. Changes made to the cell can be saved to the data source. To enable cell edit, set the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettingsModel/#mode) as `Cell`.

Here’s an example of how to enable **Cell** editing in the tree grid: 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/inline-edit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/inline-edit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/inline-edit-cs1" %}

> Cell edit mode is the default mode of editing.

> The following events are triggered for the cell edit mode.
> 1. [cellEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#celledit) event when editing of a cell begins.
> 2. [cellSave](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#cellsave) event triggers on saving the cell.
> 3. [cellSaved](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#cellsaved) event triggers after the cell was saved.

## Row editing

Row editing mode allows users to edit the entire row of the currently selected record within the TreeGrid component. When editing is initiated, the entire row enters the edit state, enabling users to modify cell values simultaneously. Any changes made to the row can be saved to the data source. To enable row editing mode, set the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettingsModel/#mode) property to `Row`.

Here’s an example of how to enable **Row** editing in the tree grid: 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/inline-edit-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/inline-edit-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/inline-edit-cs2" %}

## Automatically update a specific column based on another column edited value

You can automatically update the value of a column based on the edited value of another column using [columns->edit->params](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#edit) property. This feature is useful when you want to dynamically calculate and update a column's value in real-time based on the changes made in another related column. To enable this functionality, define the [editType](https://ej2.syncfusion.com/angular/documentation/api/treegrid/columnModel/#edittype) of the column to specify the type of editor used for editing the column, and provide an object for the `edit` property to customize the editing behavior. 

In the following demo, the price column value is updated based on the units and unitPrice column value while batch editing.

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

Performing CRUD actions programmatically refers to the ability to create, read, update, and delete data in a system or application using code instead of manual user interaction.

* To add a new record to the Tree Grid, use the [addRecord](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#addrecord) method. In this method, you can pass the **data** parameter to add a new record to the tree grid, the **index** parameter to add a record at a specific row index and the **position** parameter to refer the position such as Below, Above or as a Child to the selected row, where the new record is to be added. If you call this method without any parameters, it will create an empty row in the tree grid. If an index is not specified, the newly added record will be displayed at the zeroth index.

* To change the selected row to the edit state, use the [startEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#startedit) method. Before invoking this method, it is necessary to select a row in the tree grid.

* If you need to update the row data in the Tree Grid’s data source, you can use the [updateRow](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#updaterow) method. In this method, you need to pass the **index** value of the row to be updated along with the updated **data**.

* If you need to update the particular cell in the row, you can use the [setCellValue](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#setcellvalue) and [updateCell](https://ej2.syncfusion.com/angular/documentation/api/treegrid#updatecell) method. 

    * `setCellValue` method:

        In this method, you need to pass the primary key value of the data source, field name, and new value for the particular cell. When using this method, any changes made to a cell will only be reflected visually in the UI of the tree grid alone, not persisted or saved in the underlying data source. This method is commonly employed for unbound columns, such as auto-calculated columns or formula columns, where the values are derived or computed based on other data within the tree grid or external calculations. By using this method, you can update the visual representation of these unbound columns without modifying the actual data source.

    * `updateCell` method:

        This method is used to update the value of a specific cell within the Tree Grid component. This method requires the following parameters:

            * Row Index: The index of the row containing the cell to be updated.
            * Field Name: The name of the field corresponding to the cell to be updated.
            * New Value: The new value to be assigned to the cell.

        By invoking this method with the appropriate parameters, you can efficiently update the value of the specified cell in the underlying data source associated with the Tree Grid.

* To remove a selected row from the Tree Grid, use the [deleteRecord](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#deleterecord) method. For both edit and delete operations, you must select a row first.

Here's an example demonstrating how to perform CRUD actions using the above method in the tree grid:

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

Displaying a confirmation dialog adds an extra layer of confirmation when deleting a record from the tree grid. This dialog prompts for confirmation before proceeding with the deletion, ensuring that accidental or undesired deletions are avoided. The deletion can proceed only if the decision is certain. The TreeGrid component provides a built-in confirmation dialog that can be used to confirm a deleting action.

To enable the confirmation dialog for the delete operation in the Tree Grid, you can set the [showDeleteConfirmDialog](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#showdeleteconfirmdialog) property of the [editSettings](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings) configuration to **true**. By default, this property is set to **false**.

Here's an example demonstrating how to show a confirmation dialog when deleting a record in the tree grid:

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

The delete multiple rows feature in the TreeGrid component allows you to easily remove multiple rows from the tree grid at once. This feature is useful when you want to delete multiple records simultaneously. There are two approaches to implement this feature: using the inbuilt toolbar delete option or using a method.

**Using the inbuilt toolbar delete option**

The TreeGrid component provides a user-friendly interface for performing various actions, including deleting rows using the inbuilt toolbar. To enable the delete multiple rows using the toolbar, you need to configure the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/treegrid#toolbar) property of the tree grid and set the [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings/#type) property as **multiple** to enable multiple row selection.

To delete multiple selected records in the tree grid, first you need to select multiple rows in the tree grid by highlighting or checking the corresponding checkboxes. Once the desired rows are selected, you can click on the delete icon located in the toolbar. This action will initiate the deletion process and remove the selected records from the tree grid.

Here's an example demonstrating how to delete multiple selected records using a toolbar:

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

The TreeGrid component allows you to move the focus to a specific cell when editing a row, rather than the default behavior of focusing on the first cell in the row. This feature can be useful when you want to improve the editing experience by automatically focusing on a particular cell that requires immediate attention.

To achieve this functionality, you can leverage the [recordDoubleClick](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#recordDoubleClick) and [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid#actioncomplete) events of the TreeGrid component. The `recordDoubleClick` event is triggered when a row in the tree grid is double-clicked, indicating the intention to edit that row. By handling these events and programmatically moving the focus to the desired cell within the row.

Here's an example of how to use the `recordDoubleClick` event to move the focus to a particular cell:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/inline-edit-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/inline-edit-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/inline-edit-cs10" %}

## Enable editing in single click

Enabling single-click editing in the Tree Grid's **Row** editing mode is a valuable feature that allows you to make a row editable with just one click. This can be achieved by using the [startEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#startedit) and [endEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#endedit) methods.

To implement this feature, you need to bind the `mouseup` event for the tree grid and, within the event handler, call the `startEdit` and `endEdit` methods based on the clicked target element. This ensures that the editing mode is triggered when clicking on a specific element within the tree grid.

>In cell edit mode, you can achieve the same functionality using the [editCell](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#editcell) method instead of using the `startEdit` method.

The following sample demonstrates how to enable editing in a single click using the `mouseup` event along with the [load](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#load) event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/inline-edit-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/inline-edit-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/inline-edit-cs11" %}
