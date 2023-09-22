import { data } from './datasource';
import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="control-section">
                <ejs-grid #grid [dataSource]="data" [allowRowDragAndDrop]="true"
                [selectionSettings]="selectOptions" [rowDropSettings]="rowDropOptions"
                id="Grid" (rowDrop)="rowDrop($event)">
                    <e-columns>
                        <e-column field="OrderID" headerText="Order ID" width="120"
                        textAlign="Right"></e-column>
                        <e-column field="CustomerID" headerText="Customer Name" 
                        width="130"></e-column>
                        <e-column field="OrderDate" headerText="Order Date" width="120"
                        format="yMd" textAlign="Right"></e-column>
                        <e-column field="Freight" headerText="Freight" width="120"
                        format="C2" textAlign="Right"></e-column>
                        <e-column field="ShipCity" headerText="Ship City" width="130">
                        </e-column>
                        <e-column field="ShipCountry" headerText="Ship Country"
                        width="130"></e-column>
                    </e-columns>
                </ejs-grid>
            </div>`,
    styleUrls: ['./app.style.css']
})
export class AppComponent {
    public data: Object[] = [];
    public selectOptions?: Object;
    public rowDropOptions?: object;
    @ViewChild('grid') public grid: any;

    ngOnInit(): void {
        this.data = data;
        this.selectOptions = { type: 'Multiple' };
        this.rowDropOptions = { targetID: 'Grid' };
    }
    rowDrop(args:any) {
        args.cancel = true;
        var value = [];
        for (var r = 0; r < args.rows.length; r++) {
            value.push(args.fromIndex + r);
        }
        this.grid.reorderRows(value, args.dropIndex);
    }
}



