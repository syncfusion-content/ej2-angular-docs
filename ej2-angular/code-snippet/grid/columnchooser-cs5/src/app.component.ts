import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, ColumnChooserService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { ToolbarItems, GridComponent, ColumnChooserSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [ToolbarService, ColumnChooserService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [toolbar]='toolbarOptions' height='272px' [showColumnChooser]= 'true' [columnChooserSettings]='columnChooserSettings'>
               <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='120' textAlign="Right"></e-column>
                    <e-column field='OrderDate' headerText='Order Date' width='120' format="yMd" textAlign="Right"></e-column>
                    <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign="Right"></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width='130'></e-column>
                    <e-column field='ShipCity' headerText='Ship City' [visible]='false' width='130'></e-column>
               </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    @ViewChild('grid') public grid?: GridComponent;

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    public columnChooserSettings?:ColumnChooserSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['ColumnChooser'];
        this.columnChooserSettings = { operator: 'contains' };
    }
}