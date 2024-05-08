import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, ExcelExportService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ExcelExportCompleteArgs } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
imports: [
        
        GridModule
    ],

providers: [ExcelExportService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='230px'  [allowExcelExport]='true' 
                (excelExportComplete)='excelExportComplete($event)' (toolbarClick)='toolbarClick($event)'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                        <e-column field='Freight' headerText='Freight' width=80></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
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
        this.toolbarOptions = ['ExcelExport', 'CsvExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') {
            // pass undefined to use default settings
            (this.grid as GridComponent).excelExport(undefined, undefined, undefined, true);
        }
        if (args.item.id === 'Grid_csvexport') {
            // pass undefined to use default settings
            (this.grid as GridComponent).csvExport(undefined, undefined, undefined, true);
        }
    }

    excelExportComplete(args: ExcelExportCompleteArgs): void {
        if (args && args.promise) { 
            // execute the promise to get the blob data
            args.promise.then((e: { blobData: Blob }) => {
                this.exportBlob(e.blobData);
            });
        }
    }

    public exportBlob = (blob: Blob) => {
        const a: HTMLAnchorElement = document.createElement('a');
        document.body.appendChild(a);
        a.style.display = 'none';
        const url: string = window.URL.createObjectURL(blob); // Fix typo here
        a.href = url;
        a.download = 'Export';
        a.click();
        window.URL.revokeObjectURL(url); // Fix typo here
        document.body.removeChild(a);
    }
}
