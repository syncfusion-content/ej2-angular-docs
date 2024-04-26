import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ReorderService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ColumnDragEventArgs, Column } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [ReorderService],
standalone: true,
  selector: 'app-root',
  template: `<p id='message'>{{ message }}</p><ejs-grid #grid [dataSource]='data' [allowReordering]='true' height='280px' [enableHover]='false'
         (columnDragStart)="columnDragStart($event)" (columnDrag)="columnDrag($event)" (columnDrop)="columnDrop($event)">
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
  public message?: string;
  @ViewChild('grid') public gridObj?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.message = '';
  }
  columnDrop({ column }: ColumnDragEventArgs) {
    this.message = `columnDrop event triggered`;
    if ((column as Column).allowReordering == true) {
      (this.gridObj as GridComponent).getColumnByField((column as Column).field).customAttributes = {
        class: 'customcss',
      };
    }
  }
  columnDragStart({ column }: ColumnDragEventArgs) {
    this.message = `columnDragStart event triggered`;
    if ((column as Column).field == 'OrderID') {
      (this.gridObj as GridComponent).getColumnByField((column as Column).field).allowReordering = false;
    }
  }
  columnDrag({ column, target }: ColumnDragEventArgs) {
    var index = (target as Element).getAttribute('data-colIndex');
    if (index) {
      this.message = `columnDrag event is triggered. ` + (column as Column).headerText + ` column is dragged to index ` + index;
    }
  }
}