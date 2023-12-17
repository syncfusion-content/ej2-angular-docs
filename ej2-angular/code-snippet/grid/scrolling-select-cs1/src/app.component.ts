

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { RowSelectEventArgs, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-numerictextbox #numeric format='N' min='0' placeholder='Enter index to select a row'
                width=200 [showSpinButton]='false' (change)='onchange($event)'></ejs-numerictextbox>
            <ejs-grid #grid [dataSource]='data' height='315' width='100%' (rowSelected)='rowSelected($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                </e-columns>
            </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;
    @ViewChild('numeric') public numeric: any;

    ngOnInit(): void {
        this.data = data;
    }
    onchange(args: any) {
        (this.grid as any).selectionModule.selectRow(parseInt(this.numeric.getText(), 10));
    }
    rowSelected(args: RowSelectEventArgs) {
        const rowHeight: number = (this.grid as any).getRows()[(this.grid as any).getSelectedRowIndexes()[0]].scrollHeight;
        (this.grid as any).getContent().children[0].scrollTop = rowHeight * (this.grid as any).getSelectedRowIndexes()[0];
    }
}



