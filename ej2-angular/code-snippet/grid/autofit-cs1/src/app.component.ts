import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ResizeService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [ResizeService],
standalone: true,
selector: 'app-root',
template: `<ejs-grid #grid [dataSource]='data' allowResizing= 'true' height= '400' width= '850' autoFit= 'true'>
<e-columns>
<e-column field='OrderID' headerText='Order ID' minWidth='100' width='150' maxWidth='200' textAlign='Right'></e-column>
<e-column field='CustomerID' headerText='Customer ID' minWidth='8' width='150'></e-column>
<e-column field='Freight' headerText='Freight' minWidth='8' width='120' format='C2' textAlign='Right'></e-column>
<e-column field='ShipCity' headerText='Ship City' [allowResizing] = 'false' width='150' textAlign='Right'></e-column>
<e-column field='ShipCountry' headerText='Ship Country' minWidth='8' width='150'></e-column>
</e-columns>
</ejs-grid>`
})
export class AppComponent implements OnInit {

public data?: object[];
@ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }
}



