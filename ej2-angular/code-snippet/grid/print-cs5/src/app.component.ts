import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'
import { MultiSelectModule, CheckBoxSelectionService, DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data, employeeData } from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns'
import { DetailRowService, GridModel, ToolbarService, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        DropDownListAllModule
    ],

providers: [PageService,
        SortService,
        FilterService,
        GroupService],
standalone: true,
    selector: 'app-root',
    template: `<div class='container'><h4>Select Mode</h4>
    <ejs-dropdownlist style="margin: 14px; width:250px; "  #sample [dataSource]='dropdownData' (change)='onModeChange($event)' popupHeight='220px'></ejs-dropdownlist></div>
    <ejs-grid #grid [dataSource]='parentData' height='265px' [childGrid]='childGrid' [toolbar]='["Print"]' [hierarchyPrintMode]='hierarchyPrintMode'>
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                        <e-column field='FirstName' headerText='FirstName' width=150></e-column>
                        <e-column field='LastName' headerText='Last Name' width=150></e-column>
                        <e-column field='City' headerText='City' width=150></e-column>
                    </e-columns>
                </ejs-grid>
                `,
    providers: [DetailRowService, ToolbarService]
})
export class AppComponent implements OnInit {

    public parentData?: object[];
    public dropdownData?: string[] = ['All', 'Expanded', 'None'];
    public hierarchyPrintMode: string = 'All';
    public childGrid: GridModel = {
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ],
    };
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.parentData = employeeData;
    }
    onModeChange(args: ChangeEventArgs): void {
        this.hierarchyPrintMode = args.value as string;
    }

}