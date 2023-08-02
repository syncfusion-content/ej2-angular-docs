

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { createElement } from '@syncfusion/ej2-base';
import { FilterSettingsModel, IFilter, Filter } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' [filterSettings]='filterOptions' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' [filter]= 'filter' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public filterOptions?: FilterSettingsModel;
    public filter?: IFilter;
    public dropInstance?: DropDownList;

    ngOnInit(): void {
        this.data = data;
        this.filterOptions = {
            type: 'Menu'
        };
        this.filter = {
            ui: {
                create: (args: { target: Element, column: object }) => {
                    const flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
                    (args as any).target.appendChild(flValInput);
                    this.dropInstance = new DropDownList({
                        dataSource: new DataManager(data),
                        fields: { text: 'OrderID', value: 'OrderID' },
                        placeholder: 'Select a value',
                        popupHeight: '200px'
                    });
                    this.dropInstance.appendTo(flValInput);
                },
                write: (args: {
                    column: object, target: Element, parent: any,
                    filteredValue: number | string
                }) => {
                    (this.dropInstance as DropDownList).value = (args as any).filteredValue;
                },
                read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
                    (args as any).fltrObj.filterByColumn((args as any).column.field, (args as any).operator, this.dropInstance?.value);

                }
            }
        };
    }
}



