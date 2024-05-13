
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  sampleData,
  stringOperatorsData,
  numericOperatorsData,
} from './datasource';
import {
  DropDownListComponent,
  ChangeEventArgs,
} from '@syncfusion/ej2-angular-dropdowns';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { Column, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
  imports: [
    TreeGridAllModule, DropDownListAllModule 
    ],
  providers: [FilterService],
  standalone: true,
  selector: 'app-container',
  template: `
        <div id='content' class='container'>
            <div class='input-container'>
                <label for='fields' class='label'>Select Column</label>
                <ejs-dropdownlist #field id='fields' [dataSource]='fieldData' (change)='onFieldChange($event)'
                 placeholder='Eg: Task ID'></ejs-dropdownlist>
            </div>
            <div class='input-container'>
                <label for='operator' class='label'>Select Operator</label>
                <ejs-dropdownlist #operator id='operator' [dataSource]='availableOperators' (change)='onOperatorChange($event)'
                 placeholder='Eg: Equal' [enabled]='false'></ejs-dropdownlist>
            </div>
        </div>
  
            <ejs-treegrid #treegrid [dataSource]='data' height='275' [treeColumnIndex]='1'  [allowFiltering]='true'  (dataBound)='dataBound()' childMapping='subtasks' >
                <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                </e-columns>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public filterSettings?: Object;
  public fieldData?: string[];
  public availableOperators: object[] | string | undefined;
  public column: Column | undefined;
  @ViewChild('treegrid') public treegrid?: TreeGridComponent;
  @ViewChild('operator') public operatorDropdown?: DropDownListComponent;
  dataBound() {
    this.fieldData = (this.treegrid as TreeGridComponent).getColumnFieldNames();
  }
  onFieldChange(args: ChangeEventArgs): void {
    this.availableOperators = [];
    (this.operatorDropdown as DropDownListComponent).enabled = true;
    this.column = (this.treegrid as TreeGridComponent).getColumnByField(
      args.value as string
    );
    if (this.column) {
      this.availableOperators =
        this.column.type === 'string'
          ? stringOperatorsData
          : numericOperatorsData;
    }
  }
  onOperatorChange(args: ChangeEventArgs): void {
   
    var filter_column=((this.treegrid as TreeGridComponent).grid.columns as any).filter(
      (x: any) => x.field == (this.column as Column).field
    );
    filter_column[0].filter = { operator: args.value as string };
    
  }
  ngOnInit(): void {
    this.data = sampleData;
  }
}
