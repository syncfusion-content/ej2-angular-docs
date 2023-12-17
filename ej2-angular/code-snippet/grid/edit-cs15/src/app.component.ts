

import { Component, OnInit, ViewChild } from '@angular/core';
import { EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-grids';
import { MultiSelect } from '@syncfusion/ej2-angular-dropdowns';
import { purchaseData } from './datasource';
import { Column, EditSettingsModel, PageSettingsModel, ToolbarItems, IEditCell, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [allowPaging]='true' [editSettings]='editSettings' [pageSettings]='pageOptions' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' isPrimaryKey='true' [validationRules]="orderidrules" width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' type='string' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' type='number' textAlign= 'Right'
                     editType= 'numericedit' format= 'C2' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' type='string' [edit]='dsParams' width=180></e-column>
                </e-columns>
               </ejs-grid>`,
    providers: [ToolbarService, EditService, PageService],
})

export class AppComponent implements OnInit {
    public data?: object[];
    @ViewChild('grid') public grid?: GridComponent;
    public editSettings?: EditSettingsModel;
    public pageOptions?: PageSettingsModel;
    public toolbar?: ToolbarItems[];
    public ddElem?: HTMLElement;
    public multiSelectObj?: MultiSelect;
    public multiselectDatasource = [
        { ShipCity: 'Reims', Id: '1' },
        { ShipCity: 'Münster', Id: '2' },
        { ShipCity: 'Rio de Janeiro', Id: '3' },
        { ShipCity: 'Lyon', Id: '4' },
        { ShipCity: 'Charleroi', Id: '5' }
    ];
    public dsParams?: IEditCell;
    public orderidrules?: any;

    public createShipCityFn = () => {
        (this as any).ddElem = document.createElement('input');
        return (this as any).ddElem;
    };
    public readShipCityFn = () => {
        return this.multiSelectObj?.value.join(',');
    };
    public destroyShipCityFn = () => {
        this.multiSelectObj?.destroy();
    };
    public writeShipCityFn = (args: any) => {
        let multiSelectVal = (args as any).rowData[(args as any).column.field]
            ? (args as any).rowData[(args as any).column.field].split(',')
            : [];
        this.multiSelectObj = new MultiSelect({
            value: multiSelectVal,
            dataSource: (this as any).multiselectDatasource,
            fields: { value: 'ShipCity', text: 'ShipCity' },
            floatLabelType: 'Never',
            mode: 'Box'
        });
        this.multiSelectObj?.appendTo((this as any).ddElem);
    };

    ngOnInit(): void {
        this.data = purchaseData;
        (this as any).editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        (this as any).pageOptions = { pageSizes: true, pageSize: 8 };
        this.dsParams = {
            create: this.createShipCityFn,
            read: this.readShipCityFn,
            destroy: this.destroyShipCityFn,
            write: this.writeShipCityFn
        };
    }
}



