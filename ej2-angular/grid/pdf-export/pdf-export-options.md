---
layout: post
title: Angular Grid - PDF Export Options | Syncfusion
description: Angular Grid PDF export options support configuring page sizes, margins, styles, and other settings to customize the exported PDF output.
platform: ej2-angular
control: Pdf export options 
documentation: ug
domainurl: ##DomainURL##
---

# PDF Export Options in Angular Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) component provides the ability to customize PDF export options. This flexibility enables greater control over the exported content and layout to meet specific requirements.

The PDF export action can be customized using the [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties) property. The `pdfExportProperties` property enables exporting the current page records, selected records, or filtered records. Additionally, page alignments can be customized using the `pdfExportProperties` property.

## Export current page records

Exporting the current page in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid to a PDF document provides the ability to export the currently displayed page records. This feature allows for generating PDF documents that specifically include the content from the current page of the grid.

To export the current page of the grid to a PDF document, set the [exportType](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties#exporttype) property to `CurrentPage`.

The following example demonstrates exporting current page to a PDF document when a toolbar item is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs11" %}

## Export selected records

Exporting only the selected records from the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid enables generating PDF documents that include only the desired data. This feature provides the flexibility to export specific records that are relevant to specific needs, enabling more focused and targeted PDF exports.

To export only the selected records, utilize the [exportProperties.dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties#datasource) property in the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbarclick) event. 

Follow these steps to export the selected records from the Grid to a PDF file:

1. Handle the `toolbarClick` event of the Grid.

2. Retrieve the selected records using the [getSelectedRecords](https://ej2.syncfusion.com/angular/documentation/api/grid#getselectedrecords) method.

3. Assign the selected data to the `exportProperties.dataSource `property.

4. Trigger the export operation using the [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid#pdfexport) method.

The following example demonstrates exporting the selected records to a PDF document.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-filtered-data-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-filtered-data-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-filtered-data-cs3" %}

## Export filtered records

Exporting only the filtered records from the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid enables generating PDF documents that include only the data matching applied filters. This feature is useful for exporting a subset of data based on specific criteria.

This can be achieved by defining the filtered data in the [exportProperties.dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties#datasource) property before initiating the export.

To export only the filtered data from the grid to a PDF file, follow these steps:

1. Apply the desired filter to the grid data.

2. Get the filtered data using the [getFilteredRecords](https://ej2.syncfusion.com/documentation/api/grid#getfilteredrecords) method.

3. Assign the filtered data to the `exportProperties.dataSource` property.

4. Trigger the export operation using the [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid#pdfexport) method.

The following example demonstrates exporting the filtered records to a PDF document.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-filtered-data-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-filtered-data-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-filtered-data-cs4" %}

## Export with hidden columns

Exporting hidden columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid enables including hidden columns in the exported PDF document. This feature is useful when columns are hidden in the UI but still need to be included in the exported document.

To export hidden columns of the grid to a PDF file, set the [includeHiddenColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties#includehiddencolumn) property to `true` in the [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties) property.

The following example demonstrates exporting hidden columns to a PDF file. In this example, the "Ship City" column, which is not visible in the UI, is exported to the PDF document. The grid can be exported by changing the `pdfExportProperties.includeHiddenColumn` property based on the switch toggle using the [checked](https://ej2.syncfusion.com/angular/documentation/api/switch#checked) property of the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs12" %}

## Show or hide columns while exporting

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid component provides the functionality to show or hide columns dynamically during the export process. This feature enables selective display or hiding of specific columns based on requirements.

To show or hide columns based on user interaction during the export process, follow these steps:

1. Handle the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbarclick) event of the Grid component.

2. Update the visibility of the desired columns by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/grid/column#visible) property of the column to `true` or `false`.

3. Export the grid to PDF.

4. Handle the [pdfExportComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#pdfexportcomplete) event to restore the column visibility to its original state.

In the following example, the "Customer ID" is initially a hidden column in the grid. However, during the export process, the "Customer ID" column is made visible, while the "Ship City" column is hidden.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs13" %}

## Show or hide columns while exporting with stacked header

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid provides the ability to control the visibility of columns during export operations. This feature is particularly useful when customizing the data presented in exported files while using stacked headers.

To implement the show or hide columns feature during PDF export in the Grid, follow these steps:

1. Handle the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbarclick) event of the Grid.

2. Update the visibility of the desired columns by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/grid/column#visible) property of the column to `true` or `false`.

3. Export the Grid to PDF document using [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid#pdfexport) method.

4. Handle the [pdfExportComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#pdfexportcomplete) event to restore the column visibility to its original state.

In the following example, the "Ship Name" is initially a hidden column in the Grid. However, during the PDF export process, the "Ship Name" column is made visible, while the "Order Date" column is hidden:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exportpdf-show-hide/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exportpdf-show-hide/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exportpdf-show-hide" %}

## Change page orientation

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid component provides the ability to change the page orientation of the exported PDF document from the default portrait mode to landscape mode. This feature provides the flexibility to adjust the layout and presentation of the exported PDF according to specific needs.

To change the page orientation to landscape for the exported document, set the [pageOrientation](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties#pageorientation) property of the [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfexportproperties) property. 

The supported `pageOrientation` options are:

1. `Landscape`: Exports the grid with a landscape PDF page orientation.

2. `Portrait`: Exports the grid with a portrait PDF page orientation.

The following example demonstrates exporting the grid into PDF document by setting the `pdfExportProperties.pageOrientation` property using the [value](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#value) property of the `DropDownList` component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs14" %}

## Change page size

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid component provides the ability to customize the page size of the exported PDF document according to requirements. This feature provides the flexibility to adjust the layout and dimensions of the exported PDF to fit different paper sizes or printing needs. 

To customize the page size for the exported document, set the [pageSize](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties#pagesize) property of the [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties) property to the desired page size. 

Supported `pdfPageSize` are:
* Letter
* Note
* Legal
* A0
* A1
* A2
* A3
* A4
* A5
* A6
* A7
* A8
* A9
* B0
* B1
* B2
* B3
* B4
* B5
* Archa
* Archb
* Archc
* Archd
* Arche
* Flsa
* HalfLetter
* Letter11x17
* Ledger

The following example demonstrates exporting the grid into PDF document by setting the `pdfExportProperties.pageSize` property by using [value](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#value) property of the `DropDownList` component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs15" %}

## Define file name

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid component provides the ability to specify a custom file name for the exported PDF document. This feature enables providing a meaningful and descriptive name for the exported file, making it easier to identify and manage the exported data.

To assign a custom file name for the exported document, set the [fileName](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties#filename) property of the [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties) property to the desired file name.

The following example demonstrates defining a file name using `pdfExportProperties.fileName` property when exporting to PDF, based on the entered value as the file name.  

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs16" %}

## Enabling horizontal overflow

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid component provides the ability to display all defined grid columns on a single page even when the number of columns exceeds the maximum limits for columns in the exported PDF document. This ensures that the exported PDF maintains its readability and comprehensiveness.

This can be achieved by utilizing the [pdfExportProperties.allowHorizontalOverflow](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties#allowhorizontaloverflow) property of the grid.

The following example uses the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component to enable or disable the `pdfExportProperties.allowHorizontalOverflow` property. Based on the switch state, the property is updated using the [checked](https://ej2.syncfusion.com/angular/documentation/api/switch#checked) value, and the PDF export is performed when the toolbar is clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs27/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs27/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs27" %}

## Customizing columns on export

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid component provides the ability to customize the appearance of grid columns in exported PDF documents. This feature enables tailoring specific column attributes such as field, header text, and text alignment, ensuring that exported PDFs align perfectly with design and reporting requirements.

To customize the grid columns, follow these steps:

1. Access the [pdfExportProperties.column](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties#columns) of the Grid component.

2. Set the `column` object with attributes such as `field`, `headerText`, and `textAlign` to define the desired format.

3. Trigger the PDF export operation to apply the customized column settings.

The following example demonstrates customizing the grid columns when exporting a document. In this scenario, the attributes for different columns have been customized: "Order ID" with `textAlign` set to `Right`, "Customer ID" with `headerText` as "Customer Name", and "Freight" with `textAlign` set to `Center`, which is not rendered in the grid columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs28/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs28/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs28" %}

## Font and color customization

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid component provides the ability to customize the font in the exported PDF document. This feature enables controlling the appearance and styling of the text in the exported file, ensuring consistency with the application's design.

### Default fonts

By default, the Grid uses the `Helvetica` font in the exported document. However, the default font can be changed by utilizing the [pdfExportProperties.theme](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties#theme) property. The available default fonts are:

* `Helvetica`
* `TimesRoman`
* `Courier`
* `Symbol`
* `ZapfDingbats`

To change the default font, follow these steps:

1. Access the `pdfExportProperties` of the Grid component.

2. Set the `theme` property to the desired default font.

3. Trigger the PDF export operation.

The following example demonstrates, changing the default font when exporting a document.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs26/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs26/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs26" %}

### Add custom font

In addition to changing the default font, the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid provides the ability to use a custom font for the Grid header, content, and caption cells in the exported document. This can be achieved by utilizing the [pdfExportProperties.theme](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties#theme) property.

When using a custom font, it is important to provide the font in a format that can be easily embedded in the exported document. This is typically done by encoding the font file into a base64 string. This base64 encoded font data can then be used within the export settings to ensure the custom font is applied to the exported PDF.

The following example demonstrates the usage of the custom "Algeria" font for exporting the grid. The "base64AlgeriaFont" variable contains the base64 encoded string representing the "Algeria" font file. This encoded font data is used in the PDF export properties to specify the custom font.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs17" %}

> `PdfTrueTypeFont` accepts base64 format of the custom font.

## Conditional cell customization

When exporting data from the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid, there is an option to conditionally format the cells in the exported PDF document. This enables customizing the appearance of specific cells based on their values or other criteria.

To implement conditional cell formatting, utilize the [pdfQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#pdfquerycellinfo) event of the Grid. Within this event, the cell object can be accessed using the `args.cell` property and its properties, such as the background color, can be modified based on desired conditions.

The following example demonstrates customizing the background color of the "Freight" column in the exported PDF document using the "args.cell" and "backgroundColor" properties of the `pdfQueryCellInfo` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs9" %}

## Export grid as blob

The Grid offers an option to export the data as a Blob instead of downloading it as a file in the browser. To export the grid as a Blob, set the `isBlob` parameter to `true` in the [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid#pdfexport) method. The grid returns the promise of a blob in the [pdfExportComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#pdfexportcomplete) event.

The following example demonstrates obtaining the blob data of the exported grid by executing the promise in the `pdfExportComplete` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/export-grid-as-blob-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/export-grid-as-blob-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/export-grid-as-blob-cs1" %}
