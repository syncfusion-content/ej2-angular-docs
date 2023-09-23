

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<button ejs-button (click)="SingleClearSort()"  cssClass="e-flat">Clear the sort for <b>OrderID</b> column</button>
               <button ejs-button (click)="MultiClearSort()"  cssClass="e-flat">Clear sorting for entire sorted columns</button>
               <div id="GridParent">
                    <ejs-grid #Grid [dataSource]='data' [sortSettings]='sortOptions' allowSorting='true' [toolbar]='toolbar' height='273px'>
                        <e-columns>
                            <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                            <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                             editType= 'numericedit' width=120 format= 'C2'></e-column>
                            <e-column field='ShipName' headerText='Ship Name' editType= 'dropdownedit' width=150></e-column>
                        </e-columns>
                    </ejs-grid>
               </div>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('Grid') public grid?: GridComponent;
    public sortOptions?: object;
    public toolbar?: ToolbarItems[];

    ngOnInit(): void {
        this.data = data;
        this.sortOptions = { columns: [{ field: 'OrderID', direction: 'Ascending' }, { field: 'CustomerID', direction: 'Descending' }] };
    }
    public SingleClearSort(): void {
        const column: any = (this.grid as any).sortSettings.columns;
        for (let i = 0; i < column.length; i++) {
            if (column[i].field === 'OrderID') {
                column.splice(i, 1);
                (this.grid as any).refresh();
            }
        }
    }
    public MultiClearSort(): void {
        (this.grid as any).clearSorting();
    }
}



