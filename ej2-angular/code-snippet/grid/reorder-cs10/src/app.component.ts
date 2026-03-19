import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Column, ColumnModel, GridComponent, GridModule, ReorderService } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [ GridModule, ButtonModule ],
  providers: [ReorderService],
  standalone: true,
    selector: 'app-root',
    template: `<button ejs-button id='reorderColumn' cssClass="e-info" (click)='reorderColumnUsingColumnModel()'>Reorder Column</button>
     <button ejs-button id='reorderChildColumn' cssClass="e-info" (click)='reorderChildColumnUsingColumnModel()'>Reorder Stacked ChildColumn</button>
    <ejs-grid #grid [dataSource]='data' [allowReordering]='true' height='268px'>
        <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="100"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="Freight" headerText="Freight" format="C2" width="120" textAlign="Right"></e-column>
        <e-column headerText="Order Details" textAlign="Center" [columns]="orderColumns"></e-column>
        <e-column headerText="Ship Details" textAlign="Center" [columns]="shipColumns"></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  @ViewChild('grid') public gridObj?: GridComponent;
    
  public orderColumns: ColumnModel[] = [];
  public shipColumns: ColumnModel[] = [];

  ngOnInit(): void {
  this.data = data;
  this.orderColumns = [
    { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 150 },
    { field: 'EmployeeID', headerText: 'Employee ID', width: 150, textAlign: 'Right' }
  ];
  this.shipColumns = [
    { field: 'ShipName', headerText: 'Ship Name', width: 150 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
  ];
  }
  
  // Reorder a stacked header column before a normal column.  
  reorderColumnUsingColumnModel(): void {
    (this.gridObj as GridComponent).reorderColumnByModel(this.gridObj?.columns[3] as Column, this.gridObj?.columns[1] as Column);
  }

  // Reorder a child column within a stacked header column.
  reorderChildColumnUsingColumnModel(): void {
    const shipDetails = this.gridObj?.columns[4] as Column; 
    (this.gridObj as GridComponent).reorderColumnByModel(shipDetails.columns?.[1] as Column, shipDetails.columns?.[0] as Column);
      
  }
}