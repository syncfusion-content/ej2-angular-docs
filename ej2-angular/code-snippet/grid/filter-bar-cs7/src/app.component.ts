import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, FilterService, PageService} from '@syncfusion/ej2-angular-grids'
import { MultiSelectModule, CheckBoxSelectionService,DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons'

import { Component, ViewChild } from '@angular/core';
import { data } from './datasource';
import {
    FilterService,
    GridComponent,
    IFilterUI,
    parentsUntil,
} from '@syncfusion/ej2-angular-grids';
import {
    ComboBox,
    DropDownList,
    MultiSelect,
} from '@syncfusion/ej2-angular-dropdowns';
import { DataManager, DataUtil, Predicate, Query } from '@syncfusion/ej2-data';
import { DatePicker } from '@syncfusion/ej2-angular-calendars';
import { NumericTextBox } from '@syncfusion/ej2-angular-inputs';

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
    templateUrl: 'app.template.html',
    providers: [FilterService],
})
export class AppComponent {
    public pageSettings?: Object;
    public orderidrules?: Object;
    public templateOptionsDropDown?: IFilterUI;
    public templateOptionsNumericTextBox?: IFilterUI;
    public templateOptionsDatePicker?: IFilterUI;
    public templateOptionsComboBox?: IFilterUI;
    public templateOptionsMultiSelect?: IFilterUI;
    public shipCountryDistinctData?: object[];
    public shipCityDistinctData?: object[];
    public data?: object[];
    public dropdown?: HTMLElement;
    public numElement?: HTMLInputElement;
    public dateElement?: HTMLInputElement;
    public comboelement?: HTMLElement;
    public multiselectelement?: HTMLElement;
    @ViewChild('grid')
    public grid?: GridComponent;
    public handleFilterChange(args: { element: Element; value: string }) {
        let targetElement = parentsUntil(args.element, 'e-filtertext');
        let columnName: string = targetElement.id.replace('_filterBarcell', '');
        if (args.value) {
            (this.grid as GridComponent).filterByColumn(columnName, 'equal', args.value);
        } else {
            (this.grid as GridComponent).removeFilteredColsByField(columnName);
        }
    } public multiselectFunction(args: { value: string }) {
        var selectedValues = args.value;
        if (selectedValues.length === 0) {
            var OrginalData = new DataManager(this.data).executeLocal(new Query());
            (this.grid as GridComponent).dataSource = OrginalData;
        } else {
            var predicate: Predicate | null = null;
            for (let x = 0; x < selectedValues.length; x++) {
                if (predicate === null) {
                    predicate = new Predicate('ShipCountry', 'equal', selectedValues[x]);
                } else {
                    predicate = predicate.or('ShipCountry', 'equal', selectedValues[x]);
                }
            }
            var filteredData = new DataManager(this.data).executeLocal(new Query().where(predicate as Predicate));
            (this.grid as GridComponent).dataSource = filteredData;
        }
    }
    public dropdownFunction(args: { value: string; item: { parentElement: { id: string } } }
    ) {
        if (args.value !== 'All') {
            (this.grid as GridComponent).filterByColumn(args.item.parentElement.id.replace('_options', ''), 'equal', args.value);
        } else {
            (this.grid as GridComponent).removeFilteredColsByField(args.item.parentElement.id.replace('_options', ''));
        }
    }

    public ngOnInit(): void {
        this.data = data;
        this.pageSettings = { pageCount: 5 };
        this.orderidrules = { required: true };

        this.shipCityDistinctData = DataUtil.distinct(data, 'ShipCity', true);
        this.shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true);

        this.templateOptionsDropDown = {
            create: () => {
                this.dropdown = document.createElement('select');
                this.dropdown.id = 'CustomerID';

                var option = document.createElement('option');
                option.value = 'All';
                option.innerText = 'All';
                this.dropdown.appendChild(option);

                (this.data as Object[]).forEach((item: object) => {
                    const option = document.createElement('option');
                    option.value = (item as ItemType).CustomerID;
                    option.innerText = (item as ItemType).CustomerID;
                    (this.dropdown as HTMLElement).appendChild(option);
                });
                return this.dropdown;
            },
            write: () => {
                const dropdownlist = new DropDownList({
                    change: this.dropdownFunction.bind(this),
                });
                dropdownlist.appendTo(this.dropdown);
            },
        };
        this.templateOptionsNumericTextBox = {
            create: () => {
                this.numElement = document.createElement('input');
                return this.numElement;
            },
            write: () => {
                const numericTextBox = new NumericTextBox({
                    format: '00.00',
                    value: 10,
                });
                numericTextBox.appendTo(this.numElement);
            },
        };
        this.templateOptionsDatePicker = {
            create: () => {
                this.dateElement = document.createElement('input');
                return this.dateElement;
            },
            write: (args: { column: { field: string | number | Date } }) => {
                const datePickerObj = new DatePicker({
                    value: new Date(args.column.field),
                    change: this.handleFilterChange.bind(this),
                });
                datePickerObj.appendTo(this.dateElement);
            },
        };
        this.templateOptionsComboBox = {
            create: () => {
                this.comboelement = document.createElement('input');
                this.comboelement.id = 'ShipCity';
                return this.comboelement;
            },
            write: (args: { value: string }) => {
                const comboBox = new ComboBox({
                    value: args.value,
                    placeholder: 'Select a city',
                    change: this.handleFilterChange.bind(this),
                    dataSource: (this.shipCityDistinctData as object[]).map(
                        (item: object) => (item as ItemType).ShipCity
                    ),
                });
                comboBox.appendTo(this.comboelement);
            },
        };
        this.templateOptionsMultiSelect = {
            create: () => {
                this.multiselectelement = document.createElement('input');
                this.multiselectelement.id = 'ShipCountry';
                return this.multiselectelement;
            },
            write: (args: { value: string[] | number[] | boolean[] | undefined }) => {
                const multiselect = new MultiSelect({
                    value: args.value,
                    placeholder: 'Select a country',
                    change: this.multiselectFunction.bind(this),
                    dataSource: (this.shipCountryDistinctData as object[]).map(
                        (item: object) => (item as ItemType).ShipCountry

                    ),
                });
                multiselect.appendTo(this.multiselectelement);
            },
        };
    }
}

interface ItemType {
    CustomerID: string,
    ShipCity: string,
    ShipCountry: string
}