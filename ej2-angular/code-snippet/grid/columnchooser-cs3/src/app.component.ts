import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, ColumnChooserService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [ToolbarService, ColumnChooserService],
standalone: true,
    selector: 'app-root',
    template: ` <button id='show' ejs-button class='e-primary' (click)='show()'> open Column Chooser </button>
                <ejs-grid #grid [dataSource]='data' [height]='280' [showColumnChooser]= 'true'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' width='120' textAlign="Right" [showInColumnChooser]='false'></e-column>
                        <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign="right"></e-column>
                        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign="Right"></e-column>
                        <e-column field='ShipCountry' headerText='Ship Country' [visible]='false' width='150'></e-column>
                        <e-column field='ShipCity' headerText='Ship City' [visible]='false' width='150'></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    show() {
        this.grid?.columnChooserModule.openColumnChooser(100, 40); // give X and Y axis
    }
}