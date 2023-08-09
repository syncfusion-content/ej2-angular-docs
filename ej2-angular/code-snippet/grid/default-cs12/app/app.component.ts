

import { Component, OnInit } from '@angular/core';
import { data, employeeData } from './datasource';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { GridModel, DetailDataBoundEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='parentData' height='265px' [childGrid]='childGrid' (detailDataBound)='detailDataBound($event)'>
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
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
            { field: 'ShipCity', headerText: 'Ship City', width: 100 },
            { field: 'ShipName', headerText: 'Ship Name', width: 120 }
        ],
    };

    ngOnInit(): void {
        this.parentData = employeeData;
    }

    detailDataBound(args: DetailDataBoundEventArgs) {
        var empIdValue = (args as any).data['EmployeeID'];
        var childGridData = new DataManager(data).executeLocal(
            new Query().where('EmployeeID', 'equal', empIdValue, true)
        );
        (args as any).childGrid.query = new Query();
        (args as any).childGrid.dataSource = childGridData;
    }


}
