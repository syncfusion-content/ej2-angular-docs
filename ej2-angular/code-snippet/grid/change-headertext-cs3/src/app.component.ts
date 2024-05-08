import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';


@Component({
imports: [
        
        GridModule
    ],

,
standalone: true,
    selector: 'app-root',
    template: `<button ej-button class='e-flat' (click)='add()'> Add </button>
               <button ej-button class='e-flat' (click)='delete()'> Delete </button>
                <ejs-grid #grid [dataSource]='data' [height]='280' >
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=120 ></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }
    add(): void {
        const rdata: object = { OrderID: 10247, CustomerID: 'ASDFG', Freight: 40.4, OrderDate: new Date(8367642e5) };
        ((this.grid as any).dataSource as object[]).unshift(rdata);
        (this.grid as any).refresh();
    }
    delete(): void {
        const selectedRow: number = (this.grid as any).getSelectedRowIndexes()[0];
        if ((this.grid as any).getSelectedRowIndexes().length) {
            ((this.grid as any).dataSource as object[]).splice(selectedRow, 1);
        } else {
            alert('No records selected for delete operation');
        }
        (this.grid as any).refresh();
    }
}



