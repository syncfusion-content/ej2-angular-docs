import { columnDataType, data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerAllModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AutoCompleteModule, DropDownListModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { EditService, EditSettingsModel, ForeignKeyService, GridModule, PageService, SaveEventArgs, SortService, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { MaskedTextBoxModule, TextBoxModule } from '@syncfusion/ej2-angular-inputs';

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
        DropDownListModule,
        MaskedTextBoxModule
        ],
    providers: [EditService, ToolbarService, SortService, PageService, ForeignKeyService],
    standalone: true,
    selector: 'app-root',
    template: `
        <ejs-grid #grid [dataSource]='data' [allowPaging]='true' height='220px'
            [editSettings]='editSettings' [toolbar]='toolbar' 
            (actionBegin)='actionBegin($event)'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' isPrimaryKey='true' 
                width="100"></e-column>
                <e-column field='CustomerID' headerText='Customer ID' type='string' width="120"></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width="100"></e-column>
                <e-column field='CustomerNumber' headerText='Customer Number' width="140">
                    <ng-template #editTemplate let-data>
                        <ejs-maskedtextbox id="masktextbox" #mask name="CustomerNumber" mask='000-000-0000' 
                        [(value)]="orderData.CustomerNumber"></ejs-maskedtextbox>
                    </ng-template>
                </e-column>
            </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public orderData?: object | any;
    public orderIDRules?: object;
    public customerIDRules?: object;
    public freightRules?: object;

    ngOnInit(): void {
        this.data = data;
        this.orderIDRules = { required: true };
        this.customerIDRules = { required: true, minLength: 5 };
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
            (args.data as columnDataType)['CustomerNumber'] = this.orderData['CustomerNumber'];
        }
    }
}
