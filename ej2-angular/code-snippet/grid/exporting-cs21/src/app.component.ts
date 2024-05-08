import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, PdfExportService } from '@syncfusion/ej2-angular-grids'




import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ToolbarService, PdfExportService, ExcelExportService } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { Query } from '@syncfusion/ej2-data';

@Component({
imports: [
        
        GridModule
    ],

providers: [PdfExportService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [allowPaging]='true'
    [toolbar]='toolbarOptions' height='272px' [allowPdfExport]='true' [allowExcelExport]='true'
    (excelExportComplete)='excelExportComplete()' (pdfExportComplete)='pdfExportComplete()'
    (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [visible]='false' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipCountry' headerText='ShipCountry' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [ToolbarService, PdfExportService, ExcelExportService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('grid') public grid?: GridComponent;
    public queryClone?: any;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport', 'ExcelExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if ((args as any).item.id === 'Grid_pdfexport') {
            this.queryClone = (this.grid as any).query;
            (this.grid as any).query = new Query().addParams('recordcount', '12');
            (this.grid as any).pdfExport();
        } else if ((args as any).item.id === 'Grid_excelexport') {
            this.queryClone = (this.grid as any).query;
            (this.grid as any).query = new Query().addParams('recordcount', '12');
            (this.grid as any).excelExport();
        }
    }

    pdfExportComplete(): void {
        (this.grid as any).query = (this as any).queryClone;
    }
    excelExportComplete(): void {
        (this.grid as any).query = (this as any).queryClone;
    }
}



