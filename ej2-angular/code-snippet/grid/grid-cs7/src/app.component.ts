import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'




import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { SortService, GroupService, ColumnMenuService, PageService, FilterService } from '@syncfusion/ej2-angular-grids';
import { GroupSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

,
standalone: true,
    selector: 'app-root',
    template: `<p id='message'>{{ message }}</p><ejs-grid [dataSource]='data' id="gridcomp" allowPaging='true' allowGrouping='true' allowSorting='true' showColumnMenu='true'
               [groupSettings]='groupOptions' allowFiltering='true' [filterSettings]='filterSettings'
         (columnMenuOpen)="columnMenuOpen()" (columnMenuClick)="columnMenuClick()">
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='140' textAlign="Right"></e-column>
            <e-column field='CustomerID' headerText='Customer Name'></e-column>
            <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right"></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' [visible]='false' width='150'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
        </e-columns>
    </ejs-grid>`,
    providers: [SortService, GroupService, ColumnMenuService, PageService, FilterService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    public groupOptions?: GroupSettingsModel;
    public filterSettings?: FilterSettingsModel;
    public message?: string;
    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { showGroupedColumn: true };
        this.filterSettings = { type: 'CheckBox' };
    }
    columnMenuOpen() {
        this.message = `columnMenuOpen event triggered`;
    }
    columnMenuClick() {
        this.message = `columnMenuClick event triggered`;
    }
}