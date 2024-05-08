import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, SortService, FilterService, GroupService, ReorderService, ToolbarService, ResizeService, } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [GroupService, PageService, SortService, ReorderService, FilterService, ToolbarService, ResizeService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowPaging]='true'[allowSorting]='true' [allowFiltering]='true'  [allowReordering]='true' [allowResizing]='true' [toolbar]="toolbar" [allowGrouping]='true'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width='100' [allowGrouping]="false" [allowResizing]= 'false'></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' textAlign='Left' width='150' [allowSorting]="false"></e-column>
                    <e-column field='ShipCity' headerText='Ship City' textAlign='Left' width='150' [allowReordering]="false"></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' textAlign='Left' width='150'  [allowSearching]="false"></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' width='150' format='C2' [allowFiltering]="false"></e-column>
                </e-columns>
            </ejs-grid>
            `,
})
export class AppComponent implements OnInit {
    public data?: object[];
    public toolbar: any;

    ngOnInit(): void {
        this.data = data;
        this.toolbar = ['Search'];
    }
}
