import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService, DetailRowService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData, childData } from './datasource';
import { RowDataBoundEventArgs, GridModel } from '@syncfusion/ej2-angular-grids';
import { DataManager, Query } from '@syncfusion/ej2-data';

interface Employee {
    EmployeeID: number;
    FirstName: string;
    City: string;
    Country: string;
  }

@Component({
imports: [
        
        ButtonModule,
        GridModule
    ],

providers: [PageService,
                SortService,
                FilterService,
                GroupService,
                DetailRowService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [childGrid]='childGrid' (rowDataBound)="rowDataBound($event)">
                    <e-columns>
                        <e-column field='EmployeeID' headerText='EmployeeID' width='80' ></e-column>
                        <e-column field='FirstName' headerText='First Name'  width='100' ></e-column>
                        <e-column field='City' headerText='City' width='100'></e-column>
                        <e-column field='Country' headerText='Country' width='100'></e-column>
                    </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];
    public childGrid?: GridModel;

    ngOnInit(): void {
        this.data = employeeData;
        this.childGrid = {
            dataSource: childData,
            queryString: 'EmployeeID',
            allowPaging: true,
            columns: [
                { field: 'Order', headerText: 'Order ID', textAlign: 'Right', width: 120 },
                { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
                { field: 'ShipName', headerText: 'Ship Name', width: 150 }
            ]
        };
    }
    public rowDataBound(args: RowDataBoundEventArgs) {
        const parentData: number = (args.data as Employee)['EmployeeID'];
        const childrecord: object[] = new DataManager(childData as JSON[]).
            executeLocal(new Query().where('EmployeeID', 'equal', parentData, true));
        if (childrecord.length === 0) {
            // Here hide which parent row has no child records
            const rowElement = args.row as HTMLTableRowElement;
            const cellElement= rowElement.querySelector('td') as HTMLTableCellElement
            cellElement.innerHTML = ' '; 
            cellElement.className = 'e-customizedexpandcell';
        }
    }
}





