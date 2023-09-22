import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid style="padding:70px" [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                    [validationRules]='orderIDrules' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [validationRules]='customerIDrules' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                     editType= 'numericedit' width=120 format= 'C2' [validationRules]='freightrules'></e-column>
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
        this.freightrules =  { min:1, max:1000 };
    }
}



