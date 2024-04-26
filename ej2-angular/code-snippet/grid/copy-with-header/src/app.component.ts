import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { SelectionSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        ButtonModule
    ],

,
standalone: true,
    selector: 'app-root',
    template: `
    <button ejs-button id='copy' cssClass="e-outline" (click)='copy()'>Copy</button>
    <button ejs-button id='copyHeader' cssClass="e-outline" (click)='copyHeader()' style="margin-left:10px">CopyHeader</button>
    <ejs-grid #grid style="padding: 5px 5px" id='grid' [dataSource]='data' height='280px' [selectionSettings]='selectionOptions'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public selectionOptions?: SelectionSettingsModel;
    @ViewChild('grid') public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.selectionOptions = { type: 'Multiple'};
    }

    copy() {
        (this.grid as GridComponent).copy();
    }

    copyHeader() {
        (this.grid as GridComponent).copy(true);
    }
}



