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
import { columnDataType, data } from './datasource';
import {
    EditSettingsModel,
    ToolbarItems,
    SaveEventArgs,
} from '@syncfusion/ej2-angular-grids';
import { Query } from '@syncfusion/ej2-data';

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
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'
        (actionBegin)='actionBegin($event)'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' 
                isPrimaryKey='true' [validationRules]='orderIDRules'></e-column>
            <e-column field='CustomerID' headerText='Customer Name' width='120'></e-column>
            <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' 
                editType='numericedit' [validationRules]='freightRules'></e-column>
            <e-column field='OrderDate' headerText='Order Date' width='130' editType='datepickeredit' 
                format='yMd' textAlign='Right'></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width=300>
                <ng-template #editTemplate let-data3>
                    <ejs-dropdownlist [dataSource]='data' 
                    [fields]='fields' [query]='query'[(value)]="orderData.ShipCountry">
                    <ng-template #headerTemplate="" let-data2="">
                    <table><tr><th>EmployeeID</th><th>ShipCountry</th></tr></table>
                    </ng-template>
                        <ng-template #itemTemplate let-data1>
                        <div class="e-grid">
                        <table class="e-table">
                            <tbody>
                                <tr>
                                    <td class="e-rowcell">{{ data1.EmployeeID }}</td>
                                    <td class="e-rowcell">{{ data1.ShipCountry }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                        </ng-template>
                    </ejs-dropdownlist>
                </ng-template>
            </e-column>
        </e-columns>
    </ejs-grid>`,
})
export class AppComponent implements OnInit {
    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public orderData?: object | any;
    public orderIDRules?: object;
    public freightRules?: object;
    public fields = { text: 'ShipCountry' };
    public query: Query = new Query()
        .from('data')
        .select(['EmployeeID', 'ShipCountry', 'OrderID'])
        .take(6);

    ngOnInit(): void {
        this.data = data;
        this.orderIDRules = { required: true };
        this.freightRules = { required: true, min: 1, max: 1000 };
        this.editSettings = {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
        };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }

    actionBegin(args: SaveEventArgs) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.orderData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            (args.data as columnDataType)['ShipCountry'] = this.orderData['ShipCountry'];
        }
    }
}
