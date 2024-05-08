import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, PdfExportService } from '@syncfusion/ej2-angular-grids'




import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { Query } from '@syncfusion/ej2-data';

@Component({
imports: [
        
        GridModule
    ],

providers: [PdfExportService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `
    <div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
    <ejs-grid #grid id='Grid' [dataSource]='data' [allowPaging]='true'
    [toolbar]='toolbarOptions' height='272px' [allowPdfExport]='true' [allowExcelExport]='true'
    (pdfExportComplete)='pdfExportComplete()' (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [visible]='false' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipCountry' headerText='ShipCountry' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('grid') public grid?: GridComponent;
    public queryClone?: Query;
    public message?: string;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') {
            this.queryClone = (this.grid as GridComponent).query;
            (this.grid as GridComponent).query = new Query().addParams('recordcount', '15');
            this.message =
                'Key: ' +
                (this.grid as GridComponent).query.params[0].key +
                ' and Value: ' +
                (this.grid as GridComponent).query.params[0].value + ' on ' + args.item.text;
            (this.grid as GridComponent).pdfExport();
        }
    }

    pdfExportComplete(): void {
        (this.grid as GridComponent).query = this.queryClone as Query;
    }

}



