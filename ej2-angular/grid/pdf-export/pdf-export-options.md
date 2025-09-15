---
layout: post
title: Pdf Export Options in Angular Grid Component | Syncfusion
description: Learn here all about Pdf export options in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Pdf export options 
documentation: ug
domainurl: ##DomainURL##
---

# Pdf Export Options in Angular Grid Component

The Syncfusion Angular Grid component provides multiple options for customizing PDF export functionality. These capabilities enable precise control over the exported content and layout to match your application requirements.

PDF export behavior can be customized using the [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties) property. With `pdfExportProperties`, you can export current page records, selected or filtered records, show or hide specific columns, and adjust PDF formatting such as page size and orientation.

## Export current page records

Exporting the current page enables you to generate a PDF containing only the visible page of grid records. To do this, set the [exportType](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#exporttype) property in `pdfExportProperties` to **CurrentPage**.

The following example demonstrates exporting the current page to a PDF document when a toolbar item is clicked.

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

Exporting selected records lets you generate a PDF that includes only specific Grid data items. This feature provides targeted, user-driven PDF exports.

To export selected records, set the [exportProperties.dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#datasource) property in the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event. 

**Steps:**

1. Handle the `toolbarClick` event of the Grid.
2. Retrieve selected records via [getSelectedRecords](https://ej2.syncfusion.com/angular/documentation/api/grid/#getselectedrecords).
3. Assign the selected data to `exportProperties.dataSource`.
4. Call [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexport).

Example for exporting selected records:

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

Exporting only the filtered records from the Syncfusion Angular Grid allows you to generate PDF document that include only the data that matches your applied filters. This feature is useful when you want to export a subset of data based on specific criteria.

This can be achieved by defining the filtered data in the [exportProperties.dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#datasource) property before initiating the export.

To export only the filtered data from the grid to a PDF file, you can follow these steps:

1. Apply the desired filter to the grid data.

2. Get the filtered data using the [getFilteredRecords](https://ej2.syncfusion.com/documentation/api/grid/#getfilteredrecords) method.

3. Assign the filtered data to the `exportProperties.dataSource` property.

4. Trigger the export operation using the [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexport) method.

Example for exporting filtered records:

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

To include hidden columns in your exported PDF, set the [includeHiddenColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#includehiddencolumn) property as **true** in [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties). This feature is useful if you need to output fields that are not currently displayed in the Grid UI.

Example for exporting hidden columns (e.g., **ShipCity**) that are not visible in the UI:

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

The Grid enables columns to be shown or hidden dynamically during the export process.

**How to:**

1. Handle the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event.
2. Update column visibility using the [visible](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#visible) property (**true** to show, **false** to hide).
3. Run the export.
4. Use [pdfExportComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexportcomplete) to restore the column visibility post-export.

In this example, the **CustomerID** column is hidden in the Grid, but shown during export, while **ShipCity** is hidden for the export:

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

The Syncfusion Angular Grid allows you to control the visibility of columns during export operations. This feature is particularly useful when customizing the data presented in exported files while using stacked headers.

To implement the show or hide columns feature during PDF export in the Syncfusion Angular Grid, follow these steps:

1. Handle the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event of the Syncfusion Angular Grid.

2. Update the visibility of the desired columns by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#visible) property of the column to **true** or **false**.

3. Export the Syncfusion Angular Grid to PDF document using [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexport) method.

4. Handle the [pdfExportComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexportcomplete) event to restore the column visibility to its original state.

Example: The **ShipName** column is hidden in the UI but shown for PDF export, while **OrderDate** is hidden in the export:

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

You can change the PDF page orientation by setting the [pageOrientation](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#pageorientation) property in [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties).

Supported values:

- **Landscape**: Exports Grid with landscape page orientation.
- **Portrait**: Exports Grid with portrait page orientation (default).

Example for changing page orientation based on [DropDownList](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#value) value:

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

Page size for exported PDF documents can be changed by setting the [pageSize](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#pagesize) property of [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties) to the required size.

Supported `pdfPageSize` values include:

* Letter, Note, Legal
* A0 to A9
* B0 to B5
* Archa, Archb, Archc, Archd, Arche
* Flsa, HalfLetter, Letter11x17, Ledger

The following example demonstrates how to export the grid into PDF document by setting the `pdfExportProperties.pageSize` property by using [value](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#value) property of the `DropDownList` component.

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

To assign a specific file name to the exported PDF, set the [fileName](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#filename) property of [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties). This makes exported data easier to manage and identify.

To assign a custom file name for the exported document, you can set the [fileName](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#filename) property of the [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties) property to the desired file name.

The following example demonstrates how to define a file name using `pdfExportProperties.fileName` property when exporting to PDF, based on the entered value as the file name. 

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

The Syncfusion Angular Grid component allows you to display all defined grid columns on a single page even when the number of columns exceeds the maximum limits for columns in the exported PDF document. This ensures that your exported PDF maintains its readability and comprehensiveness.

You can achieve this by utilizing the [pdfExportProperties.allowHorizontalOverflow](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#allowhorizontaloverflow) property of the grid.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component is added to enable and disable the `pdfExportProperties.allowHorizontalOverflow` property. Based on the switch toggle, the `pdfExportProperties.allowHorizontalOverflow` property is updated using the [checked](https://ej2.syncfusion.com/angular/documentation/api/switch/#checked) property, and the export action is performed accordingly when the toolbar is clicked.

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

The Syncfusion Angular Grid component allows you to customize the appearance of grid columns in your exported PDF documents. This feature empowers you to tailor specific column attributes such as field, header text, and text alignment, ensuring that your exported PDFs align perfectly with your design and reporting requirements.

To customize the grid columns, you can follow these steps:

1. Access the [pdfExportProperties.column](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#columns) of the Grid component.

2. Set the `column` object with attributes such as `field`, `headerText`, and `textAlign` to define the desired format.

3. Trigger the PDF export operation to apply the customized column settings.

Example: Customize the **OrderID** column's text alignment, the **CustomerID** header text, and center-align the **Freight** column in the export output:

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

Text font and color used in the exported PDF document can be customized for Grid header, content, and caption cells.

### Default fonts

By default, the Grid uses the **Helvetica** font in the exported document. However, you can change the default font by utilizing the [pdfExportProperties.theme](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#theme) property. The available default fonts that you can choose from are:

* Helvetica
* TimesRoman
* Courier
* Symbol
* ZapfDingbats

To change the default font, you can follow these steps:

1. Access the `pdfExportProperties` of the Grid component.

2. Set the `theme` property to the desired default font.

3. Trigger the PDF export operation.

The following example demonstrates, how to change the default font when exporting a document.

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

The Syncfusion Angular Grid can use a custom font in exported PDF documents by specifying a base64-encoded font string through [pdfExportProperties.theme](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#theme). 

To use a custom font:

1. Encode the font file as a base64 string.
2. Assign this string to the export settings.

Example: Apply the base64 **Algeria** font to the exported grid (via the **base64AlgeriaFont** variable):

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs17" %}

> **PdfTrueTypeFont** must receive font data in base64 format.

## Conditional cell customization

When exporting data from the Syncfusion Angular Grid, you have an option to conditionally format the cells in the exported PDF document. This allows you to customize the appearance of specific cells based on their values or other criteria.

To implement conditional cell formatting, you can utilize the [pdfQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfquerycellinfo) event of the Grid. Within this event, you can access the cell object using the `args.cell` property and modify its properties, such as the background color, based on your desired conditions.

The following example demonstrate how to customize the background color of the **Freight** column in the exported PDF document using the **args.cell** and **backgroundColor** properties of the `pdfQueryCellInfo` event.

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

Grid supports exporting data as a Blob instead of auto-downloading a file. Set the `isBlob` parameter to **true** in [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexport). Use the [pdfExportComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexportcomplete) event to consume the returned blob promise.

Example: Obtain exported grid blob data via the `pdfExportComplete` event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/export-grid-as-blob-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/export-grid-as-blob-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/export-grid-as-blob-cs1" %}
