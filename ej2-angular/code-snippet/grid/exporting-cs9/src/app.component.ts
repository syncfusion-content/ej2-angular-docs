


import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='272px'
            [allowPdfExport]='true' (queryCellInfo)='queryCellInfo($event)'
    (pdfQueryCellInfo)='pdfQueryCellInfo($event)' (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='Freight' headerText='Freight' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if ((args as any).item.id === 'Grid_pdfexport') {
            (this.grid as any).pdfExport();
        }
    }

    pdfQueryCellInfo(args: any): void {
        if ((args as any).column.field === 'Freight') {
            if ((args as any).value < 30) {
                (args as any).style = { backgroundColor: '#99ffcc' };
            } else if ((args as any).value < 60) {
                (args as any).style = { backgroundColor: '#ffffb3' };
            } else {
                (args as any).style = { backgroundColor: '#ff704d' };
            }
        }
    }

    queryCellInfo(args: any): void {
        if ((args as any).column.field === 'Freight') {
            if ((args as any).data[(args as any).column.field] < 30) {
                (args as any).cell.bgColor = '#99ffcc';
            } else if ((args as any).data[(args as any).column.field] < 60) {
                (args as any).cell.bgColor = '#ffffb3';
            } else {
                (args as any).cell.bgColor = '#ff704d';
            }
        }
    }
}




