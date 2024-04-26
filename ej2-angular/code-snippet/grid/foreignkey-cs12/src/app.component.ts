import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { ForeignKeyService } from '@syncfusion/ej2-angular-grids';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data'

@Component({
imports: [
        
        GridModule
    ],

,
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='EmployeeID' headerText='Employee Name' width=120
                        foreignKeyValue='FirstName' foreignKeyField='EmployeeID' [dataSource]='employeeData'></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130  ></e-column>
                    </e-columns>
                </ejs-grid>`,
    providers: [ForeignKeyService]
})
export class AppComponent implements OnInit {

    public data?: DataManager;
    public employeeData?: DataManager;


    ngOnInit(): void {
        this.data = new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
            adaptor: new ODataV4Adaptor(),
            crossDomain: true,
        });
        this.employeeData = new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Employees/',
            adaptor: new ODataV4Adaptor(),
            crossDomain: true,
        });
    }
}