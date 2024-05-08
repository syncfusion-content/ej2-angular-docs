import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, SelectionService, RowDDService } from '@syncfusion/ej2-angular-grids'

import { Component, ViewChild,OnInit } from '@angular/core';
import { GridComponent, RowDragEventArgs } from '@syncfusion/ej2-angular-grids';
import { orderDetails, columnDataType } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService, SelectionService, RowDDService],
standalone: true,
  selector: 'app-root',
  template: `<div style="text-align:center">
             <p style="color:red;" id="message">{{ message }}</p>
             </div>
            <ejs-grid #grid [dataSource]="data" [allowPaging]="true" 
            [allowRowDragAndDrop]="true" (rowDragStartHelper)="rowDragStartHelper($event)"
            [selectionSettings]="selectOptions" 
            id="Grid" (rowDrop)="rowDrop($event)"  (rowDragStart)="rowDragStart($event)" 
            (rowDrag)="rowDrag($event)">
              <e-columns>
                <e-column field="OrderID" headerText="Order ID" width="120"
                textAlign="Right"></e-column>
                <e-column field="CustomerID" headerText="Customer Name" 
                width="130"></e-column>
                <e-column field="OrderDate" headerText="Order Date" width="120"
                format="yMd" textAlign="Right"></e-column>
                <e-column field="Freight" headerText="Freight" width="120"
                format="C2" textAlign="Right"></e-column>
                <e-column field="ShipCity" headerText="Ship City" width="120">
                </e-column>
                <e-column field="ShipCountry" headerText="Ship Country"
                width="120"></e-column>
              </e-columns>
            </ejs-grid>`,
  styleUrls: ['./app.style.css']

})
export class AppComponent implements OnInit {

  public data: Object[] = [];
  public selectOptions?: Object;
  public message?: string;
  @ViewChild('grid')
  public grid!: GridComponent;

  ngOnInit(): void {
    this.data = orderDetails;
    this.selectOptions = { type: 'Multiple' };
  }
  rowDragStartHelper(args: RowDragEventArgs): void {
    this.message = `rowDragStartHelper event triggered`;
    if (((args.data as Object[])[0] as columnDataType).OrderID === 10248) {
      args.cancel = true;
    }
  }
  rowDragStart(args: RowDragEventArgs) {
    this.message = `rowDragStart event triggered`;
    args.cancel = true;
  }
  rowDrag(args:RowDragEventArgs): void {
    this.message = `rowDrag event triggered`;
    (args.rows as Element[]).forEach((row: Element) => {
      row .classList.add('drag-limit');
    });
  }
  rowDrop(args: RowDragEventArgs): void {
    this.message = `rowDrop event triggered`;
    const value = [];
    for (let r = 0; r < (args.rows as Element[]).length; r++) {
      value.push((args.fromIndex as number) + r);
    }
    this.grid.reorderRows(value, (args.dropIndex as number));
  }
}
