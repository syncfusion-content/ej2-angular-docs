import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, ExcelExportService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
imports: [
        
        GridModule
    ],

providers: [ExcelExportService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data'
               [toolbar]='toolbarOptions' height='272px'  [allowExcelExport]='true'
                (excelExportComplete)='excelExportComplete()' 
                (toolbarClick)='toolbarClick($event)'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                        width='90'></e-column>
                        <e-column field='ProductName' headerText='Product Name' width='100'>
                        </e-column>
                        <e-column field='ProductID' headerText='Product ID' textAlign='Right' 
                        width='80'></e-column>
                        <e-column field='CustomerName' headerText='Customer Name' width='120'>
                        </e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('grid')  public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['ExcelExport'];
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') {
            (this.grid as GridComponent).showSpinner();
            (this.grid as GridComponent).excelExport();
        }
    }
    excelExportComplete(): void {
        (this.grid as GridComponent).hideSpinner();
    }
}




