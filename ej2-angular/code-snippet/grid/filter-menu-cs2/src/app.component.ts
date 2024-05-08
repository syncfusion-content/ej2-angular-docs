import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, FilterService, PageService} from '@syncfusion/ej2-angular-grids'
import { MultiSelectModule, CheckBoxSelectionService,DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { createElement } from '@syncfusion/ej2-base';
import { FilterSettingsModel, IFilter, Filter,Column } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        MultiSelectModule,
        DropDownListAllModule,
        CheckBoxModule
    ],

providers: [FilterService, PageService,CheckBoxSelectionService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' [filterSettings]='filterOptions' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID'  textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [filter]= 'filter' width=120></e-column>
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
                    args.target.appendChild(flValInput);
                    this.dropInstance = new DropDownList({
                        dataSource: new DataManager(data),
                        fields: { text: 'CustomerID', value: 'CustomerID' },
                        placeholder: 'Select a value',
                        popupHeight: '200px'
                    });
                    (this.dropInstance as DropDownList).appendTo(flValInput);
                },
                write: (args: {
                    column: object, target: Element,
                    filteredValue: string
                }) => {
                    (this.dropInstance as DropDownList).value = (args).filteredValue as string;
                },
                read: (args: { target: Element, column: Column, operator: string, fltrObj: Filter }) => {
                    args.fltrObj.filterByColumn(args.column.field, args.operator, ((this.dropInstance as DropDownList).value as string));

                }
            }
        };
    }
}