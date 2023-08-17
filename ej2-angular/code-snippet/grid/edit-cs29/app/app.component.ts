import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' 
               [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                    isPrimaryKey='true' [validationRules]='orderIDRules' width=100>
                    </e-column>
                    <e-column field='CustomerID' [validationRules]='customerIDRules' 
                    headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                    editType= 'numericedit' [validationRules]='freightIDRules' 
                    width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' 
                    editType= 'dropdownedit' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public orderIDRules?: object;
    public customerIDRules?: object;
    public freightIDRules?: object;
    ngOnInit(): void {
        this.data = data;
        this.editSettings = { showDeleteConfirmDialog: true, allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.orderIDRules = { required: true };
        this.customerIDRules = { required: true, minLength: 5 };
        this.freightIDRules={required: true, min: 1, max:1000 }
    }
}



