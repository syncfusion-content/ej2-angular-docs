

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<button ejs-button id="btnId" cssClass="e-info" (click)='updateColumns()'> Update Columns </button>
                <ejs-grid #grid [dataSource]='data'>
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
    @ViewChild('grid') grid?: GridComponent;
    ngOnInit(): void {
        this.data = data;
    }
    updateColumns(): void {
      // Modifying column properties
      (this.grid as any).columns[0].textAlign = 'Center';
      (this.grid as any).columns[0].width = '100';
      (this.grid as any).columns[2].visible = false;
      (this.grid as any).columns[1].customAttributes = { class: 'customcss' };
      // Applying changes to the grid
      (this.grid as any).refreshColumns();
    }
}


