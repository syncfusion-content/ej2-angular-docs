import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService,DetailRowService, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { data, employeeData, childColumnDataType } from './datasource';
import { AddEventArgs, GridModel, ParentDetails } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService,
        SortService,
        FilterService,
        GroupService,DetailRowService, EditService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='parentData' height='265px' [childGrid]='childGrid'>
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
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 90 },
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', allowEditing: false, width: 80 },
            { field: 'ShipCity', headerText: 'Ship City', width: 100 },
            { field: 'ShipName', headerText: 'Ship Name', width: 120 }
        ],
        actionBegin({ requestType, data }: AddEventArgs) {            
            if (requestType === 'add') {
                 // `parentKeyFieldValue` refers to the queryString field value of the parent record.
                const parentFieldValue = (this.parentDetails as ParentDetails)?.parentKeyFieldValue;

                if (typeof parentFieldValue === 'number') {
                    (data as childColumnDataType).EmployeeID = parentFieldValue;
                }
            }

        }
    };

    ngOnInit(): void {
        this.parentData = employeeData;
    }
}



