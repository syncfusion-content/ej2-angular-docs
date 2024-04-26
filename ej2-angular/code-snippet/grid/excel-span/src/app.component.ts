import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, ExcelExportService, FilterService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data, columnDataType } from './datasource';
import { GridComponent, ToolbarItems,ExcelQueryCellInfoEventArgs, QueryCellInfoEventArgs, Column, ExcelCell } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

 

@Component({
imports: [
        
        GridModule
    ],

providers: [ExcelExportService, ToolbarService, FilterService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid'  [dataSource]='data' [toolbar]='toolbarOptions' height='272px' 
               allowExcelExport='true' (toolbarClick)='toolbarClick($event)' 
               (excelQueryCellInfo)="excelQueryCellInfo($event)" (queryCellInfo)="queryCellInfoEvent($event)">
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
    public message?: string;
    @ViewChild('grid') public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions=['ExcelExport'];
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') {
            (this.grid as GridComponent).excelExport();
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
    excelQueryCellInfo = function ({data,cell,colSpan,column}:ExcelQueryCellInfoEventArgs) {

        switch ((data as columnDataType).OrderID) {
            case 10248:
                if ((column as Column).field === 'CustomerID') {
                   (cell as ExcelCell).rowSpan = 2;
                }
                break;
            case 10250:
                if ((column as Column).field === 'CustomerID') {
                    colSpan = 2;
                }
                break;
            case 10252:
                if ((column as Column).field === 'OrderID') {
                    (cell as ExcelCell).rowSpan  = 3;
                }
                break;
            case 10256:
                if ((column as Column).field === 'CustomerID') {
                    (cell as ExcelCell).colSpan = 3;
                }
                break;
            case 10261:
                if ((column as Column).field === 'Freight') {
                    (cell as ExcelCell).colSpan = 2;
                }
                break;
        }
    };
}