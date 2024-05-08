import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, ExcelExportService, FilterService } from '@syncfusion/ej2-angular-grids'

import { Component, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, GroupService, PageService, GroupSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
imports: [
        
        GridModule
    ],

providers: [ExcelExportService, ToolbarService, FilterService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' 
               height='220px' [allowGrouping]='true' [groupSettings]='groupOptions' 
               [allowPaging]='true' [allowExcelExport]='true' 
               (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                    width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150>
                    </e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [PageService, GroupService]
})
export class AppComponent {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('grid') public grid?: GridComponent;
    public groupOptions?: GroupSettingsModel;

    public ngOnInit(): void  {
        this.data = data;
        this.toolbarOptions = ['ExcelExport'];
        this.groupOptions = { columns: ['CustomerID', 'ShipCity'] };
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') {
             // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
            (this.grid as GridComponent).excelExport();
        }
    }
}



