import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, ExcelExportService } from '@syncfusion/ej2-angular-grids'
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs'

import { Component,  ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ExcelExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
imports: [
        
        GridModule,
        TextBoxModule
    ],

providers: [ExcelExportService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `
            <div style="padding: 0px 0 20px 0">
            <label style="padding: 30px 17px 0 0">Enter file name: </label>
            <ejs-textbox #textbox placeholder="Enter file name" width="120">
            </ejs-textbox>
            </div>
            <ejs-grid #grid id='Grid' [dataSource]='data' [allowPaging]='true' 
            [toolbar]='toolbarOptions' height='220px' [allowPaging]='true' 
            [allowExcelExport]='true' (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                    width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100>
                    </e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100>
                    </e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=120>
                    </e-column>
                </e-columns>
            </ejs-grid>`
})
export class AppComponent {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('grid') public grid?: GridComponent;
    @ViewChild('textbox') public textbox?: TextBoxComponent;

    public ngOnInit(): void  {
        this.data = data;
        this.toolbarOptions = ['ExcelExport'];
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') {
            const excelExportProperties: ExcelExportProperties = {
                fileName: (this.textbox as TextBoxComponent).value !== "" ? (this.textbox as TextBoxComponent).value + '.xlsx' : 'new.xlsx'
            };
            (this.grid as GridComponent).excelExport(excelExportProperties);
        }
    }
}