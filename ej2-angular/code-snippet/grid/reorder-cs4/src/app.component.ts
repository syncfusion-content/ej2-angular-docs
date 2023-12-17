

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ColumnDragEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
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
  }
  columnDrop(args: ColumnDragEventArgs) {
    this.message = `columnDrop event triggered`;
    if ((args as any).column.allowReordering == true) {
      (this.gridObj as any).getColumnByField((args as any).column.field).customAttributes = {
        class: 'customcss',
      };
    }
  }
  columnDragStart(args: ColumnDragEventArgs) {
    this.message = `columnDragStart event triggered`;
    if ((args as any).column.field == 'OrderID') {
      (this.gridObj as any).getColumnByField((args as any).column.field).allowReordering = false;
    }
  }
  columnDrag(args: ColumnDragEventArgs) {
    var index = (args as any).target.getAttribute('data-colIndex');
    if (index) {
      this.message = `columnDrag event is triggered. ` + (args as any).column.headerText + ` column is dragged to index ` + index;
    }
  }
}



