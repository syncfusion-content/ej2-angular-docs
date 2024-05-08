import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, PdfExportService,AggregateService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data, Cell } from './datasource';
import { GridComponent, ToolbarItems, PdfHeaderQueryCellInfoEventArgs } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
imports: [
        
        GridModule
    ],

providers: [PdfExportService, ToolbarService,AggregateService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='272px' [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)' (pdfHeaderQueryCellInfo)="pdfHeaderQueryCellInfo($event)">
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
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
            (this.grid as GridComponent).pdfExport();
        }
    }

    pdfHeaderQueryCellInfo({cell}: PdfHeaderQueryCellInfoEventArgs) {
        const typedCell = cell as Cell;
        typedCell.value = '';
        if (typedCell.value === '') {
            typedCell.height = '';
        }

    }
}



