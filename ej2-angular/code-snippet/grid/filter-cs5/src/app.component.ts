import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { ButtonModule,SwitchModule } from '@syncfusion/ej2-angular-buttons'
import { PageService, FilterService } from '@syncfusion/ej2-angular-grids'
import {  DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { FilterSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        ButtonModule,
        SwitchModule,
        DropDownListAllModule
    ],

providers: [PageService,
                FilterService],
standalone: true,
    selector: 'app-root',
    template: `<div class='container'>
    <label for="unchecked"> Enable Case Sensitivity </label>
    <ejs-switch id="unchecked" (change)="onToggleCaseSensitive()"></ejs-switch>
</div>
<ejs-grid [dataSource]='data' #grid [allowFiltering]='true' [filterSettings]='filterOptions'>
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCountry' headerText='ShipCountry' textAlign='Right' width=90></e-column>
        <e-column field='ShipCity' headerText='Ship City' textAlign='Right' width=120></e-column>
        <e-column field='ShipRegion' headerText='Ship Region' textAlign='Right' width=120></e-column>
    </e-columns>
</ejs-grid>
    `
})
export class AppComponent implements OnInit {

    @ViewChild('grid')
    public grid?: GridComponent;
    public data?: object[];
    public isCaseSensitive: boolean = false;
    public filterOptions?: FilterSettingsModel | undefined;

    ngOnInit(): void {
        this.data = data;
        this.filterOptions = { enableCaseSensitivity: this.isCaseSensitive };
    }
    onToggleCaseSensitive(): void {
        this.filterOptions = { enableCaseSensitivity: !this.isCaseSensitive };
    }
}



