

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { SelectionSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<button ej-button id='copy' (click)='copy()'>Copy</button>
     <button ej-button id='copyHeader' (click)='copyHeader()'>CopyHeader</button>
        <ejs-grid #grid='' [dataSource]='data' height='280px' [selectionSettings]='selectionOptions'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public selectionOptions?: SelectionSettingsModel;
    @ViewChild('grid') public gridObj?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.selectionOptions = { type: 'Multiple'};
    }

    copy() {
        (this.gridObj as any).copy();
    }

    copyHeader() {
        (this.gridObj as any).copy(true);
    }
}



