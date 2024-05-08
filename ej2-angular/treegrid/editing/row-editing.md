---
layout: post
title: Row editing in Angular Treegrid component | Syncfusion
description: Learn here all about Row editing in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row editing 
documentation: ug
domainurl: ##DomainURL##
---

# Row editing in Angular Treegrid component

In Row edit mode, when you start editing the currently selected record, the entire row is changed to edit state.
You can change the cell values of the row and save edited data to the data source.
To enable Row edit, set the [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettingsModel/#mode) as `Row`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs25/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs25/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs25" %}

## Automatically update the column based on another column edited value

Update the column value based on another column edited value by using the Cell Edit Template feature.

In the following demo, the **price** column value is updated based on the **units** and **unitPrice** column value while batch editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs26/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs26/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs26" %}

## Cancel edit based on condition

Prevent the CRUD operations of the tree grid by using condition in the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) event with the requestType as `beginEdit` for editing, the `add` for adding and `delete` for deleting action.

In the following demo, the CRUD operation is prevented based on the **priority** column value. If the **priority** Column is `Low`, that row cannot be edited or deleted.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs27/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs27/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs27" %}

## Perform CRUD action programmatically

The Tree Grid methods can be used to perform CRUD operations programmatically. The [addRecord](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#addrecord), [deleteRecord](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#deleterecord), and [startEdit](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#startedit) methods are used to perform CRUD operations in the following demo:

* To add a new record to the tree grid, use the [`addRecord`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#addrecord) method. By passing the JSON data and the index parameter into the method. If you call this method with no parameters, it will create an empty row in the tree grid.

* To change the selected row to the edit state, use the [`startEdit`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#startedit) method.

* If you need to update the row data in the tree grid’s datasource, use the [`updateRow`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#updaterow) method. In this method, pass the index value of the row to update along with the updated data.

* If you need to update a particular cell in the row, use the [`setCellValue`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#setcellvalue) method. In this method, pass the primary key value of the data source, field name, and new value for a particular cell.

* To remove a selected row from the tree grid, use the [`deleteRecord`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#deleterecord) method. For both edit and delete operations, you must select a row first.

* If you need to update a entire row, use the [`setRowData`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#setrowdata) method. In this method, pass the primary key value of the data source, and the new value for the particular row.

> **Note:** In both Row and dialog editing modes, these methods can be used.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs28/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs28/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs28" %}

> You can cancel the editing programmatically by the [`closeEdit`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#closeedit) method in Row and Dialog edit mode of tree grid.
> You can delete the row by the [`deleteRow`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#deleterow) method in tree grid. In this method, you need to pass the row element of the record that need to be deleted.

## Show delete confirmation dialog

The delete confirm dialog can be shown when deleting a record by defining the [showDeleteConfirmDialog](https://ej2.syncfusion.com/angular/documentation/api/treegrid/editSettings/#showdeleteconfirmdialog) as **true**

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs29/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs29/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs29" %}

> The **showDeleteConfirmDialog** supports all type of edit modes.

## Move the focus to a particular cell instead of first cell while editing a row

The [recordDoubleClick](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#recordDoubleClick) event allows you to move the focus to the corresponding cell (the cell that you doubled-clicked to edit a row) instead of the first cell in edit form. With the help of this event, focus on the double-clicked column in the row edit mode.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs30/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/edit-toolbar-cs30/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/edit-toolbar-cs30" %}