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
} from '@syncfusion/ej2-angular-grids';

@Component({
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
          const fieldName: string = (args.column as any).field;
          const columnData:object[]= data.map((item) => (item as any)[fieldName as string]);
          const dropdownData: any[] = DataUtil.distinct(columnData, fieldName);

          this.dropInstance = new MultiSelect({
            dataSource: dropdownData,
            placeholder: 'Select a value',
            popupHeight: '200px',
            allowFiltering: true,
            mode: 'Delimiter',
          });
          this.dropInstance.appendTo(flValInput);
        },
        write: (args: any) => {
          const fieldName: string = (args.column as any).field;
          const filteredValue: any[] = [];

          (this.grid as any).filterSettings.columns.forEach((item: any) => {
            if (item.field === fieldName && item.value) {
              filteredValue.push(item.value);
            }
          });

          if (filteredValue.length > 0) {
            (this.dropInstance as MultiSelect).value = filteredValue;
          }
        },
        read: (args: any) => {
          (this.grid as any).removeFilteredColsByField(args.column.field);
          args.fltrObj.filterByColumn(
            args.column.field,
            args.operator,
            this.dropInstance?.value as any
          );
        },
      },
    };
  }
}
