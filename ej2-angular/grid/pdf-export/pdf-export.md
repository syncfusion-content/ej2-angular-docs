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

The PDF export feature in the Syncfusion Angular Grid allows you to export grid data to a PDF document, providing the ability to generate printable reports or share data in a standardized format.

To enable PDF export in the grid, you need to set the [allowPdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowpdfexport) property to **true** and use the [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexport) method for exporting. 

To use PDF export, inject the **PdfExportService** in the provider section of the **AppModule**.

The following example demonstrates how to perform a PDF export action in the grid.

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

Showing a spinner while exporting in the Syncfusion Angular Grid enhances the experience by displaying a spinner during the export process. This feature provides a visual indication of the export progress, improving the understanding of the exporting process.

To show or hide a spinner while exporting the grid, you can utilize the [showSpinner](https://ej2.syncfusion.com/angular/documentation/api/grid/#showspinner) and [hideSpinner](https://ej2.syncfusion.com/angular/documentation/api/grid/#hidespinner) methods provided by the Grid within the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event.

The `toolbarClick` event is triggered when a toolbar item in the Grid is clicked. Within the event handler, the code checks if the clicked **item** is related with PDF export, specifically the **Grid_pdfexport** item. If a match is found, the `showSpinner` method is used on the Grid instance to display the spinner. 

To hide the spinner after the exporting is completed, bind the [pdfExportComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexportcomplete) event and use the `hideSpinner` method on the Grid instance to hide the spinner.

The following example demonstrates how to show and hide the spinner during PDF export in a grid.

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

The Syncfusion Angular Grid component provides a convenient way to export data to a PDF format. With the PDF export feature, you can define a custom data source while exporting. This allows you to export data that is not necessarily bind to the grid, which can be generated or retrieved based on your application logic.

To export data, you need to define the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#datasource) property within the [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/) object. This property represents the data source that will be used for the PDF export.

The following example demonstrates how to render custom data source during PDF export. By utilizing the [pdfExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfexport) method and passing the `pdfExportProperties` object through the grid instance, the grid data will be exported to a PDF using the dynamically defined data source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs20/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs20" %}

> Make sure to utilize the [field](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#field) property that you have declared in the grid columns when modifying the data source for exporting.

## Exporting with custom aggregate

Custom aggregates in the Syncfusion Angular Grid involves exporting grid data that includes additional calculated values based on specific requirements. This feature enables you to show the comprehensive view of the data in the exported file by incorporating the specific aggregated information you need for analysis or reporting purposes.

In order to utilize custom aggregation, you need to specify the [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#type) property as **Custom** and provide the custom aggregate function in the [customAggregate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#customaggregate) property. 

Within the **customAggregateFn** function, it takes an input data that contains a result property. The function calculates the count of objects in this data where the **ShipCountry** field value is equal to **Brazil** and returns the count with a descriptive label.

The following example shows how to export the grid with a custom aggregate that shows the calculation of the **Brazil** count of the **ShipCountry** column.

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

Exporting data from the Syncfusion Angular Grid with cell and row spanning enables you to maintain cell and row layout in the exported data. This feature is useful when you have merged cells or rows in the Grid and you want to maintain the same structure in the exported file.

To achieve this, you can utilize the [rowSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/querycellinfoeventargs/#rowspan) and [colSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs/#colspan) properties in the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event of the Grid. This event allows you to define the span values for specific cells. Additionally, you can customize the appearance of the grid cells during the export using the [pdfQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfquerycellinfo) event of the Grid.

The following example demonstrates how to perform export with cell and row spanning using `queryCellInfo` and `pdfQueryCellInfo` events of the Grid.

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

You can merge duplicate cells (based on their values) in a specific column of the Syncfusion Grid. This can be achieved by utilizing the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event. Additionally, you can merge duplicate cells in the specified column during export by using the [pdfQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfquerycellinfo) event for PDF format. This functionality is useful for improving the readability of your data and providing a clearer visual representation.

Here’s an example demonstrating how to merge duplicate cells in the **OrderID** column in both Grid view and export: 

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

The exporting functionality in the Syncfusion Angular Grid allows you to export grid data, including custom date format. This feature is useful when you need to export grid data with customized date values. 

To apply a custom date format to grid columns during the export, you can utilize the [columns.format](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) property. This property allows you to define a custom format using format options.

The following example demonstrates how to export the grid data with custom date format. In this example, the formatOptions object is used as the `columns.format` property for the **OrderDate** column. This custom date format displays the date in the format of day-of-the-week, month abbreviation, day, and 2-digit year (e.g., Thu, Jul 4, '96).

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

Exporting multiple grids in the Syncfusion Angular Grid component allows you to export different grids to compare them side by side in external applications on the same or different pages of a PDF file.  Each grid is identified by its unique ID. You can specify which grid to export by listing their **IDs** in the [exportGrids](https://ej2.syncfusion.com/angular/documentation/api/grid/#exportgrids) property.

### Same page

PDF exporting provides support for exporting multiple grids on the same page. To export the grids on the same page, define [multipleExport.type](https://ej2.syncfusion.com/angular/documentation/api/grid/multiplePdfExport/#type) as **AppendToPage** in [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#multipleexport). It also has an option to provide blank space between the grids. This blank space can be defined by using [multipleExport.blankSpace](https://ej2.syncfusion.com/angular/documentation/api/grid/multiplePdfExport/#blankspace) property. 

The following example demonstrates how to export multiple grids to the same page in a PDF file when a toolbar item is clicked.

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

PDF export functionality enables the exporting of multiple grids into separate pages (each grid on a new page) within the PDF file.

To achieve this, you can follow these steps:

1. Access the [pdfExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/pdfExportProperties/#multipleexport) of the Grid component.

2. Set the [multipleExport.type](https://ej2.syncfusion.com/angular/documentation/api/grid/multiplePdfExport/#type) property to **NewPage**.

3. Trigger the PDF export operation.

The following example demonstrates how to export multiple grids to a PDF file when a toolbar item is clicked.

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

* Multiple grids exporting feature is not supported with server side exporting.

## Exporting hierarchy grid

Exporting a hierarchy grid in the Syncfusion Angular Grid component allows you to generate a PDF document that includes the master grid along with its child grids. This feature is useful when you need to export hierarchical data with its related details.

To achieve this, you can customize the exporting behavior by using the `pdfExportProperties.hierarchyExportMode` property of the Grid.

The `hierarchyExportMode` property allows you to specify the exporting behavior for the hierarchy grid. The following options are available:

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the master grid with expanded child grids. |
| All      | Exports the master grid with all child grids, expanded or not. |
| None     | Exports only the master grid without any child grids. |

The following example demonstrates how to export hierarchical grid to PDF document. Also change the `pdfExportProperties.hierarchyExportMode` property by using [value](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#value) property of the `DropDownList` component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/exporting-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/exporting-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/exporting-cs8" %}

### Format the child Grid columns before exporting

The Syncfusion Angular Grid allows customization of the child Grid's PDF export options, enabling precise control over data formatting before export. This functionality is achieved using the [exportDetailDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#exportdetaildatabound) event, which is triggered for each child Grid during the export process. This event provides access to the child Grid instance, allowing modifications to its column formatting before generating the PDF document.

In the following example, the `exportDetailDataBound` event is used to modify the **OrderDate** column of the child Grid. By setting the column's `format` property, the date values are formatted as `dd/MM/yyyy` when exported to PDF document.

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

When exporting data from the Syncfusion Angular Grid, you have an option to remove the header row from the exported file. This can be useful when you want to export grid data without including the header values in the exported document.

To achieve this, you can utilize the [pdfHeaderQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#pdfheaderquerycellinfo) event of the Grid. This event allows you to customize the header cells during the PDF export process. By handling this event, you can remove the header row from the exported file by not providing any content and height for the header cells. This ensures that the exported file contains only the data rows without including the header information.

The following example demonstrates how to perform export without header using `pdfHeaderQueryCellInfo` event of the Grid.

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