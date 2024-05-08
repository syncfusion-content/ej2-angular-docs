import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, ToolbarService, SortService, PageService } from '@syncfusion/ej2-angular-grids'
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns'

import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeDetails } from './datasource';
import { EditSettingsModel, ToolbarItems, IEditCell, GridComponent, EditEventArgs } from '@syncfusion/ej2-angular-grids';
import { Query } from '@syncfusion/ej2-data';
import { ChangeEventArgs } from '@syncfusion/ej2-inputs';

let jobRole: { [key: string]: Object }[] = [
    { role: 'TeamLead' },
    { role: 'Manager' },
    { role: 'Engineer' },
    { role: 'Sales' },
    { role: 'Support' },
];

let salaryDetails: { [key: string]: Object }[] = [
    { salary: 6000 },
    { salary: 17000 },
    { salary: 18000 },
    { salary: 26000 },
    { salary: 25000 },
    { salary: 40000 },
    { salary: 35000 },
    { salary: 55000 },
    { salary: 65000 },

];


@Component({
imports: [
        
        GridModule,
        DatePickerAllModule,
        FormsModule,
        TimePickerModule,
        FormsModule,
        TextBoxModule,
        MultiSelectModule,
        AutoCompleteModule
    ],

providers: [EditService, ToolbarService, SortService, PageService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [editSettings]='editSettings' 
               [toolbar]='toolbar'(load)="load()" (actionBegin)="actionBegin($event)" >
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right'
                     isPrimaryKey='true' width=120></e-column>
                    <e-column field='Role' headerText='Role' width=120 
                     editType= 'dropdownedit' [edit]='roleParams'></e-column>
                    <e-column field='Salary' headerText='Salary' textAlign= 'Right'
                     editType= 'dropdownedit' width=160 [edit]='salaryParams'></e-column>
                    <e-column field='Address' headerText='Address' [validationRules]='addressRules' 
                    width=160></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    public rules?: object;
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public roleParams?: IEditCell;
    public salaryParams?: IEditCell;
    public addressRules?: object;
    @ViewChild('grid')
    public grid?: GridComponent;

    public ngOnInit(): void {
        window.role = '';
        this.addressRules = { required: true };
        this.data = employeeDetails;
        this.editSettings = {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
        };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.roleParams = {
            params: {
                query: new Query(),
                dataSource: jobRole,
                fields: { value: 'role', text: 'role' },
                allowFiltering: true,
                change: this.valChange.bind(this)

            }
        };
        this.salaryParams = {
            params: {
                query: new Query(),
                dataSource: salaryDetails,
                fields: { value: 'salary', text: 'salary' },
                allowFiltering: true,

            }
        };
    }

    public valChange(args: ChangeEventArgs) {

        window.role = (args.value?.toString() as string); // Explicitly cast args.value to string
        const formObj = (this.grid as GridComponent).editModule.formObj.element['ej2_instances'][0];

        switch ( window.role) {

            case 'Sales':
                formObj.rules['Salary']['required'][1] = 'Please enter valid Sales Salary >=5000 and< 15000';

                break;

            case 'Support':
                formObj.rules['Salary']['required'][1] = 'Please enter valid Support Salary >=15000 and < 19000';

                break;

            case 'Engineer':
                formObj.rules['Salary']['required'][1] = 'Please enter valid Engineer Salary between >=25000 and < 30000';

                break;

            case 'TeamLead':
                formObj.rules['Salary']['required'][1] = 'Please enter valid TeamLead Salary >= 30000 and < 50000';

                break;

            case 'Manager':
                formObj.rules['Salary']['required'][1] = 'Please enter valid Manager Salary >=50000 and < 70000';

                break;
        }
    }

    public customFn(args: { value: number }): boolean {
        const formObj = (this.grid as GridComponent).editModule.formObj.element['ej2_instances'][0];
        switch (window.role ) {

            case 'Sales':
                if ((args.value >= 5000) && (args.value < 15000))
                    return true;
                else
                    formObj.rules['Salary']['required'][1] = 'Please enter valid Sales Salary >=5000 and< 15000';

                break;

            case 'Support':
                if ((args.value >= 15000 && args.value < 19000))
                    return true;
                else
                    formObj.rules['Salary']['required'][1] = 'Please enter valid Support Salary >=15000 and < 19000';

                break;

            case 'Engineer':
                if ((args.value >= 25000 && args.value < 30000))
                    return true;
                else
                    formObj.rules['Salary']['required'][1] = 'Please enter valid Engineer Salary between >=25000 and < 30000';

                break;

            case 'TeamLead':
                if ((args.value >= 30000) && (args.value < 50000))
                    return true;
                else
                    formObj.rules['Salary']['required'][1] = 'Please enter valid TeamLead Salary >= 30000 and < 50000';

                break;

            case 'Manager':
                if ((args.value >= 50000) && (args.value < 70000))
                    return true;
                else
                    formObj.rules['Salary']['required'][1] = 'Please enter valid Manager Salary >=50000 and < 70000';

                break;

        }
        return false;
    }
    load(): void {
        let column = (this.grid as GridComponent).getColumnByField('Salary');
        column.validationRules = {
            required: [this.customFn.bind(this), 'Please enter valid salary'],
        };
    }
    actionBegin(args: EditEventArgs) {
        
        window.role = args.rowData as { Role: string }['Role'];
    }

}

declare global {
    interface Window {
        role: string;
    }
}