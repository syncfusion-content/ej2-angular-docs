import { Component, ViewChild, OnInit } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { setSpinner } from '@syncfusion/ej2-angular-popups';
import { data } from './datasource';

@Component({
    selector: 'app-container',
    template: `
        <ejs-grid #grid1 [dataSource]='gridData' (created)='onFirstGridCreated()'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120 type='number'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=140 type='string'></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='right' format='C' width=120></e-column>
                <e-column field='OrderDate' headerText='Order Date' width=120  format='yMd' width=140></e-column>
            </e-columns>
        </ejs-grid>
        <br/>
        <br/>
        <ejs-grid #grid2 [dataSource]='gridData' (created)='onSecondGridCreated()'>
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
    @ViewChild('grid1') grid_1: GridComponent | any;
    @ViewChild('grid2') grid_2: GridComponent | any;
    public gridData?: Object[];

    constructor() {}

    public ngOnInit(): void {
        this.gridData = data.slice(0, 7);
    }

    public onFirstGridCreated(): void {
        this.grid_1.hideSpinner = () => true;
        setSpinner({ template: '<div style="width:100%;height:100%" class="custom-rolling"><div></div></div>' });
    }

    public onSecondGridCreated(): void {
        this.grid_2.hideSpinner = () => true;
    }
}





