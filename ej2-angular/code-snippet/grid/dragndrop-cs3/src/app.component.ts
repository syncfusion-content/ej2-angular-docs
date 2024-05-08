import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, SelectionService, RowDDService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { orderDetails } from './datasource';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService, SelectionService, RowDDService],
standalone: true,
    selector: 'app-root',
    template: `<div class="control-section">
                <ejs-grid [dataSource]='data' [allowRowDragAndDrop]='true'
                [selectionSettings]='selectionOptions' height='400'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' width='120'
                        textAlign='Right'></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width='120'>
                        </e-column>
                        <e-column field='OrderDate' headerText='Order Date' width='100' 
                        format="yMd" textAlign='Right'></e-column>
                        <e-column field='Freight' headerText='Freight' width='120' format='C2' 
                        textAlign='Right'></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width='130'>
                        </e-column>
                        <e-column field='ShipCountry' headerText='Ship Country' width='130'>
                        </e-column>
                    </e-columns>
                </ejs-grid>
              </div>`
  })
export class AppComponent implements OnInit {

    public data?: object[];
    public selectionOptions?: SelectionSettingsModel;

    ngOnInit(): void {
        this.data = orderDetails;
        this.selectionOptions = { type: 'Multiple' };
    }
}



