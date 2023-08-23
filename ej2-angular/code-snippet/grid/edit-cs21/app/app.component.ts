import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar'
               (actionBegin)="actionBegin($event)" height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' [validationRules]='orderIDRules' 
                    textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [validationRules]='customerIDRules' 
                    width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit'
                    width=120 [validationRules]='freightrules' format= 'C2'></e-column>
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
    public freightrules?: Object;
    

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, mode: 'Normal' };
        this.toolbar = ['Edit', 'Update', 'Cancel'];
        (this as any).orderIDRules = { required: true };
        (this as any).customerIDRules = { required: true };
        this.freightrules =  { min:1,max:1000 };
    }
    actionBegin(args: any) {
        if ((args as any).requestType === 'beginEdit' && (args as any).rowData.ShipCountry === 'France') {
            (args as any).cancel = true;
        }
    }
}



