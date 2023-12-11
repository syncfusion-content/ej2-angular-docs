import { Component, OnInit } from '@angular/core';
import { data, columnDataType } from './datasource';
import { EditSettingsModel, ToolbarItems, SaveEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'
                (actionBegin)='actionBegin($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' 
                    isPrimaryKey='true' [validationRules]='orderIDRules'></e-column>
                    <e-column field='CustomerID' headerText='Customer Name' width='120'>
                        <ng-template #editTemplate let-data>
                            <ejs-autocomplete [dataSource]='autoCompleteData' [(value)]='orderData.CustomerID'></ejs-autocomplete>
                        </ng-template>
                    </e-column>
                    <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' 
                        editType='numericedit' [validationRules]='freightRules'></e-column>
                    <e-column field='OrderDate' headerText='Order Date' width='130' editType='datepickeredit' 
                        format='yMd' textAlign='Right'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
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
    public autoCompleteData: { [key: string]: Object }[] = [
        { value: 'VINET', text: 'VINET' },
        { value: 'TOMSP', text: 'TOMSP' },
        { value: 'HANAR', text: 'HANAR' },
        { value: 'VICTE', text: 'VICTE' },
        { value: 'SUPRD', text: 'SUPRD' },
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
            (this.orderData as object) = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            (args.data as columnDataType)['CustomerID'] = this.orderData['CustomerID'];
        }
    }
}

