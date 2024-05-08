import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, FilterService, PageService } from '@syncfusion/ej2-angular-grids'
import { CheckBoxSelectionService, DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        DropDownListAllModule,
    ],

providers: [FilterService, PageService, CheckBoxSelectionService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' [allowPaging]='true' [filterSettings]='filterOption' >
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' [filter]='filterParams' textAlign='Right' ></e-column>
                    <e-column field='CustomerID' headerText='Name'></e-column>
                    <e-column field='ShipName' headerText='ShipName' ></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' ></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public filterParams?: object;
    public filterOption?: FilterSettingsModel = { type: 'Menu' };

    ngOnInit(): void {
        this.data = data;
        this.filterParams = { params: { showSpinButton: false } };
    }
}
