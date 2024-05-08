import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, ExcelExportService, FilterService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild  } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations'

@Component({
imports: [
        
        GridModule
    ],

providers: [ExcelExportService, ToolbarService, FilterService],
standalone: true,
    selector: 'app-root',
    template: `<div class="control-section">
                    <ejs-grid #grid [dataSource]='data' allowPaging='true' 
                    [pageSettings]='pageSettings' [toolbar]='toolbar' 
                    (toolbarClick)='toolbarClick($event)' [allowExcelExport]='true' 
                    [allowPdfExport]='true'>
                        <e-columns>
                            <e-column field='OrderID' headerText='Order ID' width='120' 
                            textAlign='Right' isPrimaryKey='true'></e-column>
                            <e-column field='OrderDate' headerText='Order Date' width='130' 
                            [format]="formatOption" textAlign='Right'></e-column>
                            <e-column field='CustomerID' headerText='Customer ID' width='120'>
                            </e-column>
                            <e-column field='Freight' headerText='Freight' [allowGrouping]="false" 
                            width='120' format='C2' textAlign='Right'></e-column>            
                            <e-column field='ShipCountry' headerText='Ship Country' width='150'>
                            </e-column>
                        </e-columns>
                    </ejs-grid>
                </div>`
})

export class AppComponent  implements OnInit {

    public data?: Object[];
    public toolbar?: string[];
    public pageSettings?: Object;
    public refresh?: Boolean;
    public formatOption?: Object;
    @ViewChild('grid')
    public grid?: GridComponent;

    public ngOnInit(): void {
        this.data = data;
        this.formatOption = { type: 'date', format:"EEE, MMM d, ''yy"};
        this.toolbar = ['ExcelExport'];
        this.pageSettings = { pageCount: 5 };
    }
    toolbarClick(args: ClickEventArgs): void {
         if(args.item.text ==='Excel Export') {
                (this.grid as GridComponent).excelExport();
        }
    }
}



