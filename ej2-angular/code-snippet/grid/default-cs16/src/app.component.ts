import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, DetailRowService } from '@syncfusion/ej2-angular-grids'




import { Component, OnInit } from '@angular/core';
import { data, employeeData, ParentDetailsDataType } from './datasource';
import { GridModel, ParentDetails } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService,
        SortService,
        FilterService,
        DetailRowService],
standalone: true,
    selector: 'app-root',
    template: `
    <div style="margin-left:100px;">
      <p style="color:black; font-size: large;" id="message"></p>
    </div>
    <ejs-grid #grid [dataSource]='parentData' height='315px' [childGrid]='childGrid'>
        <e-columns>
            <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
            <e-column field='FirstName' headerText='FirstName' width=100></e-column>
            <e-column field='LastName' headerText='Last Name' width=100></e-column>
            <e-column field='City' headerText='City' width=120></e-column>
        </e-columns>
    </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public parentData?: object[];
    public message?: string;
    public parentDetails?: ParentDetails[];
    public childGrid: GridModel = {
        dataSource: data,
        queryString: 'EmployeeID',
        created: this.created,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
            { field: 'ShipCity', headerText: 'Ship City', width: 100 },
            { field: 'ShipName', headerText: 'Ship Name', width: 120 }
        ],
    };

    created() {
        var parentRowData = (this.parentDetails as ParentDetails).parentRowData; // 'this' refers to the instance of the child grid.
        (document.getElementById('message') as HTMLElement).innerHTML = `EmployeeID: ${(parentRowData as ParentDetailsDataType).EmployeeID}, FirstName: ${(parentRowData as ParentDetailsDataType).FirstName}, Title: ${(parentRowData as ParentDetailsDataType).Title}`; 
    }

    ngOnInit(): void {
        this.parentData = employeeData;
    }
}



