import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SortService, GroupService, ColumnMenuService, PageService, FilterService } from '@syncfusion/ej2-angular-grids';
import { ColumnMenuItemModel, ColumnMenuOpenEventArgs, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

,
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' id="gridcomp" allowPaging='true' allowSorting='true' showColumnMenu='true'
     [filterSettings]='filterSettings' (columnMenuOpen)='columnMenuOpen($event)' [allowFiltering]='true' [allowGrouping]='true'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='140' textAlign="Right"></e-column>
            <e-column field='CustomerID' headerText='Customer Name' showInColumnChooser='false'></e-column>
            <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right"></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' [visible]='false' width='150'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
        </e-columns>
    </ejs-grid>
                `,
    providers: [SortService, ColumnMenuService, PageService, GroupService, ColumnMenuService, FilterService]
})
export class AppComponent implements OnInit {

    @ViewChild('grid')
    public grid?: GridComponent;
    public data?: object[];
    public filterSettings: FilterSettingsModel = { type: 'Menu' };
    public columnMenuOpen(args: ColumnMenuOpenEventArgs) {
        for (const item of (args as any).items) {
            if (item.text === 'Filter' && (args as any).column.field === 'OrderID') {
                (item as ColumnMenuItemModel).hide = true;
            }
        }
    }

    ngOnInit(): void {
        this.data = data;
    }
}



