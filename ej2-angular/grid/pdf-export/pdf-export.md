---
layout: post
title: Pdf export in Angular Grid component | Syncfusion
description: Learn here all about Pdf export in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Pdf export 
documentation: ug
domainurl: ##DomainURL##
---

# Pdf export in Angular Grid component

The PDF export feature in the Syncfusion Angular Grid enables exporting grid data to a PDF document, allowing easy creation of printable reports or sharing data in a standardized format.

To enable PDF export in the grid, set the [allowPdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowpdfexport) property to **true** and use the [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexport) method to initiate exporting.

Make sure to inject **PdfExportService** in the providers section of the **AppModule** to use the export feature.

The following example demonstrates performing a PDF export action in the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs18" %}

## Show spinner while exporting

Displaying a spinner during the export process provides a visual indication of export progress in the Syncfusion Angular Grid.

To show or hide a spinner while exporting, use the [showSpinner](https://ej2.syncfusion.com/angular/documentation/api/grid/#showspinner) and [hideSpinner](https://ej2.syncfusion.com/angular/documentation/api/grid/#hidespinner) methods. Call `showSpinner` on the Grid instance in the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event when the PDF Export toolbar item is clicked. Hide the spinner after the export completes by binding the [pdfExportComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexportcomplete) event and calling `hideSpinner`.

Example of showing and hiding the spinner during PDF export:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs19/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs19" %}

## Binding custom data source while exporting

The Syncfusion Angular Grid allows exporting a custom data source to PDF, even if that data is not already bound to the grid. This enables exporting dynamically generated or application-derived data.

Specify the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#datasource) property within the [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/) object. This property determines the data source for the PDF export operation.

Example demonstrating export with a dynamically defined data source:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs20/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs20" %}

> Ensure to use field names in the custom data source that match the [field](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#field) properties of the grid columns for correct export.

## Exporting with custom aggregate

Custom aggregates in the Syncfusion Angular Grid enable exporting data with additional calculated values, providing more comprehensive information in the exported file.

To use custom aggregation, set the [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#type) property to **Custom** and provide your aggregate function via the [customAggregate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#customaggregate) property.

Within your custom function, calculate and return results (such as counts, sums, etc.) as needed.

Example: Exporting the grid with a custom aggregate showing the count of **Brazil** in the **ShipCountry** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ReturnType } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='272px' [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                        <e-column field='ShipCountry' headerText='ShipCountry' width=100></e-column>
                    </e-columns>
                    <e-aggregates>
                        <e-aggregate>
                            <e-columns>
                                <e-column
                                columnName="ShipCountry"
                                type="Custom"
                                [customAggregate]="customAggregateFn"
                                >
                                <ng-template #footerTemplate let-data> {{ data.Custom }}
                                </ng-template>
                                </e-column>
                            </e-columns>
                        </e-aggregate>
                    </e-aggregates>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('grid') public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];

    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') {
            (this.grid as GridComponent).pdfExport();
        }
    }

    public customAggregateFn = (customData: object[] | { result?: object[] }) => {
        let data: object[] = [];
    
        if ('result' in customData && Array.isArray(customData.result)) {
            data = customData.result;
        } else if (Array.isArray(customData)) {
            data = customData;
        }
    
        const brazilCount = data.filter((item: object) => (item as itemType)['ShipCountry'] === 'Brazil').length;
    
        return `Brazil count: ${brazilCount}`;
    };
}

interface itemType {
    OrderID: number;
    CustomerID: string;
    EmployeeID: number;
    OrderDate: Date;
    ShipName: string;
    ShipCountry: string;
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs22/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs22" %}

## Exporting with cell and row spanning

Exporting cell and row spans from the Syncfusion Angular Grid maintains the merged structure in the exported PDF. This is useful for preserving the layout of merged cells.

Specify [rowSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/querycellinfoeventargs/#rowspan) and [colSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs/#colspan) in the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event. Customize export cell appearance using [pdfQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfquerycellinfo).

Example for exporting with cell and row spanning:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs24/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs24/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs24" %}

> * The [updateCell](https://ej2.syncfusion.com/angular/documentation/api/grid/#updatecell) method does not support row and column spanning.

## Merge duplicate cells in a specific column before exporting

Merge duplicate cells in a specified column by handling the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event and use [pdfQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfquerycellinfo) during export for PDF formatting. This improves readability and presents grouped data visually.

Example: Merging duplicate cells in the **OrderID** column in both Grid view and export:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-merge-pdf/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-merge-pdf/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-merge-pdf" %}

## Exporting with custom date format

You can export grid data with a custom date format by using the [columns.format](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) property for grid columns. Define a custom format in the format options to format date values.

Example: The **OrderDate** column is exported in the format day-of-the-week, month abbreviation, day, and 2-digit year (e.g., Thu, Jul 4, '96).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs23/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs23" %}

## Exporting multiple grids

The Syncfusion Angular Grid makes it possible to export multiple grids for comparison, either on the same page or different pages of a PDF.

### Same page

Export multiple grids to a single PDF page using [multipleExport.type](https://ej2.syncfusion.com/angular/documentation/api/grid/multiplePdfExport/#type) set to **AppendToPage**, and [multipleExport.blankSpace](https://ej2.syncfusion.com/angular/documentation/api/grid/multiplePdfExport/#blankspace) to define space between grids.

Example of exporting multiple grids to the same page:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs29/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs29/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs29" %}

### New page

Export multiple grids to separate PDF pages with [multipleExport.type](https://ej2.syncfusion.com/angular/documentation/api/grid/multiplePdfExport/#type) set to **NewPage**.

**Steps:**

1. Access the [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#multipleexport) of the Grid component.
2. Set [multipleExport.type](https://ej2.syncfusion.com/angular/documentation/api/grid/multiplePdfExport/#type) to **NewPage**.
3. Trigger the PDF export.

Example for exporting multiple grids to separate pages:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs7" %}

### Limitations

* Multiple grids exporting is not supported with server-side exporting.

## Exporting hierarchy grid

Export hierarchy data, including master and child grids, to PDF using the [pdfExportProperties.hierarchyExportMode](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#hierarchyexportmode) property. Control export with these options:

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the master grid with expanded child grids. |
| All      | Exports the master grid with all child grids, regardless of their expanded state. |
| None     | Exports only the master grid. |

Example: Configure hierarchy export mode using a [DropDownList](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#value) in the UI to change `hierarchyExportMode` for PDF export.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs8" %}

### Format the child grid columns before exporting

Use the [exportDetailDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#exportdetaildatabound) event to customize child grid columns when exporting hierarchy grids. Adjust column formatting before the export, such as setting date formats.

Example: The **OrderDate** column in the child grid is formatted as `dd/MM/yyyy` during PDF export:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs30/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs30/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/exporting-cs30" %}

## Remove header row while exporting

To export grid data without a header row, handle the [pdfHeaderQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfheaderquerycellinfo) event and omit content and height for header cells. This ensures only data rows are included in the exported PDF.

Example of export without a header row:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs25/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs25/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs25" %}

## See also

* [Exporting Grid in Cordova application](https://ej2.syncfusion.com/angular/documentation/grid/how-to/exporting-grid-in-cordova-application)
