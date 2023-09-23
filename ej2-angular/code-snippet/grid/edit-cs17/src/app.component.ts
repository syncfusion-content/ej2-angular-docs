

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems, SaveEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'
                (actionBegin)='actionBegin($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                     editType= 'numericedit' width=120 format= 'C2'></e-column>
                    <e-column field='OrderDate' headerText='Order Date' type= 'date' format= 'yMd' width=150>
                        <ng-template #editTemplate let-data>
                            <ejs-datepicker id="OrderDate" placeholder="Order Date"
                            [(ngModel)]="orderData.OrderDate" floatLabelType='Never'></ejs-datepicker>
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
    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
    actionBegin(args: SaveEventArgs) {
        if ((args as any).requestType === 'beginEdit' || (args as any).requestType === 'add') {
            this.orderData = Object.assign({}, (args as any).rowData);
        }
        if ((args as any).requestType === 'save') {
            // cast string to integer value.
            const OrderDate = 'OrderDate';
            (args as any).data[OrderDate] = (this.orderData as any)[OrderDate];
        }
    }
}



