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

import { Component, ViewChild } from '@angular/core';
import { GridComponent, NewRowPosition } from '@syncfusion/ej2-angular-grids';
import { data} from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

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
    template: `
        <div style="display: flex">
            <label style="padding: 30px 17px 0 0;"> Select new row position:</label>
            <ejs-dropdownlist  style="padding: 26px 0 0 0" index="0" width="100" 
            [dataSource]="positionData" (change)="changePosition($event)">
            </ejs-dropdownlist>
        </div>
        <div style="padding-top:20px">
            <ejs-grid #batchgrid id='Batchgrid' [dataSource]='data' allowPaging='true' [editSettings]="editSettings" [pageSettings]='pageSettings' [toolbar]='toolbar' >
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true' [validationRules]='orderIDRules'></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width='120' [validationRules]='customerIDRules'></e-column>
                    <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' [validationRules]='freightRules'></e-column>
                    <e-column field='OrderDate' headerText='Order Date' width='130' format='yMd' editType='datepickeredit' textAlign='Right'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' [edit]='editparams'></e-column>
                </e-columns>
            </ejs-grid>
        </div>`
})
export class AppComponent {

    public data?: Object[];
    @ViewChild('batchgrid')
     public grid?: GridComponent;
    public editSettings?: Object;
    public toolbar?: string[];
    public orderIDRules?: Object;
    public customerIDRules?: Object;
    public freightRules?: Object;
    public editparams?: Object;
    public pageSettings?: Object;
    public positionData: { text: string; value: string }[] = [
        { text: 'Top', value: 'Top' },
        { text: 'Bottom', value: 'Bottom' },
      ];
    public ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Delete', 'Update', 'Cancel'];
        this.orderIDRules = { required: true, number: true };
        this.customerIDRules = { required: true };
        this.freightRules =  { required: true };
        this.editparams = { params: { popupHeight: '300px' } };
        this.pageSettings = {pageCount: 5};
    } 
    public changePosition(args: ChangeEventArgs): void {
       (this.grid as GridComponent).editSettings.newRowPosition= (args.value as NewRowPosition);
    }
}
