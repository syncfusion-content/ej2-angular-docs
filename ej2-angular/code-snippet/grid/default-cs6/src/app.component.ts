import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService,DetailRowService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data, employeeData } from './datasource';
import {  GridModel, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        ButtonModule
    ],

providers: [PageService,
        SortService,
        FilterService,
        GroupService,
        DetailRowService],
standalone: true,
    selector: 'app-root',
    template: `<button ejs-button (click)='expand()'>Expand All</button>
                <button ejs-button (click)='collapse()'>Collapse All</button>
                <ejs-grid #grid [dataSource]='parentData' height='265px' [childGrid]='childGrid'>
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
                        <e-column field='FirstName' headerText='FirstName' width=100></e-column>
                        <e-column field='LastName' headerText='Last Name' width=100></e-column>
                        <e-column field='City' headerText='City' width=100></e-column>
                    </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public parentData?: object[];
    public childGrid: GridModel = {
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
            { field: 'ShipCity', headerText: 'Ship City', width: 100 },
            { field: 'ShipName', headerText: 'Ship Name', width: 120 }
        ],
    };
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.parentData = employeeData;
    }

    expand(): void {
        (this.grid as GridComponent).detailRowModule.expandAll();
    }

    collapse(): void {
        (this.grid as GridComponent).detailRowModule.collapseAll();
    }

}



