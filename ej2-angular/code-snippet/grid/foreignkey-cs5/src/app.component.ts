import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ForeignKeyService } from '@syncfusion/ej2-angular-grids'


import { Component, OnInit } from '@angular/core';
import { ForeignKeyService, EditService, EditSettingsModel, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { orderDetails, customerData, employeeData } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [ForeignKeyService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='orderDetails' [height]='270' [editSettings]='editoption' [toolbar]='toolbar'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer Name' width=170
                        foreignKeyValue='ContactName' [dataSource]='customerData'></e-column>
                        <e-column field='Freight' headerText='Freight' editType= 'numericedit' textAlign='Right' width=130 format= 'C2'></e-column>
                        <e-column field='EmployeeID' headerText='Ship City' width=150
                        foreignKeyValue='City' [dataSource]='employeeData'></e-column>
                        <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
                    </e-columns>
                </ejs-grid>`,
    providers: [ForeignKeyService, EditService, ToolbarService]
})
export class AppComponent implements OnInit {

    public orderDetails?: object[];
    public customerData?: object[];
    public employeeData?: object[];
    public editoption: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
    toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

    ngOnInit(): void {
        this.orderDetails = orderDetails;
        this.customerData = customerData;
        this.employeeData = employeeData;
    }
}
