

import { Component, OnInit } from '@angular/core';
import { data, employeeData } from './datasource';
import { AddEventArgs, GridModel } from '@syncfusion/ej2-angular-grids';

@Component({
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
        actionBegin(args: AddEventArgs) {
            if ((args as any).requestType === 'add') {
                // `parentKeyFieldValue` refers to the queryString field value of the parent record.
                ((args as any).data as any)['EmployeeID'] = (this as any).parentDetails.parentKeyFieldValue; // 'this' refers to the instance of the child grid.
            }
        }
    };

    ngOnInit(): void {
        this.parentData = employeeData;
    }
}



