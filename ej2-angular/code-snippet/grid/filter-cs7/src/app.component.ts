import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, FilterService, PageService } from '@syncfusion/ej2-angular-grids'
import { MultiSelectModule, CheckBoxSelectionService, DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { Column, GridComponent} from '@syncfusion/ej2-angular-grids';
import { data, stringOperatorsData, numericOperatorsData } from './datasource';
import { DropDownListComponent,ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
imports: [
        
        GridModule,
        MultiSelectModule,
        DropDownListAllModule,
        CheckBoxModule, 
        ButtonModule
    ],

providers: [FilterService, PageService, CheckBoxSelectionService],
standalone: true,
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
