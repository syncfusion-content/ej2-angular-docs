---
layout: post
title: In line editing in Angular Grid component | Syncfusion
description: Learn here all about In line editing in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: In line editing 
documentation: ug
domainurl: ##DomainURL##
---

# Inline editing in Angular Grid component

The Angular Grid component provides an efficient inline editing feature, enabling direct modification of row or cell values within the grid. Inline editing is ideal for streamlining data entry and updates without invoking a separate form. In normal edit mode, the selected record enters an editable state, allowing updates to cell values which are then saved back to the data source.

Enable inline editing by setting the [editSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) property to **Normal**. This property determines the editing mode of the Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs25/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs25/src/main.ts %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/samples/grid/edit-cs25" %}

> * Normal edit mode is the default editing mode.
> * When editing is enabled, ensure the [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#isprimarykey) property is set to **true** on the unique column.

## Automatically update a specific column based on changes in another column

Automatically updating column values based on edits in related columns enhances workflow efficiency. Use the Cell Edit Template feature to perform real-time calculations or synchronize values. Set the [editType](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#edittype) and customize the [edit](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#edit) property to define editing behavior.

Example: The **TotalCost** column value is updated dynamically in response to changes in **UnitPrice** and **UnitInStock** columns.

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

Granular control over editing allows restriction of CRUD actions for specific rows or cells using the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event. Evaluate the **requestType** parameter (e.g., **beginEdit**, **add**, or **delete**), and conditionally set `args.cancel = true` to prevent undesired operations.

Example: Prevent CRUD actions for rows where the **Role** column equals **Admin**.

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

CRUD (Create, Read, Update, Delete) operations can be executed in code, providing automation and integration with custom workflows.

- [addRecord](https://ej2.syncfusion.com/angular/documentation/api/grid/#addrecord): Add a new record with optional data and index.
- [startEdit](https://ej2.syncfusion.com/angular/documentation/api/grid/#startedit): Edit a selected row.
- [updateRow](https://ej2.syncfusion.com/angular/documentation/api/grid/#updaterow): Update a row's data at a given index.
- [setCellValue](https://ej2.syncfusion.com/angular/documentation/api/grid/#setcellvalue): Update a specific cell visually (used for unbound or calculated columns; does not persist to the data source).
- [deleteRecord](https://ej2.syncfusion.com/angular/documentation/api/grid/#deleterecord): Delete a selected row.

> These APIs are available in both normal and dialog editing modes.

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

The built-in confirmation dialog enhances data safety by requesting user confirmation before deleting records. Enable this dialog by setting [showDeleteConfirmDialog](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#showdeleteconfirmdialog) in `editSettings` to **true** (default is **false**).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs29/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs29/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs29" %}

> **showDeleteConfirmDialog** supports all editing modes.

## Display default values for columns when adding records

Preset column values streamline data entry for new records. Set [defaultValue](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#defaultvalue) for columns in the grid configuration to ensure these fields are pre-filled in new rows.

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

**Using the toolbar:** Set the [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) and [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type) to **Multiple**. Select rows and use the toolbar delete icon to remove them.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-toolbar-cs1" %}

> You can also delete selected records using the **Delete** key.

**Using methods:**

You can delete multiple rows programmatically by using following method.

1. [deleteRecord](https://ej2.syncfusion.com/angular/documentation/api/grid/#deleterecord) -This method allows you to delete a record with the given options. If the **fieldname** (field name of the primary key column) and **data** parameters are not provided, the grid will delete the selected records.

    ```ts
        this.grid.deleteRecord();
    ```

2. [deleteRow](https://ej2.syncfusion.com/angular/documentation/api/grid/#deleterow) - Using this method, you have the ability to delete any visible row by providing the corresponding <tr> element. To achieve this, you can utilize the `getSelectedRows` method to retrieve the selected rows and then iterate over the rows. For each row, you can pass the <tr> element to the deleteRow method to initiate the deletion process. This approach allows you to selectively delete rows based on the <tr> elements obtained from the `getSelectedRows` method.

    ```ts
        const selectedRows: any[] = this.grid.getSelectedRows();
        selectedRows.forEach((row: HTMLTableRowElement) => {
        this.grid.deleteRow(row);
       });
    ```

> Use `selectionSettings.type` = **Multiple** and consider enabling `showDeleteConfirmDialog` property of the `editSettings` to prevent accidental deletions.

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

By default, new rows are inserted at the top. To insert them at the end, set [newRowPosition](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#newrowposition) in `editSettings` to **Bottom**.

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

> * `newRowPosition` is supported for both **Normal** and **Batch** editing modes.
> * Adding with `newRowPosition` as **Bottom** displays the form at the end, but the row appears at the top if sorted accordingly.

## Show add new row always in grid

The Syncfusion Grid simplifies the addition of new records by consistently presenting a blank, "add new row" form within the grid. To enable this feature, you can set the `showAddNewRow` property within the `editSettings` configuration to **true**. This allows for continuous addition of new records. You can display the add a new row at either the **top** or **bottom** of the grid content, depending on the [newRowPosition](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#newrowposition) property of `editSettings`. By default, the add new row is displayed at the top row of the grid content.

The following sample demonstrates how to add a new record continuously using `showAddNewRow` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs54/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs54/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs54" %}

> Save new records with **Enter** or the **Update** toolbar button.

**Limitations:**

- Supported only in Inline/Normal editing mode.
- Always appears at the top in virtual/infinite scrolling scenarios, regardless of row position configuration.
- Incompatible with column virtualization.

## Move focus to a particular cell when editing a row

Enhance the editing experience by focusing on a designated cell instead of the default (first cell) when entering edit mode. Use the [recordDoubleClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#recordDoubleClick) event to programmatically set focus to the required cell.

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

Activate row editing with a single click by using the [startEdit](https://ej2.syncfusion.com/angular/documentation/api/grid/#startedit) and [endEdit](https://ej2.syncfusion.com/angular/documentation/api/grid/#endedit) methods, in conjunction with mouse events.

To implement this feature, you need to bind the `mouseup` event for the Grid and, within the event handler, call the `startEdit` and `endEdit` methods based on the clicked target element. This ensures that the editing mode is triggered when clicking on a specific element within the Grid.

The following sample demonstrates how to enable editing in a single click using the `mouseup` event along with the `load` event:

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

Editing can be restricted for designated rows using the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event. Set **args.cancel = true** based on custom condition checks in the event handler.

In the below demo, the rows which are having the value for **ShipCountry** column as **France** is prevented from editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs21/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/edit-cs21" %}
