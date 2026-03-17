import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { CheckBoxSelectionService, DropDownListAllModule, MultiSelectModule, MultiSelect } from '@syncfusion/ej2-angular-dropdowns';
import { FilterService, GridModule, IFilterCreate, IFilterRead, IFilterWrite, PageService, FilterSettingsModel,IFilter, GridComponent, Column, PredicateModel, } from '@syncfusion/ej2-angular-grids';
import { createElement } from '@syncfusion/ej2-base';
import { DataUtil } from '@syncfusion/ej2-data';

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
      height='273px'
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
        create: (args: IFilterCreate): void => {
          const flValInput: HTMLElement = createElement('input', {
            className: 'flm-input',
          });
          if (!args.target) return;
          args.target.appendChild(flValInput);
          const fieldName: string = (args.column as Column).field;
          const dropdownData: string[] = DataUtil.distinct(
            data,
            fieldName
          ) as string[];
          this.dropInstance = new MultiSelect({
            dataSource: dropdownData,
            placeholder: 'Select a value',
            popupHeight: '200px',
            allowFiltering: true,
            mode: 'Delimiter',
          });
          this.dropInstance.appendTo(flValInput);
        },
        write: (args: IFilterWrite): void => {
          const fieldName = args.column?.field;
          if (!fieldName) return;

          const filteredValue: string[] = [];
          const cols =
            (this.grid as GridComponent).filterSettings?.columns ?? [];
          cols.forEach((item: PredicateModel) => {
            if (item.field === fieldName && item.value) {
              filteredValue.push(String(item.value));
            }
          });

          if (filteredValue.length && this.dropInstance) {
            (this.dropInstance as MultiSelect).value = filteredValue;
          }
        },
        read: (args: IFilterRead): void => {
          const field = args.column?.field ?? '';
          const value = (this.dropInstance?.value ?? '') as string;
          const operator = args.operator ?? 'equal';

          (this.grid as GridComponent).removeFilteredColsByField(field);

          if (!field || !args.fltrObj) return;
          args.fltrObj.filterByColumn(field, operator, value);
        },
      },
    };
  }
}
