import { childColumnDataType, childData, employeeData } from './datasource';
import { Component, OnInit } from '@angular/core';
import { DetailDataBoundEventArgs, DetailRowService, FilterService, GridModel, GridModule, GroupService, IGrid, PageService, SortService } from '@syncfusion/ej2-angular-grids';
import { DataManager, Query } from '@syncfusion/ej2-data';

@Component({
    imports: [GridModule ],
    providers: [PageService, SortService, FilterService,GroupService, DetailRowService],
    standalone: true,
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

    detailDataBound({data, childGrid} : DetailDataBoundEventArgs) {
        var empIdValue = (data as childColumnDataType).EmployeeID;
        var childGridData = new DataManager(childData).executeLocal(
            new Query().where('EmployeeID', 'equal', empIdValue, true)
        );
        (childGrid as IGrid).query = new Query();
        (childGrid as IGrid).dataSource = childGridData;
    }
}
