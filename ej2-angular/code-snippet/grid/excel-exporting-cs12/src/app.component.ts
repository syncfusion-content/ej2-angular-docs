import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, ExcelExportService, FilterService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data, employeeData } from './datasource';
import { GridComponent, ToolbarItems, ExcelExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
imports: [
        
        GridModule
    ],

providers: [ExcelExportService, ToolbarService, FilterService],
standalone: true,
    selector: 'app-root',
    template: `<p><b>First Grid:</b></p>
               <ejs-grid #grid1 id='FirstGrid' [dataSource]='firstData' 
               [toolbar]='toolbarOptions' [allowExcelExport]='true'
               (toolbarClick)='toolbarClick($event)' [exportGrids]='exportGrids'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                        width=120></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=150>
                        </e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                    </e-columns>
                    </ejs-grid>
                    <p><b>Second Grid:</b></p>
                    <ejs-grid #grid2 id='SecondGrid' [dataSource]='secondData' 
                    [allowExcelExport]='true'>
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' 
                        width=120></e-column>
                        <e-column field='FirstName' headerText='FirstName' width=150></e-column>
                        <e-column field='LastName' headerText='Last Name' width=150></e-column>
                        <e-column field='City' headerText='City' width=150></e-column>
                    </e-columns>
                </ejs-grid> `
})
export class AppComponent implements OnInit {

    public firstData?: object[];
    public secondData?: object[];
    public toolbarOptions?: ToolbarItems[];
    public exportGrids?: string[];
    @ViewChild('grid1') public firstGrid?: GridComponent;
    @ViewChild('grid2') public secondGrid?: GridComponent;

    ngOnInit(): void {
        this.firstData = data.slice(0, 5);
        this.secondData = employeeData.slice(0, 5);
        this.toolbarOptions = ['ExcelExport'];
        this.exportGrids = ['FirstGrid', 'SecondGrid']
    }
    toolbarClick = (args: ClickEventArgs) => {
        if (args.item.id === 'FirstGrid_excelexport') { 
            // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
            const appendExcelExportProperties: ExcelExportProperties = {
                multipleExport: { type: 'AppendToSheet', blankRows: 2 }
            };
            (this.firstGrid as GridComponent).excelExport(appendExcelExportProperties, true);
        }
    }
}