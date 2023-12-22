import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems, IEditCell } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='265px'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' [validationRules]='orderIDRules' isPrimaryKey='true' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120 [validationRules]='customerIDRules'></e-column>
                        <e-column field='Freight' headerText='Freight' [validationRules]='freightRules' textAlign= 'Right'
                        editType= 'numericedit'  width=120></e-column>
                        <e-column field='ShipCity' headerText='Ship City' editType= 'dropdownedit' [validationRules]='shipCityRules' width=150>
                        </e-column>
                        <e-column field="OrderDate" headerText="Order Date"  width="150" format='MM-dd-yyyy' 
                        editType= 'datepickeredit' [edit]='datepickerparams'  [validationRules]='orderDateRules' ></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public datepickerparams?: IEditCell;
    public orderIDRules?: Object;
    public customerIDRules?: Object;
    public freightRules?: Object;
    public shipCityRules?: Object;
    public orderDateRules?: Object;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.orderIDRules = { required: true, number: true };
        this.customerIDRules = { required: true };
        this.freightRules = { required: true, min: 1, max: 1000 };
        this.shipCityRules = { required: true };
        this.orderDateRules = { required: true };
        this.datepickerparams = {
            params: {
                showClearButton: false,
                showTodayButton: false
            }
        };
    }
}
