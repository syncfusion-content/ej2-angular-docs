import { Component, OnInit, ViewChild } from '@angular/core';
import { Column, GridComponent } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild('grid') public grid?: GridComponent;
  @ViewChild('type') public typeDropdown?: DropDownListComponent | any;

  public data?: object[];
  public filterSettings?: any = {type:'Menu'};
  public columnFilterSettings:any;
  public fieldData: string[] | undefined;
  public typeData: string[] =[];
  public column: Column | undefined;

  ngOnInit(): void {
    this.data = data;
  }
  dataBound() {
    this.fieldData = this.grid?.getColumnFieldNames();
  }
  onFieldChange(args:any): void {
    this.typeDropdown.enabled = true;
    this.typeData= ['Menu','CheckBox','Excel'];
    this.column = this.grid?.getColumnByField(args.value);
 }
  onTypeChange(args: any): void {
    this.columnFilterSettings = { type:args.value };
    (this.column as Column).filter = this.columnFilterSettings;
    this.grid?.refresh();
  }
}
