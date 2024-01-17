import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems, CellEditArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' 
               [toolbar]='toolbar' (cellEdit)="cellEdit($event)" height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' [validationRules]='orderIDRules' 
                    textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [validationRules]='customerIDRules' 
                    width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                    editType= 'numericedit' [validationRules]='freightRules' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' 
                    width=150></e-column>
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

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowAdding: true, allowEditing: true,allowDeleting:true, mode: 'Batch' };
        this.toolbar = ['Add','Delete', 'Update', 'Cancel'];
        this.orderIDRules = { required: true };
        this.customerIDRules = { required: true };
        this.freightRules =  { min:1, max:1000 };
    }
    cellEdit(args: CellEditArgs) {
        if (args.value === 'France') {
            args.cancel = true;
        }
    }
}
