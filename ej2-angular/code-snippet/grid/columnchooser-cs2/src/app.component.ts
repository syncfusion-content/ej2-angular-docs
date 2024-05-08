import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, ColumnChooserService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [ToolbarService, ColumnChooserService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [toolbar]='toolbarOptions' height='272px' [showColumnChooser]= 'true'>
               <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='120' textAlign="Right" [showInColumnChooser]='false'></e-column>
                    <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign="Right"></e-column>
                    <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign="Right"></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' [visible]='false' width='150'></e-column>
                    <e-column field='ShipCity' headerText='Ship City' [visible]='false' width='150'></e-column>
               </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['ColumnChooser'];
    }
}