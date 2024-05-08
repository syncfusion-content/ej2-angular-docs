import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ReorderService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        ButtonModule
    ],

providers: [ReorderService],
standalone: true,
    selector: 'app-root',
    template: `<button ejs-button id='reordersingle' cssClass="e-info" (click)='reorderSingleColumnByTargetIndex()'>Reorder single column</button>
     <button ejs-button id='reordermultiple' cssClass="e-info" (click)='reorderMultipleColumnByTargetIndex()'>Reorder Multiple columns</button>
    <ejs-grid #grid [dataSource]='data' [allowReordering]='true' height='280px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipRegion' headerText='Ship Region' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid') public gridObj?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }
    reorderSingleColumnByTargetIndex(): void {
        (this.gridObj as GridComponent).reorderColumnByTargetIndex("OrderID", 3); // move column with field name "OrderID" to index 3
    }
    reorderMultipleColumnByTargetIndex(): void {
        (this.gridObj as GridComponent).reorderColumnByTargetIndex(['OrderID', 'CustomerID'], 3); // move columns with field name "OrderID" and "CustomerID" to index 3
    }
}



