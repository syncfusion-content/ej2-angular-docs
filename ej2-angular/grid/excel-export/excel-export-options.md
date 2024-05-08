---
layout: post
title: Excel export options in Angular Grid component | Syncfusion
description: Learn here all about Excel export options in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Excel export options 
documentation: ug
domainurl: ##DomainURL##
---

# Excel export options in Angular Grid component

The Syncfusion Angular Grid component allows you to customize the Excel or CSV export options functionality. This flexibility enables you to have greater control over the exported content and layout to meet your specific requirements.

The Excel or CSV export action can be customized based on your requirements using the [excelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) property. By using the `excelExportProperties` property, you can export specific columns, exclude or include hidden column, export with custom data source, enable filter in the exported excel or CSV file, change the file name, add header and footer, multiple grid exporting, customize the data based on query, define delimiter for CSV exporting and set the theme.

## Export current page records

Exporting the current page in Syncfusion Angular Grid to a Excel or CSV document provides the ability to export the currently displayed page records. This feature allows for generating Excel or CSV documents that specifically include the content from the current page of the grid. 

To export the current page of the grid to an Excel or CSV document, you need to specify the [exportType](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#exporttype) property. This property allows you to define which records you want to export. You can choose between two options:

1. **CurrentPage**: Exports only the records on the current grid page.
2. **AllPages**: Exports all the records from the grid.

The following example demonstrates how to export current page to a Excel document when a toolbar item is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs4" %}

## Export the selected records 

Exporting only the selected records from the Grid allows generating Excel or CSV document that include only the desired data from the Grid. This feature provides the flexibility to export specific records that are relevant to the needs, enabling more focused and targeted Excel or CSV exports.

To export only the selected records by utilizing the `exportProperties.dataSource` property in the `toolbarClick` event.

To export the selected records from the grid to a Excel or CSV file, you can follow these steps:

1. Handle the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event of the Grid.

2. Retrieve the selected records using the [getSelectedRecords](https://ej2.syncfusion.com/angular/documentation/api/grid/#getselectedrecords) method.

3. Assign the selected data to the [exportProperties.dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/ExcelExportProperties/#datasource) property.

4. Trigger the export operation using the [excelExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexport) or [csvExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#csvexport)  method.

The following example demonstrates how to export the selected records to a Excel document when a toolbar item is clicked.

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

The Grid component provides an outline option for grouped records, allowing you to hide detailed data for better viewing in the exported document. This feature is particularly useful when you need to share data that is grouped based on specific columns and maintain the grouping structure in the exported file.

To achieve this functionality, you need to enable grouping in the Grid by setting the [allowGrouping](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowgrouping) property to **true** . Additionally, you need define the [groupSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#columns) property to specify the columns by which you want to group the data.

The following example demonstrates how to export grouped records to an Excel document when a toolbar item is clicked.:

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

Exporting hidden columns in the Syncfusion Angular Grid allows you to include hidden columns in the exported Excel document. This feature is useful when you have columns that are hidden in the UI but still need to be included in the exported document.

To export hidden columns of the grid to a Excel or CSV file, you need to set the [includeHiddenColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#includehiddencolumn) property as **true** in the [excelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) property.

The following example demonstrates how to export hidden columns to a Excel file. In this example, the **ShipCity** column, which is not visible in the UI, is exported to the Excel document. You can also export the grid by changing the `excelExportProperties.includeHiddenColumn` property based on the switch toggle using the [checked](https://ej2.syncfusion.com/angular/documentation/api/switch/#checked) property of the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component.

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

The Grid component provides the functionality to show or hide columns dynamically during the export process. This feature allows you to selectively display or hide specific columns based on your requirements.

To show or hide columns based on user interaction during the export process, you can follow these steps:

1. Handle the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event of the Grid component.

2. Update the visibility of the desired columns by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#visible) property of the column to **true** or **false**.

3. Export the grid to Excel.

4. Handle the [excelExportComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexportcomplete) event to restore the column visibility to its original state.

In the following example, the **CustomerID** is initially a hidden column in the grid. However, during the export process, the **CustomerID** column is made visible, while the **ShipCity** column is hidden.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs6" %}

## Enable filtering in the exported excel file

The Grid allows you to export data to Excel or CSV with filter options and also export only filtered records. This feature is especially beneficial when you need to share data with others while preserving the ability for them to filter and analyze the data in Excel or CSV.

To enable this feature, you should set the [enableFilter](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#enablefilter) property to **true** in the [excelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) object. Additionally, you need to set [allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowfiltering) to **true** in the grid configuration. This property enables filtering in the grid.

The following example demonstrates how to export data with filter options to an Excel document when a toolbar item is clicked:

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

The export functionality within the master-detail grid feature of the Grid enables you to export not only the master grid but also the associated detail grid onto a single Excel sheet. This feature proves to be particularly valuable when dealing with hierarchical data represented by two grids in the exported Excel file, allowing for comprehensive analysis and management.

To export the master-detail grid on the same sheet, you need to set the [multipleExport.type](https://ej2.syncfusion.com/angular/documentation/api/grid/multipleExportType/) property of the [excelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) object to **AppendToSheet**. It also has an option to provide blank space between the grids. This blank space can be defined by using [multipleExport.blankRows](https://ej2.syncfusion.com/angular/documentation/api/grid/multipleExport/#blankrows) property.

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

>By default, material theme is applied to exported excel document.

## Rotate a header text in the exported grid

The Grid provides support to customize the column header styles, such as changing the text orientation, font color, and more, in the exported Excel file. This feature is useful when you want to enhance the visual appearance of the exported data and provide a unique representation of the Grid in the Excel document.

To achieve this requirement, use the [excelHeaderQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelheaderquerycellinfo) event of the Grid. This event is triggered when creating a column header for the Excel document to be exported. By customizing the column header within this event, you can easily rotate the header text to a certain degree in the exported Grid, making the data presentation in the Excel document more visually appealing and tailored to your specific requirements.

In the following demo, using the `rotation` property of the style argument in the `excelHeaderQueryCellInfo` event, you can rotate the header text of the column header in the excel exported document.

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

When exporting data from the Grid, you have an option to conditionally format the cells in the exported Excel document. This allows you to customize the appearance of specific cells based on their values or other criteria.

To achieve this feature, you need to use the [excelQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/excelQueryCellInfoEventArgs/) event of the Grid component. This event is triggered for each cell during the export process to Excel. Within this event, you can access the cell object using the `args.cell` property and modify its properties, such as the background color, based on your desired conditions.

The following example demonstrate how to customize the background color of the Freight column in the exported Excel document using the **args.cell** and **backgroundColor** properties of the `excelQueryCellInfo` event.

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

The Grid offers an option to export the data as a Blob instead of downloading it as a file in the browser. To export the grid as a Blob, set the `isBlob` parameter to **true** in the [excelExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexport) method. The grid returns the promise of a blob in the [excelExportComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexportcomplete) event.

The following example demonstrates how to obtain the blob data of the exported grid by executing the promise in the `excelExportComplete` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/export-grid-as-blob-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/export-grid-as-blob-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/export-grid-as-blob-cs2" %}