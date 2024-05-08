import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, SortService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
imports: [
        
        GridModule,
        ButtonModule,
        DropDownListAllModule
    ],

providers: [SortService],
standalone: true,
    selector: 'app-root',
    template: `
    <div style="display: flex">
    <label style="padding: 30px 20px 0 0"> Column name :</label>
    <ejs-dropdownlist
      #dropdown
      style="padding: 26px 0 0 0"
      index="0"
      width="120"
      [dataSource]="columns"
      [fields]="field"
    ></ejs-dropdownlist>
    </div>
    <button
    style="margin-top: 10px "
    ejs-button
    id="button"
    cssClass="e-outline"
    (click)="removeSortColumn()"
    >
    Remove sort column
    </button>
    <ejs-grid style="padding: 10px 10px" #grid [dataSource]='data' [allowSorting]='true' [sortSettings]="sortOptions" height='315px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
    </ejs-grid> 
`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public sortOptions?: any;
    @ViewChild('grid')
    public grid?: GridComponent;
    @ViewChild('dropdown') 
    public dropDown?: DropDownListComponent;

    public columns: object[] = [
        { text: 'Customer ID', value: 'CustomerID' },        
        { text: 'Order ID', value: 'OrderID' },
        { text: 'Ship Name', value: 'ShipName' },
        { text: 'Ship City', value: 'ShipCity' },
      ];
      public field: object = { text: 'text', value: 'value' };

    ngOnInit(): void {
        this.sortOptions = {
            columns: [
                { field: 'CustomerID', direction: 'Ascending' },
                { field: 'ShipName', direction: 'Descending' },
            ],
        };
        this.data = data;
    }

    removeSortColumn() {
        (this.grid as GridComponent).removeSortColumn((this.dropDown as DropDownListComponent).value as string);
    }
}



