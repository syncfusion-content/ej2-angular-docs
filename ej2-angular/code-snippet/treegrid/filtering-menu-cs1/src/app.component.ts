

import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit ,ViewChild} from '@angular/core';
import { sampleData ,dropdowndata} from './datasource';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { createElement } from '@syncfusion/ej2-base';
import { FilterSettingsModel, IFilter, Filter,Column } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [FilterService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='275' [allowFiltering]='true' [filterSettings]="filterSettings" childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' [filter]= 'filter' textAlign='Left' width=150></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' type='date' format='yMd' width=120></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=120></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public filterSettings?: Object;
    public filter?: IFilter;
    public dropInstance?: DropDownList;

    ngOnInit(): void {
        this.data = sampleData;
        this.filterSettings = {type: 'Menu'};
        this.filter = {
            ui: {
                create: (args: { target: Element, column: object }) => {
                    const flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
                    args.target.appendChild(flValInput);
                    this.dropInstance = new DropDownList({
                        dataSource: new DataManager(dropdowndata),
                        fields: { text: 'taskName', value: 'taskName' },
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