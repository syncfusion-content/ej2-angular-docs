---
layout: post
title: Angular Grid - Excel Exporting Templates | Syncfusion
description: Angular Grid Excel export with templates customizes cell content and layout using column, detail, and caption templates with images, links, and formatting.
platform: ej2-angular
control: Exporting grid with templates
documentation: ug
domainurl: ##DomainURL##
---

# Exporting with Templates

The Grid offers powerful export capabilities that preserve column, detail, and caption templates in Excel documents. Templates enable rich content rendering including images, hyperlinks, and customized text. Column templates customize individual cell content, detail templates display nested hierarchical data, and caption templates customize group headers for enhanced presentation.

## Exporting with column template

Column template export enables Grid columns with complex content including images, hyperlinks, and custom text to be seamlessly exported to Excel documents. This feature is ideal when visual elements or interactive content need to be preserved in exported files.

In the following sample, the hyperlinks and images are exported to Excel using [hyperlink](https://ej2.syncfusion.com/angular/documentation/api/grid/excelQueryCellInfoEventArgs#hyperlink) and [image](https://ej2.syncfusion.com/angular/documentation/api/grid/excelQueryCellInfoEventArgs#image) properties in the [excelQueryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#excelquerycellinfo) event.

> Excel Export supports exporting images as base64 strings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/column-template-export-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/column-template-export-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/column-template-export-cs2" %}

![Exporting a Grid Column Template with Image and Hyperlink](../images/colTemp_excel_expt.gif)

## Exporting with detail template

Detail template export configuration allows control over hierarchical data rendering in Excel documents. By default, the grid exports the parent grid with expanded detail rows alone. Change the exporting behavior by using the `ExcelExportProperties.hierarchyExportMode` property. This feature is particularly useful for master-detail scenarios where controlling the level of exported detail enhances document clarity.

The available export modes are:

| Mode     | Behavior    |
|----------|-------------|
| `Expanded` | Exports the parent grid with expanded detail rows. |
| `All`      | Exports the parent grid with all the detail rows. |
| `None`     | Exports the parent grid alone. |

The detail rows in the exported Excel can be customized or formatted using the [exportDetailTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid#exportdetailtemplate) event. In this event, the detail rows of the Excel document are formatted in accordance with their parent row details.

In the following sample, the detail row content is formatted by specifying the [columnHeader](https://ej2.syncfusion.com/angular/documentation/api/grid/detailTemplateProperties#columnheader) (defines the header structure for detail rows) and [rows](https://ej2.syncfusion.com/angular/documentation/api/grid/detailTemplateProperties#rows) properties using its [parentRow](https://ej2.syncfusion.com/angular/documentation/api/grid/exportDetailTemplateEventArgs#parentrow) details. This allows for the creation of detail rows in the Excel document. Additionally, custom styles can be applied to specific cells using the [style](https://ej2.syncfusion.com/angular/documentation/api/grid/detailTemplateCell#style) property.

> When using [rowSpan](https://ej2.syncfusion.com/angular/documentation/api/grid/detailTemplateCell#rowspan) (merges multiple rows vertically), it is Essential<sup style="font-size:70%">&reg;</sup> to provide the cell's [index](https://ej2.syncfusion.com/angular/documentation/api/grid/detailTemplateCell#index) for proper functionality.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DetailRowService, ExcelExportService, ToolbarService } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import { GridComponent, ExportDetailTemplateEventArgs } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
@Component({
imports: [
        
        GridModule        
    ],

providers: [DetailRowService, ExcelExportService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]="data" id="DetailTemplateGrid" [toolbar]="toolbar" [allowExcelExport]="true"
        (toolbarClick)="toolbarClick($event)" (exportDetailTemplate)="exportDetailTemplate($event)" height="273px">
            <ng-template #detailTemplate let-data>
                <table class="detailtable" width="100%">
                    <colgroup>
                        <col width="40%" />
                        <col width="60%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th colspan="2" style="font-weight: 500;text-align: center;background-color: #ADD8E6;">
                            Product Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="4" style="text-align: center;">
                                <img class="photo" src="data:image/jpeg;base64,{{ data.ProductImg }}"
                                alt="{{ data.EmployeeID }}"/>
                            </td>
                            <td>
                                <span style="font-weight: 500;color: #0a76ff;">
                                Offers: {{ data.Offers }}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>Available: {{ data.Available }} </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span class="link">
                                Contact:<a href="mailto:{{ data.Contact }}">{{ data.Contact }}</a>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span style="font-weight: 500;color: #0a76ff;">
                                Ratings: {{ data.Ratings }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td style="text-align: center;">
                                <span> {{ data.productDesc }}</span>
                            </td>
                            <td>
                                <span>{{ data.ReturnPolicy }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td style="text-align: center;">
                                <span style="font-weight: 500;"> {{ data.Cost }}</span>
                            </td>
                            <td>
                                <span>{{ data.Cancellation }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td style="text-align: center;">
                                <span class="{{ data.Status }}" style="font-weight: 500;">
                                {{ data.Status }}</span>
                            </td>
                            <td>
                                <span style="font-weight: 500;color: #0a76ff;">{{ data.Delivery }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </ng-template>
            <e-columns>
                <e-column field="Category" headerText="Category" width="140"></e-column>
                <e-column field="ProductID" headerText="Product ID" width="120"></e-column>
                <e-column field="Status" headerText="Status" width="200"></e-column>
            </e-columns>
        </ejs-grid>`,
    styleUrls: ['app.style.css']
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbar?: string[];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = employeeData;
        this.toolbar = ['ExcelExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'DetailTemplateGrid_excelexport') {
            (this.grid as GridComponent).excelExport({ hierarchyExportMode: 'Expanded' });
        }
    }

    exportDetailTemplate(args: ExportDetailTemplateEventArgs): void {
        args.value = {
            columnHeader: [
                {
                    cells: [
                        {
                            index: 0,
                            colSpan: 2,
                            value: 'Product Details',
                            style: {
                                backColor: '#ADD8E6',
                                excelHAlign: 'Center',
                                bold: true,
                            },
                        },
                    ],
                },
            ],
            rows: [
                {
                    cells: [
                        {
                            index: 0,
                            rowSpan: 4,
                            image: {
                                base64: (args.parentRow as any).data['ProductImg'],
                                height: 80,
                                width: 100,
                            },
                        },
                        {
                            index: 1,
                            value: 'Offers: ' + (args.parentRow as any).data['Offers'],
                            style: { bold: true, fontColor: '#0a76ff' },
                        },
                    ],
                },
                {
                    cells: [
                        {
                            index: 1,
                            value: 'Available: ' + (args.parentRow as any).data['Available'],
                        },
                    ],
                },
                {
                    cells: [
                        {
                            index: 1,
                            value: 'Contact: ',
                            hyperLink: {
                                target: 'mailto:' + (args.parentRow as any).data['Contact'],
                                displayText: (args.parentRow as any).data['Contact'],
                            },
                        },
                    ],
                },
                {
                    cells: [
                        {
                            index: 1,
                            value: 'Ratings: ' + (args.parentRow as any).data['Ratings'],
                            style: { bold: true, fontColor: '#0a76ff' },
                        },
                    ],
                },
                {
                    cells: [
                        {
                            index: 0,
                            value: (args.parentRow as any).data['productDesc'],
                            style: { excelHAlign: 'Center' },
                        },
                        { index: 1, value: (args.parentRow as any).data['ReturnPolicy'] },
                    ],
                },
                {
                    cells: [
                        {
                            index: 0,
                            value: (args.parentRow as any).data['Cost'],
                            style: { excelHAlign: 'Center', bold: true },
                        },
                        { index: 1, value: (args.parentRow as any).data['Cancellation'] },
                    ],
                },
                {
                    cells: [
                        {
                            index: 0,
                            value: (args.parentRow as any).data['Status'],
                            style: {
                                bold: true,
                                fontColor:
                                    (args.parentRow as any).data['Status'] === 'Available'
                                        ? '#00FF00'
                                        : '#FF0000',
                                excelHAlign: 'Center',
                            },
                        },
                        {
                            index: 1,
                            value: (args.parentRow as any).data['Delivery'],
                            style: { bold: true, fontColor: '#0a76ff' },
                        },
                    ],
                },
            ],
        };
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/detail-template-export-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/detail-template-export-cs2" %}

![DetailTemplateExport](../images/detailTemp_excel_expt.gif)

## Exporting with caption template

Caption template export provides customization of group headers in Excel documents. The Grid exports customized caption templates to Excel, enabling enhanced header presentation for grouped data that improves document readability.

In the following sample, the customized caption text is exported to Excel using [captionText](https://ej2.syncfusion.com/angular/documentation/api/grid/exportGroupCaptionEventArgs#captiontext) property in the [exportGroupCaption](https://ej2.syncfusion.com/angular/documentation/api/grid#exportgroupcaption) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService, ToolbarService, ExcelExportService } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import { GridComponent, GroupSettingsModel, ExportGroupCaptionEventArgs } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
imports: [GridModule],
providers: [GroupService, ToolbarService, ExcelExportService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id="CaptionTemplateGrid" [dataSource]="data" [allowGrouping]="true" [groupSettings]="groupOptions"
               [toolbar]="toolbar" (toolbarClick)="toolbarClick($event)" [allowExcelExport]="true"
               (exportGroupCaption)="exportGroupCaption($event)" height='273px'>
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' width='140'></e-column>
                    <e-column field='FirstName' headerText='First Name' width='120'></e-column>
                    <e-column field='City' headerText='City'></e-column>
                    <e-column field='Title' headerText='Title' width=170></e-column>
                </e-columns>
                <ng-template #groupSettingsCaptionTemplate let-data>
                    {{ data.field }} - {{ data.key }}
                </ng-template>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public groupOptions?: GroupSettingsModel;
    public toolbar?: string[];

    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = employeeData;
        this.groupOptions = { columns: ['EmployeeID'] };
        this.toolbar = ['ExcelExport'];
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'CaptionTemplateGrid_excelexport') {
            (this.grid as GridComponent).excelExport();
        }
    }
    exportGroupCaption(args: ExportGroupCaptionEventArgs) {
        args.captionText = (args.data as any)['field'] + ' - ' + (args.data as any)['key'];
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/caption-template-export-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/caption-template-export-cs2" %}

![CaptionTemplateExport](../images/captionTemp_excel_expt.gif)

