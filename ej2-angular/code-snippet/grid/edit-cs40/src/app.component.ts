

import { Component, OnInit } from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager } from '@syncfusion/ej2-data';
import { cascadeData } from './datasource';
import { EditSettingsModel, ToolbarItems, IEditCell } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit'
                     [edit]='countryParams' width=150></e-column>
                    <e-column field='ShipState' headerText='Ship State' editType= 'dropdownedit' [edit]='stateParams' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public countryParams?: IEditCell;
    public stateParams?: IEditCell;

    public countryElem?: HTMLElement;
    public countryObj?: DropDownList;

    public stateElem?: HTMLElement;
    public stateObj?: DropDownList;

    public country: object[] = [
        { countryName: 'United States', countryId: '1' },
        { countryName: 'Australia', countryId: '2' }
    ];
    public state: object[] = [
        { stateName: 'New York', countryId: '1', stateId: '101' },
        { stateName: 'Virginia ', countryId: '1', stateId: '102' },
        { stateName: 'Washington', countryId: '1', stateId: '103' },
        { stateName: 'Queensland', countryId: '2', stateId: '104' },
        { stateName: 'Tasmania ', countryId: '2', stateId: '105' },
        { stateName: 'Victoria', countryId: '2', stateId: '106' }
    ];

    ngOnInit(): void {
        this.data = cascadeData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.countryParams = {
            create: () => {
                (this as any).countryElem = document.createElement('input');
                return (this as any).countryElem;
            },
            read: () => {
                return (this as any).countryObj.text;
            },
            destroy: () => {
                (this as any).countryObj.destroy();
            },
            write: () => {
                (this as any).countryObj = new DropDownList({
                    dataSource: new DataManager(this.country),
                    fields: { value: 'countryId', text: 'countryName' },
                    change: () => {
                        (this as any).stateObj.enabled = true;
                        const tempQuery: Query = new Query().where('countryId', 'equal', (this as any).countryObj.value);
                        (this as any).stateObj.query = tempQuery;
                        (this as any).stateObj.text = null;
                        (this as any).stateObj.dataBind();
                    },
                    placeholder: 'Select a country',
                    floatLabelType: 'Never'
                });
                (this as any).countryObj.appendTo((this as any).countryElem);
            }
        };
        this.stateParams = {
            create: () => {
                (this as any).stateElem = document.createElement('input');
                return (this as any).stateElem;
            },
            read: () => {
                return (this as any).stateObj.text;
            },
            destroy: () => {
                (this as any).stateObj.destroy();
            },
            write: () => {
                (this as any).stateObj = new DropDownList({
                    dataSource: new DataManager(this.state),
                    fields: { value: 'stateId', text: 'stateName' },
                    enabled: false,
                    placeholder: 'Select a state',
                    floatLabelType: 'Never'
                });
                (this as any).stateObj.appendTo((this as any).stateElem);
            }
        };
    }
}



