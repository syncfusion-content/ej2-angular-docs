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
import { data } from './datasource';
import { EditEventArgs, EditSettingsModel, GridComponent, IEditCell, RecordDoubleClickEventArgs } from '@syncfusion/ej2-angular-grids';

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
    template: `<ejs-grid #grid [dataSource]='data' [editSettings]='editSettings' height='220' 
               allowPaging='true' (actionComplete)='actionComplete($event)' 
               (recordDoubleClick)='recordDoubleClick($event)'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                        isPrimaryKey='true' width=120 type='number' 
                        [validationRules]='orderIDRules'></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' 
                        [validationRules]='customerIDRules' width=140 type='string'>
                        </e-column>
                        <e-column field='Freight' headerText='Freight' editType='numericedit' 
                        textAlign='Right' width=120 format='c2' 
                        [validationRules]='freightIDRules'></e-column>
                        <e-column field='OrderDate' headerText='Order Date' 
                        textAlign= 'Right' width=140 editType='datetimepickeredit' 
                        [format]='formatOptions' ></e-column>
                        <e-column field='ShipCountry' headerText='Ship Country' 
                        editType='dropdownedit' width=150 [edit]='params'></e-column>
                    </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {
    
    public data?: object[];
    public editSettings?: EditSettingsModel;
    public formatOptions?: object;
    public params?: IEditCell;
    public fieldName: string|any = ''; // Explicitly declare the type
    @ViewChild('grid')
    public grid?: GridComponent;
    public orderIDRules?: object;
    public customerIDRules?: object;
    public freightIDRules?: object;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, 
                            mode: "Normal" };
        this.formatOptions = { type: 'dateTime', format: 'M/d/y hh:mm a' };
        this.orderIDRules = { required: true };
        this.customerIDRules = { required: true, minLength: 5 };
        this.freightIDRules={required: true, min: 1, max:1000 }
        this.params = {
            params: {
               popupHeight: "300px"
            }
        };
    }
    actionComplete(args:EditEventArgs) {
        if (args.requestType === "beginEdit") {
            // focus the column
            ((args.form as HTMLFormElement).elements[(this.grid as GridComponent).element.getAttribute("id") + this.fieldName] as HTMLInputElement).focus();
        }
    }
    recordDoubleClick(args:RecordDoubleClickEventArgs) {
        this.fieldName = (this.grid as GridComponent).getColumnByIndex((args.cellIndex as number)).field;   
    }
}
