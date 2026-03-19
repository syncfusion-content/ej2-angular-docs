import { columnDataType, data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerAllModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AutoCompleteModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { EditService, EditSettingsModel, GridModule, PageService, SaveEventArgs, SortService, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
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
        AutoCompleteModule
        ],
    providers: [EditService, ToolbarService, SortService, PageService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'
                (actionBegin)='actionBegin($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true' [validationRules]='orderIDRules'></e-column>
                    <e-column field='CustomerID' headerText='Customer Name' width='120'></e-column>
                    <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'  >
                    </e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width='150'>
                    </e-column>
                    <e-column field='OrderDate' headerText='Order Date' width='140' 
                    format='yMd' editType="DatePickerEdit" textAlign='Right'></e-column>
                    <e-column field='OrderDate' headerText='Order Time' width='140' 
                    format='hh :mm a ' textAlign='Right'>
                        <ng-template #editTemplate let-data>
                        <ejs-timepicker   [(value)]='orderData.OrderDate'></ejs-timepicker >
                       </ng-template>
                        </e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width='150'>
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
        // this customerIDRules = { required: true, minLength: 5 };
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
            (args.data as columnDataType)['OrderDate'] = this.orderData['OrderDate'];
        }
    }
}
