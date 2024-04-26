import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, PdfExportService, DetailRowService } from '@syncfusion/ej2-angular-grids'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data, employeeData } from './datasource';
import {
    GridComponent,
    ToolbarItems,
    PdfExportProperties,
    GridModel,
    
} from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
imports: [
        
        GridModule,
        DropDownListAllModule
    ],

providers: [PdfExportService, ToolbarService, DetailRowService],
standalone: true,
    selector: 'app-root',
    template: `
  <div style="display: flex">
    <label style="padding: 10px 10px 26px 0"> Change the hierarchy export mode: </label>
    <ejs-dropdownlist
    style="margin-top:5px"
    #dropDownList
    index="0"
    width="150"
    [dataSource]="ddlData"></ejs-dropdownlist>
    </div>
    <ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' [childGrid]='childGrid'
    height='220px' [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)'>
        <e-columns>
            <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=90></e-column>
            <e-column field='FirstName' headerText='FirstName' width=100></e-column>
            <e-column field='LastName' headerText='Last Name' width=100></e-column>
            <e-column field='City' headerText='City' width=100></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('grid') public grid?: GridComponent;
    @ViewChild('dropDownList')
    public dropDownList?: DropDownListComponent;
    public ddlData: object[] = [
        { text: 'Expanded', value: 'Expanded' },
        { text: 'All', value: 'All' },
        { text: 'None', value: 'None' },
    ];

    public childGrid: GridModel = {
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
            {
                field: 'OrderID',
                headerText: 'Order ID',
                textAlign: 'Right',
                width: 90,
            },
            { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
            { field: 'ShipCity', headerText: 'Ship City', width: 100 },
            { field: 'ShipName', headerText: 'Ship Name', width: 110 },
        ],
    };

    ngOnInit(): void {
        this.data = employeeData;
        this.toolbarOptions = ['PdfExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') {
            // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            const exportProperties: PdfExportProperties = {
                hierarchyExportMode: (this.dropDownList as DropDownListComponent).value as PdfExportProperties["hierarchyExportMode"],
            };
            (this.grid as GridComponent).pdfExport(exportProperties);
        }
    }
}
















