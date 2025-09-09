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

To learn about how to use the row and column options effectively in the Angular Pivot Table, watch this video:

{% youtube "https://www.youtube.com/watch?v=JZexayfKjrU" %}

## Width and Height

Setting appropriate dimensions for the Pivot Table ensures optimal display and better user experience across different screen sizes and layouts. You can define the Pivot Table's dimensions using the [`height`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#height) and [`width`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#width) properties to meet your specific requirements.

These dimension properties support multiple formats to accommodate various layout scenarios and provide flexibility in how you define the component's size:

**Supported formats:**

* **Pixel**: Specify exact dimensions using numeric values or pixel units. For example: `100`, `200`, `"100px"`, or `"200px"`.
* **Percentage**: Set dimensions relative to the parent container. For example: `"100%"` or `"200%"`.
* **Auto**: This option is available only for the [`height`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#height) property. When set to **auto**, the Pivot Table expands beyond its parent container height without showing a vertical scrollbar within the component. Instead, the parent container displays its vertical scrollbar once the component exceeds its boundaries.

> **Note:** The Pivot Table maintains a minimum width of **400px** to ensure proper display and functionality, even if a smaller width is specified.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs250/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs250/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs250" %}

## Row Height

Adjusting the row height in the Pivot Table helps make your data easier to view and interact with, especially when there are many rows or large amounts of content. To make these adjustments, you can use the [`rowHeight`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#rowheight) property within the [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/) options. This property allows you to control how much space each row occupies, so the Pivot Table remains clear and readable according to your needs.

> By default, the [`rowHeight`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#rowheight) is set to **36** pixels for desktop layouts and **48** pixels for mobile layouts. However, if you enable the grouping bar option, note that only the column header height may change, while the rest of the rows maintain the specified height.

For example, in the sample code below, the [`rowHeight`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#rowheight) property is set to **60** pixels. This increases the space for each row, making the data easier to read and compare.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs251/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs251/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs251" %}

## Column Width

Controlling the width of columns allows users to view their data in the Pivot Table more clearly, making each column easy to read and ensuring that information is not cut off. To achieve this, you can use the [`columnWidth`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#columnwidth) property, which is available under the [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/).

> By default, the [`columnWidth`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#columnwidth) is set to **110** pixels for all columns except the first one. The first column is assigned a width of **250** pixels if the grouping bar is enabled, or **200** pixels when it is not. This ensures that the data in the row header is always easily visible.

In the following example, the [`columnWidth`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#columnwidth) property is set to **200** pixels for all columns to provide a wider view.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs252/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs252/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs252" %}

### Adjust width based on columns

By default, when the component width exceeds the total width of all columns, the columns are automatically stretched to fill the available space. To prevent this stretching behavior, set the [`allowAutoResizing`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#allowautoresizing) property to **false** within the [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/). This ensures that the Pivot Table adjusts its overall width to match the combined width of all columns, maintaining their original proportions and improving data readability.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs253/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs253/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs253" %}

## Reorder

The reorder option provides users with the flexibility to reorganize column headers within the Pivot Table by dragging and dropping them to different positions. This allows users to customize the layout of their data for better analysis and presentation.

To enable this option, set the [`allowReordering`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#allowreordering) property to **true** within the [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/) configuration. Once enabled, users can simply click and drag any column header to move it to their desired position within the table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs254/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs254/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs254" %}

## Column Resizing

Column resizing in the Pivot Table helps users adjust the column widths to better view and compare data. Users can easily resize columns by clicking and dragging the right edge of any column header. As the user drags, the column’s width is updated immediately, offering a responsive and comfortable viewing experience.

This option is enabled by default. To control column resizing, set the [`allowResizing`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#allowresizing) property in the [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/) object to **true** or **false** as needed.

> In right-to-left (RTL) mode, users should click and drag the left edge of the header cell to resize the column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs255/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs255/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs255" %}

## Text Wrap

The Pivot Table allows users to wrap cell content to the next line when the content exceeds the boundary of the cell width. To enable text wrap, set the [`allowTextWrap`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#allowtextwrap) property to **true** within the [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/) configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs256/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs256/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs256" %}

## Text Align

Text alignment provides flexibility in positioning content within cells, making the data presentation more organized and visually appealing. You can align the content of the Pivot Table's row headers, column headers, and value cells using the [`textAlign`](https://ej2.syncfusion.com/angular/documentation/api/grid/gridColumn/#textalign) and [`headerTextAlign`](https://ej2.syncfusion.com/angular/documentation/api/grid/gridColumn/#headertextalign) properties in the [`columnRender`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#columnrender) event under [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/). The available alignment options are:

* `Left` - Positions the content on the left side of the cell.
* `Right` - Positions the content on the right side of the cell.
* `Center` - Positions the content in the center of the cell.
* `Justify` - Distributes the content evenly across the cell width for optimal space utilization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs257/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs257/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs257" %}

## AutoFit

The AutoFit option allows users to easily adjust Pivot Table columns so that each column matches the width of its content, making the data easier to read without cell content being cut off or wrapped unnecessarily. To accomplish this, you can use the [`autoFitColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#autofitcolumns) method from the grid instance, which automatically resizes all Pivot Table columns based on the content of their cells.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs258/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs258/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs258" %}

> When the grouping bar is enabled, the first column in the Pivot Table has a minimum width of **250** pixels, which cannot be decreased. In such cases, if you want to auto fit the remaining columns, you can call the [`autoFitColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#autofitcolumns) method from the grid instance, passing the field names of the Pivot Table columns except the first column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs259/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs259/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs259" %}

### Autofit Specific Columns

The autofit option for specific columns enables users to precisely control which columns automatically resize to fit their content, rather than adjusting all columns simultaneously. This targeted approach allows for greater customization of the Pivot Table layout based on specific content needs.

To implement this functionality during the initial rendering of the Pivot Table, set the `autoFit` parameter to **true** in the [`columnRender`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#columnrender) event. This event, available under the [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/) property, allows you to selectively apply autofit to columns based on your requirements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs260/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs260/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs260" %}

## Grid Lines

The grid lines option provides visual structure to the Pivot Table by displaying cell borders, making it easier for users to read and analyze data. You can control the display of grid lines using the [`gridLines`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#gridlines) property within the [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/) configuration.

The following grid line modes are available:

| Mode | Description |
|------|-------------|
| Both | Shows both horizontal and vertical grid lines around each cell |
| None | Hides all grid lines for a clean appearance |
| Horizontal | Shows only horizontal grid lines between rows |
| Vertical | Shows only vertical grid lines between columns |
| Default | Shows grid lines based on the applied theme settings |

> The Pivot Table displays grid lines in **Both** mode by default.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs261/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs261/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs261" %}

## Selection

Selection in the Pivot Table allows users to easily highlight rows, columns, or individual cells for better data focus and visualization. This makes it simple to compare and analyze specific data points within your table.

To enable selection, set the [`allowSelection`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#allowselection) property to **true** within the [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/) configuration. This allows users to select table elements using a mouse click or arrow keys.

The Pivot Table provides two selection modes, controlled by the [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/#type) property in [`selectionSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/):

- **Single**: Allows you to select only one row, column, or cell at a time. This is the default mode.
- **Multiple**: Lets you select several rows, columns, or cells. To select multiple items, hold down the "CTRL" key and click the rows or cells you wish to select. To select a range, hold the "SHIFT" key and click the first and last item in the range.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs262/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs262/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs262" %}

### Selection mode

You can choose how selection works by setting the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/#type) property within the [`selectionSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/) configuration. The Pivot Table offers four simple options for selection mode:

- **Row**: This is the default mode. It lets the user select an entire row with a single click.
- **Column**: In this mode, only entire columns can be selected.
- **Cell**: This mode allows the user to select one or more individual cells.
- **Both**: This option lets users select both rows and columns at the same time, providing more flexibility.

By choosing the right selection mode, users can quickly highlight and review the data that matters most to them.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs263/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs263/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs263" %}

### Cell Selection Mode

To set the cell selection mode, use the [`cellSelectionMode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/#cellselectionmode) option within the [`selectionSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/). The available modes are:

- **Flow** (default): Selects a continuous range of cells from the starting cell to the ending cell, including all rows in between.
- **Box**: Selects a rectangular block of cells that spans from the starting cell to the ending cell, covering all intermediate rows and columns within the selected range.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs264/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs264/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs264" %}

> To use cell selection modes, ensure that the [`mode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/#mode) property in [`selectionSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/) is set to **Cell** or **Both** and the [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/#type) property is set to **Multiple**. This allows users to select more than one cell at a time for better comparison and review.

### Changing background color of the selected cell

Highlighting selected cells in the Pivot Table with a different background color helps users quickly identify and focus on important data. To achieve this effect seamlessly, you can apply built-in CSS classes that customize the appearance of selected cells.

In the example below, selected cells appear with a **green-yellow** background. Simply add the custom styles to your stylesheet, and they will be applied when you select a cell using the mouse or arrow keys.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/background-css-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight css tabtitle="app.component.css" %}
{% include code-snippet/pivot-grid/background-css-cs1/src/app.component.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/background-css-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/background-css-cs1" %}

### Event

#### CellSelected

When a user finishes selecting cells, the [`cellSelected`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#cellselected) event is triggered. This event provides details about the selected cells, including the related row and column headers. The event holds three important parameters: [`selectedCellsInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotCellSelectedEventArgs/#selectedcellsinfo), [`currentCell`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotCellSelectedEventArgs/#currentcell), and [`target`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#target). Users can use this information to easily identify the selected data and share it with other parts of their application, such as for data binding or additional processing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs265/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs265/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs265" %}

#### CellSelecting

The [`cellSelecting`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#cellselecting) event triggers before a cell selection is completed. It helps users preview the details of the cell, including the related row and column headers, before making a final selection. The event also allows users to cancel the selection action if needed. This event includes the following parameters:

- [`currentCell`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotCellSelectedEventArgs/#currentcell): Contains information about the cell that the user is about to select.
- [`data`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotCellSelectedEventArgs/#data): Displays the data linked to the current cell, along with its row and column headings.
- [`cancel`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotCellSelectedEventArgs/#cancel): Allows users to stop the cell from being selected if certain conditions are met.

You can use these parameters to decide whether or not the cell should be selected, or to update other parts of your application based on the selection about to happen.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs266/src/app.component.ts %} 
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs266/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs266" %}

## Clip Mode

The clip mode option in the Pivot Table determines how cell content is displayed when it exceeds the cell’s boundaries. You can set this option using the [`clipMode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#clipmode) property within the [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/) configuration. The Pivot Table provides the following clip mode options:

- **Clip**: Cuts off any part of the cell content that does not fit within the cell.
- **Ellipsis**: Shows an ellipsis (`...`) at the end of the cell if the content is too long to fit.
- **EllipsisWithTooltip**: Shows an ellipsis (`...`) for overflowing content, and also displays the full content in a tooltip when the user hovers over the ellipsis.

> By default, the [`clipMode`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#clipmode) property is set to **Ellipsis**. This helps users quickly identify when there is more content hidden and easily view the complete information by hovering over the cell.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs267/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs267/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs267" %}

## Cell Template

You can change how each cell in the Pivot Table looks by using the [`cellTemplate`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#celltemplate) option. With [`cellTemplate`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#celltemplate), you can use either an HTML string or the ID of an HTML element to add custom content to every cell. This helps you display cell values in any format you prefer, such as adding icons, colors, or other elements for better understanding.

For example, in the following sample, each year's revenue cost is shown along with trend icons. This gives users a clear and quick way to see changes in data at a glance.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs268/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs268/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs268" %}

## Events

### QueryCellInfo

The [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettingsModel/#querycellinfo) event is triggered when a row or value cell is rendered in the Pivot Table. This event gives users the ability to change the appearance or content of each table cell according to their needs. The following parameters are available within the event:

- [`cell`](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs/#cell): Provides information about the specific cell currently being rendered.
- [`data`](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs/#data): Contains all data related to the row in which the cell appears.
- [`column`](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs/#column): Offers information about the column for the current cell.
- `pivotview`: Refers to the current instance of the Pivot Table.
- [`colSpan`](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs/#colspan): Indicates how many columns the cell should span.
- [`rowSpan`](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs/#rowspan): Indicates how many rows the cell should span.
- [`foreignKeyData`](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs/#foreignkeydata): Displays any related row data linked through a foreign key for this column.
- [`requestType`](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs/#requesttype): Shows the type of action or request currently taking place.

By using these parameters in the event, users can highlight cells, format values, or display extra information to make data analysis clearer and easier in the Pivot Table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs269/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs269/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs269" %}

### HeaderCellInfo

The [`headerCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettingsModel/#headercellinfo) event is triggered when the Pivot Table renders a header cell. This event allows users to easily modify the appearance or content of each header cell as it is displayed. It includes the following parameters:

- [`node`](https://ej2.syncfusion.com/angular/documentation/api/grid/headerCellInfoEventArgs/#node): Contains details about the current header cell’s content and structure.
- [`cell`](https://ej2.syncfusion.com/angular/documentation/api/grid/headerCellInfoEventArgs/#cell): Represents the specific cell being rendered.

By using these parameters, users can update header cell styles, add tooltips, or include icons based on their needs.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs270/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs270/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs270" %}

### ColumnRender

The [`columnRender`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/gridsettings/#columnrender) event occurs while creating each column for display in the Pivot Table. This event lets users change how individual columns appear and behave. For example, users can set the text alignment, show or hide specific columns, enable autofit, allow reordering, and set minimum or maximum widths for each column.

The event provides the following parameters:

- [`columns`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/columnRenderEventArgs/#columns): Contains information about leaf-level columns, also known as value headers.
- [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/columnRenderEventArgs/#datasourcesettings): Contains the current data source settings, such as the input data, rows, columns, values, filters, and format settings.
- [`stackedColumns`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/columnRenderEventArgs/#stackedcolumns): Contains information about drilled columns, including both column and value headers.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs271/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs271/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs271" %}

### CellClick

The [`cellClick`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#cellclick) event occurs when a user clicks a cell in the Pivot Table. With this event, users can update the style of the selected cell, edit its value, or perform other actions on the cell's content. The event provides the following parameters:

- [`currentCell`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/cellClickEventArgs/#currentcell): Contains details about the clicked cell.
- [`data`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/cellClickEventArgs/#data): Contains the clicked cell’s information, such as the axis, formatted text, raw text, row header, column header, and value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs272/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs272/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs272" %}