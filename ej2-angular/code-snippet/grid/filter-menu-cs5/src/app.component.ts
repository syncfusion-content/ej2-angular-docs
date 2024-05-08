import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, FilterService, PageService } from '@syncfusion/ej2-angular-grids'
import { MultiSelectModule, CheckBoxSelectionService, DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { DataUtil } from '@syncfusion/ej2-data';
import {
  MultiSelect,
} from '@syncfusion/ej2-angular-dropdowns';
import { createElement } from '@syncfusion/ej2-base';
import {
  FilterSettingsModel,
  IFilter,
  Filter,
  GridComponent,
  Column,
  PredicateModel,
} from '@syncfusion/ej2-angular-grids';
@Component({
imports: [
        
        GridModule,
        MultiSelectModule,
        DropDownListAllModule,
        CheckBoxModule,
    ],

providers: [FilterService, PageService, CheckBoxSelectionService],
standalone: true,
  selector: 'app-root',
  template: `
   <ejs-grid
      [dataSource]="data"
      #grid
      [allowFiltering]="true"
      [allowPaging]="true"
      [filterSettings]="filterOptions"
    >
      <e-columns>
        <e-column
          field="OrderID"
          headerText="Order ID"
          [filter]="filter"
          textAlign="Right"
          width="100"
        ></e-column>
        <e-column
          field="CustomerID"
          headerText="Customer ID"
          [filter]="filter"
          width="120"
        ></e-column>
        <e-column
          field="ShipCity"
          headerText="Ship City"
          [filter]="filter"
          width="100"
        ></e-column>
        <e-column
          field="ShipName"
          headerText="Ship Name"
          [filter]="filter"
          width="100"
        ></e-column>
      </e-columns>
    </ejs-grid>
  `,
})
export class AppComponent implements OnInit {
  public data?: object[];
  public filterOptions?: FilterSettingsModel;
  public filter?: IFilter;
  public dropInstance?: MultiSelect;
  @ViewChild('grid')
  public grid?: GridComponent;
  ngOnInit(): void {
    this.data = data;
    this.filterOptions = {
      type: 'Menu',
    };
    this.filter = {
      ui: {
        create: (args: { target: Element; column: object }) => {
          const flValInput: HTMLElement = createElement('input', {
            className: 'flm-input',
          });
          args.target.appendChild(flValInput);
          const fieldName: string = (args.column as Column).field;
          const dropdownData: string[] = DataUtil.distinct(data, fieldName) as string[];
          this.dropInstance = new MultiSelect({
            dataSource: dropdownData,
            placeholder: 'Select a value',
            popupHeight: '200px',
            allowFiltering: true,
            mode: 'Delimiter',
          });
          this.dropInstance.appendTo(flValInput);
        },
        write: (args:{column:Column}) => {
          const fieldName: string = (args.column.field);
          const filteredValue: string[] = [];
          (this.grid as GridComponent).filterSettings.columns.forEach((item: PredicateModel) => {
            if (item.field === fieldName && item.value) {
              filteredValue.push(item.value as string);
            }
          });
          if (filteredValue.length > 0) {
            (this.dropInstance as MultiSelect).value = filteredValue;
          }
        },
        read: (args: {column:Column,operator:string,fltrObj:Filter}) => {
          (this.grid as GridComponent).removeFilteredColsByField(args.column.field);
          args.fltrObj.filterByColumn(
            args.column.field,
            args.operator,
            this.dropInstance?.value as string[]
          );
        },
      },
    };
  }
}
