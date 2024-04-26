import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DetailRowService, PdfExportService, ToolbarService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import { GridComponent, ExportDetailTemplateEventArgs } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

interface Row {
    data: DataType;
    parentRow: object[]
}
interface DataType {
    Category: string,
    Offers: string,
    Cost: string,
    Available: string,
    ItemID: string,
    ProductID: string,
    Contact: string,
    Status: string,
    ProductImg: string,
    productDesc: string,
    ReturnPolicy: string,
    Delivery: string,
    Cancellation: string,
    Ratings: string
}

@Component({
imports: [
        
        GridModule        
    ],

providers: [DetailRowService, PdfExportService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]="data" id="DetailTemplateGrid" [toolbar]="toolbar" [allowPdfExport]="true"
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
                <e-column field="Status" headerText="Status" width="120"></e-column>
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
        this.toolbar = ['PdfExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'DetailTemplateGrid_pdfexport') {
            (this.grid as GridComponent).pdfExport({ hierarchyExportMode: 'Expanded' });
        }
    }

    exportDetailTemplate(args: ExportDetailTemplateEventArgs): void {
        const parentRow = (args.parentRow as object as Row)
        const columnData=parentRow.data as DataType
        args.value = {
            columnCount: 2,
            columnHeader: [
                {
                    cells: [
                        {
                            index: 0,
                            colSpan: 2,
                            value: 'Product Details',
                            style: {
                                backColor: '#ADD8E6',
                                pdfTextAlignment: 'Center',
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
                            image: { base64: columnData['ProductImg'], width: 80 },
                        },
                        {
                            index: 1,
                            value: 'Offers: ' + columnData['Offers'],
                            style: { fontColor: '#0A76FF', fontSize: 15 },
                        },
                    ],
                },
                {
                    cells: [
                        {
                            index: 1,
                            value: 'Available: ' + columnData['Available'],
                        },
                    ],
                },
                {
                    cells: [
                        {
                            index: 1,
                            value: 'Contact: ',
                            hyperLink: {
                                target: 'mailto:' + columnData['Contact'],
                                displayText: columnData['Contact'],
                            },
                        },
                    ],
                },
                {
                    cells: [
                        {
                            index: 1,
                            value: 'Ratings: ' + columnData['Ratings'],
                            style: { fontColor: '#0A76FF', fontSize: 15 },
                        },
                    ],
                },
                {
                    cells: [
                        {
                            index: 0,
                            value: columnData['productDesc'],
                            style: { pdfTextAlignment: 'Center' },
                        },
                        { index: 1, value: columnData['ReturnPolicy'] },
                    ],
                },
                {
                    cells: [
                        {
                            index: 0,
                            value: columnData['Cost'],
                            style: { bold: true, pdfTextAlignment: 'Center' },
                        },
                        { index: 1, value: columnData['Cancellation'] },
                    ],
                },
                {
                    cells: [
                        {
                            index: 0,
                            value: columnData['Status'],
                            style: {
                                fontColor:
                                columnData['Status'] === 'Available'
                                        ? '#00FF00'
                                        : '#FF0000',
                                pdfTextAlignment: 'Center',
                                fontSize: 15,
                            },
                        },
                        {
                            index: 1,
                            value: columnData['Delivery'],
                            style: { fontColor: '#0A76FF', fontSize: 15 },
                        },
                    ],
                },
            ],
        };
    }
}



