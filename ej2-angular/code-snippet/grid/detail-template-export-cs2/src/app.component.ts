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



