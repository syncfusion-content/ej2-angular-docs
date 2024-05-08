import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, ExcelExportService, FilterService } from '@syncfusion/ej2-angular-grids'
import { SwitchModule } from '@syncfusion/ej2-angular-buttons'

import { Component, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ExcelExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { SwitchComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
imports: [
        
        GridModule,
        SwitchModule
    ],

providers: [ExcelExportService, ToolbarService, FilterService],
standalone: true,
    selector: 'app-root',
    template: `
            <div>
            <label style="padding: 10px 10px">
             Include or exclude hidden columns
            </label>
            <ejs-switch #switch id="switch"></ejs-switch>
            </div>
            <ejs-grid #grid id='Grid' [dataSource]='data' [allowPaging]='true' 
            [toolbar]='toolbarOptions' height='272px' [allowExcelExport]='true' 
            (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                    width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100>
                    </e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=130>
                    </e-column>
                    <e-column field='ShipCity' headerText='Ship City' [visible]='false'  
                    width=120></e-column>
                    <e-column field='ShipCountry' headerText='ShipCountry' width=100>
                    </e-column>
                </e-columns>
            </ejs-grid>`
})
export class AppComponent {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('grid') public grid?: GridComponent;
    @ViewChild('switch')
    public switch?: SwitchComponent;

    public ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['ExcelExport'];
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') {
            // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            const excelExportProperties: ExcelExportProperties = {
                includeHiddenColumn: (this.switch as SwitchComponent).checked,
            };
            (this.grid as GridComponent).excelExport(excelExportProperties);
        }
        
    }
}