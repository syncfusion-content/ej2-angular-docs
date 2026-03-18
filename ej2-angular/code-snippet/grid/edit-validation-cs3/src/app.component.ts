import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckBoxComponent, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerAllModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AutoCompleteModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { EditEventArgs, EditService, EditSettingsModel, GridComponent, GridModule, PageService, SortService, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

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
        CheckBoxModule
    ],
    providers: [EditService, ToolbarService, SortService, PageService],
    standalone: true,
    selector: 'app-root',
    template: `<div>
                <ejs-checkbox #checkbox label="Enable/Disable validation rule for customerID coulumn" [checked]="true"></ejs-checkbox>
            </div>
            <ejs-grid #grid [dataSource]="data" [editSettings]="editSettings" [toolbar]="toolbar" height="273"
            (actionComplete)="actionComplete($event)">
                <e-columns>
                   <e-column field="OrderID" headerText="Order ID" textAlign="Right" isPrimaryKey="true" [validationRules]="orderIDRules" width="100"></e-column>
                   <e-column field="CustomerID" headerText="Customer ID" width="120" ></e-column>
                   <e-column field="Freight" headerText="Freight" textAlign="Right" [validationRules]="freightRules" editType="numericedit" width="120" format="C2"></e-column>
                   <e-column field="ShipCountry" headerText="Ship Country" editType="dropdownedit" width="150">
                   </e-column>
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
    @ViewChild('grid') grid?: GridComponent;
    @ViewChild('checkbox') checkbox?: CheckBoxComponent;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
            mode: 'Normal',
        };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.orderIDRules = { required: true };
        this.freightRules = { min: 1, max: 1000 };
    }

    actionComplete(args: EditEventArgs) {
        const formObj = (this.grid as GridComponent).editModule.formObj;
        const customerIDRules = {
            required: true,
            minLength: [5, 'Customer ID should have a minimum length of 5 characters'],
        };

        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            if ((this.checkbox as CheckBoxComponent).checked) {
                // Add the custom validation rule
                formObj.addRules('CustomerID', customerIDRules);
            }
        }
    }
}