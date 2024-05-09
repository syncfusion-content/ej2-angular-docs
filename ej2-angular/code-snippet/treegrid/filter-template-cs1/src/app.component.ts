
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService, PageService } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleGridData } from './datasource';
import {IFilterUI,parentsUntil } from '@syncfusion/ej2-angular-grids';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
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
    TreeGridAllModule,
    ],
    providers: [FilterService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='275' [treeColumnIndex]='1'  [allowFiltering]='true' idMapping='taskID' parentIdMapping= "parentID" >
                    <e-columns>
                        <e-column field="taskID" headerText="Task ID" width="120" textAlign="Right" isPrimaryKey="true"></e-column>
                        <e-column field="taskName" headerText="Task Name" width="120" [filterBarTemplate]="templateOptionsDropDown"></e-column>
                        <e-column field="duration" headerText="Duration" width="100" format="C2" [filterBarTemplate]="templateOptionsNumericTextBox"></e-column>
                        <e-column field="startDate" headerText="Start Date" width="120" format="yMd" type="date" [filterBarTemplate]="templateOptionsDatePicker"></e-column>
                        <e-column field="description" headerText="Task Description" width="120" [filterBarTemplate]="templateOptionsComboBox"></e-column>
                        <e-column field="category" headerText="Category" width="120" [filterBarTemplate]="templateOptionsMultiSelect"></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {
    @ViewChild('treegrid') 
    public treegrid?: TreeGridComponent;

    public data?: Object[];

    public templateOptionsDropDown?: IFilterUI;
    public templateOptionsNumericTextBox?: IFilterUI;
    public templateOptionsDatePicker?: IFilterUI;
    public templateOptionsComboBox?: IFilterUI;
    public templateOptionsMultiSelect?: IFilterUI;
    public categoryDistinctData?: object[];
    public descriptionDistinctData?: object[];
    
    public dropdown?: HTMLElement;
    public numElement?: HTMLInputElement;
    public dateElement?: HTMLInputElement;
    public comboelement?: HTMLElement;
    public multiselectelement?: HTMLElement;
     public handleFilterChange(args: { element: Element; value: string }) {
        let targetElement = parentsUntil(args.element, 'e-filtertext');
        let columnName: string = targetElement.id.replace('_filterBarcell', '');
        if (args.value) {
            (this.treegrid as TreeGridComponent).filterByColumn(columnName, 'equal', args.value);
        } else {
            (this.treegrid as TreeGridComponent).removeFilteredColsByField(columnName);
        }
    } public multiselectFunction(args: { value: string }) {
        var selectedValues = args.value;
        if (selectedValues.length === 0) {
            var OrginalData = new DataManager(this.data).executeLocal(new Query());
            (this.treegrid as TreeGridComponent).dataSource = OrginalData;
        } else {
            var predicate: Predicate | null = null;
            for (let x = 0; x < selectedValues.length; x++) {
                if (predicate === null) {
                    predicate = new Predicate('category', 'equal', selectedValues[x]);
                } else {
                    predicate = predicate.or('category', 'equal', selectedValues[x]);
                }
            }
            var filteredData = new DataManager(this.data).executeLocal(new Query().where(predicate as Predicate));
            (this.treegrid as TreeGridComponent).dataSource = filteredData;
        }
    }
    public dropdownFunction(args: { value: string; item: { parentElement: { id: string } } }
    ) {
        if (args.value !== 'All') {
            (this.treegrid as TreeGridComponent).filterByColumn(args.item.parentElement.id.replace('_options', ''), 'equal', args.value);
        } else {
            (this.treegrid as TreeGridComponent).removeFilteredColsByField(args.item.parentElement.id.replace('_options', ''));
        }
    }

    public ngOnInit(): void {
        this.data = sampleGridData;
        
        this.descriptionDistinctData = DataUtil.distinct(this.data, 'description', true);
        this.categoryDistinctData = DataUtil.distinct(this.data, 'category', true);

        this.templateOptionsDropDown = {
            create: () => {
                this.dropdown = document.createElement('select');
                this.dropdown.id = 'taskName';

                var option = document.createElement('option');
                option.value = 'All';
                option.innerText = 'All';
                this.dropdown.appendChild(option);

                (this.data as Object[]).forEach((item: object) => {
                    const option = document.createElement('option');
                    option.value = (item as ItemType).taskName;
                    option.innerText = (item as ItemType).taskName;
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
                this.comboelement.id = 'description';
                return this.comboelement;
            },
            write: (args: { value: string }) => {
                const comboBox = new ComboBox({
                    value: args.value,
                    placeholder: 'Select a city',
                    change: this.handleFilterChange.bind(this),
                    dataSource: (this.descriptionDistinctData as object[]).map(
                        (item: object) => (item as ItemType).description
                    ),
                });
                comboBox.appendTo(this.comboelement);
            },
        };
        this.templateOptionsMultiSelect = {
            create: () => {
                this.multiselectelement = document.createElement('input');
                this.multiselectelement.id = 'category';
                return this.multiselectelement;
            },
            write: (args: { value: string[] | number[] | boolean[] | undefined }) => {
                const multiselect = new MultiSelect({
                    value: args.value,
                    placeholder: 'Select a country',
                    change: this.multiselectFunction.bind(this),
                    dataSource: (this.categoryDistinctData as object[]).map(
                        (item: object) => (item as ItemType).category

                    ),
                });
                multiselect.appendTo(this.multiselectelement);
            },
        };
    }
}

interface ItemType {
    taskName: string,
    description: string,
    category: string
}