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
import { columnType, data } from './datasource';
import { EditSettingsModel, ToolbarItems, SaveEventArgs } from '@syncfusion/ej2-angular-grids';

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
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px' (actionBegin)='actionBegin($event)' >
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' 
                        isPrimaryKey='true' [validationRules]='orderIDRules'></e-column>
                    <e-column field='CustomerID' headerText='Customer Name' width='120'></e-column>
                    <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' 
                        editType='numericedit' [validationRules]='freightRules'></e-column>
                    <e-column field='OrderDate' headerText='Order Date' width='130' editType='datepickeredit' 
                        format='yMd' textAlign='Right'></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width='150'>
                    <ng-template #editTemplate let-data>
                        <ejs-multiselect [dataSource]='multiselectDatasource' 
                        [(value)]="orderData.ShipCity"  [fields]='fields'></ejs-multiselect>
                    </ng-template>
                    </e-column>
                </e-columns>
            </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public orderData: { ShipCity: string[] } = { ShipCity: [] };
    public orderIDRules?: object;
    public customerIDRules?: object;
    public freightRules?: object;
    public multiselectDatasource = [
        { value: 'Reims', text: 'Reims' },
        { value: 'Münster', text: 'Münster' },
        { value: 'Rio de Janeiro', text: 'Rio de Janeiro' },
        { value: 'Lyon', text: 'Lyon' },
        { value: 'Charleroi', text: 'Charleroi' }
    ];
    public fields = { value: 'value', text: 'text' };

    ngOnInit(): void {
        this.data = data;
        this.orderIDRules = { required: true };
        this.customerIDRules = { required: true, minLength: 5 };
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
            (this.orderData as Object)= Object.assign({}, args.rowData);
           
            (this.orderData as columnDataType)['ShipCity'] = (this.orderData as columnDataType)['ShipCity']? ((this.orderData as columnDataType)['ShipCity'] as any).split(','):[];
            
        } 
        if (args.requestType === 'save') {
            (args.data as columnType)['ShipCity'] = (this.orderData as columnDataType)['ShipCity'].join(',');  
          }

    }
  
}

export interface columnDataType{
  ShipCity: string[];
}
