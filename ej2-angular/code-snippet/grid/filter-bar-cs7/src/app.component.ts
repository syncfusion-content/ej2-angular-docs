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
    selector: 'app-root',
    templateUrl: 'app.template.html',
    providers: [FilterService],
})
export class AppComponent {
    public pageSettings!: Object;
    public orderidrules!: Object;
    public templateOptionsDropDown!: IFilterUI;
    public templateOptionsNumericTextBox!: IFilterUI;
    public templateOptionsDatePicker!: IFilterUI;
    public templateOptionsComboBox!: IFilterUI;
    public templateOptionsMultiSelect!: IFilterUI;
    public shipCountryDistinctData!: object[];
    public shipCityDistinctData!: object[];
    public data!: object[];
    public dropdown!: any;
    public option!: any;
    public numElement!: HTMLInputElement;
    public dateElement!: HTMLInputElement;
    public comboelement!: any;
    public dropInstance: any;
    public multiselectDataSource: any;
    public comboBoxDataSource: any;
    public multiselectelement!: any;
    @ViewChild('grid')
    public grid!: GridComponent;

    public ngOnInit(): void {
        this.data = data;
        this.pageSettings = { pageCount: 5 };
        this.orderidrules = { required: true };

        this.shipCityDistinctData = DataUtil.distinct(data, 'ShipCity', true);
        this.shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true);

        this.templateOptionsDropDown = {
            create: () => {
                this.dropdown = <any>document.createElement('select');
                this.dropdown.id = 'CustomerID';

                this.option = <any>document.createElement('option');
                this.option.value = 'All';
                this.option.innerText = 'All';
                this.dropdown.appendChild(this.option);

                this.data.forEach((item: any) => {
                    const option = document.createElement('option');
                    option.value = item.CustomerID;
                    option.innerText = item.CustomerID;
                    this.dropdown.appendChild(option);
                });
                return this.dropdown;
            },
            write: () => {
                const dropdownlist = new DropDownList({
                    change: dropdownFunction.bind(this),
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
                    change: handleFilterChange.bind(this),
                });
                datePickerObj.appendTo(this.dateElement);
            },
        };
        this.templateOptionsComboBox = {
            create: () => {
                this.comboelement = <any>document.createElement('input');
                this.comboelement.id = 'ShipCity';
                return this.comboelement;
            },
            write: (args: { value: any }) => {
                const comboBox = new ComboBox({
                    value: args.value,
                    placeholder: 'Select a city',
                    change: handleFilterChange.bind(this),
                    dataSource: this.shipCityDistinctData.map(
                        (item: any) => item.ShipCity
                    ),
                });
                comboBox.appendTo(this.comboelement);
            },
        };
        this.templateOptionsMultiSelect = {
            create: () => {
                this.multiselectelement = <any>document.createElement('input');
                this.multiselectelement.id = 'ShipCountry';
                return this.multiselectelement;
            },
            write: (args: { value: any }) => {
                const multiselect = new MultiSelect({
                    value: args.value,
                    placeholder: 'Select a country',
                    change: multiselectFunction.bind(this),
                    dataSource: this.shipCountryDistinctData.map(
                        (item: any) => item.ShipCountry
                    ),
                });
                multiselect.appendTo(this.multiselectelement);
            },
        };
    }
}
function dropdownFunction(this: any, args: { value: string; item: { parentElement: { id: string } } }
) {
    if (args.value !== 'All') {
        this.grid.filterByColumn(args.item.parentElement.id.replace('_options', ''), 'equal', args.value);
    } else {
        this.grid.removeFilteredColsByField(args.item.parentElement.id.replace('_options', ''));
    }
}
function handleFilterChange(this: any, args: { element: Element; value: any }) {
    let targetElement: any = parentsUntil(args.element, 'e-filtertext');
    let columnName: string = targetElement.id.replace('_filterBarcell', '');
    if (args.value) {
        this.grid.filterByColumn(columnName, 'equal', args.value);
    } else {
        this.grid.removeFilteredColsByField(columnName);
    }
}
function multiselectFunction(this: any, args: { value: any }) {
    var selectedValues = args.value;
    if (selectedValues.length === 0) {
        var OrginalData = new DataManager(this.data).executeLocal(new Query());
        this.grid.dataSource = OrginalData;
    } else {
        var predicate: string | any[] | Predicate = [];
        for (let x = 0; x < selectedValues.length; x++) {
            predicate = predicate.length === 0 ? new Predicate('ShipCountry', 'equal', selectedValues[x]) : (predicate as any).or('ShipCountry', 'equal', selectedValues[x]);
        }
        var filteredData = new DataManager(this.data).executeLocal(new Query().where(predicate));
        this.grid.dataSource = filteredData;
    }
}
