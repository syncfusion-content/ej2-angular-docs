import { data, employeeData } from './datasource';
import { Component, OnInit } from '@angular/core';
import { DetailRowService, GridModel, GridModule, PageService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule],
    providers: [PageService, DetailRowService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='parentData' height='315px' [childGrid]='childGrid'>
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

    ngOnInit(): void {
        this.parentData = employeeData;
    }
}
