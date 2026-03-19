import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { ChangeEventArgs, DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { EditService, FreezeService, GridComponent, GridModule, SelectionService, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [ GridModule, DropDownListAllModule, ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule],
  providers: [FreezeService, SelectionService, EditService, ToolbarService],
  standalone: true,
  selector: 'app-root',
  template: `
    <div style="display:flex;">
    <label style="padding: 5px 5px 5px 0">Change the frozen column: </label>
    <ejs-dropdownlist
      id="dropdown"
      #dropdown
      index="0"
      width="120"
      [fields]="field"
      [dataSource]="ddlData"
      (change)="columnChange($event)"
      width="100px"
    ></ejs-dropdownlist>
  </div>  
  <ejs-grid #grid id="grid" style="padding: 5px 5px" [dataSource]='data' height=290 [allowSelection]='false'  [enableHover]='false'>
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=100 [isFrozen]="true"></e-column>
      <e-column field='OrderDate' headerText='Order Date' width=100 format='yMd' textAlign='Right'></e-column>
      <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
      <e-column field='ShipName' headerText='Ship Name' width=130></e-column>
      <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
      <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
      <e-column field='ShipRegion' headerText='Ship Region' width=80></e-column>
      <e-column field='ShipPostalCode' headerText='Ship Postal Code' width=110></e-column>
      <e-column field='Freight' headerText='Freight' width=80></e-column>
    </e-columns>
  </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  @ViewChild('grid')
  public grid?: GridComponent;
  public field?: object;
  public ddlData?: object[] ;

  ngOnInit(): void {  
    this.data = data;
    this.field= { text: 'text', value: 'value' };
    this.ddlData= [
      { text: 'OrderID', value: 'OrderID' },
      { text: 'CustomerID', value: 'CustomerID' },
      { text: 'OrderDate', value: 'OrderDate' },
      { text: 'EmployeeID', value: 'EmployeeID' },
      { text: 'ShipName', value: 'ShipName' },
      { text: 'ShipCity', value: 'ShipCity' },
      { text: 'ShipCountry', value: 'ShipCountry' },
      { text: 'ShipRegion', value: 'ShipRegion' },
      { text: 'ShipPostalCode', value: 'ShipPostalCode' },
      { text: 'Freight', value: 'Freight' },
    ]
  }

  columnChange(args: ChangeEventArgs) {
    
    const selectedColumn = (this.grid as GridComponent).getColumnByField(args.value as string);

    // Iterate through all columns and unfreeze any previously frozen columns
    ((this.grid as GridComponent).columns as { isFrozen: boolean; }[]).forEach((column) => {
      if (column.isFrozen) {
          column.isFrozen = false;
      }
  });

    // Freeze the newly selected column, if it exists
    if (selectedColumn) {
      selectedColumn.isFrozen = true;
    }

    // Refresh the columns
    (this.grid as GridComponent).refreshColumns();
  }
}
