import { Component, OnInit, ViewChild } from '@angular/core';
import { Column, GridComponent} from '@syncfusion/ej2-angular-grids';
import { data, stringOperatorsData, numericOperatorsData } from './datasource';
import { DropDownListComponent,ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild('grid') public grid?: GridComponent;
  @ViewChild('operator') public operatorDropdown?: DropDownListComponent;

  public data?: object[];
  public fieldData?: string[];
  public availableOperators: object[] |string | undefined;
  public column: Column | undefined;

  ngOnInit(): void {
    this.data = data;
  }
  dataBound() {
    this.fieldData = (this.grid as GridComponent).getColumnFieldNames();
  }
  onFieldChange(args: ChangeEventArgs): void {
    this.availableOperators=[]; 
    (this.operatorDropdown as DropDownListComponent).enabled = true;
    this.column = (this.grid as GridComponent).getColumnByField(args.value as string);
    if (this.column) {
      this.availableOperators = this.column.type === 'string' ? stringOperatorsData : numericOperatorsData;
    }
  }
  onOperatorChange(args: ChangeEventArgs): void {
    (this.column as Column).filter = { operator: args.value as string };
  }
}
