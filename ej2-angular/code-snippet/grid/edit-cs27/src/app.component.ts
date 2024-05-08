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

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditEventArgs, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

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
        ButtonModule
    ],

providers: [EditService, ToolbarService, SortService, PageService],
standalone: true,
    selector: 'app-root',
    template: `<button ejs-button  id="small" (click)="btnClick($event)">Grid is Addable
               </button>
               <div class="control-section"  style="padding-top:20px">
                    <ejs-grid [dataSource]='data' [editSettings]='editSettings' 
                    [toolbar]='toolbar' (actionBegin)="actionBegin($event)" height='240px'>
                        <e-columns>
                            <e-column field='EmployeeID' headerText='Employee ID' textAlign= 'Right'  
                            isPrimaryKey='true'  [validationRules]='orderIDRules' width=100>
                            </e-column>
                            <e-column field='EmployeeName' headerText='Employee Name'
                            [validationRules]='customerNameRules' width=120 format= 'C2'></e-column>
                            <e-column field='Role' headerText='Role' 
                            [validationRules]='roleIDRules' width=120></e-column>
                            <e-column field='EmployeeCountry' headerText='Employee Country' 
                            editType= 'dropdownedit' width=150></e-column>
                        </e-columns>
                    </ejs-grid>
                </div>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public isAddable: boolean = true;
    public orderIDRules?: object;
    public roleIDRules?: object;
    public customerNameRules?: object;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.orderIDRules = { required: true };
        this.roleIDRules = { required: true, minLength: 5 };
        this.customerNameRules={required: true }
    }

    actionBegin(args:EditEventArgs) {
        debugger;
        if (args.requestType == 'beginEdit' && args.rowData as { Role?: string } ['Role'] == 'Admin') {
           args.cancel = true;  
        }
        else if (args.requestType == 'delete' && (args as any).data[0].Role == 'Admin') {
                args.cancel = true;
        }
        else if (args.requestType == 'add') {
            if (!this.isAddable) {
                args.cancel = true;
            }
        }
    }
    btnClick(args:MouseEvent) {
        (args.target as HTMLElement).innerText == 'GRID IS ADDABLE' ? ((args.target as HTMLElement).innerText = 'Grid is Not Addable') : ((args.target as HTMLElement).innerText = 'Grid is Addable');
        this.isAddable = !this.isAddable;
    }
}



