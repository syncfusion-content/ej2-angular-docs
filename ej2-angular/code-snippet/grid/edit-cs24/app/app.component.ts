import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, parentsUntil } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [editSettings]='editSettings' height='315px' (created)="created($event)">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=120></e-column>
                    <e-column field='OrderDate' headerText='Order Date' width=130 textAlign='Right' format='yMd'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=140></e-column>
                    <e-column field='Freight' headerText='Receipt Amount' textAlign= 'Right' width=150>
                        <ng-template #template let-data>
                            <input id='{{data.OrderID}}' value='{{data.Freight}}' class='custemp' type='text' style='width: 100%'>
                        </ng-template>
                </e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid') public grid?: GridComponent;
    public editSettings: any;

    ngOnInit(): void {
        this.data = data;
    }
    created(args: any) {
        (this.grid as any).element.addEventListener('keyup', function (e: any) { // Bind the keyup event for the grid.
            if ((e.target as any).classList.contains('custemp')) { // Based on this condition, you can find whether the target is an input element or not.
                var row = parentsUntil(e.target as any, 'e-row');
                var rowIndex = (row as any).rowIndex; // Get the row index.
                var uid = row.getAttribute('data-uid');
                var grid = (document.getElementsByClassName('e-grid')[0] as any).ej2_instances[0];
                var rowData = grid.getRowObjectFromUID(uid).data; // Get the row data.
                (rowData as any).Freight = (e.target as any).value; // Update the new value for the corresponding column.
                grid.updateRow(rowIndex, rowData); // Update the modified value in the row data.
            }
        });
    }
}



