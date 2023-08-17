

import { L10n } from '@syncfusion/ej2-base';
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

L10n.load({
    'en-US': {
        grid: {
            'SaveButton': 'Submit',
            'CancelButton': 'Discard'
        }
    }
});

@Component({
    selector: 'app-root',
    template: `<ejs-grid style="padding:70px" [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar'
               (actionComplete)="actionComplete($event)" height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' [validationRules]='orderIDrules' 
                    textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' [validationRules]='customerIDrules' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' [validationRules]='freightrules' headerText='Freight' textAlign= 'Right'
                     editType= 'numericedit' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public orderIDrules?: Object;
    public customerIDrules?: Object;
    public freightrules?: Object;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.orderIDrules = { required: true, number: true };
        this.customerIDrules = { required: true };
        this.freightrules =  { min:1,max:1000 };
    }
    actionComplete(args: any) {
        if (((args as any).requestType === 'beginEdit' || (args as any).requestType === 'add')) {
            const dialog = (args as any).dialog;
            dialog.showCloseIcon = false;
            dialog.height = 300;
            dialog.width=300;
            // change the header of the dialog
            dialog.header = (args as any).requestType === 'beginEdit' ? 'Edit Record of ' + (args as any).rowData['CustomerID'] : 'New Customer';
        }
    }
}




