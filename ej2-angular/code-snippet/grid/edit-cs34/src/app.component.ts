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
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

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

providers: [EditService, ToolbarService, SortService, PageService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' 
               height='273'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right'
                    isPrimaryKey='true' [validationRules]='orderIDRules' width=100>
                    </e-column>
                    <e-column field='CustomerID' headerText='Customer ID' 
                    [validationRules]='customerIDRules' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                    editType= 'numericedit' [validationRules]='freightRules' width=120 format= 'C2'>
                    </e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' 
                    editType= 'dropdownedit' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public orderIDRules?: object;
    public customerIDRules?: object;
    public freightRules?: Object;

    public customFn: (args: { [key: string]: string }) => boolean = (args: { [key: string]: string }) => {
        return args['value'].length >= 5;
    }

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.orderIDRules = { required: true };
        this.customerIDRules = { required: true, minLength: [this.customFn, 'Need atleast 5 letters'] };
        this.freightRules = { required: true, min:1, max:1000 };

    }
}



