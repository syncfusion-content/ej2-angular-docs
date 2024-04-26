import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, SortService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SortDirection } from '@syncfusion/ej2-angular-grids';
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
      #dropdownColumn
      style="padding: 26px 0 0 0"
      index="0"
      width="120"
      [dataSource]="columns"
      [fields]="field"
    ></ejs-dropdownlist>
    </div>
    <div style="display: flex">
    <label style="padding: 30px 17px 0 0"> Sorting direction :</label>
    <ejs-dropdownlist
      #dropdownDirection
      style="padding: 26px 0 0 0"
      index="0"
      width="120"
      [dataSource]="direction"
    ></ejs-dropdownlist>
    </div>
    <button
    style="margin-top: 10px "
    ejs-button
    id="button"
    cssClass="e-outline"
    (click)="addSortColumn()"
    >
    Add sort column
    </button>
    <ejs-grid style="padding: 10px 10px" #grid [dataSource]='data' [allowSorting]='true' [sortSettings]="sortOptions" height='315px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>            
            <e-column field="Freight" headerText="Freight" width="80" format="C2" textAlign="Right" ></e-column>
        </e-columns>
    </ejs-grid> 
`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public sortOptions?: any;
    @ViewChild('grid')
    public grid?: GridComponent;
    @ViewChild('dropdownColumn') 
    public dropDownColumn?: DropDownListComponent;
    @ViewChild('dropdownDirection')
    public dropDownDirection?: DropDownListComponent;
    public columns: object[] = [
        { text: 'Order ID', value: 'OrderID' },
        { text: 'Customer ID', value: 'CustomerID' },
        { text: 'Freight', value: 'Freight' },
    ];
    public direction: object[] = [
        { text: 'Ascending', value: 'Ascending' },
        { text: 'Descending', value: 'Descending' },
    ];
    public field: object = { text: 'text', value: 'value' };

    ngOnInit(): void {
        this.sortOptions = {
            columns: [
                { field: 'ShipName', direction: 'Ascending' },
            ],
        };
        this.data = data;
    }

    addSortColumn() {
        (this.grid as GridComponent).sortColumn(
          (this.dropDownColumn as DropDownListComponent).value as SortDirection,
          (this.dropDownDirection as DropDownListComponent).value as SortDirection,
          true
        );
      }
}



