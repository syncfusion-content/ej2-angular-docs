import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `
    <div style="display: flex">
        <label style="padding: 30px 17px 0 0;">Align the text for columns :</label>
        <ejs-dropdownlist  style="padding: 26px 0 0 0" index="0" width="100" [dataSource]="alignmentData" (change) ="changeAlignment($event)"></ejs-dropdownlist>
   </div>
   <ejs-grid #grid [dataSource]='data' height='315px'  style="padding-top:20px">
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' type='number'  width=120></e-column>
            <e-column field='CustomerID' headerText='Customer ID' type='string' width=90></e-column>
            <e-column field='OrderDate' headerText='Order Date' type='date'  textAlign='Center' format='yMd' width=140></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' type='string'  width=120></e-column>
        </e-columns>
    </ejs-grid>`,
})
export class AppComponent implements OnInit {
    public data?: object[];
    @ViewChild('grid') public grid?: GridComponent;
    public alignmentData: Object[] = [
        { text: 'Left', value: 'Left' },
        { text: 'Right', value: 'Right' },
        { text: 'Center', value: 'Center' },
        { text: 'Justify', value: 'Justify' },
    ];
    public changeAlignment(args: any): void {
        (this.grid as any).columns.forEach((col: any) => {
            col.textAlign = (args as any).value;
        });
        (this.grid as any).refreshColumns();
    }
    ngOnInit(): void {
        this.data = data;
    }
}
