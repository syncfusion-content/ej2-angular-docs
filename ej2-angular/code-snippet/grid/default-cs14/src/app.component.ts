import { data, employeeData } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DetailRowService, FilterService, GridComponent, GridModel, GridModule, GroupService, PageService, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule],
    providers: [PageService,DetailRowService, ToolbarService,SortService,FilterService,GroupService],
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
