import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel, PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        ButtonModule
    ],

providers: [EditService, ToolbarService, PageService, FilterService],
standalone: true,
    selector: 'app-root',
    template:
        `<div style="padding: 20px 0px 0px 0px">
        <button ejs-button (click)='click()'>Clear Selection</button>
        </div>
        <div style="padding: 20px 0px 0px 0px">
        <ejs-grid #grid [dataSource]='data' allowPaging=true 
        [selectionSettings]='selectionOptions' [pageSettings]='pageOptions'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=130></e-column>
                <e-column field='Freight' headerText='Freight' format= 'C2' width=100>
                </e-column>
            </e-columns>
        </ejs-grid>
        </div>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public selectionOptions?: SelectionSettingsModel;
    public pageOptions?: PageSettingsModel;

    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.selectionOptions = { mode:'Both' ,allowColumnSelection: true,type: 'Multiple' };
        this.pageOptions = { pageSize: 5 };
    }
    click(): void{
        (this.grid as GridComponent).clearSelection();
    }
}