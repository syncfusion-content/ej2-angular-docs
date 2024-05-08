import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, ToolbarService, EditService } from '@syncfusion/ej2-angular-grids'
import { SwitchModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { SwitchComponent } from '@syncfusion/ej2-angular-buttons';
import { orderDetails } from './datasource';

@Component({
imports: [
        
        GridModule,
        SwitchModule
    ],

providers: [PageService, ToolbarService, EditService],
standalone: true,
    selector: 'app-root',
    template: `
        <div style="padding: 20px 0px 20px 0px">
            <label>Enable/Disable Query String</label>
            <ejs-switch #switch id="switch" [(checked)]="enableQuery" (change)="toggleQueryString()">
            </ejs-switch>
        </div>
        <ejs-grid #grid [dataSource]='data' allowPaging='true' [pageSettings]='initialPage'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
            </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public initialPage?: object;
    @ViewChild('switch') public switch?: SwitchComponent;
    @ViewChild('grid') public grid?: GridComponent;
    public enableQuery = false;

    ngOnInit(): void {
        this.data = orderDetails;
    }
    toggleQueryString(): void {
        (this.grid as GridComponent).pageSettings.enableQueryString = this.enableQuery;
    }
}
