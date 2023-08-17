import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems, GridComponent } from '@syncfusion/ej2-angular-grids';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `<ejs-grid style="padding:70px" #grid id="grid" [dataSource]='data' height='272px' [allowPaging]="true" [enableHover]="false" [editSettings]='editSettings' [toolbar]='toolbar'
    (created)="created($event)" (load)="load($event)">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right'
                     isPrimaryKey='true' [validationRules]='orderIDrules' visible='false' width=120></e-column>
                    <e-column field='CustomerID' [validationRules]='customerIDrules' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' [validationRules]='freightrules' format='C2' textAlign='Right' width=150></e-column>
                    <e-column field='OrderDate' headerText='Order Date' editType='datepickeredit' [validationRules]='orderDaterules' format='yMd' width=150></e-column>
                    <e-column field='ShipCountry' [validationRules]='shipCountryrules' headerText='Ship Country' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    @ViewChild('grid')
    public grid?: GridComponent;
    public orderIDrules?: Object;
    public customerIDrules?: Object;
    public freightrules?: Object;
    public shipCountryrules?: Object;
    public orderDaterules?: Object;
    
    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
        this.toolbar = ['Add', 'Delete', 'Update', 'Cancel'];
        this.orderIDrules = { required: true, number: true };
        this.customerIDrules = { required: true };
        this.freightrules =  { min:1,max:1000 };
        this.shipCountryrules = { required: true };
        this.orderDaterules = { required: true };
    }
    created = (args: any) => {
        (this.grid as any).getContentTable().addEventListener('click', (args: any) => {
            if (((args as any).target as any).classList.contains('e-rowcell')) {
                (this.grid as any).editModule.editCell(parseInt(((args as any).target as any).getAttribute('index')),
                (this.grid as any).getColumnByIndex(parseInt((args as any).target.getAttribute('data-colindex'))).field);
            }
        });
    };
    load = (args: any) => {
        (this.grid as any).element.addEventListener('keydown', (e: any) => {
            var closesttd = (e.target as any).closest('td');
            if (e.keyCode === 39 && !isNullOrUndefined(closesttd.nextSibling)) {
                this.editACell(closesttd.nextSibling);
            }
            if (e.keyCode === 37 && !isNullOrUndefined(closesttd.previousSibling) &&
                !(this.grid as any).getColumnByIndex(
                    parseInt(closesttd.previousSibling.getAttribute('data-colindex'))).isPrimaryKey)
            {
                this.editACell(closesttd.previousSibling);
            }
            if (e.keyCode === 40 && !isNullOrUndefined(closesttd.closest('tr').nextSibling)) {
                this.editACell(
                    closesttd.closest('tr').nextSibling.querySelectorAll('td')[
                    parseInt(closesttd.getAttribute('data-colindex'))]);
            }
            if ( e.keyCode === 38 && !isNullOrUndefined(closesttd.closest('tr').previousSibling)) {
                this.editACell(
                    closesttd.closest('tr').previousSibling.querySelectorAll('td')[
                     parseInt(closesttd.getAttribute('data-colindex'))]);
            }
        });
    };
    public editACell(args: any) {
        (this.grid as any).editModule.editCell(
            parseInt((args as any).getAttribute('index')),
            (this.grid as any).getColumnByIndex(parseInt((args as any).getAttribute('data-colindex'))).field);
    }
}



