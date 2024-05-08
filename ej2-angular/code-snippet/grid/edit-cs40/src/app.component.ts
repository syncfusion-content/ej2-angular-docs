import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, ToolbarService, SortService, PageService } from '@syncfusion/ej2-angular-grids'
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns'

import { Component, OnInit } from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager } from '@syncfusion/ej2-data';
import { cascadeData } from './datasource';
import { EditSettingsModel, ToolbarItems, IEditCell } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        DatePickerAllModule,
        FormsModule,
        TimePickerModule,
        FormsModule,
        TextBoxModule,
        MultiSelectModule,
        AutoCompleteModule
    ],

providers: [EditService, ToolbarService, SortService, PageService],
standalone: true,
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
    public stateObj?: DropDownList | undefined;
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
                this.countryElem = document.createElement('input');
                return this.countryElem;
            },
            read: () => {
                return (this.countryObj as DropDownList).text;
            },
            destroy: () => {
                (this.countryObj as DropDownList).destroy();
            },
            write: () => {
                this.countryObj = new DropDownList({
                    dataSource: new DataManager(this.country),
                    fields: { value: 'countryId', text: 'countryName' },
                    change: () => {
                        (this.stateObj as DropDownList).enabled = true;
                        const tempQuery: Query = new Query().where('countryId', 'equal', (this.countryObj as  DropDownList).value);
                        (this.stateObj as DropDownList).query = tempQuery;
                        ((this.stateObj as DropDownList).text as string) = '';                        
                        (this.stateObj as DropDownList).dataBind();
                    },
                    placeholder: 'Select a country',
                    floatLabelType: 'Never'
                });
                this.countryObj.appendTo(this.countryElem);
            }
        };
        this.stateParams = {
            create: () => {
                this.stateElem = document.createElement('input');
                return this.stateElem;
            },
            read: () => {
                return (this.stateObj as DropDownList).text;
            },
            destroy: () => {
                (this.stateObj as DropDownList).destroy();
            },
            write: () => {
                this.stateObj = new DropDownList({
                    dataSource: new DataManager(this.state),
                    fields: { value: 'stateId', text: 'stateName' },
                    enabled: false,
                    placeholder: 'Select a state',
                    floatLabelType: 'Never'
                });
                this.stateObj.appendTo(this.stateElem);
            }
        };
    }
}



