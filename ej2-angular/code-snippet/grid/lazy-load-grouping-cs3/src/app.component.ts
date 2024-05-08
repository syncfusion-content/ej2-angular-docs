import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import {  LazyLoadGroupService, GroupService, VirtualScrollService  } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { GroupSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [LazyLoadGroupService,
                GroupService, VirtualScrollService ],
standalone: true,
    selector: 'app-root',
    template: ` 
    <ejs-grid [dataSource]='data' [enableVirtualization]='true' [allowGrouping]='true' [groupSettings]='groupSettings' height='315px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width='90'></e-column>
            <e-column field='ProductName' headerText='Product Name' width='100'></e-column>
            <e-column field='ProductID' headerText='Product ID' width='80'></e-column>
            <e-column field='CustomerName' headerText='Customer Name' width='120'></e-column>
        </e-columns>
    </ejs-grid>`
})

export class AppComponent implements OnInit {
    
    public data?: object[];
    public groupSettings?: GroupSettingsModel = { enableLazyLoading: true, columns: ['ProductName', 'CustomerName'] };

    ngOnInit(): void {
        this.data = data;
    }
}


