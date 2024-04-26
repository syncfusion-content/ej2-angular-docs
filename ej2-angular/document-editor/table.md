---
layout: post
title: Table in Angular Document editor component | Syncfusion
description: Learn here all about Table in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Table 
documentation: ug
domainurl: ##DomainURL##
---

# Table in Angular Document editor component

Tables are an efficient way to present information. Document Editor can display and edit the tables. You can select and edit tables through keyboard, mouse, or touch interactions. Document Editor exposes a rich set of APIs to perform these operations programmatically.

## Create a table

You can create and insert a table at cursor position by specifying the required number of rows and columns.

Refer to the following sample code.

```typescript
 this.documentEditor.editor.insertTable(3,3);
```

The maximum size of row and column is limited to 32767 and 63 respectively.

## Insert rows

You can add a row (or several rows) above or below the row at cursor position by using the [`insertRow`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#insertrow) method. This method accepts the following parameters:

Parameter | Type | Description
----------|------|-------------
above(optional) | boolean | This is optional and if omitted, it takes the value as false and inserts below the row at cursor position.
count(optional) | number | This is optional and if omitted, it takes the value as 1.

Refer to the following sample code.

```typescript
//Inserts a row below the row at cursor position
this.documentEditor.editor.insertRow();
//Inserts a row above the row at cursor position
this.documentEditor.editor.insertRow(false);
//Inserts three rows below the row at cursor position
this.documentEditor.editor.insertRow(true, 3)
```

## Insert columns

You can add a column (or several columns) to the left or right of the column at cursor position by using the [`insertColumn`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#insertcolumn) method. This method accepts the following parameters:

Parameter | Type | Description
----------|------|-------------
left(optional) | boolean| This is optional and if omitted, it takes the value as false and inserts to the right of column at cursor position.
count(optional) | number |  This is optional and if omitted, it takes the value as 1.

Refer to the following sample code.

```typescript
//Insert a column to the right of the column at cursor position.
this.documentEditor.editor.insertColumn();
//Insert a column to the left of the column at cursor position.
this.documentEditor.editor.insertColumn(false);
//Insert two columns to the left of the column at cursor position.
this.documentEditor.editor.insertColumn(false, 2);
```

### Select an entire table

If the cursor position is inside a table, you can select the entire table by using the following sample code.

```typescript
this.documentEditor.selection.selectTable();
```

### Select row

You can select the entire row at cursor position by using the following sample code.

```typescript
this.documentEditor.selection.selectRow();
```

If current selection spans across cells of different rows, all these rows will be selected.

### Select column

You can select the entire column at cursor position by using the following sample code.

```typescript
this.documentEditor.selection.selectColumn();
```

If current selection spans across cells of different columns, all these columns will be selected.

### Select cell

You can select the cell at cursor position by using the following sample code.

```typescript
this.documentEditor.selection.selectCell();
```

## Delete table

Document Editor allows you to delete the entire table. You can use the [`deleteTable()`](../api/document-editor/editor/#deletetable) method of editor instance, if selection is in table. Refer to the following sample code.

```typescript
this.documentEditor.editor.deleteTable();
```

## Delete row

Document Editor allows you to delete the selected number of rows. You can use the [`deleteRow()`](../api/document-editor/editor/#deleterow) method of editor instance to delete the selected number of rows, if selection is in table. Refer to the following sample code.

```typescript
this.documentEditor.editor.deleteRow();
```

## Delete column

Document Editor allows you to delete the selected number of columns. You can use the [`deleteColumn()`](../api/document-editor/editor/#deletecolumn) method of editor instance to delete the selected number of columns, if selection is in table. Refer to the following sample code.

```typescript
this.documentEditor.editor.deleteColumn();
```

## Merge cells

You can merge cells vertically, horizontally, or combination of both to a single cell. To vertically merge the cells, the columns within selection should be even in left and right directions. To horizontally merge the cells, the rows within selection should be even in top and bottom direction.
Refer to the following sample code.

```typescript
this.documentEditor.editor.mergeCells()
```

## Positioning the table

Document Editor preserves the position properties of the table and displays the table based on position properties. It does not support modifying the position properties. Whereas the table will be automatically moved along with text edited if it is positioned relative to the paragraph.

## How to work with tables

The following sample demonstrates how to delete the table row or columns, merge cells and how to bind the API with button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/tables-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/tables-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/tables-cs1" %}

## See Also

* [Feature modules](../document-editor/feature-module/)
* [Insert table dialog](../document-editor/dialog#table-dialog)