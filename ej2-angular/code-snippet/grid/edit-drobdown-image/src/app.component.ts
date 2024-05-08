import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, ToolbarService, SortService, PageService, ForeignKeyService } from '@syncfusion/ej2-angular-grids'
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns'

import { Component, ViewChild } from '@angular/core';
import { columnDataType, data, employeeData } from './datasource';
import { GridComponent, EditService, ToolbarService, ToolbarItems, EditSettingsModel, ForeignKeyService, SaveEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        DatePickerAllModule,
        FormsModule,
        TimePickerModule,
        FormsModule,
        TextBoxModule,
        MultiSelectModule,
        AutoCompleteModule,
        DropDownListModule
    ],

providers: [EditService, ToolbarService, SortService, PageService, ForeignKeyService],
standalone: true,
    selector: 'app-root',
    template: `
            <ejs-grid #grid [dataSource]="data" [allowPaging]="true" [pageSettings]="pageSettings" (actionBegin)="actionBegin($event)" [editSettings]="editOptions" [toolbar]="toolbarItems" >
            <e-columns>
                <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right" [validationRules]="orderIDRules" isPrimaryKey="true"></e-column>
                <e-column field="EmployeeID" foreignKeyValue='FirstName' foreignKeyField='EmployeeID' [dataSource]='employeeData' headerText="Employee Name" width="220">
                <ng-template #editTemplate let-data>
                    <ejs-dropdownlist [dataSource]='employeeData' [(ngModel)]="orderData.EmployeeID" [fields]='dropdownFields' [itemTemplate]="itemTemplate">
                    <ng-template #itemTemplate let-data>
                        <div>
                        <img class="empImage" width="50px" [src]="'https://ej2.syncfusion.com/demos/src/grid/images/' + data.EmployeeID + '.png'" alt="employee" />
                        <div class="ename">{{ data.FirstName }}</div>
                        </div>
                    </ng-template>
                    </ejs-dropdownlist>
                </ng-template>
                </e-column>
                <e-column field="Freight" headerText="Freight" width="100" format="C2" textAlign="Right" editType="numericedit"></e-column>
                <e-column field="ShipName" headerText="Ship Name" width="170"></e-column>
                <e-column field="ShipCountry" headerText="Ship Country" width="150" editType="dropdownedit"></e-column>
            </e-columns>
            </ejs-grid>`,
    providers: [EditService, ToolbarService, ForeignKeyService],
})
export class AppComponent {

    public data?: Object[];
    public pageSettings?: Object;
    public toolbarItems?: ToolbarItems[];
    public editOptions?: EditSettingsModel;
    public employeeData?: Object;
    public orderIDRules?: Object;
    public orderData?: object | any;
    public dropdownFields?: Object;

    @ViewChild('grid')
    public grid?: GridComponent;

    public ngOnInit(): void {
        this.data = data;
        this.pageSettings = { pageCount: 5 };
        this.toolbarItems = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.employeeData = employeeData;
        this.editOptions = {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
            mode: 'Normal',
        };
        this.orderIDRules = { required: true };
        this.dropdownFields = { text: 'FirstName', value: 'EmployeeID' };
    }

    actionBegin(args: SaveEventArgs) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.orderData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            (args.data as columnDataType)['EmployeeID'] = this.orderData['EmployeeID'];
        }
    }
}
