---
layout: post
title: Excel exporting in Angular Grid component | Syncfusion
description: Learn here all about Excel exporting in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Excel exporting 
documentation: ug
domainurl: ##DomainURL##
---

# Excel exporting in Angular Grid component

The Excel or CSV exporting feature in the Angular Grid component allows you to export the Grid data to an Excel or CSV document. This can be useful when you need to share or analyze the data in a spreadsheet format.

To enable Excel export in the Grid component, you need to set the [allowExcelExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowexcelexport) property to **true**. This property is responsible for enabling the Excel or CSV export option in the Grid.

To initiate the excel export process, you need to use the [excelExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexport) method provided by the Grid component. This method is responsible for exporting the Grid data to an Excel document.

To use the Excel or CSV export feature, you need to inject the **ExcelExportService** in the provider section of your **AppModule**. This allows the Grid component to access the necessary services for exporting data to Excel or CSV.

> To initiate the CSV export process, you need to use the [csvExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#csvexport) method provided by the Grid component. This method is responsible for exporting the Grid data to an CSV document.

The following example demonstrates how to perform a Excel or CSV export action in the grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs10" %}

## Show spinner while exporting 

Showing a spinner while exporting in the Grid enhances the experience by displaying a spinner during the export process. This feature provides a visual indication of the export progress, improving the understanding of the exporting process.

To show or hide a spinner while exporting the grid, you can utilize the [showSpinner](https://ej2.syncfusion.com/angular/documentation/api/grid/#showspinner) and [hideSpinner](https://ej2.syncfusion.com/angular/documentation/api/grid/#hidespinner) methods provided by the Grid within the `toolbarClick` event.

The [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event is triggered when a toolbar item in the Grid is clicked. Within the event handler, the code checks if the clicked **item** is related with Excel or CSV export, specifically the **Grid_excelexport** or **Grid_csvexport** item. If a match is found, the `showSpinner` method is used on the Grid instance to display the spinner.

To hide the spinner after the exporting is completed, bind the [excelExportComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexportcomplete) event and use the `hideSpinner` method on the Grid instance to hide the spinner.

The following example demonstrates how to show and hide the spinner during Excel export in a grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs1" %}

## Binding custom data source while exporting

The Grid component provides a convenient way to export data to a Excel or CSV format. With the Excel or CSV export feature, you can define a custom data source while exporting. This allows you to export data that is not necessarily bind to the grid, which can be generated or retrieved based on your application logic.

To export data, you need to define the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#datasource) property within the [excelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) object. This property represents the data source that will be used for the Excel or CSV export.

The following example demonstrates how to render custom dataSource during Excel export. By calling the [excelExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexport) method and passing the `excelExportProperties` object through the grid instance, the grid data will be exported to a Excel using the dynamically defined data source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs11" %}

## Exporting with custom aggregate

Exporting grid data with custom aggregates allows you to include additional calculated values in the exported file based on specific requirements. This feature is highly valuable for providing a comprehensive view of the data in the exported file, incorporating specific aggregated information for analysis or reporting purposes.

In order to utilize custom aggregation, you need to specify the [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#type) property as **Custom** and provide the custom aggregate function in the [customAggregate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#customaggregate) property.

Within the **customAggregateFn** function, it takes an input data that contains a result property. The function calculates the count of objects in this data where the **ShipCountry** field value is equal to **Brazil** and returns the count with a descriptive label.

The following example shows how to export the grid with a custom aggregate that shows the calculation of the **Brazil** count of the **ShipCountry** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-aggregate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-aggregate/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/excel-exporting-aggregate" %}

## Exporting with cell and row spanning 

Exporting data from the Grid with cell and row spanning enables you to maintain cell and row layout in the exported data. This feature is useful when you have merged cells or rows in the Grid and you want to maintain the same structure in the exported file.

To achieve this, you can utilize the [rowSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs/#rowspan) and [colSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs/#colspan) properties in the `queryCellInfo` event of the Grid. This event allows you to define the span values for specific cells. Additionally, you can customize the appearance of the grid cells during the export using the [excelQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelquerycellinfo) event of the Grid.

The following example demonstrates how to perform export with cell and row spanning using `queryCellInfo` and `excelQueryCellInfo` events of the Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-span/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-span/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-span" %}

* The [updateCell](https://ej2.syncfusion.com/angular/documentation/api/grid/#updatecell) method does not support row and column spanning.

## Exporting with custom date format

The exporting functionality in the Syncfusion Angular Grid allows you to export grid data, including custom date format. This feature is useful when you need to export grid data with customized date values.

To apply a custom date format to grid columns during the export, you can utilize the [columns.format](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) property. This property allows you to define a custom format using format options.

The following example demonstrates how to export the grid with custom date format. In the example, the formatOptions object is used as the `format` property for the **OrderDate** column. This custom date `format` displays the date in the format of day-of-the-week, month abbreviation, day, and 2-digit year (e.g., Sun, May 8, '23).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-date/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-date/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-date" %}

## Exporting multiple grids

Exporting multiple grids in the Syncfusion Angular Grid component allows you to export different grids to compare them side by side in external applications on the same or different pages of a Excel. Each grid is identified by its unique ID. You can specify which grid to export by listing their IDs in the [exportGrids](https://ej2.syncfusion.com/angular/documentation/api/grid/#exportgrids) property.

### Same sheet

Excel exporting provides support for exporting multiple grids on the same page. This feature is particularly useful when you want to combine and organize data from different grids for a unified view in the exported Excel file.

To achieve this, you need to define the [multipleExport.type](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#multipleexport) property as **AppendToSheet** in the [excelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) object. This setting ensures that the data from each grid will be appended to the same Excel sheet.

Additionally, you have an option to include blank rows between the data of each grid to visually separate them in the exported Excel sheet. The number of blank rows to be inserted can be defined using the [multipleExport.blankRows](https://ej2.syncfusion.com/angular/documentation/api/grid/multipleExport/#blankrows) property.

The following example demonstrates how to export multiple grids to the same page in a Excel file when a toolbar item is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs12" %}

>By default, **multipleExport.blankRows** value is 5.

### New sheet

Excel export functionality enables the exporting of multiple grids into separate pages (each grid on a new page) within the Excel file.

To achieve this, you can follow these steps:

1. Access the [excelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) of the Grid component.

2. Set the [multipleExport.type](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#multipleexport) to **NewPage**.

3. Trigger the Excel export operation.

The following example demonstrates how to export multiple grids to a Excel file when a toolbar item is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs13" %}

### Limitations

* Multiple grids exporting feature is not supported with server side exporting.

## Exporting hierarchy grid 

Exporting a hierarchy grid in the Syncfusion Angular Grid component allows you to generate a Excel or CSV document that includes the parent grid along with its child grids. This feature is useful when you need to export hierarchical data with its related details.

To achieve this, you can customize the exporting behavior by using the `ExcelExportProperties.hierarchyExportMode` property of the Grid. This property allows you to specify the exporting behavior for the hierarchy grid. The following options are available:

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the master grid with expanded child grids.|
| All      | Exports the master grid with all child grids, expanded or not. |
| None     | Exports only the master grid without any child grids. |

The following example demonstrates how to export hierarchical grid to Excel document. Also change the `excelExportProperties.hierarchyExportMode` property by using [value](https://ej2.syncfusion.com/angular/documentation/api/switch/#value) property of the DropDownList component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs14" %}

### Limitations

* Microsoft Excel permits up to seven nested levels in outlines. So that in the grid we can able to provide only up to seven nested levels and if it exceeds more than seven levels then the document will be exported without outline option. Please refer the [Microsoft Limitation](https://learn.microsoft.com/en-us/sql/reporting-services/report-builder/exporting-to-microsoft-excel-report-builder-and-ssrs?view=sql-server-2017#ExcelLimitations).

## Remove header row while exporting

When exporting data from the Syncfusion Angular Grid, you have an option to remove the header row from the exported file. This can be useful when you want to export grid data without including the header values in the exported document. To achieve this, you can utilize the [excelHeaderQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelheaderquerycellinfo) and [created](https://ej2.syncfusion.com/angular/documentation/api/grid/#created) event. 

The following example demonstrates how to perform an export without the header by using the `excelHeaderQueryCellInfo` event to clear cell content in the header row and the [created](https://ej2.syncfusion.com/angular/documentation/api/grid/#created) event to remove the header row from the Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-delete/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-delete/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-delete" %}

## How to add formula for the cell while exporting

The Grid component provides a convenient way to add formulas to cells during the export process. This feature allows you to perform calculations and apply formulas to specific cells in the exported Excel document. This can be particularly useful when you need to include calculated values or perform complex calculations.

To add formulas to cells during the export process, you can utilize the [valueAccessor](https://ej2.syncfusion.com/angular/documentation/api/grid/valueAccessor/) method along with the [excelQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelquerycellinfo) event. 

In the following example, the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) function handles a toolbar button click event. When the Excel Export button is clicked, it triggers the Excel export process. Inside this function, an [excelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) object is defined, specifying that hidden columns should be included in the export. Inside the `excelQueryCellInfo` event, the `valueAccessor` method generates formulas for the desired cells and assigns these formulas to the cell's formula property, ensuring that the calculated values are exported to the Excel document:

{% tabs %}excelExportProperties
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-formula/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-formula/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-formula" %}

## Limitations

* A CSV is a plain text format that does not support features such as cell rotation, font and color customization, column and row spanning, or adding formulas. CSV files store raw data without any formatting or styling.


## See Also

* [Exporting Grid in Cordova application](../how-to/exporting-grid-in-cordova-application)
* [How to get grid display numbers without grouping and same format to be exported to excel in Angular Grid](https://www.syncfusion.com/forums/151524/how-to-get-grid-display-numbers-without-grouping-and-same-format-to-be-exported-to-excel-in)