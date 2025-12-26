---
layout: post
title: Excel export in Angular Pivot Table component | Syncfusion
description: Learn here all about Excel export in Syncfusion Angular Pivot Table component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Excel export 
documentation: ug
domainurl: ##DomainURL##
---

# Excel export in Angular Pivot Table component

The Pivot Table component supports exporting pivot data to **Excel** and **CSV** file formats. This feature enables data sharing and analysis in spreadsheet applications such as Microsoft Excel, Google Sheets, and others. To enable the export functionality, inject the `ExcelExportService` module into the Pivot Table using the `@NgModule.providers` section, and set the [allowExcelExport](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#allowexcelexport) property to **true**.

## Export data to an Excel file

Pivot Table data can be exported to an Excel file (.xlsx format) while preserving all formatting and structure. This format is compatible with Microsoft Excel and other spreadsheet applications. To export the data to Excel, invoke the [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#excelexport) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs63/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs63/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs63" %}

## Export data to a CSV file

Pivot Table data can be exported to a plain text CSV file. The CSV format is lightweight and compatible with most spreadsheet and data analysis applications. To export the data to CSV, invoke the [`csvExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#csvexport) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs69/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs69/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs69" %}

## Exporting multiple pivot tables

Multiple Pivot Tables can be exported to a single Excel file, allowing for side-by-side comparison on the same or different worksheets. Each Pivot Table must be rendered with a unique HTML element ID. For example, **PivotTable1** for the first table and **PivotTable2** for the second. To export both Pivot Tables to a single Excel file, provide their IDs in the `pivotTableIds` property of the `excelExportProperties`.

### Exporting to the same worksheet

Data from multiple Pivot Tables can be organized in a single view by exporting them to the same worksheet. Set the **multipleExport.type** property to **AppendToSheet** in the `excelExportProperties`, which will append each Pivot Table to the same sheet.

To add visual separation between Pivot Tables, use the **multipleExport.blankRows** property to specify the number of blank rows to insert between them. This helps maintain readability when multiple Pivot Tables are added in a single worksheet. After configuring these options, call the [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#excelexport) method with the `isMultipleExport` parameter set to **true**.

> By default, the **multipleExport.blankRows** property is set to **5** blank rows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs64/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs64/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs64" %}

### Exporting to a new worksheet

Multiple Pivot Tables can be organized into separate worksheets within a single Excel file for better structured data management. Set the **multipleExport.type** property to **NewSheet** in the `excelExportProperties`. Each Pivot Table will be exported to its own dedicated worksheet. After configuring these options, call the [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#excelexport) method with the `isMultipleExport` parameter set to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs65/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs65/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs65" %}

## Customize the pivot report during export

Pivot Table report settings can be customized before exporting, such as applying filters, adding formatting, or performing drill-down and drill-up operations. These customizations are applied exclusively to the exported file and do not affect the Pivot Table UI. To customize the export behavior, use the [`beforeExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#beforeexport) event, which is triggered before the export operation begins.

In the following example, the [`beforeExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#beforeexport) event is used to expand all Pivot Table headers by setting the [`expandAll`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettingsmodel#expandall) property to **true**. The `generateGridData` method is then called to obtain the updated [`pivotValues`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pivotvalues). The updated [`pivotValues`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pivotvalues) are assigned to [`args.dataCollections`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/beforeexporteventargs#datacollections) for the export. Finally, [`expandAll`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettingsmodel#expandall) is set to **false** again to restore the original state of the Pivot Table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs325/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs325/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs325" %}

## Export with custom aggregates

The Pivot Table supports exporting data with custom calculations beyond the default options such as **Sum**, **Count**, or **Average**. Custom aggregates enable advanced analytical scenarios where standard calculations are insufficient.

To add custom aggregates, follow these steps:

1.  Define custom aggregate names using the [localization](https://ej2.syncfusion.com/angular/documentation/pivotview/globalization-and-localization#localization) option. These names will appear in the Pivot Table's aggregation menu.
2.  Add the custom aggregation types to the aggregate menu during Pivot Table initialization using the [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#databound) event.
3.  Use the [`aggregateCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#aggregatecellinfo) event to specify the calculation logic for each custom type. This event is triggered for every aggregate cell, allowing you to apply your custom formulas.
4.  Finally, call the [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#excelexport) method to export the Pivot Table with all custom aggregations applied.

For detailed information about adding custom aggregation types, refer to the [custom aggregation documentation](https://ej2.syncfusion.com/angular/documentation/pivotview/how-to/add-custom-aggregation-type-in-menu).

The following example demonstrates how to add two custom aggregate types to the aggregate menu: **CustomAggregateType 1**, which calculates a weighted average, and **CustomAggregateType 2**, which calculates the percentage of the total.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs326/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs326/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs326" %}

## Export with custom date format

The Pivot Table component allows applying custom date formatting to date-type fields added to the **row** and **column** axes. This formatting ensures consistency across both the rendered pivot table and the exported file. Custom date formatting can be applied by configuring the [`formatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettingsmodel#formatsettings) property using the following steps:

1. Set the [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettingsmodel#name) property to the target date field.
2. Set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettingsmodel#type) property to **date** to identify the field as a date type.
3. Set the [`format`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettingsmodel#format) property to the desired date format pattern (for example, `"EEE, MMM d, ''yy"`)

After configuration, call the [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#excelexport) method to export the Pivot Table with the applied formatting.

The following example demonstrates exporting a Pivot Table with a custom date format. The **Date** field uses the pattern `"EEE, MMM d, ''yy"`, which displays dates in the format: day-of-the-week abbreviation, month abbreviation, day, and two-digit year (for example, Sun, May 8, '23).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs327/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs327/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs327" %}

## Remove row header during export

Row headers can be excluded from the exported Excel file when only values and column headers are required. To achieve this, use the [`beforeExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#beforeexport) event to access pivot values through [`args.dataCollections`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/beforeexporteventargs#datacollections) and remove the row headers before exporting.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs328/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs328/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs328" %}

## Exclude hidden columns during export

By default, all columns in the Pivot Table, including hidden ones, are exported. To exclude hidden columns, set the `includeHiddenColumn` property to **false** in `excelExportProperties`.

To hide a column, use the [`columnRender`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridsettings#columnrender) event in [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridsettings) to set the `visible` property of the target column to **false**. For more information, see the [Hide Specific Columns in Pivot Table](https://ej2.syncfusion.com/angular/documentation/pivotview/how-to/hide-specific-columns-in-pivot-table) documentation.

After hiding the columns, set `includeHiddenColumn` to **false** in `excelExportProperties` to exclude them from the exported file. The exported file will then match the column structure shown in the Pivot Table UI.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs329/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs329/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs329" %}

## Rotate cell text during export

The style of each cell in the exported file can be customized, including rotating text, changing background colors, and applying other visual modifications. This approach is useful for creating visually distinct Pivot Table and for fitting text within limited space.

To rotate text, use the following events:

*   [`excelHeaderQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettingsModel/#excelheaderquerycellinfo): Triggered for column headers. This event is used to customize column header cell styles.
*   [`excelQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettingsModel/#excelquerycellinfo): Triggered for row and value cells. This event is used to customize row header and value cell styles.

Within these events, set the [`rotation`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelstyle#rotation) property in the [`style`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelquerycellinfoeventargs#style) argument to rotate the text to the desired angle.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs330/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs330/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs330" %}

## Apply custom styles based on specific conditions

When exporting Pivot Table data to Excel, custom styles can be applied to cells based on their values or other criteria. To apply custom styles, use the [`excelQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettingsModel/#excelquerycellinfo) event. In this event, the cell information can be accessed through the [`args.cell`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelquerycellinfoeventargs#cell) property, and its style properties, such as [`backColor`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelstyle#backcolor), [`fontName`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelstyle#fontname), and [`fontColor`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelstyle#fontcolor), can be customized.

The following example demonstrates how to apply conditional formatting to the **Sold** field values in the exported Excel document. Values below **700** units are highlighted in **red**, while values of **700** units or more are highlighted in **green**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs331/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs331/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs331" %}

## Changing the pivot table style while exporting

The Excel export provides an option to change colors for headers, caption and records in pivot table before exporting. To apply colors, define [`theme`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#theme) settings in [`excelExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) object and pass it as a parameter to the [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#excelexport) method.

> By default, material theme is applied to exported Excel document.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs66/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs66/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs66" %}

## Add header and footer while exporting

The Excel export provides an option to include header and footer content for the excel document before exporting. To add header and footer, define [`header`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#header) and [`footer`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#footer) properties in [`excelExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) object and pass it as a parameter to the [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#excelexport) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs67/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs67/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs67" %}

## Changing the file name while exporting

This option provides flexibility to specify a custom file name for your exported Excel document, making it easier to organize and identify your exported data files. The Excel export provides an option to change the file name of the document before exporting. To change the file name, define the [`fileName`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#filename) property in the [`excelExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) object and pass it as a parameter to the [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#excelexport) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs68/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs68/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs68" %}

## Show spinner during export

When exporting data, displaying a spinner provides visual feedback to end users that the export process is in progress. To show a spinner, invoke the `showWaitingPopup` method in the button's click event before calling the export method. After the export is complete, use the [`exportComplete`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#exportcomplete) event to trigger the `hideWaitingPopup` method, which will hide the spinner and indicate that the export has finished successfully.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs332/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs332/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs332" %}

## Export only the current page

By default, the Pivot Table exports all data records, which can result in larger file sizes when a large data source is assigned to the Pivot Table. To improve performance, export only the data records currently visible in the viewport by setting the [`exportAllPages`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#exportallpages) property to **false**.

> This option is applicable only when the virtualization or paging feature is enabled.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs72/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs72/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs72" %}

## Events

### ExcelQueryCellInfo

The [`excelQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettingsModel/#excelquerycellinfo) event is triggered during the creation of each row and value cell while exporting data to Excel. This event offers options to change the content and style of individual cells in the exported Excel document, improving the flexibility and appearance of exported reports.

The event provides the following arguments:

* [`value`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelQueryCellInfoEventArgs/#value) – Represents the value of the current cell in the exported Excel sheet.
* [`column`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelQueryCellInfoEventArgs/#column) – Provides details about the column to which the current cell belongs.
* [`data`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelQueryCellInfoEventArgs/#data) – Contains all data for the row that includes the current cell.
* [`style`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelQueryCellInfoEventArgs/#style) – Defines the style settings (such as font, color, borders) applied to the current cell.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs73/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs73/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs73" %}

### ExcelHeaderQueryCellInfo

The [`excelHeaderQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettingsModel/#excelheaderquerycellinfo) event provides the ability to modify header cell appearance and content during Excel export, ensuring exported documents match specific formatting requirements or business standards. This event triggers while processing each header cell during the Excel export operation. The event contains the following parameters:

* [`cell`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelHeaderQueryCellInfoEventArgs/#cell) - Contains the current cell information and properties.
* [`style`](https://ej2.syncfusion.com/angular/documentation/api/grid/excelHeaderQueryCellInfoEventArgs/#style) - Contains the style properties that can be applied to the cell.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs74/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs74/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs74" %}

### ExportComplete

The [`exportComplete`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#exportcomplete) event triggers after the pivot table data exports to an Excel or CSV document. This event enables acquiring blob stream data for further processing and customization by setting the `isBlob` parameter to **true** when calling the [`excelExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#excelexport) method. The event includes the following parameters:

* [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/exportCompleteEventArgs/#type) - Specifies the current export format such as PDF, Excel, or CSV.
* [`promise`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/exportCompleteEventArgs/#promise) - Contains the promise object that resolves with blob data for the exported file.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs75/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs75/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs75" %}

## Limitation when exporting millions of records to Excel format

Understanding this limitation helps you choose the appropriate export format based on your data size requirements and ensures optimal performance for large datasets. By default, Microsoft Excel supports only 1,048,576 records in an Excel sheet. Therefore, it is not possible to export millions of records to Excel format. You can refer to the [documentation link](https://support.microsoft.com/en-gb/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3) for more details on Microsoft Excel specifications and limits. For large datasets, it is recommended to export the data in CSV (Comma-Separated Values) or other formats that can handle large datasets more efficiently than Excel.

## See Also

* [PDF Exporting](./pdf-export)