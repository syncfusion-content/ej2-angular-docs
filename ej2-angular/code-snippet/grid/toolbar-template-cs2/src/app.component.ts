import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService,  PdfExportService, ExcelExportService  } from '@syncfusion/ej2-angular-grids'
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'




import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        ToolbarModule,
        ButtonModule
    ],

providers: [ToolbarService, PdfExportService, ExcelExportService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='200px'  [allowExcelExport]="true" [allowPdfExport]="true">
                <ng-template #toolbarTemplate let-data>
                    <div id='toolbar'>
                        <button id="excelButton" ejs-button cssClass="e-outline" (click)="exportAction($event)">Excel Export</button>
                        <button id="pdfButton" ejs-button cssClass="e-outline" (click)="exportAction($event)">Pdf Export</button>
                        <button id="printButton" ejs-button cssClass="e-outline" (click)="exportAction($event)">Print</button>
                    </div>
                </ng-template>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    exportAction(args: MouseEvent) {
        if ((args.currentTarget  as HTMLElement).id === 'excelButton') {
            (this.grid as GridComponent).excelExport();
        }
        else if ((args.currentTarget as HTMLElement).id === 'pdfButton') {
            (this.grid as GridComponent).pdfExport();
        }
        else {
            (this.grid as GridComponent).print();
        }
    }
}



