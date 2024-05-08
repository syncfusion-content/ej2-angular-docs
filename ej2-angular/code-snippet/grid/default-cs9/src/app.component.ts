import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService, DetailRowService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data, employeeData } from './datasource';
import { GridModel, ParentDetails, GridComponent} from '@syncfusion/ej2-angular-grids';


@Component({
imports: [
        
        GridModule
    ],

providers: [PageService,
        SortService,
        FilterService,
        GroupService,DetailRowService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='parentData' height='265px' [childGrid]='childGrid'>
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
                        <e-column field='FirstName' headerText='FirstName' width=100></e-column>
                        <e-column field='LastName' headerText='Last Name' width=100></e-column>
                        <e-column field='City' headerText='City' width=150></e-column>
                    </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {
    @ViewChild('grid')
    public grid?: GridComponent;
    public parentData?: object[];
    public childGrid: GridModel | GridComponent = {
        queryString: 'ID',
        dataSource: data,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 90 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
            { field: 'ShipCity', headerText: 'Ship City', width: 100 },
            { field: 'ShipName', headerText: 'Ship Name', width: 120 }
        ],
        load() {
            (this.parentDetails as ParentDetails).parentKeyFieldValue = (<{ EmployeeID?: string}>(this.parentDetails as ParentDetails).parentRowData)['EmployeeID'];
        }
    };

    ngOnInit(): void {
        this.parentData = employeeData;
    }
}





