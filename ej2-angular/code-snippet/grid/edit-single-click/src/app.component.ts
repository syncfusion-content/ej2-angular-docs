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
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons'

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
        CheckBoxModule,
        DropDownListModule
    ],

providers: [EditService, ToolbarService, SortService, PageService],
standalone: true,
    selector: 'app-root',
    template: `
        <ejs-grid [dataSource]="data" [editSettings]="editSettings" [toolbar]="toolbar" height="315px">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" isPrimaryKey="true" textAlign="Right" width="120" [validationRules]='orderIDRules'></e-column>
            <e-column field="CustomerID" headerText="Customer Name" width="120" [validationRules]='customerIDRules'></e-column>
            <e-column field="OrderDate" headerText="Order Date" editType="datepickeredit" format="M/d/yy" textAlign="Right" [validationRules]='dateRules' width="130" type="date"></e-column>
            <e-column field="Freight" headerText="Freight" format="C2" textAlign="Right" width="90" [validationRules]='freightRules'></e-column>
            <e-column field="Verified" headerText="Verified" textAlign="Right" width="90" [validationRules]='verifiedRules'>
              <ng-template #template let-data>
                <ejs-checkbox [(checked)]="data.Verified"></ejs-checkbox>
              </ng-template>
            </e-column>
          </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public orderData?: object|any;
    public orderIDRules?: object;
    public customerIDRules?: object;
    public freightRules?: object;
    public dateRules?: object;
    public verifiedRules?: object;

    ngOnInit(): void {
        this.data = data;
        this.orderIDRules = { required: true };
        this.customerIDRules = { required: true  };
        this.dateRules= { required: true  };
        this.verifiedRules= { required: true  };
        this.freightRules = { required: true, min: 1, max: 1000 };
        this.editSettings = {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
        };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
    
}
