---
layout: post
title: Table in Angular Rich Text Editor component | Syncfusion
description: Learn how to insert, format, and manage Table in the Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Table
documentation: ug
domainurl: ##DomainURL##
---

# Table in Angular Rich Text Editor Component

The Syncfusion Angular Rich Text Editor allows inserting table in the edit panel, providing options to add, edit, format, and remove tables as well as perform other table related action. For inserting the table to the Rich Text Editor, the following list of options have been provided in the [tableSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/tableSettingsModel)

## Configuring the table tool in toolbar

You can add an `CreateTable` tool in the Rich Text Editor toolbar using the [toolbarSettings.items](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings#items) property.

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

## Table headers

The `TableHeader` command is available in the quick toolbar, allowing you to add or remove the header row from the inserted table. The following image illustrates the table header.

![Rich Text Editor table header](images/table_header.png)

## Inserting rows

You can insert `Rows` above or below the selected table cell using the quick toolbar. The focused row can also be deleted. The following screenshot shows the available options of the row item.

![Rich Text Editor table row](images/table_rows.png)

## Inserting columns

`Columns` can be inserted to the left or right of the selected table cell using the quick toolbar. The focused column can also be deleted. The following screenshot shows the available options in inserting column item.

![Rich Text Editor table column](images/table_column.png)

## Table column resizing

The Rich Text Editor supports resizing of table columns, allowing users to adjust the size of individual columns to better fit their content. To resize a column, hover the pointer near the edge of a table cell until the resize cursor appears. Then, click and drag the cell border to modify the column size as needed.

This feature provides flexibility in organizing tabular data and ensures that tables remain clear, structured, and easy to read, especially when working with varying content lengths or complex layouts.

## Nesting tables

The Rich Text Editor allows users to insert tables within other table cells, enabling the creation of nested tables. This feature is useful for building complex layouts such as structured forms, hierarchical data views, or detailed reports. Users can manually insert a nested table by placing the cursor inside a cell and using the table toolbar option or HTML source editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/nesting-table/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/nesting-table/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/nesting-table" %}

## Quick insert for table rows and columns

The Rich Text Editor offers a simple and intuitive way to add rows and columns to your tables without interrupting your workflow. You can expand tables directly from the interface, no need to use toolbar buttons.

### Insert columns instantly

- **Where to hover**: Place your cursor over any cell in the **first row** of your table.
- **What you'll see**: A small dot icon (●) will appear at the **top edge** of the cell.
- **How to add**: Hover over the dot to reveal a **plus icon (+)**. Click it to insert a new column to the left.

![Rich Text Editor table column quick insert](images/table_column_quick_insert.gif)

### Insert rows instantly

- **Where to hover**: Place your cursor over any cell in the **first column** of your table.
- **What you'll see**: A small dot icon (●) will appear at the **left edge** of the cell.
- **How to add**: Hover over the dot to reveal a **plus icon (+)**. Click it to insert a new row above.

![Rich Text Editor table row quick insert](images/table_row_quick_insert.gif)

## Table, row, and column selection

The Rich Text Editor provides a simple and intuitive way to select table rows, columns, and entire table. Users can now select table rows and columns without dragging the mouse between cells.

### Selecting an Entire Row

Entire rows can be selected using the icons that appears on hover.

**To select a row:**
- **Where to hover**: Move the mouse pointer over the first column of the table..
- **What you'll see**: A selection handle appears on the left side of the corresponding row.
- **How to select**: Click the handle to select the entire row.

![Rich Text Editor table row selection](images/table_row_selection.gif)

### Selecting an Entire Column

Entire columns can be selected using the icons that appears on hover.

**To select a column:**

- **Where to hover**: Move the mouse pointer over the first row of the table.
- **What you'll see**: A selection handle appears at the top of the corresponding column.
- **How to select**: Click the handle to select the entire column.

![Rich Text Editor table column selection](images/table_column_selection.gif)

### Selecting the Entire Table

The entire table can be selected using the table selection icon that appears on hover.

**To select the entire table:**

- **Where to hover**: Move the mouse pointer anywhere over the table.
- **What you'll see**: A selection handle appears at the top-left corner of the table.
- **How to select**: Click the handle to select the entire table.

![Rich Text Editor entire table selection](images/table_entire_selection.gif)

### Keyboard Shortcuts

The `Ctrl + A` shortcut provides progressive selection behavior when used inside a table.

* **First press:** Selects the current cell
* **Second press:** Selects the row containing the current cell
* **Third press:** Selects the entire table
* **Fourth press:** Selects all content in the Rich Text Editor

## Setting cell background color

Set the background color for each table cell using the `BackgroundColor` command in the quick toolbar.

![Rich Text Editor table background color](images/table_bg_color.png)

## Deleting table

Delete the entire table using the delete item in the quick toolbar.

## Table cell alignment

### Vertical alignment

Align text inside table cells to the top, middle, or bottom using the `TableCellVerticalAlign` tool in the quick toolbar.

![Rich Text Editor table vertical alignment](images/table_vertical.png)

### Horizontal alignment

Align text inside table cells to the left, right, or center using the `TableCellHorizontalAlign` tool in the quick toolbar.

![Rich Text Editor table horizontal alignment](images/table_horizontal.png)

## Applying table styles

Table styles provided for class name should be appended to a table element. It helps to design the table in specific CSS styles when inserting in the editor.

By Default, provides Dashed border and Alternate rows.

**Dashed border**: Applies a dashed border to the table.

**Alternate border**: Applies an alternating background to table rows.

![Rich Text Editor table styles](images/table_style.png)

## Setting table and cell dimensions

Sets the default width of the table when it is inserted in the Rich Text Editor using the width of [tableSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/tableSettings).

Users can modify the table width, cell padding, cell spacing, background color, border color, border style, and border width through the `TableEditProperties` option in the quick toolbar. By default, the border style is double and the border width is 1px. When users change these values in the dialog, the updates are instantly reflected in the editor as a live preview.

![Rich Text Editor table settings](images/table_properties.png)

## Setting individual cell dimensions and borders

The Rich Text Editor provides advanced options to customize individual table cell dimensions and borders. This feature enables fine-grained control over cell sizes, spacing, alignment, and border styling for both single and multiple cell selections.

### Configuring the table cell properties in quick toolbar

To enable individual cell dimension and border customization, configure the `TableCellProperties` item in the Table [quickToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quickToolbarSettings#table) property:

```typescript
quickToolbarSettings: { table: ['TableCellProperties'] }
```

### Individual cell properties dialog

Clicking on the `TableCellProperties` item in the quick toolbar opens a comprehensive dialog with the following customization options:

**Dimension settings:**

* **Width**: Set custom cell width with flexible unit selection (px, %, auto). The width is calculated based on the col group element's percentage of the selected cell. This setting applies to both single and multiple cell selections.

* **Height**: Define custom cell height with unit options (px, %, auto). When the cell height value is applied, it appears in the UI only when the table has an explicitly defined height. Provides granular control over vertical cell dimensions.

* **Cell padding**: Adjust the internal spacing inside cells to improve readability and visual appearance.

**Alignment options:**

* **Horizontal alignment**: Four alignment options are available:
  - Align left
  - Align center
  - Align right
  - Align justify
  
* **Vertical alignment**: Position cell content vertically with the following options:
  - Align top
  - Align middle
  - Align bottom

**Border customization:**

* **Border Style**: Select the desired border line style (default is double).
* **Border Width**: Specify the border thickness in pixels (default is 1px).
* **Border Color**: Apply custom colors for cell borders to match design requirements.

**Cell appearance:**

* **Background color**: Apply individual cell background colors to highlight important data or improve visual organization.

### Applying properties to cells

The `TableCellProperties` enables modification of properties for both single and multiple selected cells. When multiple cells are selected, property changes apply uniformly to all selected cells, maintaining consistency across the table layout.

### Live preview

All changes made in the Table Cell Properties dialog are instantly reflected in the editor as a live preview, providing real-time visual feedback before finalizing the modifications.

![Rich Text Editor table settings](images/table_cell_properties.png)

In the following sample, the table cell properties feature has been provided from table module.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/table-cell-properties-sample/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/table-cell-properties-sample/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/rich-text-editor/table-cell-properties-sample/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/table-cell-properties-sample" %}

## Table cell selection and formatting

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

## Copy, cut, and paste table content

The Rich Text Editor supports copying, cutting, and pasting table content, significantly improving the efficiency of table data manipulation. This feature is ideal for applications that require dynamic table content management, allowing users to easily modify and manage table data within the editor.

Users can select multiple table cells by dragging the mouse or by holding the <kbd>Shift</kbd> key and using the <kbd>Arrow keys</kbd>. After selecting the desired cells, the following standard keyboard shortcuts can be used:

| Action | Windows | Mac |
|--------|---------|-----|
| Copy   | <kbd>Ctrl</kbd> + <kbd>C</kbd> | <kbd>⌘</kbd> + <kbd>C</kbd> |
| Cut    | <kbd>Ctrl</kbd> + <kbd>X</kbd> | <kbd>⌘</kbd> + <kbd>X</kbd> |
| Paste  | <kbd>Ctrl</kbd> + <kbd>V</kbd> | <kbd>⌘</kbd> + <kbd>V</kbd> |

**Paste behavior and supported scenarios:**

* Table structure, formatting, and cell properties are automatically preserved during the paste operation.
* The editor intelligently handles cell merging and splitting based on the destination context.
* Supports cross-table operations. Users can copy content from one table and paste it into another.
* Allows pasting partial table content as new tables or into existing table cells.
* Compatible with content from external applications like Excel, Word, and other editors.
* Maintains formatting consistency during both internal and external paste operations.
* Supports pasting into a single clicked cell or a selected range of multiple cells.

## Merging and splitting cells

The Rich Text Editor allows users to modify table appearance by merging or splitting cells.

Configure the `TableCell` item in the Table [quickToolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/quickToolbarSettings#table) property to display merge/split icons when selecting table cells.

### Merging table cells

The table cell merge feature allows you to merge two or more row and column cells into a single cell, combining their contents.

The following image explains the table merge action.

![Rich Text Editor table cell merge](./images/table_merge.png)

### Splitting table cells

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

## See also

* [Table Quick Toolbar](./toolbar/quick-toolbar#table-quick-toolbar)