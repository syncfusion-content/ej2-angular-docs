---
layout: post
title: Pdf export in Angular Pivotview component | Syncfusion
description: Learn here all about Pdf export in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Pdf export 
documentation: ug
domainurl: ##DomainURL##
---

# PDF export in Angular Pivotview component

The Angular Pivot Table allows exporting pivot table data as a PDF document. To enable PDF export, inject the `PDFExportService` into the Pivot Table and set the [`allowPdfExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#allowpdfexport) property to **true**. Once enabled, use the [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pdfexport) method to generate and download the PDF file.

In the following example, an external button is used to start the PDF export process. When the user clicks the button, the [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pdfexport) method is called so that the Pivot Table data can be saved as a PDF file.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs208/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs208/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs208" %}

## Multiple Pivot Table exporting

Multiple Pivot Tables can be exported to the same or different pages in a single PDF file for easy comparison. Each Pivot Table requires a unique HTML element ID, such as **PivotTable1** and **PivotTable2**. To export multiple Pivot Tables, provide their IDs in the `pivotTableIds` property of the [`pdfExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfexportproperties/), then pass the configured [`pdfExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfexportproperties/) to the [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pdfexport) method with `isMultipleExport` set to **true** to enable multiple Pivot Table export mode.

> Note: PivotView PDF export uses Grid's PdfExportProperties model for configuration.

### Same page

To export multiple Pivot Tables on the same page, set the `multipleExport.type` property to **AppendToPage** in [`pdfExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfexportproperties/). Blank space between the Pivot Tables can be added by using the `multipleExport.blankSpace` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs209/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs209/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs209" %}

### New page

To export each Pivot Table on a separate page, set the `multipleExport.type` property to **NewPage** in [`pdfExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfexportproperties/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs333/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs333/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs333" %}

## Export table and chart into the same document

If you want to export both the table and the chart from the Pivot Table into a single PDF file, set the [`displayOption`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/displayOptionModel/) property to **Both**. Then, when you use the [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pdfexport) method, make sure to set the `exportBothTableAndChart` option to **true**. This will include both the data table and its chart in one PDF document when you export.

The following example shows how you can set this up in your application:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs306/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs306/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs306" %}

## Customization during PDF export

PDF export provides option to customize mapping of pivot table to the exported PDF document.

### To add header and footer while exporting

When exporting data from the Pivot Table to a PDF document, you can include additional information in the header or footer. You can add text, lines, page numbers, or images to ensure your exported document includes important details, such as your organization's name or branding, and to improve readability.

To do this, you can use the [`header`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#header) or [`footer`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#footer) options in the [`PdfExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/). These options allow you to specify what content to display at the top or bottom of each PDF page when exporting.

#### To add a text in header/footer

You can include custom text in the header or footer of the exported PDF document. Set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfHeaderFooterContent/#type) property to **Text** in the contents array to add text. The following example shows how to add the text "Northwind Traders" to the header:

```typescript
let pdfExportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Text',
                value: "Northwind Traders",
                position: { x: 0, y: 50 },
                style: { textBrushColor: '#000000', fontSize: 13 }
            }
        ]
    }
}
```

#### To draw a line in header/footer

You can draw lines in the header or footer to create visual separators or decorative elements. Set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfHeaderFooterContent/#type) property to **Line** in the contents array to add line elements. The line can be styled with different dash patterns and colors.

**Supported line styles:**
* `solid` - Continuous line
* `dash` - Dashed line
* `dot` - Dotted line
* `dashdot` - Alternating dash and dot pattern
* `dashdotdot` - Dash followed by two dots pattern

The following example demonstrates how to add a solid line in the header:

```typescript
let pdfExportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Line',
                style: { penColor: '#000080', penSize: 2, dashStyle: 'Solid' },
                points: { x1: 0, y1: 4, x2: 685, y2: 4 }
            }
        ]
    }
}
```

#### Add page number in header/footer

You can display page numbers in the header or footer using various numbering formats. Set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfHeaderFooterContent/#type) property to **PageNumber** in the contents array to add page number elements. This helps users navigate through multi-page PDF documents easily.

**Supported page number types:**
* `LowerLatin` - Lowercase letters (a, b, c)
* `UpperLatin` - Uppercase letters (A, B, C)
* `LowerRoman` - Lowercase Roman numerals (i, ii, iii)
* `UpperRoman` - Uppercase Roman numerals (I, II, III)
* `Arabic` - Numbers (1, 2, 3)

The following example shows how to add page numbers with Arabic format in the header:

```typescript
let pdfExportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'PageNumber',
                pageNumberType: 'Arabic',
                format: 'Page {$current} of {$total}', // optional
                position: { x: 0, y: 25 },
                style: { textBrushColor: '#ffff80', fontSize: 15, hAlign: 'Center' }
            }
        ]
    }
}
```

The below code illustrates the PDF export customization options.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs210/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs210/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs210" %}

#### Add an image in header/footer

You can include images in the header or footer by providing a Base64 encoded string. Set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfHeaderFooterContent/#type) property to **Image** in the contents array to add image elements. This allows you to add logos, watermarks, or other visual elements to your PDF documents.

The following example demonstrates how to add an image to the header:

```typescript
let pdfExportProperties: PdfExportProperties = {
    header: {
        fromTop: 0,
        height: 130,
        contents: [
            {
                type: 'Image',
                src: image,
                position: { x: 20, y: 10 },
                size: { height: 100, width: 100 },
            }
        ]
    }
}
```

The below code illustrates the PDF export customization options.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs322/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs322/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs322" %}

### Changing the file name while exporting

The PDF export provides an option to change the file name of the document before exporting. To change the file name, define the [`fileName`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#filename) property in the [`pdfExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/) object and pass it as a parameter to the [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pdfexport) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs211/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs211/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs211" %}

### Changing page orientation while exporting

When exporting the Pivot Table as a PDF, users can choose the page orientation of the document. By default, the PDF is exported in **Portrait** orientation. If you want to change the orientation to **Landscape**, set the [`pageOrientation`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#pageorientation) property in the [`pdfExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/) object. Then, pass this object as a parameter to the [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pdfexport) method. This lets you select either Portrait or Landscape orientation based on your needs before saving the exported PDF.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs212/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs212/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs212" %}

### Changing page size while exporting

When exporting Pivot Table data to PDF, users can select a specific page size for the PDF document. To set the page size, define the [`pageSize`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#pagesize) property within the [`pdfExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/) object, and pass this object as a parameter to the [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pdfexport) method.

You can choose from various page sizes, such as Letter, Note, Legal, A0, A1, A2, A3, A5, A6, A7, A8, A9, B0, B1, B2, B3, B4, B5, Archa, Archb, Archc, Archd, Arche, Flsa, HalfLetter, Letter11x17, and Ledger.

This option lets users easily adjust the PDF layout to fit their specific needs before exporting the data from the Pivot Table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs213/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs213/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs213" %}

### Changing document width and height while exporting

You can adjust the size of the exported PDF document by setting the [`height`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/beforeExportEventArgs/#height) and [`width`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/beforeExportEventArgs/#width) options in the [`beforeExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#beforeexport) event. This allows you to specify the dimensions of the PDF before creating it.

> Note: This option is available only when [`enableVirtualization`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#enablevirtualization) is set to **true**. Also, make sure that both the `VirtualScrollService` and `PDFExportService` modules are added to the Pivot Table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs307/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs307/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs307" %}

### Customize the table column count while exporting

Users can control how many Pivot Table columns appear on each page of the exported PDF by setting the [`columnSize`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/beforeExportEventArgs/#columnsize) option in the [`beforeExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#beforeexport) event. This allows users to split Pivot Table columns across multiple pages when exporting large tables to PDF, making the output easier to read.

> Note: This option works only when [`enableVirtualization`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#enablevirtualization) is enabled in the Pivot Table settings. Also, make sure that both `VirtualScrollService` and `PDFExportService` modules are injected into the Pivot Table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs308/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs308/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs308" %}

### Changing the table's column width and row height while exporting

The column width and row height in the PDF document can be adjusted when exporting data from the Pivot Table by handling the [`pdfHeaderQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettingsModel/#pdfheaderquerycellinfo) and [`pdfQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettingsModel/#pdfquerycellinfo) events. These changes apply only to the exported PDF and do not affect the on-screen Pivot Table display.

#### Adjusting column width

To set the width of specific columns during export, use the [`pdfHeaderQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettingsModel/#pdfheaderquerycellinfo) event. This event triggers for each header cell during PDF export. Check if the current header cell matches the target column by comparing the level name using `args.gridCell.valueSort.levelName`, which contains the exact row and column level name of the current cell. If it matches, use the column index (`args.gridCell.colIndex`) to locate the column in the `pdfGrid` columns collection, which holds the current PDF grid and allows adjustment of specific column widths during export. Then set the **width** property with the desired value in **points**.

For example, the **"Units Sold"** column under **"FY 2015"** can be set to a width of **250 points**:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs320/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs320/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs320" %}

#### Adjusting row height

To change the height of a particular row in the PDF document, use the [`pdfQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettingsModel/#pdfquerycellinfo) event. Check if the current row matches the target row by comparing the row headers using `args.data.rowHeaders`, which holds the string value of the row header level names. If it matches, set the `args.cell.gridRow.height` property with the desired value in **points**.

For example, the **"Mountain Bikes"** row under **"France"** can be set to a height of **100 points**:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs321/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs321/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs321" %}

### Customize the pivot report during export

The Pivot Table report can be modified before exporting by applying filters, adding formatting, or performing drill operations. These modifications apply only to the Pivot Table exported to the PDF file and do not affect the Pivot Table displayed on the screen. To modify the export behavior, use the [`beforeExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#beforeexport) event. This event is triggered right before the export operation begins.

In the following example, the [`beforeExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#beforeexport) event is used to expand all Pivot Table headers by setting the [`expandAll`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettingsmodel#expandall) property to **true**. The `generateGridData` method is then called to obtain the updated [`pivotValues`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pivotvalues). The updated [`pivotValues`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pivotvalues) are assigned to [`args.dataCollections`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/beforeexporteventargs#datacollections) for the export. Finally, [`expandAll`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettingsmodel#expandall) is set to **false** again to restore the original state of the Pivot Table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs334/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs334/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs334" %}

### Exporting with row and column cells spanning

Exporting data from the Pivot Table with cell spanning preserves the row and column cell layout in the exported PDF. The [`pdfQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettingsModel/#pdfquerycellinfo) event allows customization of cell span properties during the PDF export process to match the Pivot Table UI layout.

In the [`pdfQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettingsModel/#pdfquerycellinfo) event, customize the following cell span properties:

- `args.cell.rowSpan` - Defines the number of rows a cell should span in the exported PDF.
- `args.cell.colSpan` - Defines the number of columns a cell should span in the exported PDF.

In the following code example, the row and column spans are adjusted for empty cells in the Pivot Table and during PDF export.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs335/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs335/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs335" %}

### Exporting with hyperlinks and images

The Pivot Table allows adding hyperlinks and images to cells during PDF export. The [`pdfQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettingsModel/#pdfquerycellinfo) event handles row and value cells, while the [`pdfHeaderQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettingsModel/#pdfheaderquerycellinfo) event handles header cells. Both events provide access to the [hyperlink](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfquerycellinfoeventargs#hyperlink) property to set URLs in cells and the [image](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfquerycellinfoeventargs#image) property to add images to cells.

> PDF export supports base64 strings for exporting images.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs336/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs336/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs336" %}

## Exporting with custom aggregates

The Pivot Table supports exporting data with custom calculations beyond the default options such as **Sum**, **Count**, or **Average**. Custom aggregates allow for advanced analytical scenarios where standard calculations are not sufficient.

To export with custom aggregates, follow these steps:

1. Define custom aggregate names using the [localization](https://ej2.syncfusion.com/angular/documentation/pivotview/globalization-and-localization#localization) option. These names appear in the Pivot Table's aggregation menu.
2. Add custom aggregation types to the aggregate menu during Pivot Table initialization using the [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#databound) event.
3. Use the [`aggregateCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#aggregatecellinfo) event to define the calculation logic for each custom type. This event triggers for every aggregate cell, allowing custom calculations to be applied.
4. Once the calculations are defined, call the [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pdfexport) method to export the Pivot Table with all custom aggregations applied.

For more information about adding custom aggregation types, see the [custom aggregation documentation](https://ej2.syncfusion.com/angular/documentation/pivotview/how-to/add-custom-aggregation-type-in-menu).

The following example shows how to add two custom aggregate types to the aggregate menu: **CustomAggregateType 1**, which calculates a weighted average, and **CustomAggregateType 2**, which calculates the percentage of the total.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs337/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs337/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs337" %}

## Exporting with custom date format

The Pivot Table component allows applying custom date formatting to date-type fields added to the row and column axes. This formatting maintains consistency between the rendered pivot table and the exported PDF file. Configure custom date formatting through the [`formatSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettingsmodel#formatsettings) property by following these steps:

1. Set the [`name`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettingsmodel#name) property to the target date field.
2. Set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettingsmodel#type) property to **date** to identify the field as a date type.
3. Set the [`format`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/formatsettingsmodel#format) property to the desired date format pattern (for example, `"EEE, MMM d, ''yy"`).

After configuration, call the [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pdfexport) method to export the Pivot Table with the applied formatting.

The following example demonstrates exporting a Pivot Table with a custom date format. The date field uses the pattern `"EEE, MMM d, ''yy"` to display dates in the format: weekday abbreviation, month abbreviation, day, and two-digit year (for example, Sun, May 8, '23).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs338/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs338/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs338" %}

## Changing the pivot table style while exporting

When you export the Pivot Table as a PDF document, you can change the colors used for headers, captions, and records. To do this, use the [`theme`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#theme) property inside the [`pdfExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/) object. Pass this object to the [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pdfexport) method. This allows you to adjust how the Pivot Table looks in the exported PDF.

> By default, the Material theme is applied to the exported PDF document.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs214/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs214/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs214" %}

### Changing default font while exporting 

By default, the Pivot Table uses the "Helvetica" font in the exported PDF. You can change this font by setting the [`theme`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#theme) property in [`pdfExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/). The available built-in font options are:

- Helvetica
- TimesRoman
- Courier
- Symbol
- ZapfDingbats

```typescript
import { PdfStandardFont, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf-export';

...

let pdfExportProperties: PdfExportProperties = {
    theme: { 
        header: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 11, PdfFontStyle.Bold) }, 
        caption: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 9) }, 
        record: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 10) } 
    } 
};
```

### Adding custom font while exporting

You can also use custom fonts when exporting if you need support for languages or styles that are not available in the built-in fonts. The custom font should be in **Base64** format and applied using the **PdfTrueTypeFont** class. In the example below, the **Advent Pro** font is used, which supports the Hungarian language.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs215/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs215/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs215" %}

> Non-English alphabets can also be exported correctly when you specify a suitable font.

### Apply custom styles based on specific conditions

When exporting Pivot Table data to PDF, custom styles can be applied to cells based on their values or other criteria. To apply custom styles, use the [`pdfQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettingsModel/#pdfquerycellinfo) event. In this event, the cell information can be accessed through the [`args.data`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfquerycellinfoeventargs#data) property, and its style properties, such as [`backgroundColor`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfstyle#backgroundcolor), [`fontFamily`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfstyle#fontfamily), and [`textPenColor`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfstyle#textpencolor), can be customized. These changes apply only to the exported PDF and do not affect the on-screen Pivot Table display

The following example demonstrates how to apply conditional formatting to the **Sold** field values in the exported PDF document. Values below **700** units are highlighted in **red**, while values of **700** units or more are highlighted in **green**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs339/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs339/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs339" %}

## Enabling horizontal overflow

The Pivot Table component supports exporting all columns on a single page in the exported PDF document, even if the number of columns exceeds the maximum page limits. This functionality ensures readability and comprehensiveness of the exported PDF. To enable this option, set the [allowHorizontalOverflow](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfexportproperties#allowhorizontaloverflow) property in the [`pdfExportProperties`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfexportproperties/) object to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs340/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs340/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs340" %}

## Export only the current page

By default, the Pivot Table exports all data records. When working with large datasets, this can result in larger file sizes. To optimize file size and performance, only the data records currently visible in the viewport can be exported by setting the [`exportAllPages`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#exportallpages) property to **false**.

> This option is applicable only when the virtualization or paging functionality is enabled.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs218/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs218/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs218" %}

## Repeat row headers

By default, row headers are repeated on each page when exporting the Pivot Table as a PDF. This allows easy identification of rows in larger tables that extend across multiple pages. To turn off repeated row headers, set the [`allowRepeatHeader`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/beforeExportEventArgs/#allowrepeatheader) property to **false** within the [`beforeExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#beforeexport) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs217/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs217/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs217" %}

## Repeat column headers on every page

By default, column headers are repeated on each page when exporting the Pivot Table as a PDF. This ensures consistent column identification across multi-page documents. To prevent column headers from repeating on each page, use the [`pdfQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettingsModel/#pdfquerycellinfo) event. In this event, access the `pdfGrid` object through `args.cell.row.pdfGrid`, which holds the current PDF grid and allows component over the repeat header behavior. Then set its `repeatHeader` property to **false** to disable the repetition.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs341/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs341/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs341" %}

## Show spinner during export

When exporting data, displaying a spinner provides visual feedback to users that the export process is in progress. To show a spinner, invoke the `showWaitingPopup` method in the button's click event before calling the [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pdfexport) method. After the export is complete, use the [`exportComplete`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#exportcomplete) event to trigger the `hideWaitingPopup` method, which hides the spinner and indicates that the export has finished.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs342/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs342/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs342" %}

## Events

### PdfQueryCellInfo

The [`pdfQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettingsModel/#pdfquerycellinfo) event occurs for each row and value cell while exporting the Pivot Table to a PDF. This event allows users to change the value, appearance, or other details of the current cell in the PDF file. The following parameters are available in this event:

- [`value`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfQueryCellInfoEventArgs/#value): The content displayed in the cell.
- [`column`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfQueryCellInfoEventArgs/#column): The column information for the current cell.
- [`data`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfQueryCellInfoEventArgs/#data): The complete row data for the cell.
- [`style`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfQueryCellInfoEventArgs/#style): The style properties that control how the cell looks in the PDF.

By using this event, users can easily update the cell text, apply different styles such as font or background color, or adjust other settings as needed during PDF export.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs219/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs219/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs219" %}

### PdfHeaderQueryCellInfo

The [`pdfHeaderQueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettingsModel/#pdfheaderquerycellinfo) event is triggered for each column header cell when exporting the Pivot Table to a PDF document. This event allows users to easily change values or apply styles to the column header cells in the exported PDF file. 

The event provides the following parameters:

- [`cell`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfHeaderQueryCellInfoEventArgs/#cell): Gives information about the current header cell being exported.
- [`style`](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfHeaderQueryCellInfoEventArgs/#style): Contains style properties that can be used to format the cell.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs220/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs220/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs220" %}

### ExportComplete

The [`exportComplete`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#exportcomplete) event is triggered after the Pivot Table data has been successfully exported to a PDF document. This event allows you to access blob stream data for further processing by setting the `isBlob` parameter to **true** when calling the [`pdfExport`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pdfexport) method.

The event provides the following parameters:

* [`type`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/exportCompleteEventArgs/#type) - Specifies the current export type, such as PDF, Excel, or CSV.
* [`promise`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/exportCompleteEventArgs/#promise) - Contains the promise object that resolves with blob data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs221/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs221/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs221" %}

## See Also

* [Excel Exporting](./excel-export)

* [Pdf Exporting](https://www.syncfusion.com/blogs/post/pdf-exporting-angular-pivot-table)
