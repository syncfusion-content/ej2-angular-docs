

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
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar'
     (actionComplete)="actionComplete($event)" height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                     editType= 'numericedit' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }

    actionComplete(args: any) {
        if (((args as any).requestType === 'beginEdit' || (args as any).requestType === 'add')) {
            const dialog = (args as any).dialog;
            const CustomerID = 'CustomerID';
            dialog.showCloseIcon = false;
            dialog.height = 400;
            // change the header of the dialog
            dialog.header = (args as any).requestType === 'beginEdit' ? 'Edit Record of ' + (args as any).rowData['CustomerID'] : 'New Customer';
        }
    }
}




