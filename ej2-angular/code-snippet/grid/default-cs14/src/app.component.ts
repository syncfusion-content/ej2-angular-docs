import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data, employeeData } from './datasource';
import { DetailRowService, GridModel, ToolbarService, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService,
        SortService,
        FilterService,
        GroupService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='pData' height='265px' [childGrid]='childGrid' [toolbar]='["Print"]' hierarchyPrintMode='All'>
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

    public pData?: object[];
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
        this.pData = employeeData;
    }

}



