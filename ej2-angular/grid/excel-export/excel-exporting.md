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

The Syncfusion Angular Grid allows exporting data to Excel or CSV formats, making it easy to share or analyze data in spreadsheets.

To enable Excel export, set the [allowExcelExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowexcelexport) property to **true** on the Grid. Initiate export with the [excelExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelexport) method. To use export features, inject **ExcelExportService** in your **AppModule**.

> To perform a CSV export, use the [csvExport](https://ej2.syncfusion.com/angular/documentation/api/grid/#csvexport) method.

Example: Perform Excel or CSV export in the grid:

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

Example: Show/hide spinner during Excel export:

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

Export custom data to Excel or CSV—even if not currently used in the Grid—by specifying the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#datasource) property in the [excelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/) object.

Example: Export dynamically defined data:

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

Export custom aggregate data by setting [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#type) to **Custom** and providing your calculation with [customAggregate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#customaggregate).

Example: Count the "Brazil" occurrences in the **ShipCountry** column during export:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, ExcelExportService,AggregateService } from '@syncfusion/ej2-angular-grids'

import { Component, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
imports: [
        
        GridModule
    ],

providers: [ExcelExportService, ToolbarService,AggregateService],
standalone: true,
  selector: 'app-root',
  template:`<div class="control-section">
              <ejs-grid #grid id="DefaultExport" [dataSource]="data" [toolbar]="toolbar"
                (toolbarClick)="toolbarClick($event)" [allowExcelExport]="true">
                <e-columns>
                  <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120>
                  </e-column>
                  <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>      
                  <e-column field="Freight" headerText="Freight" width="150" format="C2" 
                    textAlign="Right"></e-column>
                  <e-column field="OrderDate" headerText="Order Date" width="150"
                  format="yMd" textAlign="Right"></e-column>
                  <e-column field="ShipCountry"  headerText="Ship Country" width="150">
                  </e-column>
                </e-columns>
                <e-aggregates>
                  <e-aggregate>
                    <e-columns>
                      <e-column columnName="ShipCountry" type="Custom"
                      [customAggregate]="customAggregateFn">
                        <ng-template #footerTemplate let-data> {{ data.Custom }}</ng-template>
                      </e-column>
                    </e-columns>
                  </e-aggregate>
                </e-aggregates>
              </ejs-grid>
            </div>`
})

export class AppComponent {
  
  public data?: Object[];
  public toolbar?: string[];
  @ViewChild('grid')
  public grid?: GridComponent;

  public ngOnInit(): void {
    this.data = data.slice(0, 20);
    this.toolbar = ['ExcelExport'];
  }
  toolbarClick(args: ClickEventArgs): void {
    if (args.item.id=='DefaultExport_excelexport') {
        (this.grid as GridComponent).excelExport();
    }
  }
  public customAggregateFn = (customData: any) => {
      const brazilCount=customData.result ? customData.result.filter(
        (item: object) => (item as any)['ShipCountry'] === 'Brazil'
      ).length:
    customData.filter(
        (item: object) => (item as any)['ShipCountry'] === 'Brazil'
      ).length;
  return `Brazil Count::${brazilCount}`;
  };
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-aggregate/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/excel-exporting-aggregate" %}

## Exporting with cell and row spanning 

Maintain merged cells and rows in your exported Excel using [rowSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs/#rowspan) and [colSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs/#colspan) in the `queryCellInfo` event. Further customize cell exports with [excelQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelquerycellinfo).

Example: Export a grid with merged cells and rows:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-span/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-span/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-span" %}

> The [updateCell](https://ej2.syncfusion.com/angular/documentation/api/grid/#updatecell) method does not support row and column spanning.

## Exporting with custom date format

Apply a custom date format to exported columns by setting [columns.format](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format).

Example: The **OrderDate** column is exported as "Sun, May 8, '23":

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-date/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-date/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-date" %}

## Merge duplicate cells in a specific column before exporting

Merge duplicate cells in a column using [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) for the Grid and [excelQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelquerycellinfo) event for export. This improves readability and visual grouping.

Example: Merge duplicate cells in **OrderID** column:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-merge/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-merge/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-merge" %}

## Exporting multiple grids

Exporting multiple grids in the Syncfusion Angular Grid component allows you to export different grids to compare them side by side in external applications on the same or different pages of a Excel. Each grid is identified by its unique ID. You can specify which grid to export by listing their IDs in the [exportGrids](https://ej2.syncfusion.com/angular/documentation/api/grid/#exportgrids) property.

### Same sheet

Export multiple grids to the same Excel worksheet by setting [multipleExport.type](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#multipleexport) to **AppendToSheet** in [excelExportProperties](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/). Separate them with blank rows using [multipleExport.blankRows](https://ej2.syncfusion.com/angular/documentation/api/grid/multipleExport/#blankrows).

Example: Export multiple grids to one worksheet:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs12" %}

> Default **multipleExport.blankRows** value is 5.

### New sheet

Export each grid to a separate worksheet by setting [multipleExport.type](https://ej2.syncfusion.com/angular/documentation/api/grid/excelExportProperties/#multipleexport) to **NewPage**.

Example: Export multiple grids to multiple worksheets:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-cs13" %}

> Multiple grids exporting is not supported on the server side.

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

### Format the child grid columns before exporting

Customize child grid columns during export using the [exportDetailDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#exportdetaildatabound) event. Set column [format](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) such as date formatting.

Example: Format **OrderDate** as `dd/MM/yyyy` in the child grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/excel-exporting-cs15" %}

> Microsoft Excel supports up to seven levels of outlines. If the nested templates exceed this, outlines are not applied. [Microsoft Limitation](https://learn.microsoft.com/en-us/sql/reporting-services/report-builder/exporting-to-microsoft-excel-report-builder-and-ssrs?view=sql-server-2017#ExcelLimitations)

## Remove header row while exporting

Remove the header row from the exported file by clearing header cells in the [excelHeaderQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelheaderquerycellinfo) event and removing the row in the [created](https://ej2.syncfusion.com/angular/documentation/api/grid/#created) event.

Example: Export grid data without a header row:

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

Insert Excel formulas during export using the [valueAccessor](https://ej2.syncfusion.com/angular/documentation/api/grid/valueAccessor/) with [excelQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#excelquerycellinfo).

Example: Add formulas to exported cells by assigning a formula in `excelQueryCellInfo`:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-formula/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-formula/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/excel-exporting-formula" %}

## Passing additional parameters to the server when exporting

Add extra parameters to the export request using the [query](https://ej2.syncfusion.com/angular/documentation/api/grid/#query) property and the [toolbarClick](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event. Use the `addParams` method to add custom parameters.

Example: Pass **recordcount** as **15** using `addParams`:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/addtional-parameter-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/addtional-parameter-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/addtional-parameter-cs1" %}

## Limitations

* CSV is plain text and does not support formatting features like rotation, font and color customization, column and row spanning, or formulas. It only contains raw data.

## See Also

* [Exporting Grid in Cordova application](../how-to/exporting-grid-in-cordova-application)
* [How to get grid display numbers without grouping and same format to be exported to excel in Angular Grid](https://www.syncfusion.com/forums/151524/how-to-get-grid-display-numbers-without-grouping-and-same-format-to-be-exported-to-excel-in)
