import { Component, ViewChild, OnInit } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { setSpinner } from '@syncfusion/ej2-angular-popups';
import { data } from './datasource';

@Component({
    selector: 'app-container',
    template: `
        <h5> Grid is rendered with Bootstrap type Spinner </h5>
        <ejs-grid #grid [dataSource]='gridData' (created)='gridCreated()'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120 type='number'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=140 type='string'></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='right' format='C' width=120></e-column>
                <e-column field='OrderDate' headerText='Order Date' width=120  format='yMd' width=140></e-column>
            </e-columns>
        </ejs-grid>
    `
})
export class AppComponent implements OnInit {
    @ViewChild('grid') grid: GridComponent | any;

    public gridData?: Object[];

    constructor() {}

    public ngOnInit(): void {
        this.gridData = data.slice(0, 7);
    }

    public gridCreated(): void {
        this.grid.hideSpinner = () => true;
        setSpinner({ type: 'Bootstrap' });
    }
}






