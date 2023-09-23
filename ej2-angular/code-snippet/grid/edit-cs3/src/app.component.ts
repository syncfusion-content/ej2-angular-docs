

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' 
               [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' [validationRules]='orderidrules' 
                    textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' 
                    [validationRules]='customeridrules' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                    editType= 'numericedit' [validationRules]='freightrules' 
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
    public orderidrules?: Object;
    public customeridrules?: Object;
    public freightrules?: Object;
    

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
        this.toolbar = ['Add','Delete', 'Update', 'Cancel'];
        this.orderidrules = { required: true, number: true };
        this.customeridrules = { required: true };
        this.freightrules =  { min:1, max:1000 };
    }
}



