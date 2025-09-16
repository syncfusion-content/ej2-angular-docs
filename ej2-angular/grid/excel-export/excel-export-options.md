---
layout: post
title: Excel export options in Angular Grid component | Syncfusion
description: Learn here all about Excel export options in Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Excel export options 
documentation: ug
domainurl: ##DomainURL##
---

# Excel export options in Angular Grid component

The Syncfusion Angular Grid component provides comprehensive options for customizing Excel and CSV export functionality. This flexibility allows precise control over the exported content and layout to fit your reporting needs.

The [excelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) property lets you control which columns to export, include or exclude hidden columns, use a custom data source, enable filters, define file names, add headers and footers, export multiple grids, customize exported data, configure CSV delimiters, and apply specific themes.

## Export current page records

Exporting the current page exports just the visible records to an Excel or CSV file. Choose between exporting the **CurrentPage** (only current grid page) or **AllPages** (all records) using the [exportType](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#exporttype) property.

Example of exporting the current page when a toolbar item is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs4" %}

## Export selected records

Export selected records to Excel or CSV for a focused set of data. Assign the selected records to [exportProperties.dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/ExcelExportProperties/#datasource) in the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event.

**Steps:**

1. Handle the `toolbarClick` event.
2. Retrieve selected records using [getSelectedRecords](https://ej2.syncfusion.com/angular/documentation/api/grid/#getselectedrecords).
3. Assign selected data to `exportProperties.dataSource`.
4. Trigger export with [excelExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexport) or [csvExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#csvexport).

Example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-filtered-data-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-filtered-data-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-filtered-data-cs1" %}

## Exporting grouped records

The Grid can export grouped records with outline support, hiding detail data by default in the export. Enable grouping with [allowGrouping](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowgrouping) and configure group columns with [groupSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#columns).

Example for exporting grouped records:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs8" %}

## Export with hidden columns

To include hidden columns in your export, set [includeHiddenColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#includehiddencolumn) to **true** in [excelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/).

Example: Export the **ShipCity** column (hidden in UI) to Excel. This can be toggled using the [checked](https://ej2.syncfusion.com/angular/documentation/api/switch/#checked) property of the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs5" %}

## Show or hide columns while exporting

Show or hide columns dynamically during export by adjusting the [visible](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#visible) property in the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event, then restoring them in [excelExportComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexportcomplete).

Example: The **CustomerID** column is hidden in the grid but shown in the export; **ShipCity** is hidden in export.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs6" %}

## Show or hide columns while exporting with stacked header

The Syncfusion Angular Grid allows you to control the visibility of columns during export operations. This feature is particularly useful when customizing the data presented in exported files while using stacked headers.

To implement the show or hide columns feature during Excel export in the Syncfusion Angular Grid, follow these steps:

1. Handle the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event of the Syncfusion Angular Grid.

2. Update the visibility of the desired columns by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#visible) property of the column to **true** or **false**.

3. Export the Syncfusion Angular Grid to Excel document using the [excelExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexport) or [csvExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#csvexport)  method.

4. Handle the [excelExportComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexportcomplete) event to restore the column visibility to its original state.

In the following example, the **ShipName** is initially a hidden column in the Syncfusion Angular Grid. However, during the Excel export process, the **ShipName** column is made visible, while the **OrderDate** column is hidden:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exportexcel-show-hide/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exportexcel-show-hide/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exportexcel-show-hide" %}

## Enable filtering in the exported Excel file

Enable filters in exported Excel or CSV files by setting [enableFilter](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#enablefilter) to **true** in [excelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/). Grid filtering must also be enabled with [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowfiltering).

Example for exporting data with filter options:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs7" %}

## Define file name

The Syncfusion Angular Grid component allows you to specify a custom file name for the exported Excel or CSV document. This feature enables you to provide a meaningful and descriptive name for the exported file, making it easier to identify and manage the exported data.

To assign a custom file name for the exported document, you can set the [fileName](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#filename) property of the [excelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) property to the desired file name.

The following example demonstrates how to define a file name using `ExcelExportProperties.fileName` property when exporting to Excel, based on the entered value as the file name.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs9/src/main.ts %}
{% endhighlight %} 
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs9" %}

## Export the master detail grid

Export both master and detail grids to a single worksheet with [multipleExport.type](https://ej2.syncfusion.com/angular/documentation/api/grid/multipleExportType/) set to **AppendToSheet**. Set [multipleExport.blankRows](https://ej2.syncfusion.com/angular/documentation/api/grid/multipleExport/#blankrows) for spacing between grids.

The following example demonstrates how to export master detail grid to the same page in a Excel file when a toolbar item is clicked. The [rowSelected](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowselected) event dynamically updates the detail grid based on the selected master record:
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/export-masterdetail-grid/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/export-masterdetail-grid/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/export-masterdetail-grid" %}

## Customizing columns on export

The Grid component allows you to customize the appearance of grid columns in your exported Excel or CSV documents. This feature empowers you to tailor specific column attributes such as field, header text, and text alignment, ensuring that your exported Excels align perfectly with your design and reporting requirements.

To customize the grid columns, you can follow these steps:

1. Access the [excelExportProperties.column](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#columns) of the Grid component.

2. Set the `column` object with attributes such as `field`, `headerText`, and `textAlign` to define the desired format.

3. Trigger the Excel or CSV export operation to apply the customized column settings.

The following example demonstrates how to customize the grid columns when exporting a document. In this scenario, the attributes for different columns have been customized: **OrderID** with `textAlign` set to Right, **CustomerID** with headerText as **Customer Name**, and **Freight** with a center-aligned `textAlign` property, which is not rendered in the grid columns:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-column/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-column/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-column" %}

## Font and color customization

The Excel export feature in Grid provides an option to include themes for the exported Excel document. This feature is particularly useful when you want to maintain a consistent and visually appealing style for the exported data in Excel.

To apply a theme to the exported Excel document, you can define the [theme](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#theme) property within the `excelExportProperties`. This property allows you to specify the `theme` to be used in the exported Excel file, including styles for the caption, header, and record content.

[caption](https://ej2.syncfusion.com/angular/documentation/api/grid/excelTheme/#caption): This property defines the theme style for the caption content in the exported Excel document. The caption is the title or description that appears at the top of the exported Excel sheet.

[header](https://ej2.syncfusion.com/angular/documentation/api/grid/excelTheme/#header): This property is used to defines the style for the header content in the exported Excel document. The header corresponds to the column headers in the Grid.

[record](https://ej2.syncfusion.com/angular/documentation/api/grid/excelTheme/#record): This property defines the theme style for the record content in the exported Excel document. The record represents the data rows in the Grid that are exported to Excel.

In the following example, apply font styling to the caption, header, and record in the Excel file using the **theme** property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs3" %}

## Rotate a header text in the exported grid

Rotate header text in the exported Excel file by using the [excelHeaderQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelheaderquerycellinfo) event and setting the `rotation` property on the style argument.

Example: Rotate column headers as needed in the exported document.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-grouping/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-grouping/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-grouping" %}

## Conditional cell formatting

Use the [excelQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/excelQueryCellInfoEventArgs/) event to apply custom formatting (such as background color) to cells in the exported Excel file based on value or logic.

Example: Apply background color to the Freight column conditionally during Excel export:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs2" %}

## Adding header and footer in the exported Excel file

The Excel or CSV Export feature in Grid component allows you to include header and footer content in the exported Excel or CSV document. This feature is particularly useful when you want to add additional information or branding to the exported Excel or CSV file.

To achieve this, you can use [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event along with defining the [header](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#header) and [footer](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#footer) properties in the [excelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) object allowing you to customize the header and footer content.

The following example demonstrates how to add a header and footer to the exported grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs1" %}

## Export grid as blob

Export data as a Blob by setting the `isBlob` parameter to **true** in the [excelExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexport) method. Use the [excelExportComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexportcomplete) event to retrieve the blob data for further processing.

Example for exporting and handling exported blob data:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/export-grid-as-blob-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/export-grid-as-blob-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/export-grid-as-blob-cs2" %}
