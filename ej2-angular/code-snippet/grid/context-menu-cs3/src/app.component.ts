import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { ContextMenuService, PageService, SortService, ExcelExportService, PdfExportService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ContextMenuItem, PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
imports: [
        
        GridModule
    ],

providers: [ContextMenuService, PageService, SortService, ExcelExportService, PdfExportService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' #grid id="Grid" [allowPaging]='true' [pageSettings]='pageSettings' [allowExcelExport]='true' [allowPdfExport]='true' 
                [allowSorting]='true' [contextMenuItems]="contextMenuItems" (created)="created()">
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' width='90' textAlign="Right" isPrimaryKey='true'></e-column>
                        <e-column field='CustomerID' headerText='Customer Name' width='100'></e-column>
                        <e-column field='ShipCountry' headerText='Ship Country' width='100'></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width='100'></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public values?: any;
    public data?: object[];
    public contextMenuItems?: ContextMenuItem[];
    public pageSettings?: PageSettingsModel;
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.contextMenuItems = [
            'SortAscending',
            'SortDescending',
            'FirstPage',
            'PrevPage',
            'LastPage',
            'NextPage',
            'PdfExport',
            'ExcelExport',
        ];
        this.pageSettings = { pageSize: 8 };
    }

    ngAfterViewInit(): void {
        const gridElement = document.getElementById('Grid');
            (gridElement as HTMLElement).onclick = (event: MouseEvent) => {
                this.values = event;
                (this.grid as GridComponent).contextMenuModule.contextMenu.open(
                    this.values.pageY + pageYOffset,
                    this.values.pageX + pageXOffset
                );
        }
        
    }

    created(): void {
        (this.grid as GridComponent).contextMenuModule.contextMenu.beforeOpen = (
            args: BeforeOpenCloseMenuEventArgs
          ) => {
            if (args.event instanceof MouseEvent && args.event.which === 3) {
              args.cancel = true;
            }
            args.event = this.values;
            (this.grid as any).contextMenuModule.contextMenuBeforeOpen(
                args
              );
          };
    }
}



