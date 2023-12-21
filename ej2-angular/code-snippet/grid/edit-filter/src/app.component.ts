import { Component, OnInit } from '@angular/core';
import { cascadeData } from './datasource';
import { EditSettingsModel, ToolbarItems, IEditCell } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' [validationRules]='orderIDRules' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID'  [validationRules]='customerIDRules' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' [validationRules]='shipCountryRules'
                     [edit]='countryParams' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public countryParams?: IEditCell;
    public orderIDRules?: Object;
    public customerIDRules?: Object;
    public shipCountryRules?: Object;

    ngOnInit(): void {
        this.data = cascadeData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.orderIDRules = { required: true, number: true };
        this.customerIDRules = { required: true };
        this.shipCountryRules = { required: true };
        this.countryParams = {
            params: {
                allowFiltering: true,
               
            }
        };
    }
}
