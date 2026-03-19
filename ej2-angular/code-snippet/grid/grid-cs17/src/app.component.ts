import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeEventArgs, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { Column, GridComponent, GridModule, TextAlign } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule, DropDownListModule ],
    standalone: true,
    selector: 'app-root',
    template: `
    <div style="display: flex">
        <label style="padding: 5px 5px 0 0;">Align the text for columns :</label>
        <ejs-dropdownlist index="0" width="100" [dataSource]="alignmentData" (change) ="changeAlignment($event)" [fields]="{ text: 'text', value: 'value' }"></ejs-dropdownlist>
   </div>
   <ejs-grid #grid [dataSource]='data' height='295px'  style="padding-top:5px">
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
    public changeAlignment(args: ChangeEventArgs): void {
        const align: TextAlign = (
        typeof args.value === 'string' ? args.value : 'Left'
        ) as TextAlign;

        const cols: Column[] = (this.grid as GridComponent).getColumns();

        cols.forEach((col: { textAlign: TextAlign; }) => {
        col.textAlign = align;
        });
        (this.grid as GridComponent).refreshColumns();
  }
    ngOnInit(): void {
        this.data = data;
    }
}
