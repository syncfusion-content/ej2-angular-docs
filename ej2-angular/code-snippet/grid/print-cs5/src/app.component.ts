import { data, employeeData } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeEventArgs, DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { DetailRowService, GridComponent, GridModel, GridModule, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule,DropDownListAllModule],
    providers: [DetailRowService,ToolbarService],
    standalone: true,
    selector: 'app-root',
    template: `<div class='container'><h4>Select Mode</h4>
        <ejs-dropdownlist style="margin: 14px; width:250px; "  #sample [dataSource]='dropdownData' (change)='onModeChange($event)' popupHeight='220px'></ejs-dropdownlist></div>
        <ejs-grid #grid [dataSource]='parentData' height='230px' [childGrid]='childGrid' [toolbar]='["Print"]' [hierarchyPrintMode]='hierarchyPrintMode'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                <e-column field='FirstName' headerText='FirstName' width=150></e-column>
                <e-column field='LastName' headerText='Last Name' width=150></e-column>
                <e-column field='City' headerText='City' width=150></e-column>
            </e-columns>
        </ejs-grid>
                `
    })
export class AppComponent implements OnInit {

    public parentData?: object[];
    public dropdownData?: string[] = ['All', 'Expanded', 'None'];
    public hierarchyPrintMode: string = 'All';
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
        this.parentData = employeeData;
    }
    onModeChange(args: ChangeEventArgs): void {
        this.hierarchyPrintMode = args.value as string;
    }

}