import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { SortService, GroupService, ColumnMenuService, PageService, FilterService } from '@syncfusion/ej2-angular-grids';
import { GroupSettingsModel, FilterSettingsModel, ColumnMenuClickEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

,
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' id='gridcomp' allowPaging='true' allowGrouping='true' allowSorting='true' showColumnMenu='true'
        [groupSettings]='groupOptions' allowFiltering='true' [filterSettings]='filterSettings' [columnMenuItems]='columnMenuItems'
        (columnMenuClick)='columnMenuClick($event)'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='100' textAlign='Right'></e-column>
            <e-column field='CustomerID' headerText='Customer Name' textAlign='Right' width='150'></e-column>
            <e-column field='Freight' headerText='Freight' format='C2' textAlign='Right' width='150'></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='150' ></e-column>
        </e-columns>
    </ejs-grid>
                `,
    providers: [SortService, GroupService, ColumnMenuService, PageService, FilterService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    public groupOptions?: GroupSettingsModel;
    public filterSettings?: FilterSettingsModel;
    public columnMenuItems: object = [
        'SortAscending',
        'SortDescending',
        'Group',
        'Ungroup',
        'Filter',
        {
            text: 'Sub Menu',
            items: [
                { text: 'Option 1', id: 'option1' },
                { text: 'Option 2', id: 'option2' },
                { text: 'Option 3', id: 'option3' },
                {
                    text: 'Nested Sub Menu',
                    items: [
                        { text: 'Nested Option 1', id: 'nestedoption1' },
                        { text: 'Nested Option 2', id: 'nestedoption2' },
                    ],
                },
            ],
        },
    ];
    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { showGroupedColumn: true };
        this.filterSettings = { type: 'CheckBox' };
    }
    public columnMenuClick(args: ColumnMenuClickEventArgs) {
        if (args.item.id === 'option1') {
            // custom function
        }
    }
}



