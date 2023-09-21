import { Component, OnInit, ViewChild } from '@angular/core';
import { Column, GridComponent } from '@syncfusion/ej2-angular-grids';
import { data, stringOperatorsData, numericOperatorsData } from './datasource';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild('grid') public grid?: GridComponent;
  @ViewChild('operator') public operatorDropdown?: DropDownListComponent | any;

  public data?: object[];
  public filterOptions?: any;
  public fieldData: string[] | undefined;
  public availableOperators: object[] |string | undefined;
  public column: Column | undefined;

  ngOnInit(): void {
    this.data = data;
  }
  dataBound() {
    this.fieldData = this.grid?.getColumnFieldNames();
  }
  onFieldChange(args: any): void {
    this.availableOperators=[]; 
    this.operatorDropdown.enabled = true;
    this.column = this.grid?.getColumnByField(args.value);
    if (this.column) {
      this.availableOperators = this.column.type === 'string' ? stringOperatorsData : numericOperatorsData;
    }
  }
  onOperatorChange(args: any): void {
    debugger;
    this.filterOptions = { operator: args.value, showFilterBarStatus: true };
    (this.column as any).filter = this.filterOptions;
  }
}
