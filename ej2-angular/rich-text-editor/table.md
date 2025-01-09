---
layout: post
title: Table in Angular Rich Text Editor component | Syncfusion
description: Learn here all about Table in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Table
documentation: ug
domainurl: ##DomainURL##
---

# Table in Angular Rich Text Editor Component

Rich Text Editor allows to insert table of content in edit panel and provides an options to add, edit and remove the table as well as perform other table related action. For inserting the table to the Rich Text Editor, the following list of options have been provided in the [`tableSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/tableSettingsModel/)


## Configure Table Tool in the Toolbar

You can add an `CreateTable` tool in the Rich Text Editor toolbar using the `toolbarSettings` [items](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#items) property.

Select the number of rows and columns on the table grid to insert the table.

Tables can also be inserted through the `Insert Table` option in the pop-up where the number of rows and columns can be provided manually, and this is the default way in devices.

> To use the Table feature, configure `TableService` in the provider section.

In the following sample, the table feature has been provided from table module.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs27/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs27/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs27" %}

## Table Header

The `TableHeader` command is available in the quick toolbar, allowing you to add or remove the header row from the inserted table. The following image illustrates the table header.

![Rich Text Editor table header](images/table_header.png)

## Insert Rows

You can insert `Rows` above or below the selected table cell using the quick toolbar. The focused row can also be deleted. The following screenshot shows the available options of the row item.

![Rich Text Editor table row](images/table_rows.png)

## Insert Columns

`Columns` can be inserted to the left or right of the selected table cell using the quick toolbar. The focused column can also be deleted. The following screenshot shows the available options in inserting column item.

![Rich Text Editor table column](images/table_column.png)

## Cell Background Color

Set the background color for each table cell using the `BackgroundColor` command in the quick toolbar.

![Rich Text Editor table background color](images/table_bg_color.png)

## Delete Table

Delete the entire table using the delete item in the quick toolbar.

## Vertical Alignment

Align text inside table cells to the top, middle, or bottom using the `TableCellVerticalAlign` tool in the quick toolbar.

![Rich Text Editor table vertical alignment](images/table_vertical.png)

## Horizontal Alignment

Align text inside table cells to the left, right, or center using the `TableCellHorizontalAlign` tool in the quick toolbar.

![Rich Text Editor table horizontal alignment](images/table_horizontal.png)

## Table Styles

Table styles provided for class name should be appended to a table element. It helps to design the table in specific CSS styles when inserting in the editor.

By Default, provides Dashed border and Alternate rows.

**Dashed border**: Applies a dashed border to the table.

**Alternate border**: Applies an alternating background to table rows.

![Rich Text Editor table styles](images/table_style.png)

## Table and Cell Dimensions

Sets the default width of the table when it is inserted in the Rich Text Editor using the width of [`tableSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/tableSettings/).

Users can modify the width, cell padding, and cell spacing of selected tables using the properties option in the quick toolbar.

![Rich Text Editor table settings](images/table_properties.png)

## Table Cell Selection

The table cell selection feature in our editor allows for intuitive and efficient table manipulation using both mouse and keyboard interactions.

**Mouse interaction:**

* Click and drag to select multiple cells, rows or columns.
* Selected cells are highlighted with a distinct background color for better visibility.

**Keyboard interaction:**

* Use <kbd>Shift</kbd> + <kbd>Arrow keys</kbd> to extend the selection of cells, rows or columns.
* Background color highlights selected cells for better visibility.

**Table selection with backspace and delete keys:**

* Press the <kbd>Backspace</kbd> key immediately after the table to select the entire table.
* Press the <kbd>Delete</kbd> key immediately before the table to select the entire table.

**Table content text formatting:**

The text formatting feature in tables allows users to apply various styles to selected cells, enhancing the appearance and readability of data. This includes the application of headings, paragraphs, lists, and inline styles such as bold, italic, and strikethrough. Users can efficiently format multiple cells simultaneously by selecting entire rows or columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/table-row-and-column-selection/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/table-row-and-column-selection/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/table-row-and-column-selection" %}

## Table Cell Merge and Split

The Rich Text Editor allows users to modify table appearance by merging or splitting cells.

Configure the `TableCell` item in the Table [quickToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quickToolbarSettings/#table) property to display merge/split icons when selecting table cells.

### Table Cell Merge

The table cell merge feature allows you to merge two or more row and column cells into a single cell, combining their contents.

The following image explains the table merge action.

![Rich Text Editor table cell merge](./images/table_merge.png)

### Table Cell Split

The table cell split feature allows you to a selected cell can be split both horizontally and vertically.

The following image explains the table split action.

![Rich Text Editor table cell split](./images/table_split.png)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs28/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs28/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs28" %}

## Customize Table Quick Toolbar

The quick toolbar appears when clicking on a table, providing easy access to table-related commands. You can customize the quick toolbar by adding or removing tools using the [`quickToolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#quickToolbarSettings) property.

> To use quick toolbar feature, configure `QuickToolbarService` in the provider section.

The following sample demonstrates the customiztion of table quick toolbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs32/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs32/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs32" %}