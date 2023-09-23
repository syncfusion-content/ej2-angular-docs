

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<div id="GridParent">
                    <ejs-grid #Grid [dataSource]='data' allowPaging='true' [selectionSettings]='selectionOptions'
                    (rowDataBound)='rowDataBound($event)' (dataBound)='dataBound($event)' height='273px'>
                        <e-columns>
                            <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                            <e-column field='EmployeeID' headerText='Employee ID' textAlign= 'Right' width=120></e-column>
                            <e-column field='ShipCity' headerText='Ship City'  width=120></e-column>
                            <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                        </e-columns>
                    </ejs-grid>
               </div>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;
    public selectionOptions?: SelectionSettingsModel;
    public selIndex?: number[] = [];
    ngOnInit(): void {
        this.data = data;
        this.selectionOptions = { type: 'Multiple' };
    }
    public rowDataBound(args : any): void {
        const EmployeeID = 'EmployeeID';
        if ((args as any).data[EmployeeID] > 3) {
            this.selIndex?.push(parseInt((args as any).row.getAttribute('aria-rowindex'), 10));
        }
    }
    public dataBound(args: any): void {
        if (this.selIndex?.length) {
            (this.grid as any).selectRows(this.selIndex);
            this.selIndex = [];
        }
    }
}



