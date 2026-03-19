import { data, employeeData } from './datasource';
import { Component, OnInit } from '@angular/core';
import { DetailRowService, GridModel, GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [ GridModule, ],
  providers: [DetailRowService],
  standalone: true,
  selector: 'app-root',
  template: `<div>
    <ejs-grid #grid [dataSource]="data" height="335" [childGrid]='childGrid' (detailExpand)="detailExpand($event)" (detailCollapse)="detailCollapse($event)">
      <e-columns>
        <e-column field="EmployeeID" headerText="Employee ID" textAlign="Right" width="120"></e-column>
        <e-column field="FirstName" headerText="First Name" width="150"></e-column>
        <e-column field="City" headerText="City" width="150"></e-column>
        <e-column field="Country" headerText="Country" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  public childGrid?: GridModel;

  ngOnInit(): void {
    this.data = employeeData;
    this.childGrid= {
      dataSource: data,
      queryString: 'EmployeeID',
      columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
      ],
    }
  }
  
  // Prevent expanding detail row.
  public detailExpand(args: any): void {
    if (args.rowData.FirstName === 'Nancy') {
      args.cancel = true;
    }
  }

  // Prevent collapsing detail row.
  public detailCollapse(args: any): void {
    if (args.rowData.FirstName === 'Andrew') {
      args.cancel = true;
    }
  }
}
