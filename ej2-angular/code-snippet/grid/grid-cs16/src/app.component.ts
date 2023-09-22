

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
@Component({
    selector: 'app-root',
    template: ` <button id='show' ejs-button cssClass="e-info" (click)='show()'> Show </button>
                <button id='hide' ejs-button cssClass="e-info" (click)='hide()'> Hide </button>
                <ejs-grid #grid [dataSource]='data' [height]='280'>
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
    @ViewChild('grid') public grid?: GridComponent;
    ngOnInit(): void {
        this.data = data;
    }
    show() {
        (this.grid as any).showColumns('Customer ID', 'headerText'); // show by HeaderText
    }
    hide() {
        (this.grid as any).hideColumns('Customer ID', 'headerText'); // hide by HeaderText
    }
}


