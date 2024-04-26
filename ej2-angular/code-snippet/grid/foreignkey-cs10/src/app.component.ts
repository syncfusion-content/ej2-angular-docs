import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ForeignKeyService } from '@syncfusion/ej2-angular-grids'


import { Component, OnInit } from '@angular/core';
import { ForeignKeyService, EditSettingsModel, ToolbarItems, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { data, employeeData } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [ForeignKeyService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' [height]='315'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='EmployeeID' headerText='Employee Name' width=120
                        foreignKeyValue='FirstName' [dataSource]='employeeData'></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130  ></e-column>
                    </e-columns>
                </ejs-grid>`,
    providers: [ForeignKeyService, EditService, ToolbarService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    public employeeData?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];

    ngOnInit(): void {
        this.data = data;
        this.employeeData = employeeData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
}



