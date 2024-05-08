import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, SortService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        ButtonModule
    ],

providers: [SortService],
standalone: true,
    selector: 'app-root',
    template: `
    <div>
        <button ejs-button id="button" cssClass="e-outline" (click)="onExternalSort()"> Clear Sorting </button>
        <ejs-grid style="padding: 10px 10px" #grid [dataSource]='data' [allowSorting]='true' [sortSettings]="sortOptions" height='315px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
            </e-columns>
        </ejs-grid> 
    </div>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public sortOptions?: any;

    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.sortOptions = {
            columns: [
                { field: 'CustomerID', direction: 'Ascending' },
                { field: 'ShipName', direction: 'Descending' },
            ],
        }
    }

    onExternalSort() {
        (this.grid as GridComponent).clearSorting();
    }
}



