---
layout: post
title: Row and column in Angular Pivotview component | Syncfusion
description: Learn here all about Row and column in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row and column 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD012 -->

# Row and column in Angular Pivotview component

## Width and Height

Allows end user to set the pivot table's height and width by using [`height`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#height) and [`width`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#width) properties in pivot table respectively. The supported formats to set [`height`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#height) and [`width`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#width) properties are,

* Pixel: For example - 100, 200, "100px", "200px".
* Percentage: For example - "100%", "200%".
* Auto: It is applicable for [`height`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#height) property alone in-order to render the pivot table beyond its parent container height without vertical scrollbar. The parent container here would show its vertical scrollbar as soon as the component reaches beyond its dimension.

> The pivot table will not be displayed less than **400px**, since it's the minimum width of the component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs250/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs250/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs250/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs250" %}


## Row Height

Allows end user to set the height of each pivot table rows commonly using the [`rowHeight`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#rowheight) property in [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/).

> By default, the [`rowHeight`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#rowheight) property is set as **36** pixels for desktop layout and **48** pixels for mobile layout.
> The height of the column headers alone may vary when grouping bar feature is enabled.

In the below code sample, the [`rowHeight`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#rowheight) property is set as **60** pixels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs251/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs251/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs251/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs251" %}

## Column Width

Allows end user to set the width of each pivot table columns commonly using the [`columnWidth`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#columnwidth) property in [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/).

> By default, the [`columnWidth`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#columnwidth) property is set as **110** pixels to each columns except the first column. For first column, **250** pixels and **200** pixels are set respectively with and without grouping bar.

In the below example, the [`columnWidth`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#columnwidth) property is set as **200** pixels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs252/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs252/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs252/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs252" %}

### Adjust width based on columns

By default, if the component width set in code-behind is more than the width of the total columns, then the columns will be stretched to make it fit. To avoid the stretching, set the [`allowAutoResizing`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#allowautoresizing) property in the [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/) to **false**. By doing so, the component will be adjusted (shrinked) based on the width of total columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs253/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs253/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs253/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs253" %}

## Reorder

Allows end user to reorder a particular column header from one index to another index within the pivot table through drag-and-drop option. It can be enabled by setting the [`allowReordering`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#allowreordering) property in [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/) to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs254/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs254/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs254/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs254" %}

## Column Resizing

Allows end user to resize the columns by clicking and dragging the right edge of the column header. While dragging, the width of the respective column will be resized immediately. To enable column resizing option, set the [`allowResizing`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#allowresizing) property in [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/) to **true**.

> By default, the column resizing option is enabled.
> In RTL mode, user can click and drag the left edge of the header cell to resize the column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs255/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs255/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs255/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs255" %}

## Text Wrap

Allows end user to wrap the cell content to the next line when it exceeds the boundary of the cell width. To enable text wrap, set the [`allowTextWrap`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#allowresizing) property in [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/) to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs256/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs256/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs256/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs256" %}

## Text Align

Allows end user to align the content of the pivot table's row and column headers and value cells by using the [`textAlign`](https://ej2.syncfusion.com/angular/documentation/api/grid/gridColumn/#textalign) and [`headerTextAlign`](https://ej2.syncfusion.com/angular/documentation/api/grid/gridColumn/#headertextalign) properties in the [`columnRender`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#columnrender) event under [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/). The following alignments are:

* `Left` - It allows the content to be positioned on the left.
* `Right` - It allows the content to be positioned on the right.
* `Center` - It allows the content to be positioned in the middle.
* `Justify` - It allows the content to be as flexible as possible, when the cell does not occupy the entire available area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs257/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs257/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs257/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs257" %}

## AutoFit

Allows the user to fit the Pivot Table columns as wide as the content of the cell without wrapping. It auto fits all of the Pivot Table columns by invoking the [`autoFitColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#autofitcolumns) method from the grid instance.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs258/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs258/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs258/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs258" %}

> The minimum width of 250 pixels is set by default with the grouping bar UI for the first column and cannot be reduced further. So, when the grouping bar is enabled, one can auto fit the Pivot Table columns by calling the [`autoFitColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#autofitcolumns) method from the grid instance with the parameter contained pivot table columns field name excluding first column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs259/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs259/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs259/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs259" %}

### Autofit specific columns

During initial rendering, the parameter `autoFit` in the [`columnRender`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#columnrender) event under [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/) can be set to **true** to autofit specific columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs260/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs260/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs260/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs260" %}

## Grid Lines

Allows end user to display cell border for each cells using [`gridLines`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#gridlines) property in [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/).

Available mode of grid lines are:

| Modes | Actions |
|-------|---------|
| Both | Displays both the horizontal and vertical grid lines.|
| None | No grid lines are displayed.|
| Horizontal | Displays the horizontal grid lines only.|
| Vertical | Displays the vertical grid lines only.|
| Default | Displays grid lines based on the theme.|

> By default, pivot table renders grid lines in **Both** mode.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs261/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs261/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs261/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs261" %}

## Selection

Selection provides an option to highlight a row or a column or a cell. It can be done through simple mouse down or arrow keys. To enable selection in the pivot table, set the [`allowSelection`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#allowselection) property in [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/) to **true**.

The pivot table supports two types of selection that can be set using [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/#type) property in [`selectionSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/). The selection types are:

* **Single**: It is set by default, and it only allows selection of a single row or a column or a cell.
* **Multiple**: Allows you to select multiple rows or columns or cells.
To perform multi-selection, press and hold "CTRL" key and click the desired rows or cells. To select range of rows or cells, press and hold the "SHIFT" key and click the rows or columns or cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs262/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs262/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs262/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs262" %}

### Selection Mode

The pivot table supports four types of selection mode that can be set using [`mode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/#type) in [`selectionSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/). The selection modes are:

* **Row**: It is set by default, and allows user to select only rows.
* **Column**: Allows user to select only columns.
* **Cell**: Allows user to select only cells.
* **Both**: Allows user to select rows and columns at the same time.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs263/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs263/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs263/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs263" %}

### Cell Selection Mode

The pivot table supports two types of cell selection mode that can be set using [`cellSelectionMode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/#cellselectionmode) in [`selectionSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/). The cell selection modes are:

* **Flow**: It is set by default. The range of cells are selected between the start index and end index that includes in-between cells of rows.
* **Box**: Range of cells are selected from the start and end column indexes that includes in-between cells of rows within the range.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs264/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs264/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs264/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs264" %}

> Cell selection requires [`mode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/#mode) property in [`selectionSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/) to be **Cell** or **Both**, and [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/#type) property should be **Multiple**.

### Changing background color of the selected cell

The background-color of the selected cell can be changed using built-in CSS names. To do so, please refer to the code sample below, which shows that the selected cells are changed to a `green yellow` color.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/background-css-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/background-css-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/background-css-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/background-css-cs1" %}

### Event

#### CellSelected

The event `cellSelected` is triggered when cell selection gets completed. It provides selected cells information with its corresponding column and row headers. It has following parameters - `selectedCellsInfo`, `currentCell` and `target`. This event allows user to view selected cells information and user can pass those selected cells information to any external component for data binding.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs265/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs265/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs265/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs265" %}

#### CellSelecting

The event `cellSelecting` triggers before cell gets selected gets completed. It provides selected cells information with its corresponding column and row headers. It has following parameters - `currentCell`, `data` and `cancel`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs266/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs266/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs266/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs266" %}


## Clip Mode

The clip mode provides options to display its overflow cell content in the pivot table. It can be configured using the [`clipMode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#clipmode) property in [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/). The pivot table supports three types of clip modes which are:

* **Clip**: Truncates the cell content when it overflows its area.
* **Ellipsis**: Displays ellipsis when the cell content overflows its area.
* **EllipsisWithTooltip**: Displays ellipsis when the cell content overflows its area, also it will display the tooltip while hover on ellipsis is applied.

>By default, [`clipMode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#clipmode) value is set to **Ellipsis**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs267/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs267/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs267/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs267" %}

## Cell Template

User can customize the pivot table cell element by using the `cellTemplate` property in pivot table The `cellTemplate` property accepts either an HTML string or the element's ID, which can be used to append additional HTML elements to showcase each cell with custom format.

In this demo, the revenue cost for each year is represented with trend icons.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs268/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs268/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs268/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs268" %}


## Events

### QueryCellInfo

The event `queryCellInfo` triggers while rendering row and value cells in the pivot table. It allows the user to customize the element of the current cell. It has the following parameters:

* `cell` - It holds the current cell info
* `data` - It holds entire row data
* `column` - It holds column information for the current cell
* `pivotview` - It holds pivot instance

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs269/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs269/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs269/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs269" %}

### HeaderCellInfo

The event `headerCellInfo` triggers while rendering the header cells in the pivot table. It allows the user to customize the element of the current header cell. It has the following parameters:

* `node` - It holds the current header cell info

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs270/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs270/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs270/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs270" %}

### ColumnRender

The event [`columnRender`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#columnrender) triggers while framing each columns for rendering in the pivot table. It allows the user to customize the text alignment, column visibility, autofit, re-ordering, minimum and maximum width for a specific column. It has the following parameters:

* `columns` - It holds the leaf level columns (i.e., value headers) information.
* `dataSourceSettings` - It holds the current data source settings such as input data source, rows, columns, values, filters, format settings and so on.
* `name` - It holds the name of the event.
* `stackedColumns` - It holds the drilled columns (i.e., including column and value headers) information.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs271/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs271/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs271/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs271" %}

### CellClick

The event [`cellClick`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#cellclick) triggers while clicking a cell in the pivot table. For instance, using this event end-user can either add or remove styles, edit value and also perform any other DOM manipulations. It has the following parameters:

* `currentCell` - It holds the current cell information.
* `data` - It holds the clicked cell's data like axis, formatted text, actual text, row header, column header and value informations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs272/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs272/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs272/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs272" %}