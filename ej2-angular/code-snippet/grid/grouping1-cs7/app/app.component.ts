

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GroupSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<button ej-button id='collapse' cssClass='e-flat' (click)='collapse()'>Collapse</button>
            <ejs-grid #grid [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupSettings' height='240px'>
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
    public groupSettings?: GroupSettingsModel;
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.groupSettings = { columns: ['CustomerID'] };
    }

    collapse() {
        if ((this.grid as any).getSelectedRowIndexes().length) {
            let currentTr: Element = (this.grid as any).getRows()[(this.grid as any).getSelectedRowIndexes()[0]];
            while (currentTr.classList && currentTr.classList.length) {
                currentTr = currentTr.previousSibling as Element;
            }
            const collapseElement = currentTr.querySelector('.e-recordplusexpand');
            (this.grid as any).groupModule.expandCollapseRows(collapseElement); // pass the collapse row element.
        }
    }
}
