---
layout: post
title: Angular Grid - PDF Export | Syncfusion
description: Angular Grid PDF export explains exporting grid data to PDF, configuration, and examples to generate printable and shareable PDF documents.
platform: ej2-angular
control: Pdf export 
documentation: ug
domainurl: ##DomainURL##
---

# PDF Export in Angular Grid Component

The PDF export feature in the [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) exporting grid data to a PDF document, providing the ability to generate printable reports or share data in a standardized format.

To enable PDF export in the Grid, set the [allowPdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid#allowpdfexport) property to `true` and use the [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid#pdfexport) method. To use PDF export, inject the `PdfExportService` module to the providers array.

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

Displaying a spinner while exporting in the Angular Data Grid enhances the experience by providing visual indication during the export process. This indicates the export progress and prevents confusion about operation status.

To show or hide a spinner while exporting the grid, use the [showSpinner](https://ej2.syncfusion.com/angular/documentation/api/grid#showspinner) and [hideSpinner](https://ej2.syncfusion.com/angular/documentation/api/grid#hidespinner) methods within the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid#toolbarclick) event.

The `toolbarClick` event triggers when a toolbar item in the Grid is clicked. Within the event handler, verify if the clicked "item" relates to PDF export by checking for the "Grid_pdfexport" identifier. When matched, call the `showSpinner` method on the Grid instance to display the spinner.

To hide the spinner after export completes, bind the [pdfExportComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#pdfexportcomplete) event and call the `hideSpinner` method on the Grid instance.

The following example demonstrates showing and hiding the spinner during PDF export in the Grid.

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

The PDF export feature provides an option to define a custom data source during export. This enables exporting data not bound to the Grid, which can be generated or retrieved based on application logic.

To export data, define the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties#datasource) property within the [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties) object. This property specifies the data source for PDF export.

The following example demonstrates rendering a custom data source during PDF export. By utilizing the [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid#pdfexport) method with the `pdfExportProperties` object through the Grid instance, the data exports to PDF using the dynamically defined data source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs20/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs20" %}

> Make sure to utilize the [field](https://ej2.syncfusion.com/angular/documentation/api/grid/column#field) property that is declared in the Grid columns when modifying the data source for exporting.

## Exporting with custom aggregate

Custom aggregates in the Angular Data Grid export grid data with additional calculated values based on specific requirements. This feature displays a comprehensive data view in the exported file by incorporating aggregated information needed for analysis or reporting purposes.

To utilize custom aggregation, specify the [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#type) property as `Custom` and provide the `customAggregate` function in the [customAggregate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#customaggregate) property.

Within the "customAggregateFn" function, receive input data containing a `result` property. The function calculates the count of objects where the "Ship Country" field equals "Brazil" and returns the count with a descriptive label.

The following example shows exporting the Grid with a custom aggregate that calculates the "Brazil" count in the "Ship Country" column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ReturnType } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='245px' [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)'>
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

Exporting data from the Angular Data Grid with cell and row spanning maintains cell and row layout in the exported data. This feature is useful when the Grid contains merged cells or rows and the same structure needs preservation in the exported file.

To achieve this, utilize the [rowSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/querycellinfoeventargs#rowspan) and [colSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs#colspan) properties in the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#querycellinfo) event of the Grid. This event allows definition of span values for specific cells. Additionally, customize the appearance of Grid cells during export using the [pdfQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#pdfquerycellinfo) event of the Grid.

The following example demonstrates export with cell and row spanning using `queryCellInfo` and `pdfQueryCellInfo` events of the Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs24/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs24/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs24" %}

> The [updateCell](https://ej2.syncfusion.com/angular/documentation/api/grid#updatecell) method does not support row and column spanning.

## Merge duplicate cells in specific column and export in Grid

Duplicate cells(based on their values) in a specific column of the Angular Data Grid can be merged based on their values. This can be achieved by enabling the [enableRowSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#enablerowspan) property in the Grid. Additionally, duplicate cells in the specified column can be merged during PDF export by using the [pdfQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#pdfquerycellinfo) event. This feature enhances data readability and provides a clearer visual presentation both in the UI and in exported documents.

The following example demonstrates merging duplicate cells in the "Order ID" column in both Grid view and export:

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

The exporting functionality in the Angular Data Grid exports grid data with custom date formats. This feature is useful when exporting grid data requires customized date values.

To apply a custom date format to Grid columns during export, use the [format](https://ej2.syncfusion.com/angular/documentation/api/grid/column#format) property. This property allows definition of a custom format using format options.

The following example demonstrates exporting Grid data with a custom date format. In this example, the formatOptions object is used as the `format` property for the "Order Date" column. This custom date format displays the date in the format of day-of-the-week, month abbreviation, day, and 2-digit year (e.g., Thu, Jul 4, '96).

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

Exporting multiple grids in the Angular Data Grid component exports different grids for side-by-side comparison in external applications on the same or different pages of a PDF file. Each grid is identified by its unique ID. Specify which grids to export by listing their "IDs" in the [exportGrids](https://ej2.syncfusion.com/angular/documentation/api/grid#exportgrids) property.

### Same page

PDF exporting supports exporting multiple grids on the same page. To export grids on the same page, set the [multipleExport.type](https://ej2.syncfusion.com/angular/documentation/api/grid/multiplePdfExport#type) property to `AppendToPage` in the [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties#multipleexport). An option exists to provide blank space between grids using the [multipleExport.blankSpace](https://ej2.syncfusion.com/angular/documentation/api/grid/multiplePdfExport#blankspace) property.

The following example demonstrates exporting multiple grids to the same page in a PDF file when a toolbar item is clicked.

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

The PDF export functionality enables exporting multiple grids into separate pages (each grid on a new page) within the PDF file.

To achieve this:

1. Access the [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties#multipleexport) of the Grid component.

2. Set the [multipleExport.type](https://ej2.syncfusion.com/angular/documentation/api/grid/multiplePdfExport#type) property to `NewPage`.

3. Trigger the PDF export operation.

The following example demonstrates exporting multiple grids to a PDF file when a toolbar item is clicked.

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

Multiple grids exporting feature is not supported with server side exporting.

## Exporting hierarchy grid

Exporting a hierarchy grid in the Angular Data Grid component generates a PDF document that includes the master grid along with its child grids. This feature is useful when exporting hierarchical data with its related details.

To achieve this, customize the exporting behavior by using the `pdfExportProperties.hierarchyExportMode` property of the Grid.

The `hierarchyExportMode` property specifies the exporting behavior for the hierarchy grid. Available options are:

| Mode     | Behavior    |
|----------|-------------|
| `Expanded` | Exports the master grid with expanded child grids. |
| `All`      | Exports the master grid with all child grids, expanded or not. |
| `None`     | Exports only the master grid without any child grids. |

The following example demonstrates exporting a hierarchical grid to a PDF document. Change the `pdfExportProperties.hierarchyExportMode` property by using the [value](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#value) property of the `DropDownList` component.

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

The Angular Data Grid allows customization of the child Grid's PDF export options, enabling precise control over data formatting before export. This functionality is achieved using the [exportDetailDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#exportdetaildatabound) event, which triggers for each child Grid during the export process. This event provides access to the child Grid instance, allowing modifications to its column formatting before generating the PDF document.

In the following example, the `exportDetailDataBound` event modifies the "Order Date" column of the child Grid. By setting the column's [format](https://ej2.syncfusion.com/angular/documentation/api/grid/column#format) property, the date values display as `dd/MM/yyyy` when exported to PDF document.

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

The Angular Data Grid PDF exporting feature provides option to remove the header row from the exported file. This is useful when exporting grid data without including the header values in the exported document.

To achieve this, utilize the [pdfHeaderQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#pdfheaderquerycellinfo) event of the Grid. This event allows customization of the header cells during the PDF export process. By handling this event, remove the header row from the exported file by not providing any content and height for the header cells. This ensures that the exported file contains only the data rows without header information.

The following example demonstrates performing export without a header using the `pdfHeaderQueryCellInfo` event of the Grid.

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

[Exporting Grid in Cordova application](https://ej2.syncfusion.com/angular/documentation/grid/how-to/exporting-grid-in-cordova-application)
