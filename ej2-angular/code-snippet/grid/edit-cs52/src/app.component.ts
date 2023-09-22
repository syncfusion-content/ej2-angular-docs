

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<button ej-button id='add' (click)='addRow()'>Add Row</button>
    <ejs-grid #grid id="grid" [dataSource]='data' [editSettings]='editSettings'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120 isPrimaryKey="true"></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
                    <e-column field='ShipCity' headerText='Shi pCity' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120></e-column>
                    <e-column field='ShipName' headerText='Ship Name' textAlign='Right' width=140></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    }
    addRow() {
        (this.grid as any).addRecord(
         { OrderID: 3232, CustomerID: 'ALKIT', ShipCity: 'London', Freight: 40, ShipName: 'Que Delícia'}, 2);
    }
}



