import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, PdfExportService,AggregateService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, PdfQueryCellInfoEventArgs, QueryCellInfoEventArgs, Column } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
@Component({
imports: [
        
        GridModule
    ],

providers: [PdfExportService, ToolbarService,AggregateService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' gridLines="Both" [dataSource]='data' [toolbar]='toolbarOptions' height='272px' [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)' (pdfQueryCellInfo)="pdfQueryCellInfo($event)" (queryCellInfo)="queryCellInfoEvent($event)">
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                        <e-column field='Freight' headerText='Freight' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                        <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
                    </e-columns>
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
            (this.grid as any).pdfExport();
        }
    }

    queryCellInfoEvent = function (args: QueryCellInfoEventArgs) {

        switch ((args.data as columnDataType).OrderID) {
            case 10248:
                if ((args.column as Column).field === 'CustomerID') {
                    args.rowSpan = 2;
                }
                break;
            case 10250:
                if ((args.column as Column).field === 'CustomerID') {
                    args.colSpan = 2;
                }
                break;
            case 10252:
                if ((args.column as Column).field === 'OrderID') {
                    args.rowSpan = 3;
                }
                break;
            case 10256:
                if ((args.column as Column).field === 'CustomerID') {
                    args.colSpan = 3;
                }
                break;
            case 10261:
                if ((args.column as Column).field === 'Freight') {
                    args.colSpan = 2;
                }
                break;
        }
    }

    pdfQueryCellInfo = function (args: PdfQueryCellInfoEventArgs) {
        switch ((args.data as columnDataType).OrderID) {
            case 10248:
                if ((args.column as Column).field === 'CustomerID') {
                    (args.cell as PdfCell).rowSpan = 2;
                }
                break;
            case 10250:
                if ((args.column as Column).field === 'CustomerID') {
                    args.colSpan = 2;
                }
                break;
            case 10252:
                if ((args.column as Column).field === 'OrderID') {
                    (args.cell as PdfCell).rowSpan = 3;
                }
                break;
            case 10256:
                if ((args.column as Column).field === 'CustomerID') {
                    args.colSpan = 3;
                }
                break;
            case 10261:
                if ((args.column as Column).field === 'Freight') {
                    args.colSpan = 2;
                }
                break;
        }
    };
}

interface columnDataType{
    field: number;
    OrderID:number,
    Freight:number,
    CustomerID:string,
    ShipCity:string,
    ShipName:string,
    ShipCountry:string,
    ShipPostalCode:number
}

interface PdfCell {
    rowSpan?: number;  
}
