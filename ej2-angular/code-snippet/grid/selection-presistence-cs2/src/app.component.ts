import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'


import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { PageSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [EditService, ToolbarService, PageService, FilterService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowPaging]='true' height='315px' 
               [selectionSettings]='selectionOptions'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' 
                    textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public selectionOptions?: SelectionSettingsModel;
    public pageOptions?: PageSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.selectionOptions = { type: 'Multiple', mode: 'Both', persistSelection: true, allowColumnSelection: true };
        this.pageOptions = { pageSize: 5 };

    }
}



